import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, industryHead } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/barber-shops")({
  staticData: { sitemap: true },
  head: () => industryHead("barber-shops"),
  component: () => <IndustryPage slug="barber-shops" />,
});
