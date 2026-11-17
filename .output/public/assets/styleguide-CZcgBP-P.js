import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { n as cn } from "./dist-Cm5lzMt_.js";
import { t as PillButton } from "./Button-iOLhAAbB.js";
import { t as createLucideIcon } from "./createLucideIcon-D_v-FLWL.js";
import { t as Sparkles } from "./sparkles-BlaSYmsO.js";
import { a as Section, o as SectionHeading, r as PillBadge, t as Card } from "./primitives-BNIssmjb.js";
import { n as SegmentedTabs, t as Accordion } from "./Interactive-BWVCWN6e.js";
import { a as useScrollProgress, i as usePrefersReducedMotion, r as useMediaQuery } from "./use-motion-CNFv9cml.js";
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MapPin = createLucideIcon("map-pin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]);
//#endregion
//#region src/components/site/RevealText.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
/**
* Paragraph whose words fill from light grey to ink (or the accent gradient) on scroll.
* Words stay as real text separated by real spaces, so it reads normally for assistive tech.
*/
function RevealText({ text, accent = false, size = "h3", className }) {
	const words = text.split(" ");
	const spans = (0, import_react.useRef)([]);
	const ref = useScrollProgress((p) => {
		const lit = p * words.length;
		spans.current.forEach((s, i) => {
			if (s) s.style.opacity = String(Math.min(1, Math.max(.2, lit - i + .2)));
		});
	}, "through");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		ref,
		className: cn(size === "h2" ? "type-h2" : size === "statement" ? "text-[24px] leading-[1.3] font-medium tracking-tight md:text-[30px] lg:text-[40px]" : "type-h3 md:text-[40px] md:leading-[1.25]", className),
		children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			ref: (el) => {
				spans.current[i] = el;
			},
			className: cn("transition-opacity duration-200 motion-reduce:!opacity-100", accent ? "text-gradient-accent" : "text-ink"),
			style: { opacity: .2 },
			children: w
		}), i < words.length - 1 ? " " : null] }, i))
	});
}
//#endregion
//#region src/components/site/ScrollSections.tsx
var panelBg = {
	violet: "bg-panel-violet",
	blue: "bg-panel-blue",
	orange: "bg-panel-orange",
	teal: "bg-panel-teal",
	black: "bg-panel-black"
};
/** Full-width colored panels that stick and stack on scroll (md and up). Normal stack on mobile. */
function StackedPanels({ panels }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-site flex flex-col gap-6 pb-6",
		children: panels.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			"data-theme": "dark",
			style: { ["--stack-top"]: `${88 + i * 24}px` },
			className: cn("relative overflow-hidden rounded-card p-7 text-on-dark md:sticky md:top-[var(--stack-top)] md:min-h-[540px] md:p-12", panelBg[p.color]),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				"aria-hidden": true,
				className: "absolute top-6 right-7 text-[44px] leading-none font-medium tracking-tight text-on-dark md:top-10 md:right-12 md:text-[88px]",
				children: ["/", String(i + 1).padStart(2, "0")]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("grid gap-10", p.visual && "lg:grid-cols-2 lg:items-end"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col pt-20 md:min-h-[440px] md:justify-end md:pt-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "type-h2 text-on-dark",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 max-w-xl type-body text-on-dark",
							children: p.body
						}),
						p.actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: p.actions
						})
					]
				}), p.visual && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:pt-24",
					children: p.visual
				})]
			})]
		}, p.title))
	});
}
/** Cards that slide horizontally while the page scrolls vertically (desktop). Swipe row on mobile. */
function HorizontalScrollCards({ children }) {
	const desktop = useMediaQuery("(min-width: 1024px)");
	const reduced = usePrefersReducedMotion();
	const pinned = desktop && !reduced;
	const outer = (0, import_react.useRef)(null);
	const track = (0, import_react.useRef)(null);
	const [height, setHeight] = (0, import_react.useState)();
	(0, import_react.useEffect)(() => {
		if (!pinned) {
			setHeight(void 0);
			if (track.current) track.current.style.transform = "";
			return;
		}
		const measure = () => {
			const t = track.current;
			if (!t) return;
			const dist = t.scrollWidth - window.innerWidth + 64;
			setHeight(window.innerHeight + Math.max(0, dist));
		};
		let raf = 0;
		const update = () => {
			raf = 0;
			const o = outer.current;
			const t = track.current;
			if (!o || !t) return;
			const r = o.getBoundingClientRect();
			const span = r.height - window.innerHeight;
			const p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
			const dist = Math.max(0, t.scrollWidth - window.innerWidth + 64);
			t.style.transform = `translate3d(${-p * dist}px,0,0)`;
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(update);
		};
		measure();
		update();
		const onResize = () => {
			measure();
			onScroll();
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onResize);
		};
	}, [pinned, children.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: outer,
		style: pinned ? { height } : void 0,
		className: cn("relative", !pinned && "overflow-hidden"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn(pinned && "sticky top-0 flex h-screen items-center overflow-hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: track,
				...pinned ? {} : {
					tabIndex: 0,
					role: "region",
					"aria-label": "Scrollable cards"
				},
				className: cn("flex gap-5 px-4 md:px-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink", pinned ? "will-change-transform" : "w-full snap-x snap-mandatory overflow-x-auto pb-4 [scrollbar-width:none]"),
				children: children.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-[82vw] max-w-[420px] shrink-0 snap-start",
					children: c
				}, i))
			})
		})
	});
}
//#endregion
//#region src/routes/styleguide.tsx?tsr-split=component
function Label({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-4 type-small font-medium text-muted-foreground",
		children
	});
}
function Styleguide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "pt-40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "type-h1",
					children: "Styleguide"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl",
					children: "Every reusable component in one place."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Typography" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "type-h1 text-ink",
								children: "Heading one"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "type-h2 mt-4 text-ink",
								children: "Heading two"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "type-h3 mt-4 text-ink",
								children: "Heading three"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4",
								children: "Body text at 18px with a comfortable line height."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "type-small mt-2 text-muted-foreground",
								children: "Small label text"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Buttons" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, { children: "Primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
									variant: "secondary",
									children: "Secondary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
									size: "sm",
									children: "Small"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
									size: "lg",
									children: "Large"
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Pill badges" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillBadge, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										"aria-hidden": true,
										className: "size-4"
									}),
									children: "Perth, Western Australia"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillBadge, { children: "No icon" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillBadge, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
										"aria-hidden": true,
										className: "size-4"
									}),
									children: "AI agents"
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Cards" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "type-h3",
								children: "Large card"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3",
								children: "Radius 28px with a soft shadow."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								size: "sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[20px] font-medium",
									children: "Small card"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2",
									children: "Radius 16px."
								})]
							})]
						})] })
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			theme: "soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "Section heading",
				children: "A centered H2 with a short supporting paragraph underneath."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-14 max-w-4xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "We build websites and AI agents that answer calls, book jobs and reply to customers, so you can stay focused on the work in front of you." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
						accent: true,
						text: "Pay for what you use. Nothing more."
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			theme: "dark",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "Dark section",
				children: "Buttons inverted for dark backgrounds."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
					variant: "primary-inverted",
					children: "Primary inverted"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
					variant: "secondary-inverted",
					children: "Secondary inverted"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Segmented tabs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentedTabs, {
			className: "mt-10",
			tabs: [
				{
					label: "Discover",
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We learn how your business runs today." }) })
				},
				{
					label: "Build",
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We build and test your website or agent." }) })
				},
				{
					label: "Launch",
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We go live and keep improving it." }) })
				}
			]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			theme: "soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Accordion" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				className: "mx-auto mt-10 max-w-3xl",
				items: [
					{
						question: "Do I need to sign a long contract?",
						answer: "No. There are no lock-in contracts."
					},
					{
						question: "Can the AI agent book appointments?",
						answer: "Yes. It can book straight into your calendar."
					},
					{
						question: "Do you build custom software?",
						answer: "Yes. We build custom tools and SaaS products."
					}
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-y bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-site mb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Stacked panels" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedPanels, { panels: [
				{
					title: "Booking websites",
					body: "Fast sites that turn visitors into bookings.",
					color: "violet"
				},
				{
					title: "AI website chatbots",
					body: "Answers questions and captures leads around the clock.",
					color: "blue"
				},
				{
					title: "24/7 AI phone agents",
					body: "Picks up every call and books the job.",
					color: "orange"
				},
				{
					title: "Custom software",
					body: "Tools built around how you work.",
					color: "teal"
				},
				{
					title: "SaaS products",
					body: "From idea to launched product.",
					color: "black"
				}
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-y bg-bg-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-site mb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Horizontal scroll cards" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HorizontalScrollCards, { children: [
				"Roofing",
				"Epoxy Flooring",
				"Salons",
				"Barber Shops",
				"Custom Software",
				"SaaS"
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "h-[320px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "type-h3",
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: "Example card content."
				})]
			}, t)) })]
		})
	] });
}
//#endregion
export { Styleguide as component };
