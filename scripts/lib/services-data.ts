/**
 * Shared types and utilities for the emergency services data pipeline.
 *
 * Data flow:
 *   convert-itu-xls.ts ─► src/data/emergency-services.json
 */

import * as fs from "fs";
import * as path from "path";

export const DEFAULT_DATA_FILE = "src/data/emergency-services.json";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Source = {
  name: string;
  url?: string;
  fetchedAt: string;
  lastModified: string;
};

export type ServiceType =
  | "Dispatch"
  | "Medical"
  | "Fire"
  | "Police"
  | "Traffic"
  | "Child Helpline"
  | "Hazards"
  | "Other";

export type ServiceEntry = {
  type: ServiceType;
  name: string;
  description?: string;
  phoneNumber: string;
  sources: Source[];
};

export type ServicesData = Record<string, ServiceEntry[]>;

// ---------------------------------------------------------------------------
// Read / Write
// ---------------------------------------------------------------------------

export function readData(filePath: string): ServicesData {
  if (!fs.existsSync(filePath)) return {};
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as ServicesData;
}

export function writeData(filePath: string, data: ServicesData): void {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");
  console.error(`Wrote ${filePath}`);
}

// ---------------------------------------------------------------------------
// Merge
// ---------------------------------------------------------------------------

/**
 * Merge `incoming` into `existing`.
 *
 * Match key: (countryCode, type, phoneNumber)
 * - If entry exists: add any new sources (dedup by source name).
 * - If entry is new: append it.
 * - If country is new: add it.
 * - Existing data is never removed.
 */
export function mergeData(
  existing: ServicesData,
  incoming: ServicesData,
): ServicesData {
  const result: ServicesData = JSON.parse(JSON.stringify(existing));

  for (const [isoCode, entries] of Object.entries(incoming)) {
    if (!result[isoCode]) {
      result[isoCode] = entries;
      continue;
    }

    for (const entry of entries) {
      const existingEntry = result[isoCode].find(
        (e) => e.type === entry.type && e.phoneNumber === entry.phoneNumber,
      );

      if (existingEntry) {
        for (const source of entry.sources) {
          if (!existingEntry.sources.some((s) => s.name === source.name)) {
            existingEntry.sources.push(source);
          }
        }
        if (!existingEntry.description && entry.description) {
          existingEntry.description = entry.description;
        }
      } else {
        result[isoCode].push(entry);
      }
    }
  }

  return Object.fromEntries(
    Object.entries(result).sort(([a], [b]) => a.localeCompare(b)),
  );
}
