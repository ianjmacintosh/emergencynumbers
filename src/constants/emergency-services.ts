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
  AD: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "118",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "118",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  AE: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "998",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  AG: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  AL: [
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "17",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "18",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "19",
    },
  ],
  AM: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "103",
    },
  ],
  AO: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "118",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "118",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  AR: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "101",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "107",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "101",
    },
  ],
  AS: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  AT: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "122",
    },
  ],
  AU: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "000",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services (cell phone)",
      phoneNumber: "112",
    },
  ],
  AW: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  AZ: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "03",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "01",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "02",
    },
  ],
  BA: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "124",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "123",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "122",
    },
  ],
  BB: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "115",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "119",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "113",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "119",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "112",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "119",
    },
  ],
  BD: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "199",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "9 555 555",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "866 551-3",
    },
  ],
  BE: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services (cell)",
      phoneNumber: "112",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "101",
    },
  ],
  BG: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "150",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "160",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "166",
    },
  ],
  BH: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  BM: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  BN: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "991",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "995",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "993",
    },
  ],
  BO: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  BR: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  BS: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  BT: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "110",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "112",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "113",
    },
  ],
  BW: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "997",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  BY: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "03",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "01",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "02",
    },
  ],
  BZ: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  CA: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  CH: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "144",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "118",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "117",
    },
  ],
  CI: [
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "110",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "111",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "170",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "180",
    },
  ],
  CK: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "998",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "996",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "999",
    },
  ],
  CL: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "131",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "132",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "133",
    },
  ],
  CN: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "120",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "119",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "110",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police (traffic accident)",
      phoneNumber: "122",
    },
  ],
  CO: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "119",
    },
  ],
  CR: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  CU: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "26811",
    },
  ],
  CV: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "130",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "131",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "132",
    },
  ],
  CW: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "112",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "114",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "444444",
    },
  ],
  CY: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  CZ: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "155",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "150",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "158",
    },
  ],
  DE: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "112",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  DJ: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "351351",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "18",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "17",
    },
  ],
  DK: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  DM: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  DO: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  DZ: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "21606666",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "14",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "17",
    },
  ],
  EC: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "131",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "101",
    },
  ],
  EE: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  EG: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "123",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "180",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "122",
    },
  ],
  ES: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  ET: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "92",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "93",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "91",
    },
  ],
  FI: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  FJ: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  FK: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  FR: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "15",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "18",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "17",
    },
  ],
  GA: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "1300-1399",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "18",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "1730",
    },
  ],
  GB: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  GD: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "434",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "112",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "911",
    },
  ],
  GE: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "022",
    },
  ],
  GF: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "15",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "18",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "17",
    },
  ],
  GH: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "776111-5",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "192",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "999",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "171",
    },
  ],
  GI: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  GM: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "16",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "18",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "17",
    },
  ],
  GP: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "18",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "18",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "17",
    },
  ],
  GR: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "166",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "199",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "100",
    },
  ],
  GT: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "123",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "123",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  GU: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  GY: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  HK: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  HN: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "195",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "37 8654",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "198",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "119",
    },
  ],
  HR: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  HT: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "118",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "114",
    },
  ],
  HU: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  ID: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "118",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "113",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  IE: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  IL: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "101",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "102",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "100",
    },
  ],
  IM: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  IN: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "102",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "101",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "100",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police (traffic accident)",
      phoneNumber: "103",
    },
  ],
  IR: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "115",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "123",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  IS: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  IT: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "118",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "115",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "113",
    },
  ],
  JM: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "110",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "110",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "119",
    },
  ],
  JO: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "191",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "193",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "192",
    },
  ],
  JP: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "119",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "119",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  KE: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  KG: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "103",
    },
  ],
  KH: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "119",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "118",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "117",
    },
  ],
  KI: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "994",
    },
  ],
  KN: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  KR: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "119",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "119",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "112",
    },
  ],
  KW: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "777",
    },
  ],
  KY: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  KZ: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "03",
    },
  ],
  LB: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  LC: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  LI: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  LK: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "1 691095",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "699935",
    },
  ],
  LR: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services (cell phones only)",
      phoneNumber: "911",
    },
  ],
  LS: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "121",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "122",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "123",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "124",
    },
  ],
  LT: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  LU: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "113",
    },
  ],
  LV: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "03",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "01",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "02",
    },
  ],
  LY: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "193",
    },
  ],
  MA: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "15",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "15",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "19",
    },
  ],
  MC: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  MD: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "903",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "901",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "902",
    },
  ],
  ME: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "94",
    },
  ],
  MH: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "625 4111",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "625 8666",
    },
  ],
  MK: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "94",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "93",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "92",
    },
  ],
  ML: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "15",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "17",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "18",
    },
  ],
  MM: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  MN: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "103",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "101",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "102",
    },
  ],
  MO: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  MQ: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "15",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "18",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "17",
    },
  ],
  MR: [
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "118",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "117",
    },
  ],
  MS: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "911",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "999",
    },
  ],
  MT: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  MU: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  MV: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "102",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "999",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "119",
    },
  ],
  MW: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "998",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "999",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "997",
    },
  ],
  MX: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "065",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "068",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "060",
    },
  ],
  MY: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "999",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "994",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "999",
    },
  ],
  MZ: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "117",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "198",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "119",
    },
  ],
  NA: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "2032276",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "2032270",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "1011",
    },
  ],
  NG: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "199",
    },
  ],
  NI: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "128",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "115",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "911",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "118",
    },
  ],
  NL: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  NO: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  NP: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "228094",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "100",
    },
  ],
  NZ: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "111",
    },
  ],
  OM: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  PA: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "269-9778",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "103",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "104",
    },
  ],
  PE: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "011",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "5114",
    },
  ],
  PF: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "15",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "18",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "17",
    },
  ],
  PG: [
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "110",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "000",
    },
  ],
  PH: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "166",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "117",
    },
  ],
  PK: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "15",
    },
  ],
  PL: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  PR: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  PS: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "101",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "101",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "100",
    },
  ],
  PT: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  PW: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  PY: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "00",
    },
  ],
  QA: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  RE: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "15",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "18",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "17",
    },
  ],
  RO: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  RS: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "94",
    },
  ],
  RU: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  SA: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "997",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "998",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "999",
    },
  ],
  SB: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  SC: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  SE: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  SG: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "995",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "995",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "999",
    },
  ],
  SH: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  SI: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  SK: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "155",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "150",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "158",
    },
  ],
  SL: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "999",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "019",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "999",
    },
  ],
  SM: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "113",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "116",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "112",
    },
  ],
  SV: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  SX: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "911",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "542-2111",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "911",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "120",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "911",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "542-2111",
    },
  ],
  SY: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "110",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "113",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "112",
    },
  ],
  TC: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  TD: [
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "18",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "17",
    },
  ],
  TG: [
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "101",
    },
  ],
  TH: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "191",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "199",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "191",
    },
  ],
  TJ: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "03",
    },
  ],
  TL: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  TM: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "03",
    },
  ],
  TN: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "190",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "198",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "197",
    },
  ],
  TO: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  TR: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "101",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "112",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "102",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "100",
    },
  ],
  TT: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "990",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "990",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "999",
    },
  ],
  TV: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  TW: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "119",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "119",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  TZ: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  UA: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "03",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "118",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "01",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "02",
    },
  ],
  UG: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services (cell phone)",
      phoneNumber: "112",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services (fixed)",
      phoneNumber: "999",
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
  UY: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  UZ: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "03",
    },
  ],
  VA: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "113",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "115",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "112",
    },
  ],
  VC: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  VE: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "171",
    },
  ],
  VG: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  VI: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "911",
    },
  ],
  VN: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "05",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "08",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "03",
    },
  ],
  VU: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "112",
    },
  ],
  WS: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  XK: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "94",
    },
  ],
  YE: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "191",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "191",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "194",
    },
  ],
  ZA: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "10177",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "10177",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "10111",
    },
  ],
  ZM: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Switchboard for various services",
      phoneNumber: "999",
    },
  ],
  ZW: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "994",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "999",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "993",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "999",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "995",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "999",
    },
  ],
} satisfies Partial<Record<keyof typeof COUNTRY_NAMES, Service[]>>;

