import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { n as cn } from "./dist-Cm5lzMt_.js";
import { n as PillLink } from "./Button-iOLhAAbB.js";
import { t as createLucideIcon } from "./createLucideIcon-D_v-FLWL.js";
import { d as PlanCards, t as BookingCta } from "./HomeSections-Unz_5t43.js";
import { v as faqFor } from "./MiniUI-Vkxqojlt.js";
import { t as Check } from "./check-BKX-Ic2_.js";
import { a as Section, i as Reveal, o as SectionHeading, t as Card } from "./primitives-BNIssmjb.js";
import { t as PageHero } from "./PageHero-D7x4lOHj.js";
import { t as Accordion } from "./Interactive-BWVCWN6e.js";
import { t as plans } from "./plans-Dlzz8RP8.js";
import { n as pricingFaq } from "./index-sH_TfzMw.js";
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Minus = createLucideIcon("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]);
//#endregion
//#region src/routes/pricing.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
var planById = (id) => plans.find((p) => p.id === id);
var val = (id, k) => planById(id)?.[k] ?? "";
var rows = [
	{
		label: "Website",
		cells: [
			true,
			true,
			true
		]
	},
	{
		label: "Online booking",
		cells: [
			true,
			true,
			true
		]
	},
	{
		label: "Booking emails",
		cells: [
			true,
			true,
			true
		]
	},
	{
		label: "AI website chatbot",
		cells: [
			false,
			true,
			true
		]
	},
	{
		label: "24/7 AI calling agent",
		cells: [
			false,
			true,
			true
		]
	},
	{
		label: "Owner alerts by email and WhatsApp",
		cells: [
			false,
			true,
			true
		]
	},
	{
		label: "AI call minutes included",
		cells: [
			"Not included",
			"300 per month",
			"Custom"
		]
	},
	{
		label: "Multi-page or SaaS-level platform",
		cells: [
			false,
			false,
			true
		]
	},
	{
		label: "AI automation",
		cells: [
			false,
			false,
			true
		]
	},
	{
		label: "Client dashboards",
		cells: [
			false,
			false,
			true
		]
	},
	{
		label: "Custom integrations",
		cells: [
			false,
			false,
			true
		]
	},
	{
		label: "Setup",
		cells: [
			val("starter", "setup"),
			val("growth", "setup"),
			val("scale", "setup")
		]
	},
	{
		label: "Monthly",
		cells: [
			val("starter", "monthly"),
			val("growth", "monthly"),
			val("scale", "monthly")
		]
	},
	{
		label: "Timeline",
		cells: [
			val("starter", "timeline"),
			val("growth", "timeline"),
			val("scale", "timeline")
		]
	}
];
var cols = [
	"Starter",
	"Growth",
	"Scale"
];
function CellValue({ v }) {
	if (typeof v === "string") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "type-small text-ink",
		children: v
	});
	return v ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex size-6 items-center justify-center rounded-full bg-mint",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			"aria-hidden": true,
			className: "size-3.5 text-mint-ink"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Included"
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex size-6 items-center justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
			"aria-hidden": true,
			className: "size-4 text-muted-foreground"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Not included"
		})]
	});
}
var single = [
	"AI website chatbot",
	"24/7 AI calling agent",
	"Booking website"
];
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			badge: "Pricing",
			title: "Pay for what you use. Nothing more.",
			children: "Three plans with a one-time setup fee and a simple monthly fee. All prices in USD. No lock-in contracts."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanCards, {}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			theme: "soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Compare plans" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden overflow-hidden rounded-card border border-border bg-background md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full border-collapse text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
								className: "sr-only",
								children: "Plan comparison"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "p-5 type-small font-medium text-muted-foreground",
									children: "Feature"
								}), cols.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: cn("p-5 text-center text-[18px] font-medium text-ink", c === "Growth" && "bg-bg-soft"),
									children: c
								}, c))]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border last:border-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "row",
									className: "p-5 text-[16px] font-normal text-ink",
									children: r.label
								}), r.cells.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: cn("p-5 text-center", i === 1 && "bg-bg-soft"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, { v })
								}, i))]
							}, r.label)) })
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-5 md:hidden",
					children: cols.map((c, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-card border border-border bg-background p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "type-h3",
							children: c
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-4 divide-y divide-border",
							children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[15px] text-ink",
									children: r.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "max-w-[55%] text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, { v: r.cells[ci] ?? false })
								})]
							}, r.label))
						})]
					}, c))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			title: "Need just one feature?",
			children: "Every feature is also available on its own."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-12 grid gap-5 md:grid-cols-3",
			children: single.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				as: "li",
				delay: i * 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					size: "sm",
					className: "flex h-full flex-col items-start justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "type-h3",
						children: s
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
						to: "/book",
						variant: "secondary",
						size: "sm",
						children: "Ask for a quote"
					})]
				})
			}, s))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			theme: "soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "Extra call minutes",
				children: "Growth includes 300 AI call minutes a month. Extra minutes cost $0.20 each, billed only if you use them."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Questions, answered" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mx-auto mt-12 max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, { items: faqFor(pricingFaq) })
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCta, {})
	] });
}
//#endregion
export { PricingPage as component };
