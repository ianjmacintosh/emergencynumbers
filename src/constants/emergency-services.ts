import type { COUNTRY_NAMES } from "./index";

export type Service = {
  // What kind of service do they provide?
  type: "Dispatch" | "Ambulance" | "Fire Department" | "Police";

  // What do they call themselves?
  name: string;

  // What do they do (in the user's language)?
  description?: string;

  // What is their phone number?
  phoneNumber: string;
};

export const SERVICES = {
  BR: [
    {
      type: "Police",
      name: "Polícia",
      description: "Police",
      phoneNumber: "190",
    },
    {
      type: "Police",
      name: "Polícia Rodoviaria",
      description: "Highway patrol",
      phoneNumber: "191",
    },
    {
      type: "Ambulance",
      name: "Ambuláncia",
      description: "Ambulance",
      phoneNumber: "192",
    },
    {
      type: "Fire Department",
      name: "Bombeiros",
      description: "Firefighters",
      phoneNumber: "193",
    },
  ],
  MX: [
    {
      type: "Dispatch",
      name: "Emergencia",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  US: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
} satisfies Partial<Record<keyof typeof COUNTRY_NAMES, Service[]>>;
