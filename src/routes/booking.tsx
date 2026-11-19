import { createFileRoute } from "@tanstack/react-router";
import { BookPageContent } from "@/components/site/BookPageContent";
import { seoHead } from "@/components/site/PageHero";

export const Route = createFileRoute("/booking")({
  staticData: { sitemap: true },
  validateSearch: (input: Record<string, unknown>): { plan?: string; service?: string } => ({
    ...(typeof input["plan"] === "string" ? { plan: input["plan"] } : {}),
    ...(typeof input["service"] === "string" ? { service: input["service"] } : {}),
  }),
  head: () =>
    seoHead(
      "Book a Free Call | Incodet",
      "Book a free discovery call with Incodet. We learn your business, your customers and what you need. Free, no commitment.",
      "/booking",
    ),
  component: BookingPage,
});

function BookingPage() {
  const { plan, service } = Route.useSearch();
  return <BookPageContent plan={plan} service={service} />;
}
