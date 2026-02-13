/**
 * Converts an ITU-T XLS report (HTML table format) into a TypeScript file
 * exporting emergency service data keyed by ISO 3166-1 alpha-2 country codes.
 *
 * Usage:
 *   npx tsx scripts/convert-itu-xls.ts [path-to-xls]
 *
 * Output goes to stdout. Redirect to a file:
 *   npx tsx scripts/convert-itu-xls.ts src/assets/ITU-T_Report_2026-02-13-2200.xls \
 *     > src/constants/emergency-services.ts
 */

import * as fs from "fs";
import * as path from "path";

// --- Country name mapping ---
// Maps ITU-T XLS country names to ISO 3166-1 alpha-2 codes.
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
  "C\u00f4te d'Ivoire": "CI",
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
  "T\u00fcrkiye": "TR",
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

// --- Service category mapping ---
const CATEGORY_MAP: Record<string, string> = {
  Emergency: "Dispatch",
  Medical: "Ambulance",
  Fire: "Fire Department",
  Police: "Police",
  Traffic: "Traffic",
  "Child help-line": "Child Helpline",
  Hazards: "Hazards",
  Other: "Other",
};

// Friendly display names for each service type
const TYPE_DISPLAY_NAMES: Record<string, string> = {
  Dispatch: "Emergency Services",
  Ambulance: "Ambulance",
  "Fire Department": "Fire Department",
  Police: "Police",
  Traffic: "Traffic",
  "Child Helpline": "Child Helpline",
  Hazards: "Hazards",
  Other: "Other",
};

type RawRow = {
  country: string;
  number: string;
  category: string;
  additionalInfo: string;
  assignedOrAllocated: string;
  note: string;
  lastUpdate: string;
};

type ServiceEntry = {
  type: string;
  name: string;
  description?: string;
  phoneNumber: string;
};

function parseXls(filePath: string): RawRow[] {
  const content = fs.readFileSync(filePath, "latin1");
  const rows: RawRow[] = [];

  // Match each row by finding all span groups with incrementing indices
  for (let i = 0; i < 2000; i++) {
    const countryMatch = content.match(
      new RegExp(`lblCountry_${i}">([^<]*)`)
    );
    if (!countryMatch) break;

    const numberMatch = content.match(new RegExp(`lblNumber_${i}">([^<]*)`));
    const categoryMatch = content.match(
      new RegExp(`lblcategory_service_name_${i}">([^<]*)`)
    );
    const infoMatch = content.match(
      new RegExp(`lblservice_specific_text_${i}">([^<]*)`)
    );
    const assignedMatch = content.match(
      new RegExp(`lblassigned_or_allocated_to_${i}">([^<]*)`)
    );
    const noteMatch = content.match(new RegExp(`lblnote_${i}">([^<]*)`));
    const updateMatch = content.match(
      new RegExp(`lbllast_update_${i}">([^<]*)`)
    );

    rows.push({
      country: countryMatch[1].trim(),
      number: numberMatch?.[1]?.trim() ?? "",
      category: categoryMatch?.[1]?.trim() ?? "",
      additionalInfo: infoMatch?.[1]?.trim() ?? "-",
      assignedOrAllocated: assignedMatch?.[1]?.trim() ?? "-",
      note: noteMatch?.[1]?.trim() ?? "-",
      lastUpdate: updateMatch?.[1]?.trim() ?? "",
    });
  }

  return rows;
}

function splitPhoneNumbers(
  raw: string
): Array<{ number: string; note?: string }> {
  if (!raw || raw === "-") return [];

  // Split on semicolons
  const parts = raw.split(";").map((p) => p.trim()).filter(Boolean);

  return parts.map((part) => {
    // Check for parenthetical note, e.g. "194 (Nawerewere Area)"
    // or "103 (mobile)" or "(land line) 101 (mobile)"
    const parenMatch = part.match(/^(\d[\d\s*]*?)\s*\(([^)]+)\)\s*$/);
    if (parenMatch) {
      return { number: parenMatch[1].trim(), note: parenMatch[2].trim() };
    }

    // Check for pattern like "(land line) 103 (mobile)"
    const prefixParenMatch = part.match(
      /^\(([^)]+)\)\s*(\d[\d\s*]*?)(?:\s*\(([^)]+)\))?\s*$/
    );
    if (prefixParenMatch) {
      const notes = [prefixParenMatch[1], prefixParenMatch[3]]
        .filter(Boolean)
        .join(", ");
      return { number: prefixParenMatch[2].trim(), note: notes || undefined };
    }

    // Check for trailing notes like "192 (as of May13 2012)"
    const trailingNote = part.match(/^(\d[\d\s*]*?)\s*\((.+)\)\s*$/);
    if (trailingNote) {
      return { number: trailingNote[1].trim(), note: trailingNote[2].trim() };
    }

    // Check for non-numeric junk like "all in process of assignment"
    // Keep entries that start with a digit or *
    if (!/^[\d*]/.test(part)) return { number: "", note: part };

    return { number: part.trim() };
  });
}

function convert(rows: RawRow[]): Record<string, ServiceEntry[]> {
  const result: Record<string, ServiceEntry[]> = {};
  const seen = new Set<string>();
  let warnings = 0;

  for (const row of rows) {
    // Map country name to ISO code
    const isoCode = COUNTRY_NAME_TO_ISO[row.country];
    if (!isoCode) {
      console.error(`WARNING: Unknown country "${row.country}", skipping`);
      warnings++;
      continue;
    }

    // Map service category
    const serviceType = CATEGORY_MAP[row.category];
    if (!serviceType) {
      console.error(
        `WARNING: Unknown category "${row.category}" for ${row.country}, skipping`
      );
      warnings++;
      continue;
    }

    // Split phone numbers
    const phones = splitPhoneNumbers(row.number);
    if (phones.length === 0) {
      console.error(
        `WARNING: No phone number for ${row.country} ${row.category}, skipping`
      );
      warnings++;
      continue;
    }

    if (!result[isoCode]) {
      result[isoCode] = [];
    }

    for (const phone of phones) {
      if (!phone.number) continue;

      // Deduplicate by (country, type, phoneNumber)
      const dedupeKey = `${isoCode}:${serviceType}:${phone.number}`;
      if (seen.has(dedupeKey)) continue;
      seen.add(dedupeKey);

      // Build description from additional info and phone note
      const descParts: string[] = [];
      if (row.additionalInfo && row.additionalInfo !== "-") {
        descParts.push(row.additionalInfo);
      }
      if (phone.note) {
        descParts.push(phone.note);
      }
      const description = descParts.join(" - ") || undefined;

      const entry: ServiceEntry = {
        type: serviceType,
        name: TYPE_DISPLAY_NAMES[serviceType] || serviceType,
        phoneNumber: phone.number,
      };

      if (description) {
        entry.description = description;
      }

      result[isoCode].push(entry);
    }
  }

  if (warnings > 0) {
    console.error(`\n${warnings} warning(s) total.`);
  }

  return result;
}

function generateTypeScript(data: Record<string, ServiceEntry[]>): string {
  const lines: string[] = [];

  lines.push(`import type { COUNTRY_NAMES } from "./index";`);
  lines.push(``);
  lines.push(`export type Service = {`);
  lines.push(`  type:`);
  lines.push(`    | "Dispatch"`);
  lines.push(`    | "Ambulance"`);
  lines.push(`    | "Fire Department"`);
  lines.push(`    | "Police"`);
  lines.push(`    | "Traffic"`);
  lines.push(`    | "Child Helpline"`);
  lines.push(`    | "Hazards"`);
  lines.push(`    | "Other";`);
  lines.push(`  name: string;`);
  lines.push(`  description?: string;`);
  lines.push(`  phoneNumber: string;`);
  lines.push(`};`);
  lines.push(``);
  lines.push(
    `export const SERVICES = {`
  );

  // Sort country codes alphabetically
  const sortedCodes = Object.keys(data).sort();

  for (const code of sortedCodes) {
    const services = data[code];
    lines.push(`  ${code}: [`);

    for (const svc of services) {
      const descPart = svc.description
        ? `, description: ${JSON.stringify(svc.description)}`
        : "";
      lines.push(
        `    { type: ${JSON.stringify(svc.type)}, name: ${JSON.stringify(svc.name)}${descPart}, phoneNumber: ${JSON.stringify(svc.phoneNumber)} },`
      );
    }

    lines.push(`  ],`);
  }

  lines.push(
    `} satisfies Partial<Record<keyof typeof COUNTRY_NAMES, Service[]>>;`
  );
  lines.push(``);

  return lines.join("\n");
}

// --- Main ---
const inputPath =
  process.argv[2] ||
  path.join(
    __dirname,
    "../src/assets/ITU-T_Report_2026-02-13-2200.xls"
  );

if (!fs.existsSync(inputPath)) {
  console.error(`File not found: ${inputPath}`);
  process.exit(1);
}

console.error(`Parsing ${inputPath}...`);
const rows = parseXls(inputPath);
console.error(`Parsed ${rows.length} rows.`);

const data = convert(rows);
const countryCount = Object.keys(data).length;
const entryCount = Object.values(data).reduce((sum, arr) => sum + arr.length, 0);
console.error(
  `Generated ${entryCount} service entries across ${countryCount} countries.`
);

const output = generateTypeScript(data);
process.stdout.write(output);
