/**
 * Converts an ITU-T XLS report (HTML table format) into the shared
 * emergency services JSON data file.
 *
 * Usage:
 *   npx tsx scripts/convert-itu-xls.ts <path-to-xls> [--data-file <path>]
 *
 * Merges into (default): src/data/emergency-services.json
 * Then run: npx tsx scripts/build-services.ts
 */

import * as fs from "fs";
import * as path from "path";
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
const dataFileFlagIdx = args.indexOf("--data-file");
const dataFileFlagValue =
  dataFileFlagIdx !== -1 ? args[dataFileFlagIdx + 1] : undefined;
const dataFile = dataFileFlagValue ?? DEFAULT_DATA_FILE;
const inputPath = args.find(
  (a) => !a.startsWith("--") && a !== dataFileFlagValue,
);

if (!inputPath || !fs.existsSync(inputPath)) {
  console.error(
    `Usage: npx tsx scripts/convert-itu-xls.ts <path-to-xls> [--data-file <path>]`,
  );
  process.exit(1);
}

// Extract fetchedAt from filename, e.g. ITU-T_Report_2026-02-13-2200.xls → 2026-02-13
const dateMatch = path.basename(inputPath).match(/(\d{4}-\d{2}-\d{2})/);
const fetchedAt = dateMatch
  ? dateMatch[1]
  : new Date().toISOString().split("T")[0];

// ---------------------------------------------------------------------------
// Country name → ISO mapping
// ---------------------------------------------------------------------------

const COUNTRY_NAME_TO_ISO: Record<string, string> = {
  Afghanistan: "AF",
  Albania: "AL",
  Algeria: "DZ",
  Andorra: "AD",
  Angola: "AO",
  "Antigua and Barbuda": "AG",
  Argentina: "AR",
  Armenia: "AM",
  Aruba: "AW",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Bahamas: "BS",
  Bahrain: "BH",
  Barbados: "BB",
  Belarus: "BY",
  Belgium: "BE",
  Belize: "BZ",
  Benin: "BJ",
  Bhutan: "BT",
  "Bolivia (Plurinational State of)": "BO",
  "Bosnia and Herzegovina": "BA",
  Botswana: "BW",
  Brazil: "BR",
  Bulgaria: "BG",
  "Burkina Faso": "BF",
  Burundi: "BI",
  "Cabo Verde": "CV",
  Cambodia: "KH",
  Cameroon: "CM",
  Canada: "CA",
  "Central African Rep.": "CF",
  Chad: "TD",
  Chile: "CL",
  China: "CN",
  Colombia: "CO",
  Comoros: "KM",
  Congo: "CG",
  "Costa Rica": "CR",
  Croatia: "HR",
  Cuba: "CU",
  Cyprus: "CY",
  "Czech Rep.": "CZ",
  "Côte d'Ivoire": "CI",
  "Dem. Rep. of the Congo": "CD",
  Denmark: "DK",
  Djibouti: "DJ",
  Dominica: "DM",
  "Dominican Rep.": "DO",
  Ecuador: "EC",
  Egypt: "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  Eritrea: "ER",
  Estonia: "EE",
  Eswatini: "SZ",
  Ethiopia: "ET",
  Fiji: "FJ",
  Finland: "FI",
  France: "FR",
  Gabon: "GA",
  Gambia: "GM",
  Georgia: "GE",
  Germany: "DE",
  Ghana: "GH",
  Greece: "GR",
  Grenada: "GD",
  Guatemala: "GT",
  Guinea: "GN",
  "Guinea-Bissau": "GW",
  Guyana: "GY",
  Haiti: "HT",
  Honduras: "HN",
  Hungary: "HU",
  Iceland: "IS",
  India: "IN",
  "Iran (Islamic Republic of)": "IR",
  Iraq: "IQ",
  Ireland: "IE",
  Israel: "IL",
  Italy: "IT",
  Jamaica: "JM",
  Japan: "JP",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kenya: "KE",
  Kiribati: "KI",
  "Korea (Rep. of)": "KR",
  "Kosovo*": "XK",
  Kyrgyzstan: "KG",
  Latvia: "LV",
  Lebanon: "LB",
  Lesotho: "LS",
  Liberia: "LR",
  Libya: "LY",
  Liechtenstein: "LI",
  Lithuania: "LT",
  Luxembourg: "LU",
  Madagascar: "MG",
  Malawi: "MW",
  Malaysia: "MY",
  Maldives: "MV",
  Mali: "ML",
  Malta: "MT",
  Mauritania: "MR",
  Mauritius: "MU",
  Micronesia: "FM",
  "Moldova (Republic of)": "MD",
  Monaco: "MC",
  Mongolia: "MN",
  Montenegro: "ME",
  Morocco: "MA",
  Mozambique: "MZ",
  Namibia: "NA",
  Nauru: "NR",
  Nepal: "NP",
  "Netherlands (Kingdom of the)": "NL",
  "New Zealand": "NZ",
  Nicaragua: "NI",
  Niger: "NE",
  Nigeria: "NG",
  "North Macedonia": "MK",
  Norway: "NO",
  Oman: "OM",
  Pakistan: "PK",
  Panama: "PA",
  "Papua New Guinea": "PG",
  Peru: "PE",
  Poland: "PL",
  Portugal: "PT",
  Qatar: "QA",
  Romania: "RO",
  "Russian Federation": "RU",
  Rwanda: "RW",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Vincent and the Grenadines": "VC",
  Samoa: "WS",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST",
  "Saudi Arabia": "SA",
  Senegal: "SN",
  Serbia: "RS",
  Seychelles: "SC",
  "Sierra Leone": "SL",
  Singapore: "SG",
  Slovakia: "SK",
  Slovenia: "SI",
  "Solomon Islands": "SB",
  Somalia: "SO",
  "South Africa": "ZA",
  "South Sudan": "SS",
  Spain: "ES",
  "Sri Lanka": "LK",
  Sudan: "SD",
  Suriname: "SR",
  Sweden: "SE",
  Switzerland: "CH",
  "Syrian Arab Republic": "SY",
  Tanzania: "TZ",
  Thailand: "TH",
  Togo: "TG",
  Tonga: "TO",
  "Trinidad and Tobago": "TT",
  Tunisia: "TN",
  Türkiye: "TR",
  Uganda: "UG",
  Ukraine: "UA",
  "United Arab Emirates": "AE",
  "United Kingdom": "GB",
  "United States": "US",
  Uruguay: "UY",
  Vanuatu: "VU",
  Vatican: "VA",
  "Venezuela (Bolivarian Republic of)": "VE",
  Zambia: "ZM",
  Zimbabwe: "ZW",
};

// ---------------------------------------------------------------------------
// Service category mapping
// ---------------------------------------------------------------------------

const CATEGORY_MAP: Record<string, ServiceType> = {
  Emergency: "Dispatch",
  Medical: "Medical",
  Fire: "Fire",
  Police: "Police",
  Traffic: "Traffic",
  "Child help-line": "Child Helpline",
  Hazards: "Hazards",
  Other: "Other",
};

const TYPE_DISPLAY_NAMES: Record<string, string> = {
  Dispatch: "Emergency Services",
  Medical: "Medical",
  Fire: "Fire",
  Police: "Police",
  Traffic: "Traffic",
  "Child Helpline": "Child Helpline",
  Hazards: "Hazards",
  Other: "Other",
};

// ---------------------------------------------------------------------------
// XLS parsing
// ---------------------------------------------------------------------------

type RawRow = {
  country: string;
  number: string;
  category: string;
  additionalInfo: string;
  lastUpdate: string;
};

function parseXls(filePath: string): RawRow[] {
  const content = fs.readFileSync(filePath, "latin1");
  const rows: RawRow[] = [];

  for (let i = 0; i < 2000; i++) {
    const countryMatch = content.match(new RegExp(`lblCountry_${i}">([^<]*)`));
    if (!countryMatch) break;

    const numberMatch = content.match(new RegExp(`lblNumber_${i}">([^<]*)`));
    const categoryMatch = content.match(
      new RegExp(`lblcategory_service_name_${i}">([^<]*)`),
    );
    const infoMatch = content.match(
      new RegExp(`lblservice_specific_text_${i}">([^<]*)`),
    );
    const updateMatch = content.match(
      new RegExp(`lbllast_update_${i}">([^<]*)`),
    );

    rows.push({
      country: countryMatch[1].trim(),
      number: numberMatch?.[1]?.trim() ?? "",
      category: categoryMatch?.[1]?.trim() ?? "",
      additionalInfo: infoMatch?.[1]?.trim() ?? "-",
      lastUpdate: updateMatch?.[1]?.trim() ?? "",
    });
  }

  return rows;
}

function splitPhoneNumbers(
  raw: string,
): Array<{ number: string; note?: string }> {
  if (!raw || raw === "-") return [];

  const parts = raw
    .split(";")
    .map((p) => p.trim())
    .filter(Boolean);

  return parts.map((part) => {
    const parenMatch = part.match(/^(\d[\d\s*]*?)\s*\(([^)]+)\)\s*$/);
    if (parenMatch) {
      return { number: parenMatch[1].trim(), note: parenMatch[2].trim() };
    }

    const prefixParenMatch = part.match(
      /^\(([^)]+)\)\s*(\d[\d\s*]*?)(?:\s*\(([^)]+)\))?\s*$/,
    );
    if (prefixParenMatch) {
      const notes = [prefixParenMatch[1], prefixParenMatch[3]]
        .filter(Boolean)
        .join(", ");
      return { number: prefixParenMatch[2].trim(), note: notes || undefined };
    }

    const trailingNote = part.match(/^(\d[\d\s*]*?)\s*\((.+)\)\s*$/);
    if (trailingNote) {
      return { number: trailingNote[1].trim(), note: trailingNote[2].trim() };
    }

    if (!/^[\d*]/.test(part)) return { number: "", note: part };
    return { number: part.trim() };
  });
}

// ---------------------------------------------------------------------------
// Convert rows → ServicesData
// ---------------------------------------------------------------------------

function convert(rows: RawRow[]): ServicesData {
  const result: ServicesData = {};
  const seen = new Set<string>();
  let warnings = 0;

  for (const row of rows) {
    const isoCode = COUNTRY_NAME_TO_ISO[row.country];
    if (!isoCode) {
      console.error(`WARNING: Unknown country "${row.country}", skipping`);
      warnings++;
      continue;
    }

    const serviceType = CATEGORY_MAP[row.category];
    if (!serviceType) {
      console.error(
        `WARNING: Unknown category "${row.category}" for ${row.country}, skipping`,
      );
      warnings++;
      continue;
    }

    const phones = splitPhoneNumbers(row.number);
    if (phones.length === 0) {
      console.error(
        `WARNING: No phone number for ${row.country} ${row.category}, skipping`,
      );
      warnings++;
      continue;
    }

    if (!result[isoCode]) result[isoCode] = [];

    for (const phone of phones) {
      if (!phone.number) continue;

      const dedupeKey = `${isoCode}:${serviceType}:${phone.number}`;
      if (seen.has(dedupeKey)) continue;
      seen.add(dedupeKey);

      const descParts: string[] = [];
      if (row.additionalInfo && row.additionalInfo !== "-") {
        descParts.push(row.additionalInfo);
      }
      if (phone.note) descParts.push(phone.note);

      const entry: ServiceEntry = {
        type: serviceType,
        name: TYPE_DISPLAY_NAMES[serviceType] || serviceType,
        phoneNumber: phone.number,
        sources: [
          {
            name: "ITU-T E.129",
            url: "https://www.itu.int/net/itu-t/inrdb/e129_important_numbers.aspx",
            fetchedAt,
            lastModified: row.lastUpdate,
          },
        ],
      };

      if (descParts.length > 0) entry.description = descParts.join(" - ");

      result[isoCode].push(entry);
    }
  }

  if (warnings > 0) console.error(`\n${warnings} warning(s) total.`);
  return result;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.error(`Parsing ${inputPath}...`);
const rows = parseXls(inputPath);
console.error(`Parsed ${rows.length} rows.`);

const incoming = convert(rows);
const existing = readData(dataFile);
const merged = mergeData(existing, incoming);

const countryCount = Object.keys(merged).length;
const entryCount = Object.values(merged).reduce((s, a) => s + a.length, 0);
console.error(
  `Merged: ${entryCount} entries across ${countryCount} countries → ${dataFile}`,
);

writeData(dataFile, merged);
