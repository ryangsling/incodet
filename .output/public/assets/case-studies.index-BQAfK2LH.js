import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { n as cn } from "./dist-Cm5lzMt_.js";
import { t as BookingCta, u as FeaturedStudies } from "./HomeSections--EV2dh7x.js";
import { a as caseStudies, l as filterCaseStudies, o as caseStudyFilters } from "./MiniUI-gkEDlXuK.js";
import { a as Section, i as Reveal } from "./primitives-BNIssmjb.js";
import { t as PageHero } from "./PageHero-D7x4lOHj.js";
import { a as CaseStudyGridCard } from "./index-DjAHSjYu.js";
//#region src/routes/case-studies.index.tsx?tsr-split=component
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CaseStudiesPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const list = filterCaseStudies(caseStudies, filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			title: "Our work",
			children: "Real projects with live links you can open."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedStudies, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "group",
				"aria-label": "Filter case studies",
				className: "flex flex-wrap gap-2",
				children: caseStudyFilters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": filter === f.key,
					onClick: () => setFilter(f.key),
					className: cn("inline-flex h-11 items-center gap-2 rounded-full border px-5 type-small font-medium transition-colors", filter === f.key ? "border-ink bg-ink text-primary-foreground" : "border-border bg-background text-ink hover:bg-bg-soft"),
					children: [f.label, f.key === "all" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums opacity-70",
						children: caseStudies.length
					})]
				}, f.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				"aria-live": "polite",
				className: "sr-only",
				children: [
					"Showing ",
					list.length,
					" case studies"
				]
			}),
			filter === "western-cars" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-card border border-border bg-bg-soft p-6 md:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-3xl type-body text-ink",
					children: "Western Cars runs taxi and private hire offices across Sussex. We built their location websites, a central AI content hub and internal tools. An operations platform is in development."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 type-small text-muted-foreground",
					children: "Operations platform (in development)"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-2",
				children: list.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 2 * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudyGridCard, { c })
				}, c.slug))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCta, {})
	] });
}
//#endregion
export { CaseStudiesPage as component };
