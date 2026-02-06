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

export const SERVICES: { [key: string]: Service[] } = {
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
