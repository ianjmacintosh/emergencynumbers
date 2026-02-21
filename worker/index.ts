export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/geo") {
      return new Response(
        JSON.stringify({
          ip: request.headers.get("CF-Connecting-IP"),
          country: request.cf?.country ?? null,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store",
          },
        },
      );
    }

    return new Response("Not Found", { status: 404 });
  },
};
