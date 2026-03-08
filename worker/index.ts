import { COUNTRY_NAMES } from "../src/constants";

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
          },
        },
      );
    }

    if (url.pathname === "/") {
      return new Response(null, {
        status: 302,
        headers: {
          Location:
            typeof userCountry === "string" && userCountry in COUNTRY_NAMES
              ? `/${userCountry.toLowerCase()}/`
              : `/us/`,

          "Cache-Control": "no-cache, no-store",
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
};
