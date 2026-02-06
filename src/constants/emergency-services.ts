export type CountryInfo = { id: string; name: string };

export type ServiceDirectory = {
  [key: string]: Service[];
};

export type Service = {
  // What kind of service do they provide? See `ServiceType`
  type: ServiceType;

  // What do they call themselves?
  name: string;

  // What do they do?
  description?: string;

  // What is their phone number?
  phoneNumber: string;
};

export type ServiceType =
  | "Dispatch"
  | "Ambulance"
  | "FireDepartment"
  | "Police";

export const SUPPORTED_COUNTRIES: CountryInfo[] = [
  {
    id: "BR",
    name: "Brazil",
  },
  {
    id: "US",
    name: "United States",
  },
];

export const SERVICES: ServiceDirectory = {
  BR: [
    {
      type: "Police",
      name: "Policia",
      phoneNumber: "190",
    },
    {
      type: "Police",
      name: "Policia Rodoviaria",
      description: "Highway patrol",
      phoneNumber: "191",
    },
    {
      type: "Ambulance",
      name: "Ambulancia",
      phoneNumber: "192",
    },
    {
      type: "FireDepartment",
      name: "Bombeiros",
      phoneNumber: "193",
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
};
