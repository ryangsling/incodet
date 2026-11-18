import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, industryHead } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/salons")({
  staticData: { sitemap: true },
  head: () => industryHead("salons"),
  component: () => <IndustryPage slug="salons" />,
});
