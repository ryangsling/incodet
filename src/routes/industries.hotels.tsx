import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, industryHead } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/hotels")({
  staticData: { sitemap: true },
  head: () => industryHead("hotels"),
  component: () => <IndustryPage slug="hotels" />,
});
