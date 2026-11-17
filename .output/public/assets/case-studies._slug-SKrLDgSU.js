import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as Link } from "./link-DhZbiYXQ.js";
import { t as BookingCta } from "./HomeSections-CxllRpJU.js";
import { t as ArrowUpRight } from "./arrow-up-right-CGeQznAu.js";
import { a as caseStudies, s as deliverySteps } from "./MiniUI-DmlHs-Mu.js";
import { t as Check } from "./check-BKX-Ic2_.js";
import { t as ChevronRight } from "./chevron-right-CEkmG4Ev.js";
import { a as Section, i as Reveal, o as SectionHeading } from "./primitives-BNIssmjb.js";
import { a as CaseStudyGridCard, l as ExternalPill, o as CaseStudyImage, s as CaseStudyMeta, t as Route, u as liveLabel } from "./index-QLeXjHkE.js";
//#region src/routes/case-studies.$slug.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function CaseStudyPage() {
	const c = Route.useLoaderData();
	const idx = caseStudies.findIndex((x) => x.slug === c.slug);
	const more = [
		1,
		2,
		3
	].map((k) => caseStudies[(idx + k) % caseStudies.length]).filter((x) => Boolean(x) && x.slug !== c.slug);
	const steps = deliverySteps(c);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bg-soft pt-36 pb-12 md:pt-44 md:pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Breadcrumb",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "flex flex-wrap items-center gap-1.5 type-small text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/case-studies",
								className: "-my-[3px] inline-flex items-center py-[3px] hover:text-ink",
								children: "Our work"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								"aria-hidden": true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								"aria-current": "page",
								className: "text-ink",
								children: c.name
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-8 max-w-4xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudyMeta, { c }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 type-h1",
							children: c.name
						}),
						c.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 type-h3",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl type-body",
							children: c.description
						}),
						c.liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ExternalPill, {
							href: c.liveUrl,
							variant: "primary",
							className: "mt-8",
							children: [
								liveLabel(c),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									"aria-hidden": true,
									className: "size-4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "(opens in a new tab)"
								})
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bg-soft pb-[72px] md:pb-[120px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-site",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudyImage, {
					c,
					eager: true,
					sizes: "(min-width: 1280px) 1216px, calc(100vw - 32px)",
					className: "rounded-card border border-border"
				}) })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl gap-12 md:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "type-h2",
					children: "The challenge"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 type-body",
					children: c.challenge
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 80,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "type-h2",
							children: "What we built"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 type-body",
							children: c.solution
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-col gap-3",
							children: c.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 type-body text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-mint",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										"aria-hidden": true,
										className: "size-3.5 text-mint-ink"
									})
								}), h]
							}, h))
						})
					]
				}),
				c.tags && c.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "type-h3",
						children: "Tech used"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-2",
						children: c.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full border border-border px-4 py-1.5 type-small text-ink",
							children: t
						}, t))
					})]
				})
			]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			theme: "soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "type-small font-medium text-muted-foreground",
					children: ["Delivered: ", c.period]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 type-h2",
					children: "How we delivered it"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "li",
					delay: i * 80,
					className: "relative rounded-card border border-border bg-background p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-9 items-center justify-center rounded-full bg-ink type-small font-medium text-primary-foreground",
							children: i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 type-h3",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 type-body",
							children: s.body
						})
					]
				}, s.title))
			})]
		}),
		more.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "More work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: more.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudyGridCard, {
					c: m,
					headingLevel: "h3"
				})
			}, m.slug))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCta, {})
	] });
}
//#endregion
export { CaseStudyPage as component };
