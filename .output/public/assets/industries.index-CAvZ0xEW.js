import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as Link } from "./link-DhZbiYXQ.js";
import { o as industries } from "./site-DZTAQn57.js";
import { h as ArrowRight, t as BookingCta } from "./HomeSections-Unz_5t43.js";
import { a as Section, i as Reveal } from "./primitives-BNIssmjb.js";
import { t as PageHero } from "./PageHero-D7x4lOHj.js";
import { m as industryIcon } from "./index-sH_TfzMw.js";
//#region src/routes/industries.index.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function IndustriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			title: "Built for businesses that run on calls and bookings",
			children: "Pick your industry to see how the AI agent answers calls and books appointments for you."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: industries.map((ind, i) => {
				const Icon = industryIcon[ind.icon];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i % 3 * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: ind.to,
						className: "group flex h-full flex-col rounded-card border border-border bg-background p-6 transition-shadow duration-300 hover:shadow-soft md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								"aria-hidden": true,
								className: "size-7 text-ink",
								strokeWidth: 1.5
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 type-h3",
								children: ind.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 type-body",
								children: ind.page.intro
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-2 type-small font-medium text-ink",
								children: [
									ind.page.h1,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										"aria-hidden": true,
										className: "size-4 transition-transform group-hover:translate-x-1"
									})
								]
							})
						]
					})
				}, ind.slug);
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCta, {})
	] });
}
//#endregion
export { IndustriesPage as component };
