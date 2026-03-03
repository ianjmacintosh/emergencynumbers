/**
 * Parses a locally saved copy of the Wikipedia page
 * "List of emergency telephone numbers" into the shared emergency services
 * JSON data file.
 *
 * Usage:
 *   npx tsx scripts/convert-wikipedia.ts <path-to-html> [--fetched-at YYYY-MM-DD] [--data-file <path>]
 *
 * Merges into (default): src/data/emergency-services.json
 * Then run: npx tsx scripts/build-services.ts
 */

import * as fs from "fs";
import {
  DEFAULT_DATA_FILE,
  mergeData,
  readData,
  writeData,
  type ServiceEntry,
  type ServiceType,
  type ServicesData,
} from "./lib/services-data.js";

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);

const fetchedAtFlagIdx = args.indexOf("--fetched-at");
const fetchedAtFlagValue =
  fetchedAtFlagIdx !== -1 ? args[fetchedAtFlagIdx + 1] : undefined;
const fetchedAt = fetchedAtFlagValue ?? new Date().toISOString().split("T")[0];

const dataFileFlagIdx = args.indexOf("--data-file");
const dataFileFlagValue =
  dataFileFlagIdx !== -1 ? args[dataFileFlagIdx + 1] : undefined;
const dataFile = dataFileFlagValue ?? DEFAULT_DATA_FILE;

const flagValues = new Set(
  [fetchedAtFlagValue, dataFileFlagValue].filter(Boolean),
);
const filePath = args.find((a) => !a.startsWith("--") && !flagValues.has(a));

if (!filePath || !fs.existsSync(filePath)) {
  console.error(
    `Usage: npx tsx scripts/convert-wikipedia.ts <path-to-html> [--fetched-at YYYY-MM-DD] [--data-file <path>]`,
  );
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Country title → ISO 3166-1 alpha-2 mapping
// Keys are the Wikipedia article "title" attribute values.
// ---------------------------------------------------------------------------

const COUNTRY_TITLE_TO_ISO: Record<string, string> = {
  // Africa
  "The Gambia": "GM",
  Algeria: "DZ",
  Angola: "AO",
  Benin: "BJ",
  Botswana: "BW",
  "Burkina Faso": "BF",
  Burundi: "BI",
  Cameroon: "CM",
  "Cape Verde": "CV",
  "Central African Republic": "CF",
  Chad: "TD",
  Comoros: "KM",
  "Democratic Republic of the Congo": "CD",
  "Republic of the Congo": "CG",
  "Ivory Coast": "CI",
  "Côte d'Ivoire": "CI",
  Djibouti: "DJ",
  Egypt: "EG",
  "Equatorial Guinea": "GQ",
  Eritrea: "ER",
  Eswatini: "SZ",
  Swaziland: "SZ",
  Ethiopia: "ET",
  Gabon: "GA",
  Gambia: "GM",
  Ghana: "GH",
  Guinea: "GN",
  "Guinea-Bissau": "GW",
  Kenya: "KE",
  Lesotho: "LS",
  Liberia: "LR",
  Libya: "LY",
  Madagascar: "MG",
  Malawi: "MW",
  Mali: "ML",
  Mauritania: "MR",
  Mauritius: "MU",
  Mayotte: "YT",
  Morocco: "MA",
  Mozambique: "MZ",
  Namibia: "NA",
  Niger: "NE",
  Nigeria: "NG",
  Rwanda: "RW",
  Réunion: "RE",
  "São Tomé and Príncipe": "ST",
  "Sao Tome and Principe": "ST",
  Senegal: "SN",
  Seychelles: "SC",
  "Sierra Leone": "SL",
  Somalia: "SO",
  "South Africa": "ZA",
  "South Sudan": "SS",
  Sudan: "SD",
  Tanzania: "TZ",
  Togo: "TG",
  Tunisia: "TN",
  Uganda: "UG",
  "Western Sahara": "EH",
  Zambia: "ZM",
  Zimbabwe: "ZW",
  // America: Caribbean
  "The Bahamas": "BS",
  Bermuda: "BM",
  "Caribbean Netherlands": "BQ",
  "Collectivity of Saint Martin": "MF",
  "Saint Pierre and Miquelon": "PM",
  Anguilla: "AI",
  "Antigua and Barbuda": "AG",
  Aruba: "AW",
  Bahamas: "BS",
  Barbados: "BB",
  "British Virgin Islands": "VG",
  "Cayman Islands": "KY",
  Cuba: "CU",
  Curaçao: "CW",
  Dominica: "DM",
  "Dominican Republic": "DO",
  Grenada: "GD",
  Guadeloupe: "GP",
  Haiti: "HT",
  Jamaica: "JM",
  Martinique: "MQ",
  Montserrat: "MS",
  "Puerto Rico": "PR",
  "Saint Barthélemy": "BL",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Martin": "MF",
  "Saint Vincent and the Grenadines": "VC",
  "Sint Maarten": "SX",
  "Trinidad and Tobago": "TT",
  "Turks and Caicos Islands": "TC",
  "United States Virgin Islands": "VI",
  // America: Central
  Belize: "BZ",
  "Costa Rica": "CR",
  "El Salvador": "SV",
  Guatemala: "GT",
  Honduras: "HN",
  Mexico: "MX",
  Nicaragua: "NI",
  Panama: "PA",
  // America: North
  Canada: "CA",
  "United States": "US",
  // America: South
  "Falkland Islands": "FK",
  "South Georgia and the South Sandwich Islands": "GS",
  Argentina: "AR",
  Bolivia: "BO",
  Brazil: "BR",
  Chile: "CL",
  Colombia: "CO",
  Ecuador: "EC",
  "French Guiana": "GF",
  Guyana: "GY",
  Paraguay: "PY",
  Peru: "PE",
  Suriname: "SR",
  Uruguay: "UY",
  Venezuela: "VE",
  // Asia
  "British Indian Ocean Territory": "IO",
  "Christmas Island": "CX",
  "Cocos (Keeling) Islands": "CC",
  Afghanistan: "AF",
  Armenia: "AM",
  Azerbaijan: "AZ",
  Bahrain: "BH",
  Bangladesh: "BD",
  Bhutan: "BT",
  Brunei: "BN",
  Cambodia: "KH",
  China: "CN",
  Cyprus: "CY",
  Georgia: "GE",
  "Hong Kong": "HK",
  India: "IN",
  Indonesia: "ID",
  Iran: "IR",
  Iraq: "IQ",
  Israel: "IL",
  Japan: "JP",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kuwait: "KW",
  Kyrgyzstan: "KG",
  Laos: "LA",
  Lebanon: "LB",
  Macau: "MO",
  Malaysia: "MY",
  Maldives: "MV",
  Mongolia: "MN",
  Myanmar: "MM",
  Nepal: "NP",
  "North Korea": "KP",
  Oman: "OM",
  Pakistan: "PK",
  Palestine: "PS",
  Philippines: "PH",
  Qatar: "QA",
  "Saudi Arabia": "SA",
  Singapore: "SG",
  "South Korea": "KR",
  "Sri Lanka": "LK",
  Syria: "SY",
  Taiwan: "TW",
  Tajikistan: "TJ",
  Thailand: "TH",
  "Timor-Leste": "TL",
  Turkey: "TR",
  Turkmenistan: "TM",
  "United Arab Emirates": "AE",
  Uzbekistan: "UZ",
  Vietnam: "VN",
  Yemen: "YE",
  // Europe
  Åland: "AX",
  "Georgia (country)": "GE",
  Greenland: "GL",
  "Republic of Ireland": "IE",
  "Saint Helena": "SH",
  "Ascension Island": "SH",
  "Tristan da Cunha": "SH",
  Albania: "AL",
  Andorra: "AD",
  Austria: "AT",
  Belarus: "BY",
  Belgium: "BE",
  "Bosnia and Herzegovina": "BA",
  Bulgaria: "BG",
  Croatia: "HR",
  "Czech Republic": "CZ",
  Czechia: "CZ",
  Denmark: "DK",
  Estonia: "EE",
  "Faroe Islands": "FO",
  Finland: "FI",
  France: "FR",
  Germany: "DE",
  Gibraltar: "GI",
  Greece: "GR",
  Guernsey: "GG",
  Hungary: "HU",
  Iceland: "IS",
  Ireland: "IE",
  "Isle of Man": "IM",
  Italy: "IT",
  Jersey: "JE",
  Kosovo: "XK",
  Latvia: "LV",
  Liechtenstein: "LI",
  Lithuania: "LT",
  Luxembourg: "LU",
  Malta: "MT",
  Moldova: "MD",
  Monaco: "MC",
  Montenegro: "ME",
  Netherlands: "NL",
  "North Macedonia": "MK",
  Norway: "NO",
  Poland: "PL",
  Portugal: "PT",
  Romania: "RO",
  Russia: "RU",
  "San Marino": "SM",
  Serbia: "RS",
  Slovakia: "SK",
  Slovenia: "SI",
  Spain: "ES",
  Sweden: "SE",
  Switzerland: "CH",
  Ukraine: "UA",
  "United Kingdom": "GB",
  "Vatican City": "VA",
  // Oceania
  "American Samoa": "AS",
  "Cook Islands": "CK",
  "French Polynesia": "PF",
  Guam: "GU",
  "Federated States of Micronesia": "FM",
  Niue: "NU",
  "Northern Mariana Islands": "MP",
  Tokelau: "TK",
  "Wallis and Futuna": "WF",
  Australia: "AU",
  Fiji: "FJ",
  Kiribati: "KI",
  "Marshall Islands": "MH",
  Micronesia: "FM",
  Nauru: "NR",
  "New Caledonia": "NC",
  "New Zealand": "NZ",
  Palau: "PW",
  "Papua New Guinea": "PG",
  Samoa: "WS",
  "Solomon Islands": "SB",
  Tonga: "TO",
  Tuvalu: "TV",
  Vanuatu: "VU",
};

// ---------------------------------------------------------------------------
// HTML helpers
// ---------------------------------------------------------------------------

function stripHtml(html: string): string {
  return html
    .replace(/<sup[^>]*>[\s\S]*?<\/sup>/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#91;/g, "[")
    .replace(/&#93;/g, "]")
    .replace(/\[\d[\d,\s]*\]/g, "")
    .trim();
}

function extractBoldNumbers(cellHtml: string): string[] {
  const numbers: string[] = [];
  const boldRe = /<b>([^<]+)<\/b>/g;
  let m: RegExpExecArray | null;
  while ((m = boldRe.exec(cellHtml)) !== null) {
    const text = m[1].replace(/&#91;[\d\s,]+&#93;/g, "").trim();
    const parts = text
      .split(/\/|\s+or\s+/i)
      .map((p) => p.trim())
      .filter((p) => /^\d[\d\s]*$/.test(p))
      .map((p) => p.replace(/\s+/g, ""));
    numbers.push(...parts);
  }
  return [...new Set(numbers)];
}

function parseCells(rowHtml: string): Array<{ colspan: number; html: string }> {
  const cells: Array<{ colspan: number; html: string }> = [];
  let remaining = rowHtml;
  const tdOpenRe = /<td([^>]*)>/;
  while (true) {
    const openMatch = tdOpenRe.exec(remaining);
    if (!openMatch) break;
    const attrs = openMatch[1];
    const colspanMatch = attrs.match(/colspan="(\d+)"/);
    const colspan = colspanMatch ? parseInt(colspanMatch[1]) : 1;
    const contentStart = remaining.indexOf(openMatch[0]) + openMatch[0].length;
    const contentEnd = remaining.indexOf("</td>", contentStart);
    if (contentEnd === -1) break;
    cells.push({ colspan, html: remaining.slice(contentStart, contentEnd) });
    remaining = remaining.slice(contentEnd + 5);
  }
  return cells;
}

// ---------------------------------------------------------------------------
// Main parser
// ---------------------------------------------------------------------------

function parseHtml(html: string, lastModified: string): ServicesData {
  const result: ServicesData = {};
  const seen = new Set<string>();
  let warnings = 0;

  const tableChunks = html.split(
    /<table[^>]*class="wikitable sortable[^"]*"[^>]*>/,
  );

  for (const chunk of tableChunks.slice(1)) {
    const tableEnd = chunk.indexOf("</table>");
    const tableHtml = tableEnd !== -1 ? chunk.slice(0, tableEnd) : chunk;
    const rowChunks = tableHtml.split(/<tr[^>]*>/);

    for (const rowHtml of rowChunks.slice(1)) {
      if (/<th[\s>]/.test(rowHtml)) continue;

      const cells = parseCells(rowHtml);
      if (cells.length < 2) continue;

      const titleMatch = cells[0].html.match(/title="([^"]+)"/);
      if (!titleMatch) continue;

      const countryTitle = titleMatch[1];
      const isoCode = COUNTRY_TITLE_TO_ISO[countryTitle];
      if (!isoCode) {
        console.error(`WARNING: Unknown country "${countryTitle}", skipping`);
        warnings++;
        continue;
      }

      if (!result[isoCode]) result[isoCode] = [];

      // Columns after country: Police, Ambulance, Fire, Other
      const serviceColumns: Array<{ type: ServiceType; name: string }> = [
        { type: "Police", name: "Police" },
        { type: "Medical", name: "Medical" },
        { type: "Fire", name: "Fire" },
      ];

      let colIdx = 0;

      for (let i = 1; i < cells.length; i++) {
        const cell = cells[i];
        const numbers = extractBoldNumbers(cell.html);
        const isOtherCol = colIdx >= serviceColumns.length;
        const coveredCols = serviceColumns.slice(colIdx, colIdx + cell.colspan);

        if (numbers.length > 0) {
          if (isOtherCol) {
            for (const num of numbers) {
              addEntry(result, seen, isoCode, {
                type: "Other",
                name: "Other",
                description: getOtherDescription(cell.html, num),
                phoneNumber: num,
                sources: [{ name: "Wikipedia", fetchedAt, lastModified }],
              });
            }
          } else if (coveredCols.length >= 3) {
            for (const num of numbers) {
              addEntry(result, seen, isoCode, {
                type: "Dispatch",
                name: "Emergency Services",
                phoneNumber: num,
                sources: [{ name: "Wikipedia", fetchedAt, lastModified }],
              });
            }
          } else {
            for (const col of coveredCols) {
              for (const num of numbers) {
                addEntry(result, seen, isoCode, {
                  type: col.type,
                  name: col.name,
                  phoneNumber: num,
                  sources: [{ name: "Wikipedia", fetchedAt, lastModified }],
                });
              }
            }
          }
        }

        colIdx += cell.colspan;
      }
    }
  }

  if (warnings > 0) console.error(`\n${warnings} warning(s) total.`);
  return result;
}

function getOtherDescription(
  cellHtml: string,
  num: string,
): string | undefined {
  const stripped = stripHtml(cellHtml);
  const patterns = [
    new RegExp(`([\\w\\s/&]+?)\\s*[–—-]\\s*${num}`),
    new RegExp(`${num}\\s*[–—-]\\s*([\\w\\s/&]+)`),
  ];
  for (const re of patterns) {
    const m = stripped.match(re);
    if (m) return m[1].trim() || undefined;
  }
  return undefined;
}

function addEntry(
  result: ServicesData,
  seen: Set<string>,
  isoCode: string,
  entry: ServiceEntry,
) {
  const key = `${isoCode}:${entry.type}:${entry.phoneNumber}`;
  if (seen.has(key)) return;
  seen.add(key);
  result[isoCode].push(entry);
}

// ---------------------------------------------------------------------------
// Last-modified extraction from Wikipedia footer
// ---------------------------------------------------------------------------

function extractLastModified(html: string): string {
  const m = html.match(/last edited on (\d{1,2} \w+ \d{4})/);
  if (m) {
    const d = new Date(m[1]);
    if (!isNaN(d.getTime())) return d.toISOString().split("T")[0];
  }
  return "";
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.error(`Reading ${filePath}...`);
const html = fs.readFileSync(filePath, "utf-8");

const lastModified = extractLastModified(html);
console.error(`Last modified: ${lastModified || "(not found in page)"}`);
console.error(`Fetched at:    ${fetchedAt}`);

const incoming = parseHtml(html, lastModified);
const existing = readData(dataFile);
const merged = mergeData(existing, incoming);

const countryCount = Object.keys(merged).length;
const entryCount = Object.values(merged).reduce((s, a) => s + a.length, 0);
console.error(
  `Merged: ${entryCount} entries across ${countryCount} countries → ${dataFile}`,
);

writeData(dataFile, merged);
