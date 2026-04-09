import React from "react";
import { COUNTRY_NAMES, type ValidCountryCode } from "../constants";

/**
 * Reactively tracks window.location.pathname, updating on popstate (browser
 * back/forward) and the custom "locationchange" event dispatched after
 * history.pushState calls.
 */
export function usePathname() {
  const [pathname, setPathname] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const update = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", update);
    window.addEventListener("locationchange", update);
    return () => {
      window.removeEventListener("popstate", update);
      window.removeEventListener("locationchange", update);
    };
  }, []);

  return pathname;
}

/**
 * Parses a URL pathname and returns a valid country code, or null.
 * Accepts formats like "/us/", "/US/", "/br", "/BR".
 */
export function getCountryFromPath(pathname: string): ValidCountryCode | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length !== 1) return null;

  const code = segments[0].toUpperCase();
  if (code in COUNTRY_NAMES) return code as ValidCountryCode;

  return null;
}
