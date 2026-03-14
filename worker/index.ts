import { COUNTRY_NAMES } from "../src/constants";

const SECURITY_HEADERS = {
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "DENY",
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self' https://scripts.simpleanalyticscdn.com; connect-src 'self' https://queue.simpleanalyticscdn.com; img-src 'self' https://queue.simpleanalyticscdn.com; font-src 'self'; style-src 'self' 'unsafe-inline'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'",
};

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const userCountry = request.cf?.country ?? null;

    if (url.pathname === "/api/geo") {
      return new Response(
        JSON.stringify({
          ip: request.headers.get("CF-Connecting-IP"),
          country: userCountry,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store",
            ...SECURITY_HEADERS,
          },
        },
      );
    }

    if (url.pathname === "/") {
      const destination =
        typeof userCountry === "string" && userCountry in COUNTRY_NAMES
          ? `/${userCountry.toLowerCase()}/`
          : `/us/`;

      return new Response(null, {
        status: 302,
        headers: {
          Location: new URL(destination, request.url).href,
          "Cache-Control": "no-cache, no-store",
          ...SECURITY_HEADERS,
        },
      });
    }

    return new Response("Not Found", {
      status: 404,
      headers: SECURITY_HEADERS,
    });
  },
};
