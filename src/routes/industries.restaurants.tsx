import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, industryHead } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/restaurants")({
  staticData: { sitemap: true },
  head: () => industryHead("restaurants"),
  component: () => <IndustryPage slug="restaurants" />,
});
