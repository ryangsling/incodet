import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { i as site } from "./site-DZTAQn57.js";
import { r as pillButton } from "./Button-iOLhAAbB.js";
import { t as Check } from "./check-BKX-Ic2_.js";
import { t as MessageCircle } from "./message-circle-tzE19y1F.js";
import { t as Phone } from "./phone-BmTH2TTQ.js";
import { a as Section, i as Reveal, o as SectionHeading } from "./primitives-BNIssmjb.js";
import { t as PageHero } from "./PageHero-D7x4lOHj.js";
import { d as Route, i as ContactForm } from "./index-sH_TfzMw.js";
import { BookingWidget } from "./BookingWidget-pRVpbaTO.js";
//#region src/routes/book.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
var expect = [
	"We learn how your business takes calls and bookings today",
	"We show you how the AI agent and booking website would work for you",
	"You get a clear plan and price, with no obligation"
];
function BookPage() {
	const { plan, service } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			badge: "Free discovery call",
			title: "Book a free call",
			className: "pb-12 md:pb-16",
			children: "We learn your business, your customers and what you need. Free, no commitment."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bg-soft pb-[72px] md:pb-[120px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site grid gap-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full rounded-card border border-border bg-background p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "type-h3",
							children: "What to expect"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-col gap-4",
							children: expect.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 type-body text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										"aria-hidden": true,
										className: "size-3.5 text-primary-foreground"
									})
								}), t]
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 border-t border-border pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-ink",
								children: "Prefer to talk now?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: site.whatsapp,
									target: "_blank",
									rel: "noopener noreferrer",
									className: pillButton(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										"aria-hidden": true,
										className: "size-4"
									}), " WhatsApp"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: site.phoneHref,
									className: pillButton({ variant: "secondary" }),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											"aria-hidden": true,
											className: "size-4"
										}),
										" ",
										site.phoneDisplay
									]
								})]
							})]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingWidget, {
						plan: plan ?? "",
						service: service ?? ""
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Prefer to write?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mx-auto mt-12 max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, { sourcePage: "book" })
		})] })
	] });
}
//#endregion
export { BookPage as component };
