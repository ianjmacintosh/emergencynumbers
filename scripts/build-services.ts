/**
 * Generates src/constants/emergency-services.ts from the shared JSON data file.
 *
 * Usage:
 *   npx tsx scripts/build-services.ts [--data-file <path>] [--out <path>]
 */

import * as fs from "fs";
import {
  DEFAULT_DATA_FILE,
  DEFAULT_TS_OUT,
  readData,
  type ServicesData,
} from "./lib/services-data.js";

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);

const dataFileFlagIdx = args.indexOf("--data-file");
const dataFile =
  dataFileFlagIdx !== -1 ? args[dataFileFlagIdx + 1] : DEFAULT_DATA_FILE;

const outFlagIdx = args.indexOf("--out");
const outFile = outFlagIdx !== -1 ? args[outFlagIdx + 1] : DEFAULT_TS_OUT;

// ---------------------------------------------------------------------------
// TypeScript generation
// ---------------------------------------------------------------------------

function generateTypeScript(data: ServicesData): string {
  const lines: string[] = [];

  lines.push(`import type { COUNTRY_NAMES } from "./index";`);
  lines.push(``);
  lines.push(`export type Source = {`);
  lines.push(`  name: string;`);
  lines.push(`  fetchedAt: string;`);
  lines.push(`  lastModified: string;`);
  lines.push(`};`);
  lines.push(``);
  lines.push(`export type ServiceType =`);
  lines.push(`  | "Dispatch"`);
  lines.push(`  | "Medical"`);
  lines.push(`  | "Fire"`);
  lines.push(`  | "Police"`);
  lines.push(`  | "Traffic"`);
  lines.push(`  | "Child Helpline"`);
  lines.push(`  | "Hazards"`);
  lines.push(`  | "Other";`);
  lines.push(``);
  lines.push(`export type Service = {`);
  lines.push(`  type: ServiceType;`);
  lines.push(`  name: string;`);
  lines.push(`  description?: string;`);
  lines.push(`  phoneNumber: string;`);
  lines.push(`  sources?: Source[];`);
  lines.push(`};`);
  lines.push(``);
  lines.push(`export const SERVICES = {`);

  for (const code of Object.keys(data).sort()) {
    const services = data[code];
    lines.push(`  ${code}: [`);

    for (const svc of services) {
      const descPart = svc.description
        ? `, description: ${JSON.stringify(svc.description)}`
        : "";
      const sourcesJson = JSON.stringify(svc.sources);
      lines.push(
        `    { type: ${JSON.stringify(svc.type)}, name: ${JSON.stringify(svc.name)}${descPart}, phoneNumber: ${JSON.stringify(svc.phoneNumber)}, sources: ${sourcesJson} },`,
      );
    }

    lines.push(`  ],`);
  }

  lines.push(
    `} satisfies Partial<Record<keyof typeof COUNTRY_NAMES, Service[]>>;`,
  );
  lines.push(``);

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

if (!fs.existsSync(dataFile)) {
  console.error(`Data file not found: ${dataFile}`);
  console.error(`Run convert:itu or convert:wikipedia first.`);
  process.exit(1);
}

const data = readData(dataFile);
const countryCount = Object.keys(data).length;
const entryCount = Object.values(data).reduce((s, a) => s + a.length, 0);
console.error(
  `Read ${entryCount} entries across ${countryCount} countries from ${dataFile}`,
);

const output = generateTypeScript(data);
fs.writeFileSync(outFile, output);
console.error(`Wrote ${outFile}`);
