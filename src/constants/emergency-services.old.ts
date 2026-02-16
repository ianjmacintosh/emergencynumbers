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
  // TODO: Missing countries/territories from PDF (not in COUNTRY_NAMES):
  //   - Bali (Indonesia): 112, 118 (may be ID or use IC/BL country code?)
  //   - Canary Islands (Spain): 112 (likely ES)
  //   - Easter Island (Chile): 100-215, 100-264, 100-244 (likely CL)
  //   - Ascension Island (UK): 6000, 911, 6666 (likely SH - Saint Helena, Ascension and Tristan da Cunha)
  //   - South Africa (Cape Town): 107 (already covered under ZA)
  //   - Tahiti (French Polynesia): Already added as PF
  //   - England/Scotland/Northern Ireland: All covered under GB
  AL: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "17" },
    { type: "Fire Department", name: "Fire", phoneNumber: "18" },
    { type: "Police", name: "Police", phoneNumber: "19" },
  ],
  DZ: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "21606666" },
    { type: "Fire Department", name: "Fire", phoneNumber: "14" },
    { type: "Police", name: "Police", phoneNumber: "17" },
  ],
  AS: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  AD: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "118" },
    { type: "Fire Department", name: "Fire", phoneNumber: "118" },
    { type: "Police", name: "Police", phoneNumber: "110" },
  ],
  AO: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "118" },
    { type: "Fire Department", name: "Fire", phoneNumber: "118" },
    { type: "Police", name: "Police", phoneNumber: "110" },
  ],
  AG: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "999" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "911" },
  ],
  AR: [
    { type: "Police", name: "Police", phoneNumber: "101" },
    { type: "Ambulance", name: "Ambulance", phoneNumber: "107" },
    { type: "Fire Department", name: "Fire", phoneNumber: "101" },
  ],
  AM: [{ type: "Ambulance", name: "Ambulance", phoneNumber: "103" }],
  AW: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],

  // TODO: Australia - PDF shows "000 (112 on cell phone)" but should have 2 entries
  AU: [
    {
      type: "Dispatch",
      name: "Emergency Services",
      description: "000 (112 on cell phone)",
      phoneNumber: "000",
    },
  ],
  // TODO: Austria - PDF shows "112, 122" for Ambulance - verify if 122 is Ambulance-specific or general dispatch
  AT: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "122" },
  ],
  AZ: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "03" },
    { type: "Fire Department", name: "Fire", phoneNumber: "01" },
    { type: "Police", name: "Police", phoneNumber: "02" },
  ],
  BS: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  BH: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  // TODO: Bangladesh - PDF shows "9 555 555" and "866 551-3" - verify formatting (spaces preserved for readability)
  BD: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "199" },
    { type: "Fire Department", name: "Fire", phoneNumber: "9 555 555" },
    { type: "Police", name: "Police", phoneNumber: "866 551-3" },
  ],
  // TODO: Barbados - PDF shows "115, 119" for Ambulance, "113, 119" for Fire, "112, 119" for Police - verify if 119 is unified dispatch
  BB: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "115" },
    { type: "Ambulance", name: "Ambulance", phoneNumber: "119" },
    { type: "Fire Department", name: "Fire", phoneNumber: "113" },
    { type: "Fire Department", name: "Fire", phoneNumber: "119" },
    { type: "Police", name: "Police", phoneNumber: "112" },
    { type: "Police", name: "Police", phoneNumber: "119" },
  ],
  BY: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "03" },
    { type: "Fire Department", name: "Fire", phoneNumber: "01" },
    { type: "Police", name: "Police", phoneNumber: "02" },
  ],
  // TODO: Belgium - PDF shows "112 (cell)/101" - verify if description is accurate
  BE: [
    {
      type: "Dispatch",
      name: "Emergency Services",
      description: "112 on cell phone",
      phoneNumber: "112",
    },
    { type: "Police", name: "Police", phoneNumber: "101" },
  ],
  BZ: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  BM: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  BT: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "110" },
    { type: "Fire Department", name: "Fire", phoneNumber: "112" },
    { type: "Police", name: "Police", phoneNumber: "113" },
  ],
  BO: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  BQ: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  BA: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "124" },
    { type: "Fire Department", name: "Fire", phoneNumber: "123" },
    { type: "Police", name: "Police", phoneNumber: "122" },
  ],
  // TODO: Botswana - PDF shows "997, 911" - should create two dispatch entries
  BW: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "997" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "911" },
  ],
  BR: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  VG: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  BN: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "991" },
    { type: "Fire Department", name: "Fire", phoneNumber: "995" },
    { type: "Police", name: "Police", phoneNumber: "993" },
  ],
  BG: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "150" },
    { type: "Fire Department", name: "Fire", phoneNumber: "160" },
    { type: "Police", name: "Police", phoneNumber: "166" },
  ],
  MM: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  KH: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "119" },
    { type: "Fire Department", name: "Fire", phoneNumber: "118" },
    { type: "Police", name: "Police", phoneNumber: "117" },
  ],
  CA: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  CV: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "130" },
    { type: "Fire Department", name: "Fire", phoneNumber: "131" },
    { type: "Police", name: "Police", phoneNumber: "132" },
  ],
  KY: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  // TODO: Chad - PDF shows no Ambulance number - verify if ambulance service exists
  TD: [
    { type: "Fire Department", name: "Fire", phoneNumber: "18" },
    { type: "Police", name: "Police", phoneNumber: "17" },
  ],
  CL: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "131" },
    { type: "Fire Department", name: "Fire", phoneNumber: "132" },
    { type: "Police", name: "Police", phoneNumber: "133" },
  ],
  CN: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "120" },
    { type: "Fire Department", name: "Fire", phoneNumber: "119" },
    { type: "Police", name: "Police", phoneNumber: "110" },
    { type: "Police", name: "Traffic Accident", phoneNumber: "122" },
  ],
  CO: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "119" }],
  CK: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "998" },
    { type: "Fire Department", name: "Fire", phoneNumber: "996" },
    { type: "Police", name: "Police", phoneNumber: "999" },
  ],
  CR: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  // TODO: Côte d'Ivoire - PDF shows "110, 111, 170" for Fire and no Ambulance - verify all numbers
  CI: [
    { type: "Fire Department", name: "Fire", phoneNumber: "110" },
    { type: "Fire Department", name: "Fire", phoneNumber: "111" },
    { type: "Fire Department", name: "Fire", phoneNumber: "170" },
    { type: "Police", name: "Police", phoneNumber: "180" },
  ],
  HR: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  CU: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "26811" }],
  CW: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "112" },
    { type: "Fire Department", name: "Fire", phoneNumber: "114" },
    { type: "Police", name: "Police", phoneNumber: "444444" },
  ],
  CY: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  // TODO: Czech Republic - PDF shows "112, 155" for Ambulance - verify if 155 is ambulance-specific
  CZ: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "112" },
    { type: "Ambulance", name: "Ambulance", phoneNumber: "155" },
    { type: "Fire Department", name: "Fire", phoneNumber: "150" },
    { type: "Police", name: "Police", phoneNumber: "158" },
  ],
  DK: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  DJ: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "351351" },
    { type: "Fire Department", name: "Fire", phoneNumber: "18" },
    { type: "Police", name: "Police", phoneNumber: "17" },
  ],
  DM: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  DO: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  TL: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  // TODO: Ecuador - PDF shows no Fire number - verify if fire service exists
  EC: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "131" },
    { type: "Police", name: "Police", phoneNumber: "101" },
  ],
  EG: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "123" },
    { type: "Fire Department", name: "Fire", phoneNumber: "180" },
    { type: "Police", name: "Police", phoneNumber: "122" },
  ],
  SV: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  EE: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "112" },
    { type: "Fire Department", name: "Fire", phoneNumber: "112" },
    { type: "Police", name: "Police", phoneNumber: "110" },
  ],
  ET: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "92" },
    { type: "Fire Department", name: "Fire", phoneNumber: "93" },
    { type: "Police", name: "Police", phoneNumber: "91" },
  ],
  FK: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  FJ: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  FI: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  FR: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Ambulance", name: "Ambulance", phoneNumber: "15" },
    { type: "Fire Department", name: "Fire", phoneNumber: "18" },
    { type: "Police", name: "Police", phoneNumber: "17" },
  ],
  GF: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Ambulance", name: "Ambulance", phoneNumber: "15" },
    { type: "Fire Department", name: "Fire", phoneNumber: "18" },
    { type: "Police", name: "Police", phoneNumber: "17" },
  ],
  PF: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "15" },
    { type: "Fire Department", name: "Fire", phoneNumber: "18" },
    { type: "Police", name: "Police", phoneNumber: "17" },
  ],
  // TODO: Gabon - PDF shows "1300-1399" for Ambulance - verify if hyphen is formatting or range of numbers
  GA: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "1300-1399" },
    { type: "Fire Department", name: "Fire", phoneNumber: "18" },
    { type: "Police", name: "Police", phoneNumber: "1730" },
  ],
  GM: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "16" },
    { type: "Fire Department", name: "Fire", phoneNumber: "18" },
    { type: "Police", name: "Police", phoneNumber: "17" },
  ],
  GE: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "022" }],
  DE: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Police", name: "Police", phoneNumber: "110" },
  ],
  // TODO: Ghana - PDF shows "776111-5" for Ambulance and "999, 171" for Police - verify all numbers
  GH: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "776111-5" },
    { type: "Fire Department", name: "Fire", phoneNumber: "192" },
    { type: "Police", name: "Police", phoneNumber: "999" },
    { type: "Police", name: "Police", phoneNumber: "171" },
  ],
  GI: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  // TODO: Greece - PDF shows "112, 166" for Ambulance, "112, 199" for Fire, "112, 100" for Police - verify service-specific numbers
  GR: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Ambulance", name: "Ambulance", phoneNumber: "166" },
    { type: "Fire Department", name: "Fire", phoneNumber: "199" },
    { type: "Police", name: "Police", phoneNumber: "100" },
  ],
  GD: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "434" },
    { type: "Fire Department", name: "Fire", phoneNumber: "112" },
    { type: "Police", name: "Police", phoneNumber: "911" },
  ],
  GP: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "18" },
    { type: "Fire Department", name: "Fire", phoneNumber: "18" },
    { type: "Police", name: "Police", phoneNumber: "17" },
  ],
  GU: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  GT: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "123" },
    { type: "Fire Department", name: "Fire", phoneNumber: "123" },
    { type: "Police", name: "Police", phoneNumber: "110" },
  ],
  GY: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  HT: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "118" },
    { type: "Police", name: "Police", phoneNumber: "114" },
  ],
  // TODO: Honduras - PDF shows "195, 37 8654" for Ambulance - verify if "37 8654" is area code or alternate number
  HN: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "195" },
    { type: "Ambulance", name: "Ambulance", phoneNumber: "37 8654" },
    { type: "Fire Department", name: "Fire", phoneNumber: "198" },
    { type: "Police", name: "Police", phoneNumber: "119" },
  ],
  HK: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  HU: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  IS: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  IN: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "102" },
    { type: "Fire Department", name: "Fire", phoneNumber: "101" },
    { type: "Police", name: "Police", phoneNumber: "100" },
    {
      type: "Police",
      name: "Traffic Accident",
      phoneNumber: "103",
    },
  ],
  ID: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "118" },
    { type: "Fire Department", name: "Fire", phoneNumber: "113" },
    { type: "Police", name: "Police", phoneNumber: "110" },
  ],
  IR: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "115" },
    { type: "Fire Department", name: "Fire", phoneNumber: "123" },
    { type: "Police", name: "Police", phoneNumber: "110" },
  ],
  // TODO: Ireland - PDF shows "112. 999" (period separator) - verify if both numbers are valid
  IE: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "999" },
  ],
  IM: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  IL: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "101" },
    { type: "Fire Department", name: "Fire", phoneNumber: "102" },
    { type: "Police", name: "Police", phoneNumber: "100" },
  ],
  IT: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Ambulance", name: "Ambulance", phoneNumber: "118" },
    { type: "Fire Department", name: "Fire", phoneNumber: "115" },
    { type: "Police", name: "Police", phoneNumber: "113" },
  ],
  JM: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "110" },
    { type: "Fire Department", name: "Fire", phoneNumber: "110" },
    { type: "Police", name: "Police", phoneNumber: "119" },
  ],
  JP: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "119" },
    { type: "Fire Department", name: "Fire", phoneNumber: "119" },
    { type: "Police", name: "Police", phoneNumber: "110" },
  ],
  JO: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "191" },
    { type: "Fire Department", name: "Fire", phoneNumber: "193" },
    { type: "Police", name: "Police", phoneNumber: "192" },
  ],
  KZ: [{ type: "Ambulance", name: "Ambulance", phoneNumber: "03" }],
  KE: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  KI: [{ type: "Ambulance", name: "Ambulance", phoneNumber: "994" }],
  XK: [{ type: "Ambulance", name: "Ambulance", phoneNumber: "94" }],
  KR: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "119" },
    { type: "Fire Department", name: "Fire", phoneNumber: "119" },
    { type: "Police", name: "Police", phoneNumber: "112" },
  ],
  KW: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "777" }],
  KG: [{ type: "Ambulance", name: "Ambulance", phoneNumber: "103" }],
  // TODO: Latvia - PDF shows "112, 03" for Ambulance, "112, 01" for Fire, "112, 02" for Police - verify service-specific numbers
  LV: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Ambulance", name: "Ambulance", phoneNumber: "03" },
    { type: "Fire Department", name: "Fire", phoneNumber: "01" },
    { type: "Police", name: "Police", phoneNumber: "02" },
  ],
  LB: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  LS: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "121" },
    { type: "Fire Department", name: "Fire", phoneNumber: "122" },
    { type: "Police", name: "Police", phoneNumber: "123" },
  ],
  LR: [
    {
      type: "Dispatch",
      name: "Emergency Services",
      description: "911 (cell phones only)",
      phoneNumber: "911",
    },
  ],
  LY: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "193" }],
  LI: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  LT: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  // TODO: Luxembourg - PDF shows "112/113" - verify if both are dispatch or if 113 is service-specific
  LU: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "113" },
  ],
  MO: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  MK: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "94" },
    { type: "Fire Department", name: "Fire", phoneNumber: "93" },
    { type: "Police", name: "Police", phoneNumber: "92" },
  ],
  MW: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "998" },
    { type: "Fire Department", name: "Fire", phoneNumber: "999" },
    { type: "Police", name: "Police", phoneNumber: "997" },
  ],
  MY: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "999" },
    { type: "Fire Department", name: "Fire", phoneNumber: "994" },
    { type: "Police", name: "Police", phoneNumber: "999" },
  ],
  MV: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "102" },
    { type: "Fire Department", name: "Fire", phoneNumber: "999" },
    { type: "Police", name: "Police", phoneNumber: "119" },
  ],
  ML: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "15" },
    { type: "Fire Department", name: "Fire", phoneNumber: "17" },
    { type: "Police", name: "Police", phoneNumber: "18" },
  ],
  MT: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  MP: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  // TODO: Marshall Islands - PDF shows "625 4111" and "625 8666" with spaces, no Fire number - verify formatting and fire service
  MH: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "625 4111" },
    { type: "Police", name: "Police", phoneNumber: "625 8666" },
  ],
  MQ: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "15" },
    { type: "Fire Department", name: "Fire", phoneNumber: "18" },
    { type: "Police", name: "Police", phoneNumber: "17" },
  ],
  // TODO: Mauritania - PDF shows no Ambulance number - verify if ambulance service exists
  MR: [
    { type: "Fire Department", name: "Fire", phoneNumber: "118" },
    { type: "Police", name: "Police", phoneNumber: "117" },
  ],
  MU: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  MX: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "065" },
    { type: "Fire Department", name: "Fire", phoneNumber: "068" },
    { type: "Police", name: "Police", phoneNumber: "060" },
  ],
  MD: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "903" },
    { type: "Fire Department", name: "Fire", phoneNumber: "901" },
    { type: "Police", name: "Police", phoneNumber: "902" },
  ],
  MC: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  MN: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "103" },
    { type: "Fire Department", name: "Fire", phoneNumber: "101" },
    { type: "Police", name: "Police", phoneNumber: "102" },
  ],
  ME: [{ type: "Ambulance", name: "Ambulance", phoneNumber: "94" }],
  MS: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "911" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "999" },
  ],
  MA: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "15" },
    { type: "Fire Department", name: "Fire", phoneNumber: "15" },
    { type: "Police", name: "Police", phoneNumber: "19" },
  ],
  MZ: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "117" },
    { type: "Fire Department", name: "Fire", phoneNumber: "198" },
    { type: "Police", name: "Police", phoneNumber: "119" },
  ],
  NA: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "2032276" },
    { type: "Fire Department", name: "Fire", phoneNumber: "2032270" },
    { type: "Police", name: "Police", phoneNumber: "1011" },
  ],
  NP: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "228094" },
    { type: "Police", name: "Police", phoneNumber: "100" },
  ],
  NL: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  AN: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  NZ: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "111" }],
  // TODO: Nicaragua - PDF shows "115, 911" for Fire - verify if 911 is unified dispatch
  NI: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "128" },
    { type: "Fire Department", name: "Fire", phoneNumber: "115" },
    { type: "Fire Department", name: "Fire", phoneNumber: "911" },
    { type: "Police", name: "Police", phoneNumber: "118" },
  ],
  NG: [{ type: "Ambulance", name: "Ambulance", phoneNumber: "199" }],
  // TODO: Norway - PDF shows "112, 110" - verify if both are dispatch or if 110 is police-specific
  NO: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Police", name: "Police", phoneNumber: "110" },
  ],
  OM: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  PK: [{ type: "Ambulance", name: "Ambulance", phoneNumber: "15" }],
  PW: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  PS: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "101" },
    { type: "Fire Department", name: "Fire", phoneNumber: "101" },
    { type: "Police", name: "Police", phoneNumber: "100" },
  ],
  PA: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "2699778" },
    { type: "Fire Department", name: "Fire", phoneNumber: "103" },
    { type: "Police", name: "Police", phoneNumber: "104" },
  ],
  PG: [
    { type: "Fire Department", name: "Fire", phoneNumber: "110" },
    { type: "Police", name: "Police", phoneNumber: "000" },
  ],
  PY: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "00" }],
  // TODO: Peru - PDF shows "011, 5114" - verify if both are valid dispatch numbers or if one is outdated
  PE: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "011" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "5114" },
  ],
  // TODO: Philippines - PDF shows "166, 117" - verify if both are dispatch or service-specific
  PH: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "166" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "117" },
  ],
  // TODO: Poland - PDF shows "112, 999" - verify if both are valid dispatch numbers
  PL: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "999" },
  ],
  PT: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  PR: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  QA: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  // TODO: Réunion - PDF shows "112, 15" for Ambulance - verify service-specific numbers
  RE: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Ambulance", name: "Ambulance", phoneNumber: "15" },
    { type: "Fire Department", name: "Fire", phoneNumber: "18" },
    { type: "Police", name: "Police", phoneNumber: "17" },
  ],
  RO: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  RU: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  WS: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  SM: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "113" },
    { type: "Fire Department", name: "Fire", phoneNumber: "116" },
    { type: "Police", name: "Police", phoneNumber: "112" },
  ],
  SA: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "997" },
    { type: "Fire Department", name: "Fire", phoneNumber: "998" },
    { type: "Police", name: "Police", phoneNumber: "999" },
  ],
  RS: [{ type: "Ambulance", name: "Ambulance", phoneNumber: "94" }],
  SC: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  SL: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "999" },
    { type: "Fire Department", name: "Fire", phoneNumber: "019" },
    { type: "Police", name: "Police", phoneNumber: "999" },
  ],
  SG: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "995" },
    { type: "Fire Department", name: "Fire", phoneNumber: "995" },
    { type: "Police", name: "Police", phoneNumber: "999" },
  ],
  SK: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "155" },
    { type: "Fire Department", name: "Fire", phoneNumber: "150" },
    { type: "Police", name: "Police", phoneNumber: "158" },
  ],
  SI: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  SB: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  ZA: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "10177" },
    { type: "Fire Department", name: "Fire", phoneNumber: "10177" },
    { type: "Police", name: "Police", phoneNumber: "10111" },
  ],
  ES: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  // TODO: Sri Lanka - PDF shows "1 691095, 699935" with spaces - verify if both are valid and formatting
  LK: [
    {
      type: "Dispatch",
      name: "Emergency Services",
      phoneNumber: "1 691095",
    },
    {
      type: "Dispatch",
      name: "Emergency Services",
      phoneNumber: "699935",
    },
  ],
  SH: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  KN: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  // TODO: Saint Lucia - PDF shows "999, 911" - verify if both are valid dispatch numbers
  LC: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "999" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "911" },
  ],
  // TODO: Sint Maarten - PDF shows "911, 542-2111" for Ambulance, "911, 120" for Fire, "911, 542-2111" for Police - verify alternate numbers
  SX: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "911" },
    { type: "Ambulance", name: "Ambulance", phoneNumber: "542-2111" },
    { type: "Fire Department", name: "Fire", phoneNumber: "911" },
    { type: "Fire Department", name: "Fire", phoneNumber: "120" },
    { type: "Police", name: "Police", phoneNumber: "911" },
    { type: "Police", name: "Police", phoneNumber: "542-2111" },
  ],
  // TODO: Saint Vincent and the Grenadines - PDF shows "999, 911" - verify if both are valid dispatch numbers
  VC: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "999" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "911" },
  ],
  SE: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  CH: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "144" },
    { type: "Fire Department", name: "Fire", phoneNumber: "118" },
    { type: "Police", name: "Police", phoneNumber: "117" },
  ],
  SY: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "110" },
    { type: "Fire Department", name: "Fire", phoneNumber: "113" },
    { type: "Police", name: "Police", phoneNumber: "112" },
  ],
  TW: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "119" },
    { type: "Fire Department", name: "Fire", phoneNumber: "119" },
    { type: "Police", name: "Police", phoneNumber: "110" },
  ],
  TJ: [{ type: "Ambulance", name: "Ambulance", phoneNumber: "03" }],
  // TODO: Tanzania - PDF shows "112, 999" - verify if both are valid dispatch numbers
  TZ: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "999" },
  ],
  TH: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "191" },
    { type: "Fire Department", name: "Fire", phoneNumber: "199" },
    { type: "Police", name: "Police", phoneNumber: "191" },
  ],
  TG: [{ type: "Police", name: "Police", phoneNumber: "101" }],
  TO: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  TT: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "990" },
    { type: "Fire Department", name: "Fire", phoneNumber: "990" },
    { type: "Police", name: "Police", phoneNumber: "999" },
  ],
  TN: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "190" },
    { type: "Fire Department", name: "Fire", phoneNumber: "198" },
    { type: "Police", name: "Police", phoneNumber: "197" },
  ],
  // TODO: Turkey - PDF shows "101, 112" for Ambulance - verify if 112 is also ambulance-specific or just dispatch
  TR: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Ambulance", name: "Ambulance", phoneNumber: "101" },
    { type: "Fire Department", name: "Fire", phoneNumber: "102" },
    { type: "Police", name: "Police", phoneNumber: "100" },
  ],
  TM: [{ type: "Ambulance", name: "Ambulance", phoneNumber: "03" }],
  // TODO: Turks and Caicos - PDF shows "999, 911" - verify if both are valid dispatch numbers
  TC: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "999" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "911" },
  ],
  TV: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  UG: [
    {
      type: "Dispatch",
      name: "Emergency Services",
      description: "112 (cell phone), 999 (fixed)",
      phoneNumber: "112",
    },
  ],
  // TODO: Ukraine - PDF shows "03, 118" for Ambulance - verify if 118 is also ambulance-specific
  UA: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "03" },
    { type: "Ambulance", name: "Ambulance", phoneNumber: "118" },
    { type: "Fire Department", name: "Fire", phoneNumber: "01" },
    { type: "Police", name: "Police", phoneNumber: "02" },
  ],
  // TODO: United Arab Emirates - PDF shows "998, 999" - verify if both are valid dispatch numbers
  AE: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "998" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "999" },
  ],
  // TODO: United Kingdom - PDF lists England, Scotland, Northern Ireland separately, all showing "112, 999" - verify consistency
  GB: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "112" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "999" },
  ],
  US: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  // TODO: Uruguay - PDF shows "999, 911" - verify if both are valid dispatch numbers
  UY: [
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "999" },
    { type: "Dispatch", name: "Emergency Services", phoneNumber: "911" },
  ],
  VI: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "911" }],
  UZ: [{ type: "Ambulance", name: "Ambulance", phoneNumber: "03" }],
  VU: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "112" }],
  VA: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "113" },
    { type: "Fire Department", name: "Fire", phoneNumber: "115" },
    { type: "Police", name: "Police", phoneNumber: "112" },
  ],
  VE: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "171" }],
  VN: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "05" },
    { type: "Fire Department", name: "Fire", phoneNumber: "08" },
    { type: "Police", name: "Police", phoneNumber: "03" },
  ],
  EH: [{ type: "Ambulance", name: "Ambulance", phoneNumber: "150" }],
  YE: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "191" },
    { type: "Fire Department", name: "Fire", phoneNumber: "191" },
    { type: "Police", name: "Police", phoneNumber: "194" },
  ],
  ZM: [{ type: "Dispatch", name: "Emergency Services", phoneNumber: "999" }],
  // TODO: Zimbabwe - PDF shows "994, 999" for Ambulance, "993, 999" for Fire, "995, 999" for Police - verify if 999 is unified dispatch
  ZW: [
    { type: "Ambulance", name: "Ambulance", phoneNumber: "994" },
    { type: "Ambulance", name: "Ambulance", phoneNumber: "999" },
    { type: "Fire Department", name: "Fire", phoneNumber: "993" },
    { type: "Fire Department", name: "Fire", phoneNumber: "999" },
    { type: "Police", name: "Police", phoneNumber: "995" },
    { type: "Police", name: "Police", phoneNumber: "999" },
  ],
} satisfies Partial<Record<keyof typeof COUNTRY_NAMES, Service[]>>;
