import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, industryHead } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/epoxy-flooring")({
  staticData: { sitemap: true },
  head: () => industryHead("epoxy-flooring"),
  component: () => <IndustryPage slug="epoxy-flooring" />,
});
