import type { COUNTRY_NAMES } from "./index";
import rawData from "../data/emergency-services.json";

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

export type Service = {
  type: ServiceType;
  name: string;
  description?: string;
  phoneNumber: string;
  sources: Source[];
};

type RawServices = Partial<Record<keyof typeof COUNTRY_NAMES, Service[]>>;

export const SERVICES = rawData as unknown as RawServices;
