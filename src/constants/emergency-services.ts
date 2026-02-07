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
      name: "Ambulància",
      description: "Ambulance",
      phoneNumber: "118",
    },
    {
      type: "Fire Department",
      name: "Bombers",
      description: "Fire department",
      phoneNumber: "118",
    },
    {
      type: "Police",
      name: "Policia",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  AE: [
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
      phoneNumber: "997",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "999",
    },
  ],
  AG: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Alternative emergency number",
      phoneNumber: "999",
    },
  ],
  AL: [
    {
      type: "Ambulance",
      name: "Ambulancë",
      description: "Ambulance",
      phoneNumber: "127",
    },
    {
      type: "Fire Department",
      name: "Zjarrfikësit",
      description: "Fire department",
      phoneNumber: "128",
    },
    {
      type: "Police",
      name: "Policia",
      description: "Police",
      phoneNumber: "129",
    },
  ],
  AM: [
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
  AR: [
    {
      type: "Ambulance",
      name: "Ambulancia",
      description: "Ambulance",
      phoneNumber: "107",
    },
    {
      type: "Fire Department",
      name: "Bomberos",
      description: "Fire department",
      phoneNumber: "100",
    },
    {
      type: "Police",
      name: "Policía",
      description: "Police",
      phoneNumber: "101",
    },
  ],
  AS: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  AT: [
    {
      type: "Ambulance",
      name: "Rettungsdienst",
      description: "Ambulance",
      phoneNumber: "144",
    },
    {
      type: "Fire Department",
      name: "Feuerwehr",
      description: "Fire department",
      phoneNumber: "122",
    },
    {
      type: "Police",
      name: "Polizei",
      description: "Police",
      phoneNumber: "133",
    },
  ],
  AU: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "000",
    },
  ],
  AZ: [
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
  BA: [
    {
      type: "Ambulance",
      name: "Hitna pomoć",
      description: "Ambulance",
      phoneNumber: "124",
    },
    {
      type: "Fire Department",
      name: "Vatrogasci",
      description: "Fire department",
      phoneNumber: "123",
    },
    {
      type: "Police",
      name: "Policija",
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
  BD: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "National emergency number",
      phoneNumber: "999",
    },
  ],
  BE: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
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
      description: "Police, fire, and ambulance",
      phoneNumber: "999",
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
      name: "Emergencia",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
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
  BS: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  BW: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Alternative emergency number",
      phoneNumber: "997",
    },
  ],
  BY: [
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
  BZ: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  CA: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  CH: [
    {
      type: "Ambulance",
      name: "Ambulanz",
      description: "Ambulance",
      phoneNumber: "144",
    },
    {
      type: "Fire Department",
      name: "Feuerwehr",
      description: "Fire department",
      phoneNumber: "118",
    },
    {
      type: "Police",
      name: "Polizei",
      description: "Police",
      phoneNumber: "117",
    },
  ],
  CL: [
    {
      type: "Ambulance",
      name: "Ambulancia",
      description: "Ambulance",
      phoneNumber: "131",
    },
    {
      type: "Fire Department",
      name: "Bomberos",
      description: "Fire department",
      phoneNumber: "132",
    },
    {
      type: "Police",
      name: "Carabineros",
      description: "Police",
      phoneNumber: "133",
    },
  ],
  CN: [
    {
      type: "Ambulance",
      name: "急救中心",
      description: "Ambulance",
      phoneNumber: "120",
    },
    {
      type: "Fire Department",
      name: "消防",
      description: "Fire department",
      phoneNumber: "119",
    },
    {
      type: "Police",
      name: "警察",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  CO: [
    {
      type: "Dispatch",
      name: "Emergencia",
      description: "National emergency number",
      phoneNumber: "123",
    },
  ],
  CR: [
    {
      type: "Dispatch",
      name: "Emergencia",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  CY: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  CZ: [
    {
      type: "Ambulance",
      name: "Záchranná služba",
      description: "Ambulance",
      phoneNumber: "155",
    },
    {
      type: "Fire Department",
      name: "Hasiči",
      description: "Fire department",
      phoneNumber: "150",
    },
    {
      type: "Police",
      name: "Policie",
      description: "Police",
      phoneNumber: "158",
    },
  ],
  DE: [
    {
      type: "Ambulance",
      name: "Rettungsdienst",
      description: "Ambulance and fire",
      phoneNumber: "112",
    },
    {
      type: "Fire Department",
      name: "Feuerwehr",
      description: "Fire department",
      phoneNumber: "112",
    },
    {
      type: "Police",
      name: "Polizei",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  DK: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  DO: [
    {
      type: "Dispatch",
      name: "Emergencia",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  DZ: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "14",
    },
    {
      type: "Fire Department",
      name: "Pompiers",
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
      type: "Dispatch",
      name: "Emergencia",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  EE: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
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
      name: "Emergencias",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  ET: [
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "911",
    },
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "907",
    },
  ],
  FI: [
    {
      type: "Dispatch",
      name: "Hätänumero",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  FJ: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  FR: [
    {
      type: "Ambulance",
      name: "SAMU",
      description: "Ambulance",
      phoneNumber: "15",
    },
    {
      type: "Fire Department",
      name: "Pompiers",
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
  GE: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  GH: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "193",
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
      phoneNumber: "191",
    },
  ],
  GR: [
    {
      type: "Ambulance",
      name: "ΕΚΑΒ",
      description: "Ambulance",
      phoneNumber: "166",
    },
    {
      type: "Fire Department",
      name: "Πυροσβεστική",
      description: "Fire department",
      phoneNumber: "199",
    },
    {
      type: "Police",
      name: "Αστυνομία",
      description: "Police",
      phoneNumber: "100",
    },
  ],
  GT: [
    {
      type: "Ambulance",
      name: "Bomberos",
      description: "Ambulance and fire",
      phoneNumber: "123",
    },
    {
      type: "Fire Department",
      name: "Bomberos",
      description: "Fire department",
      phoneNumber: "123",
    },
    {
      type: "Police",
      name: "Policía",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  GY: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "913",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "912",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "911",
    },
  ],
  HN: [
    {
      type: "Dispatch",
      name: "Emergencia",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  HR: [
    {
      type: "Dispatch",
      name: "Hitne službe",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  HT: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "114",
    },
  ],
  HU: [
    {
      type: "Dispatch",
      name: "Segélyhívó",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  ID: [
    {
      type: "Ambulance",
      name: "Ambulans",
      description: "Ambulance",
      phoneNumber: "118",
    },
    {
      type: "Fire Department",
      name: "Pemadam Kebakaran",
      description: "Fire department",
      phoneNumber: "113",
    },
    {
      type: "Police",
      name: "Polisi",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  IE: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Alternative emergency number",
      phoneNumber: "999",
    },
  ],
  IL: [
    {
      type: "Ambulance",
      name: "Magen David Adom",
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
      phoneNumber: "125",
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
      name: "Neyðarþjónusta",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  IT: [
    {
      type: "Ambulance",
      name: "Ambulanza",
      description: "Ambulance",
      phoneNumber: "118",
    },
    {
      type: "Fire Department",
      name: "Vigili del Fuoco",
      description: "Fire department",
      phoneNumber: "115",
    },
    {
      type: "Police",
      name: "Carabinieri",
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
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  JP: [
    {
      type: "Ambulance",
      name: "救急",
      description: "Ambulance and fire",
      phoneNumber: "119",
    },
    {
      type: "Fire Department",
      name: "消防",
      description: "Fire department",
      phoneNumber: "119",
    },
    {
      type: "Police",
      name: "警察",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  KE: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "999",
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
  KR: [
    {
      type: "Ambulance",
      name: "구급대",
      description: "Ambulance and fire",
      phoneNumber: "119",
    },
    {
      type: "Fire Department",
      name: "소방서",
      description: "Fire department",
      phoneNumber: "119",
    },
    {
      type: "Police",
      name: "경찰",
      description: "Police",
      phoneNumber: "112",
    },
  ],
  KW: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  KZ: [
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
  LB: [
    {
      type: "Ambulance",
      name: "Red Cross",
      description: "Ambulance",
      phoneNumber: "140",
    },
    {
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "175",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "112",
    },
  ],
  LI: [
    {
      type: "Ambulance",
      name: "Ambulanz",
      description: "Ambulance",
      phoneNumber: "144",
    },
    {
      type: "Fire Department",
      name: "Feuerwehr",
      description: "Fire department",
      phoneNumber: "118",
    },
    {
      type: "Police",
      name: "Polizei",
      description: "Police",
      phoneNumber: "117",
    },
  ],
  LK: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "1990",
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
  LT: [
    {
      type: "Dispatch",
      name: "Pagalbos telefonas",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  LU: [
    {
      type: "Dispatch",
      name: "Numéro d'urgence",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  LV: [
    {
      type: "Dispatch",
      name: "Ārkārtas palīdzība",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
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
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "19",
    },
  ],
  MD: [
    {
      type: "Ambulance",
      name: "Ambulanță",
      description: "Ambulance",
      phoneNumber: "903",
    },
    {
      type: "Fire Department",
      name: "Pompieri",
      description: "Fire department",
      phoneNumber: "901",
    },
    {
      type: "Police",
      name: "Poliția",
      description: "Police",
      phoneNumber: "902",
    },
  ],
  ME: [
    {
      type: "Dispatch",
      name: "Hitne službe",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  MK: [
    {
      type: "Ambulance",
      name: "Брза помош",
      description: "Ambulance",
      phoneNumber: "194",
    },
    {
      type: "Fire Department",
      name: "Пожарна",
      description: "Fire department",
      phoneNumber: "193",
    },
    {
      type: "Police",
      name: "Полиција",
      description: "Police",
      phoneNumber: "192",
    },
  ],
  MM: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
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
  MU: [
    {
      type: "Ambulance",
      name: "SAMU",
      description: "Ambulance",
      phoneNumber: "114",
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
      phoneNumber: "999",
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
  MY: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "999",
    },
  ],
  MZ: [
    {
      type: "Ambulance",
      name: "Ambulância",
      description: "Ambulance",
      phoneNumber: "117",
    },
    {
      type: "Fire Department",
      name: "Bombeiros",
      description: "Fire department",
      phoneNumber: "198",
    },
    {
      type: "Police",
      name: "Polícia",
      description: "Police",
      phoneNumber: "119",
    },
  ],
  NG: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "National emergency number",
      phoneNumber: "112",
    },
  ],
  NI: [
    {
      type: "Dispatch",
      name: "Emergencia",
      description: "Police, fire, and ambulance",
      phoneNumber: "118",
    },
  ],
  NL: [
    {
      type: "Dispatch",
      name: "Alarmnummer",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  NO: [
    {
      type: "Ambulance",
      name: "Ambulanse",
      description: "Ambulance",
      phoneNumber: "113",
    },
    {
      type: "Fire Department",
      name: "Brannvesen",
      description: "Fire department",
      phoneNumber: "110",
    },
    {
      type: "Police",
      name: "Politi",
      description: "Police",
      phoneNumber: "112",
    },
  ],
  NP: [
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
  ],
  NZ: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "111",
    },
  ],
  OM: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "9999",
    },
  ],
  PA: [
    {
      type: "Dispatch",
      name: "Emergencia",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  PE: [
    {
      type: "Ambulance",
      name: "Bomberos",
      description: "Ambulance and fire",
      phoneNumber: "116",
    },
    {
      type: "Fire Department",
      name: "Bomberos",
      description: "Fire department",
      phoneNumber: "116",
    },
    {
      type: "Police",
      name: "Policía",
      description: "Police",
      phoneNumber: "105",
    },
  ],
  PH: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  PK: [
    {
      type: "Dispatch",
      name: "Rescue",
      description: "Emergency rescue service",
      phoneNumber: "1122",
    },
    {
      type: "Ambulance",
      name: "Edhi Ambulance",
      description: "Ambulance",
      phoneNumber: "115",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "15",
    },
  ],
  PL: [
    {
      type: "Ambulance",
      name: "Pogotowie Ratunkowe",
      description: "Ambulance",
      phoneNumber: "999",
    },
    {
      type: "Fire Department",
      name: "Straż Pożarna",
      description: "Fire department",
      phoneNumber: "998",
    },
    {
      type: "Police",
      name: "Policja",
      description: "Police",
      phoneNumber: "997",
    },
  ],
  PT: [
    {
      type: "Dispatch",
      name: "Emergência",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  PY: [
    {
      type: "Dispatch",
      name: "Emergencia",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  QA: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "999",
    },
  ],
  RO: [
    {
      type: "Dispatch",
      name: "Urgențe",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  RS: [
    {
      type: "Ambulance",
      name: "Hitna pomoć",
      description: "Ambulance",
      phoneNumber: "194",
    },
    {
      type: "Fire Department",
      name: "Vatrogasci",
      description: "Fire department",
      phoneNumber: "193",
    },
    {
      type: "Police",
      name: "Policija",
      description: "Police",
      phoneNumber: "192",
    },
  ],
  RU: [
    {
      type: "Ambulance",
      name: "Скорая помощь",
      description: "Ambulance",
      phoneNumber: "103",
    },
    {
      type: "Fire Department",
      name: "Пожарная",
      description: "Fire department",
      phoneNumber: "101",
    },
    {
      type: "Police",
      name: "Полиция",
      description: "Police",
      phoneNumber: "102",
    },
  ],
  RW: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
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
  SE: [
    {
      type: "Dispatch",
      name: "SOS Alarm",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  SG: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance and fire",
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
  SI: [
    {
      type: "Dispatch",
      name: "Klic v sili",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  SK: [
    {
      type: "Ambulance",
      name: "Záchranná služba",
      description: "Ambulance",
      phoneNumber: "155",
    },
    {
      type: "Fire Department",
      name: "Hasiči",
      description: "Fire department",
      phoneNumber: "150",
    },
    {
      type: "Police",
      name: "Polícia",
      description: "Police",
      phoneNumber: "158",
    },
  ],
  SV: [
    {
      type: "Dispatch",
      name: "Emergencia",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  TH: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "1669",
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
  TN: [
    {
      type: "Ambulance",
      name: "Ambulance",
      description: "Ambulance",
      phoneNumber: "190",
    },
    {
      type: "Fire Department",
      name: "Pompiers",
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
  TR: [
    {
      type: "Dispatch",
      name: "Acil yardım",
      description: "Police, fire, and ambulance",
      phoneNumber: "112",
    },
  ],
  TT: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "999",
    },
  ],
  TW: [
    {
      type: "Ambulance",
      name: "救護車",
      description: "Ambulance and fire",
      phoneNumber: "119",
    },
    {
      type: "Fire Department",
      name: "消防局",
      description: "Fire department",
      phoneNumber: "119",
    },
    {
      type: "Police",
      name: "警察",
      description: "Police",
      phoneNumber: "110",
    },
  ],
  TZ: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
      phoneNumber: "114",
    },
  ],
  UA: [
    {
      type: "Ambulance",
      name: "Швидка допомога",
      description: "Ambulance",
      phoneNumber: "103",
    },
    {
      type: "Fire Department",
      name: "Пожежна",
      description: "Fire department",
      phoneNumber: "101",
    },
    {
      type: "Police",
      name: "Поліція",
      description: "Police",
      phoneNumber: "102",
    },
  ],
  UG: [
    {
      type: "Dispatch",
      name: "Emergency services",
      description: "Police, fire, and ambulance",
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
      name: "Emergencia",
      description: "Police, fire, and ambulance",
      phoneNumber: "911",
    },
  ],
  UZ: [
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
  VE: [
    {
      type: "Dispatch",
      name: "Emergencia",
      description: "Police, fire, and ambulance",
      phoneNumber: "171",
    },
  ],
  VN: [
    {
      type: "Ambulance",
      name: "Cấp cứu",
      description: "Ambulance",
      phoneNumber: "115",
    },
    {
      type: "Fire Department",
      name: "Cứu hỏa",
      description: "Fire department",
      phoneNumber: "114",
    },
    {
      type: "Police",
      name: "Công an",
      description: "Police",
      phoneNumber: "113",
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
      type: "Police",
      name: "Police",
      description: "Police and fire",
      phoneNumber: "10111",
    },
  ],
  ZM: [
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
      phoneNumber: "991",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "993",
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
      type: "Fire Department",
      name: "Fire Department",
      description: "Fire department",
      phoneNumber: "993",
    },
    {
      type: "Police",
      name: "Police",
      description: "Police",
      phoneNumber: "995",
    },
  ],
} satisfies Partial<Record<keyof typeof COUNTRY_NAMES, Service[]>>;
