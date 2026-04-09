import type { ValidCountryCode } from "./index";
import rawData from "../data/emergency-services.json" with { type: "json" };

export type Source = {
  name: string;
  url?: string;
  fetchedAt: string;
  lastModified: string | null;
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

export type Service = {
  type: ServiceType;
  name: string;
  description?: string;
  phoneNumber: string | null;
  sources: Source[];
};

export const SERVICES = rawData as Partial<Record<ValidCountryCode, Service[]>>;

export function isSupportedCountryCode(code: ValidCountryCode): boolean {
  return code in SERVICES;
}
