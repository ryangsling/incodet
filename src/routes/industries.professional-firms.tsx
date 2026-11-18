import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, industryHead } from "@/components/site/IndustryPage";

export const Route = createFileRoute("/industries/professional-firms")({
  staticData: { sitemap: true },
  head: () => industryHead("professional-firms"),
  component: () => <IndustryPage slug="professional-firms" />,
});
