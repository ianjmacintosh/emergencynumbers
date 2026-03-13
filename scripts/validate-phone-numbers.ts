import { SERVICES } from "../src/constants/emergency-services.ts";

const PHONE_NUMBER_RE = /^[\d\s+\-*]+$/;
const violations: { country: string; name: string; phoneNumber: string }[] = [];

for (const [country, services] of Object.entries(SERVICES)) {
  for (const { phoneNumber, name } of services ?? []) {
    if (phoneNumber !== null && !PHONE_NUMBER_RE.test(phoneNumber)) {
      violations.push({ country, name, phoneNumber });
    }
  }
}

if (violations.length > 0) {
  for (const { country, name, phoneNumber } of violations) {
    console.error(`${country} "${name}": "${phoneNumber}"`);
  }
  process.exit(1);
}

console.log("All phone numbers are valid.");
