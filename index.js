export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Health check
    if (url.pathname === "/health") {
      return Response.json({
        ok: true,
        service: "discovery",
        timestamp: new Date().toISOString()
      });
    }

    // API status
    if (url.pathname === "/api/status") {
      return Response.json({
        ok: true,
        service: "discovery",
        version: "1.0.0",
        environment: env.ENVIRONMENT || "production"
      });
    }

    // Default response
    return new Response(
      "Discovery Worker is running.",
      {
        status: 200,
        headers: {
          "content-type": "text/plain; charset=UTF-8"
        }
      }
    );
  }
};
