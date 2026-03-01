import { SERVICES } from "../constants/emergency-services";

/**
 * Parses a URL pathname and returns a valid country code, or null.
 * Accepts formats like "/us/", "/US/", "/br", "/BR".
 */
export function getCountryFromPath(
  pathname: string,
): keyof typeof SERVICES | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length !== 1) return null;

  const code = segments[0].toUpperCase();
  if (code in SERVICES) return code as keyof typeof SERVICES;

  return null;
}
