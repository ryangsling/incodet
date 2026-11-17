import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { a as getIndustry, c as industryWhatYouGet, s as industryFaq } from "./site-DZTAQn57.js";
import { n as PillLink } from "./Button-iOLhAAbB.js";
import { t as createLucideIcon } from "./createLucideIcon-D_v-FLWL.js";
import { h as ArrowRight, t as BookingCta } from "./HomeSections-DhJ5QvMH.js";
import { a as Bell } from "./ServicePanels-Nym9NsJN.js";
import { b as Bot, u as getCaseStudy, v as faqFor, y as CalendarCheck } from "./MiniUI-gkEDlXuK.js";
import { t as Check } from "./check-BKX-Ic2_.js";
import { t as Phone } from "./phone-BmTH2TTQ.js";
import { a as Section, i as Reveal, o as SectionHeading, t as Card } from "./primitives-BNIssmjb.js";
import { t as PageHero } from "./PageHero-D7x4lOHj.js";
import { t as Accordion } from "./Interactive-BWVCWN6e.js";
import { c as CaseStudyWideCard } from "./index-BA3xrQIk.js";
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TriangleAlert = createLucideIcon("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
//#endregion
//#region src/components/site/IndustryPage.tsx
var import_jsx_runtime = require_jsx_runtime();
function TranscriptCard({ caller, ai, alert }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl rounded-card border border-border bg-background p-5 shadow-soft md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 border-b border-border pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-9 items-center justify-center rounded-full bg-bg-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						"aria-hidden": true,
						className: "size-4 text-ink"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-small font-medium text-ink",
					children: "Incoming call"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-6 flex flex-col gap-4",
				"aria-label": "Call transcript",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "max-w-[85%]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-small text-muted-foreground",
						children: "Caller"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 rounded-card-sm rounded-tl-md bg-bg-soft px-4 py-3 text-[16px] text-ink",
						children: caller
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "ml-auto max-w-[85%] text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-1 type-small text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, {
							"aria-hidden": true,
							className: "size-3.5"
						}), " AI agent"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 rounded-card-sm rounded-tr-md bg-ink px-4 py-3 text-left text-[16px] text-primary-foreground",
						children: ai
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full bg-mint px-4 py-1.5 type-small font-medium text-mint-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
						"aria-hidden": true,
						className: "size-4"
					}), " Appointment booked"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-start gap-3 rounded-card-sm border border-border bg-bg-soft p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-9 shrink-0 items-center justify-center rounded-full bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
						"aria-hidden": true,
						className: "size-4 text-ink"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-small font-medium text-ink",
					children: "Owner alert"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 type-small text-body",
					children: alert
				})] })]
			})
		]
	});
}
function IndustryPage({ slug }) {
	const ind = getIndustry(slug);
	const p = ind.page;
	const related = p.relatedWork ? getCaseStudy(p.relatedWork) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			badge: ind.name,
			title: p.h1,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
				to: "/book",
				size: "lg",
				children: "Book a Free Call"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
				to: "/pricing",
				variant: "secondary",
				size: "lg",
				children: "See Plans"
			})] }),
			children: p.intro
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Sound familiar?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: p.pains.map((pain, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				as: "li",
				delay: i * 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
							"aria-hidden": true,
							className: "size-6 text-ink",
							strokeWidth: 1.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 type-h3",
							children: pain.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 type-body",
							children: pain.body
						})
					]
				})
			}, pain.title))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			theme: "soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "How the AI agent handles it" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TranscriptCard, { ...p.transcript }), p.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-2xl text-center type-small-body text-muted-foreground",
					children: p.note
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "type-h2",
				children: "What you get"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 flex flex-col gap-4",
				children: industryWhatYouGet.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-3 type-body text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-mint",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							"aria-hidden": true,
							className: "size-3.5 text-mint-ink"
						})
					}), it]
				}, it))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-theme": "dark",
					className: "rounded-card bg-dark p-7 text-on-dark-muted shadow-pill md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "type-h3 text-on-dark",
								children: "Growth plan"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-mint px-3 py-1 type-small font-medium text-mint-ink",
								children: "Recommended"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 type-body text-on-dark",
							children: "from $999 setup, from $149/month, includes 300 AI call minutes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PillLink, {
							to: "/pricing",
							variant: "primary-inverted",
							className: "mt-8",
							children: ["See all plans ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								"aria-hidden": true,
								className: "size-4"
							})]
						})
					]
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			theme: "soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Questions, answered" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mx-auto mt-12 max-w-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, { items: faqFor(industryFaq) })
			})]
		}),
		related && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Related work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudyWideCard, { c: related })
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCta, {})
	] });
}
//#endregion
export { IndustryPage as t };
