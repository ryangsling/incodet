import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/chat")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { handleChatRequest } = await import("@/lib/chat.server");
        return handleChatRequest(request);
      },
    },
  },
});
