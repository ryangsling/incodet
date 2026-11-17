import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as Link } from "./link-DhZbiYXQ.js";
import { i as site, o as industries, t as activeSocials } from "./site-DZTAQn57.js";
import { t as ArrowUpRight } from "./arrow-up-right-CGeQznAu.js";
import { _ as faq, a as caseStudies, b as Bot, c as featuredCaseStudies, g as services, n as CallCardUI, r as ChatUI, y as CalendarCheck } from "./MiniUI-Vkxqojlt.js";
import { t as Check } from "./check-BKX-Ic2_.js";
import { t as ChevronLeft } from "./chevron-left-CLwInqls.js";
import { t as ChevronRight } from "./chevron-right-CEkmG4Ev.js";
import { t as Download } from "./download-BNjaGrnN.js";
import { t as Mail } from "./mail-pJJ8N1PV.js";
import { t as Phone } from "./phone-BmTH2TTQ.js";
import { n as plansNote, t as plans } from "./plans-Dlzz8RP8.js";
import { h as X, m as industryIcon, p as TeamFlag } from "./index-sH_TfzMw.js";
import { t as booking } from "./booking-CDuk7ZBX.js";
import { t as Button } from "./button-CfK1iZoW.js";
import { t as processSteps } from "./process-COVYspqe.js";
//#region src/content/deck.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/** Only complete, publicly linked projects can enter the company presentation. */
var deckWork = caseStudies.filter((project) => Boolean(project.liveUrl) && project.image.ready && !project.todo);
var deckPrimaryWork = [
	"western-cars-brighton",
	"brhex-studio",
	"bloom-studio",
	"humandata-labs",
	"barkers-executive"
].flatMap((slug) => {
	const project = deckWork.find((project) => project.slug === slug);
	return project ? [project] : [];
});
var deckMoreWork = featuredCaseStudies.filter((project) => deckWork.includes(project) && !deckPrimaryWork.includes(project));
var deckStarter = plans.find((plan) => plan.id === "starter");
var deckProblems = [
	["Missed calls", "Calls after hours and during jobs go to voicemail and the customer calls someone else."],
	["No online booking", "Customers want to book at 10pm, not wait until you call back."],
	["Slow follow-ups", "Quotes, reminders and review requests fall through the cracks."],
	["Outdated website", "A slow, hard to use site sends visitors away before they enquire."]
];
//#endregion
//#region src/components/deck/DeckSlides.tsx
var import_jsx_runtime = require_jsx_runtime();
var domain = new URL(site.siteUrl).hostname;
function Tag({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "deck-chip",
		children
	});
}
function Title({ children, huge = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: huge ? "deck-title-xl" : "deck-title",
		children
	});
}
function Image({ src, alt, eager = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		width: "1600",
		height: "1000",
		loading: eager ? "eager" : "lazy",
		className: "deck-work-image"
	});
}
function PortalPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "deck-portal",
		"aria-label": "Illustrative client portal preview",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "deck-portal-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "Client portal preview" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Your project" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deck-progress",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "deck-grid deck-grid-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Milestones" }), processSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { "aria-hidden": true }),
					step.title,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i < 2 ? "Complete" : "Upcoming" })
				] }, step.title))] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Invoices" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Setup", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Paid" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Monthly care", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upcoming" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Deliverables" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Design files" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Launch checklist" })
				] })]
			})
		]
	});
}
function createDeckSlides() {
	const calling = services.find((service) => service.id === "ai-calling-agent");
	const chatbot = services.find((service) => service.id === "ai-chatbot");
	const contract = faq.find((item) => item.question === "Is there a contract?");
	const slides = [
		{
			id: "cover",
			title: "Company Deck",
			dark: true,
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "deck-cover-image",
				src: site.heroVideo.poster,
				alt: "",
				width: "1920",
				height: "1080",
				loading: "eager"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "deck-cover-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "Company Deck" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "deck-title-xl",
						children: [
							"Websites, AI Agents & Software That",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "deck-wave",
								children: "Grow With Your Business"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "deck-domain",
						children: domain
					})
				]
			})] })
		},
		{
			id: "contents",
			title: "What's inside",
			dark: false,
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "What’s inside." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deck-chapters",
				children: [
					"Intro",
					"Services",
					"Work",
					"Who we are",
					"Plans",
					"Next step"
				].map((title, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(i + 1).padStart(2, "0") }),
					title,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": true })
				] }, title))
			})] })
		},
		{
			id: "statement",
			title: "Never miss a customer",
			dark: true,
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deck-centered",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, {
					huge: true,
					children: [
						"Your business should ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "deck-wave",
							children: "never miss a customer"
						}),
						" because nobody picked up."
					]
				})
			})
		},
		{
			id: "problems",
			title: "The problems we solve",
			dark: false,
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: [
				"The problems",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"we solve."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deck-grid deck-grid-4 deck-problems",
				children: deckProblems.map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `deck-card ${services[i]?.color} text-on-dark`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "deck-card-index",
							children: ["/0", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: body })
					]
				}, title))
			})] })
		},
		{
			id: "calling",
			title: "How the AI calling agent works",
			dark: true,
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: calling?.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: [
					"Every call.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "deck-wave",
						children: "Taken care of."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "deck-flow",
					children: [
						[Phone, "Customer calls"],
						[Bot, "AI answers 24/7"],
						[CalendarCheck, "Books or takes a message"],
						[Mail, "You get the details by email or WhatsApp"]
					].map(([Icon, label], i) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": true }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["/0", i + 1] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: String(label) })
						] }, String(label));
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "deck-call-ui",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallCardUI, { tone: "dark" })
				})
			] })
		},
		{
			id: "chat",
			title: "AI website chatbot",
			dark: false,
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "deck-split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: chatbot?.short }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: [
						"AI Website",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "deck-wave",
							children: "Chatbot."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "deck-body-lg",
						children: chatbot?.description
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "deck-chat-ui",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "Illustrative conversation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatUI, {})]
				})]
			})
		},
		{
			id: "services",
			title: "Our services",
			dark: true,
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: [
				"One team.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "deck-wave",
					children: "Everything you need."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deck-grid deck-grid-4 deck-services",
				children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `deck-card ${service.color} text-on-dark`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: service.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service.short })]
				}, service.id))
			})] })
		},
		{
			id: "process",
			title: "Our process",
			dark: false,
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: [
				"From first call",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"to launch."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deck-grid deck-grid-4 deck-process",
				children: processSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: `/images/process/${step.images[0]}.webp`,
						width: "640",
						height: "480",
						loading: "lazy",
						alt: `${step.title} planning illustration`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "deck-eyebrow",
						children: ["/0", i + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.body })
				] }, step.title))
			})] })
		},
		{
			id: "work-divider",
			title: "Selected work",
			dark: true,
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "deck-centered",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "Websites · Platforms · Design" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, {
					huge: true,
					children: [
						"Selected",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "deck-wave",
							children: "work."
						})
					]
				})]
			})
		}
	];
	deckPrimaryWork.forEach((project, i) => slides.push({
		id: project.slug,
		title: project.name,
		dark: i % 2 === 1,
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "deck-work-heading",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, { children: [project.category, project.type === "Demo" ? " · Demo" : ""] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: project.name })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "deck-eyebrow",
				children: project.period
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "deck-work-layout",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
				src: project.mockup ?? project.image.src,
				alt: `${project.name} shown on ${project.laptopOnly ? "a laptop" : "a laptop and phone"}`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "deck-story",
					children: project.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "deck-list",
					children: project.highlights.slice(0, 3).map((highlight) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { "aria-hidden": true }), highlight] }, highlight))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "deck-url",
					children: project.liveUrl
				})
			] })]
		})] })
	}));
	if (deckMoreWork.length) slides.push({
		id: "more-work",
		title: "More work",
		dark: true,
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "More work." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "deck-grid deck-grid-2 deck-more-work",
			children: deckMoreWork.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
					src: project.mockup ?? project.image.src,
					alt: project.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: project.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					project.category,
					" · ",
					project.period
				] })
			] }, project.slug))
		})] })
	});
	slides.push({
		id: "industries",
		title: "Industries",
		dark: false,
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "Built around your business" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: [
				"Local businesses.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "deck-wave",
					children: "Real-world needs."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deck-industries",
				children: industries.map((industry) => {
					const Icon = industryIcon[industry.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": true }), industry.name] }, industry.slug);
				})
			})
		] })
	}, {
		id: "teams",
		title: "Our teams",
		dark: true,
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: [
				"One team.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "deck-wave",
					children: "Across time zones."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldMap, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deck-team-list",
				children: site.locations.map((location) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamFlag, { code: location.code }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: location.city }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: location.country }),
					"label" in location && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: location.label })
				] }, location.city))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "deck-availability",
				children: site.availabilityLabel
			})
		] })
	}, {
		id: "plans",
		title: "Plans",
		dark: false,
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "deck-work-heading",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: [
				"Built to grow",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"with you."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "All prices in USD" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "deck-grid deck-grid-3 deck-plans",
			children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `deck-card ${plan.featured ? "deck-plan-featured" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: plan.featured ? "Featured" : "Plan" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: plan.name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: plan.audience }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "deck-price",
						children: [plan.setup, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: " USD setup" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [plan.monthly, " · USD"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "deck-list",
						children: plan.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { "aria-hidden": true }), item] }, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: plan.timeline })
				]
			}, plan.id))
		})] })
	}, {
		id: "usage",
		title: "Add-ons and usage",
		dark: true,
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "Add-ons & usage" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, {
				huge: true,
				children: [
					"Pay for what you use.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "deck-wave",
						children: "Nothing more."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "deck-usage",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: plansNote }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: contract?.answer })]
			})
		] })
	}, {
		id: "portal",
		title: "Client portal",
		dark: false,
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "deck-split",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "Client portal" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: [
					"Every step.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "deck-wave",
						children: "In one place."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "deck-list deck-body-lg",
					children: [
						"Project progress",
						"Milestones and delivery dates",
						"Invoices and payments",
						"Files and deliverables"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { "aria-hidden": true }), item] }, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/portal/demo",
					className: "deck-text-link",
					children: ["View the demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": true })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalPreview, {})]
		})
	}, {
		id: "difference",
		title: "What sets us apart",
		dark: true,
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, { children: [
			"What sets",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "deck-wave",
				children: "us apart."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "deck-grid deck-grid-2 deck-difference",
			children: [
				["Built for local businesses", "Bookings, calls and enquiries are what we focus on."],
				["Pay for what you use", contract?.answer ?? ""],
				["One team, start to finish", "Design, build, AI and support in one place."],
				["Teams across countries", site.teamsLabel]
			].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "deck-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: body })]
			}, title))
		})] })
	}, {
		id: "next",
		title: "Next steps",
		dark: false,
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: booking.meetingLabel }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, {
				huge: true,
				children: [
					"Let’s start with",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "deck-wave",
						children: "a conversation."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deck-next",
				children: [
					"Book a free call",
					"Get a clear plan and price",
					`${deckStarter?.timeline ?? ""} (${deckStarter?.name ?? ""})`
				].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["/0", i + 1] }), item] }, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "deck-cta",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/book",
					children: ["Book a Free Call ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": true })]
				})
			})
		] })
	}, {
		id: "contact",
		title: "Contact",
		dark: true,
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Title, {
				huge: true,
				children: ["Let’s ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "deck-wave",
					children: "build."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "deck-contact",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${site.email}`,
						children: site.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.phoneHref,
						children: site.phoneDisplay
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.whatsapp,
						target: "_blank",
						rel: "noreferrer",
						children: ["WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": true })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, { children: [site.locations.find((location) => "label" in location)?.city, " · Head office"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.mapsUrl,
						target: "_blank",
						rel: "noreferrer",
						children: site.address
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "deck-socials",
						children: activeSocials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: social.href,
							target: "_blank",
							rel: "noreferrer",
							children: [social.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": true })]
						}, social.key))
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "deck-domain",
				children: domain
			})
		] })
	});
	return slides;
}
function WorldMap() {
	const land = [
		[
			.2,
			.3,
			.14,
			.19
		],
		[
			.3,
			.66,
			.07,
			.25
		],
		[
			.52,
			.28,
			.07,
			.1
		],
		[
			.53,
			.55,
			.09,
			.22
		],
		[
			.72,
			.35,
			.2,
			.2
		],
		[
			.84,
			.79,
			.09,
			.09
		]
	];
	const dots = [];
	for (let y = 1; y < 22; y++) for (let x = 1; x < 70; x++) if (land.some(([cx, cy, rx, ry]) => cx !== void 0 && cy !== void 0 && rx !== void 0 && ry !== void 0 && ((x / 70 - cx) / rx) ** 2 + ((y / 23 - cy) / ry) ** 2 < 1)) dots.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: x * 20,
		cy: y * 20,
		r: "3"
	}, `${x}-${y}`));
	const markers = {
		AU: [1140, 365],
		BD: [965, 205],
		CA: [340, 115],
		GB: [720, 105]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "deck-map",
		viewBox: "0 0 1420 460",
		role: "img",
		"aria-label": `Our teams: ${site.locations.map((location) => `${location.city}, ${location.country}`).join("; ")}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
			className: "deck-map-dots",
			children: dots
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
			className: "deck-map-markers",
			children: site.locations.map((location, i) => {
				const point = markers[location.code];
				return point ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: point[0] + i % 2 * 13,
					cy: point[1] + i % 2 * 13,
					r: "8"
				}, location.city) : null;
			})
		})]
	});
}
//#endregion
//#region src/lib/deck-navigation.ts
var DECK_STACKED_QUERY = "screen and (max-width: 767px) and (orientation: portrait)";
function deckIndexFromHash(hash, total) {
	const value = Number(hash.replace(/^#/, ""));
	return Number.isInteger(value) && value > 0 ? Math.min(value, total) - 1 : 0;
}
function stackedDeckIndex(bounds, readingLine) {
	const index = bounds.findIndex((rect) => rect.top <= readingLine && rect.bottom > readingLine);
	return index >= 0 ? index : void 0;
}
//#endregion
//#region src/components/deck/CompanyDeck.tsx
var slides = createDeckSlides();
function CompanyDeck() {
	const [current, setCurrent] = (0, import_react.useState)(0);
	const [scale, setScale] = (0, import_react.useState)(1);
	const [stacked, setStacked] = (0, import_react.useState)(false);
	const stage = (0, import_react.useRef)(null);
	const touch = (0, import_react.useRef)(null);
	const active = (0, import_react.useRef)(0);
	const printing = (0, import_react.useRef)(false);
	const go = (0, import_react.useCallback)((index, scroll = true) => {
		const next = Math.max(0, Math.min(slides.length - 1, index));
		setCurrent(next);
		active.current = next;
		if (window.location.hash !== `#${next + 1}`) window.history.replaceState(window.history.state, "", `#${next + 1}`);
		if (scroll && !printing.current && window.matchMedia("screen and (max-width: 767px) and (orientation: portrait)").matches) document.getElementById(`deck-slide-${next + 1}`)?.scrollIntoView({ behavior: "instant" });
	}, []);
	(0, import_react.useEffect)(() => {
		const readHash = () => go(deckIndexFromHash(window.location.hash, slides.length));
		readHash();
		window.addEventListener("hashchange", readHash);
		return () => window.removeEventListener("hashchange", readHash);
	}, [go]);
	(0, import_react.useEffect)(() => {
		const resize = () => {
			if (printing.current) return;
			setStacked(window.matchMedia(DECK_STACKED_QUERY).matches);
			const rect = stage.current?.getBoundingClientRect();
			if (rect) setScale(Math.min(rect.width / 1920, rect.height / 1080));
		};
		resize();
		window.addEventListener("resize", resize);
		const observer = new ResizeObserver(resize);
		if (stage.current) observer.observe(stage.current);
		return () => {
			observer.disconnect();
			window.removeEventListener("resize", resize);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.altKey || event.ctrlKey || event.metaKey || event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
			if (event.key === " " && (event.target instanceof HTMLButtonElement || event.target instanceof HTMLAnchorElement)) return;
			let next;
			if ([
				"ArrowRight",
				"ArrowDown",
				"PageDown",
				" "
			].includes(event.key)) next = active.current + 1;
			if ([
				"ArrowLeft",
				"ArrowUp",
				"PageUp"
			].includes(event.key)) next = active.current - 1;
			if (event.key === "Home") next = 0;
			if (event.key === "End") next = slides.length - 1;
			if (next !== void 0) {
				event.preventDefault();
				go(next);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [go]);
	(0, import_react.useEffect)(() => {
		if (!stacked || !window.matchMedia("screen and (max-width: 767px) and (orientation: portrait)").matches) return;
		const pages = Array.from(stage.current?.querySelectorAll(".deck-page") ?? []);
		let frame = 0;
		const sync = () => {
			if (printing.current || !window.matchMedia("screen and (max-width: 767px) and (orientation: portrait)").matches) return;
			const next = stackedDeckIndex(pages.map((page) => page.getBoundingClientRect()), Math.max(65, window.innerHeight * .2));
			if (next !== void 0 && next !== active.current) go(next, false);
		};
		const schedule = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(sync);
		};
		go(active.current);
		const observer = new IntersectionObserver(schedule, { threshold: [
			0,
			.2,
			.5
		] });
		pages.forEach((page) => observer.observe(page));
		window.addEventListener("scroll", schedule, { passive: true });
		return () => {
			cancelAnimationFrame(frame);
			observer.disconnect();
			window.removeEventListener("scroll", schedule);
		};
	}, [stacked, go]);
	(0, import_react.useEffect)(() => {
		const before = () => {
			printing.current = true;
		};
		const after = () => {
			printing.current = false;
		};
		window.addEventListener("beforeprint", before);
		window.addEventListener("afterprint", after);
		return () => {
			window.removeEventListener("beforeprint", before);
			window.removeEventListener("afterprint", after);
		};
	}, []);
	const print = async () => {
		const images = Array.from(document.querySelectorAll(".deck-page img"));
		images.forEach((image) => {
			image.loading = "eager";
		});
		await Promise.all(images.map((image) => image.decode().catch(() => void 0)));
		window.print();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "company-deck",
		"data-theme": slides[current]?.dark ? "dark" : "light",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "deck-chrome",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "deck-wordmark",
					"aria-label": `${site.name} home`,
					children: site.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					className: "deck-print",
					onClick: print,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { "aria-hidden": true }), "Download PDF"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					size: "icon",
					"aria-label": "Close deck",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": true })
					})
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: stage,
				className: "deck-stage",
				style: { "--deck-scale": scale },
				onTouchStart: (event) => {
					const point = event.touches[0];
					if (point) touch.current = {
						x: point.clientX,
						y: point.clientY
					};
				},
				onTouchEnd: (event) => {
					const point = event.changedTouches[0];
					const start = touch.current;
					touch.current = null;
					if (!start || !point) return;
					const x = point.clientX - start.x, y = point.clientY - start.y;
					if (Math.abs(x) > 60 && Math.abs(x) > Math.abs(y) * 1.5) go(active.current + (x < 0 ? 1 : -1));
				},
				children: slides.map((slide, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: `deck-slide-${index + 1}`,
					"data-slide-index": index,
					"data-theme": slide.dark ? "dark" : "light",
					className: `deck-page ${slide.dark ? "deck-dark" : "deck-light"} ${index === current ? "is-current" : ""}`,
					"aria-label": `${index + 1} of ${slides.length}: ${slide.title}`,
					"aria-hidden": !stacked && index !== current,
					inert: !stacked && index !== current ? true : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "deck-page-content",
						children: slide.content
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "deck-page-footer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [site.name, " / Company Deck"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							String(index + 1).padStart(2, "0"),
							" / ",
							String(slides.length).padStart(2, "0")
						] })]
					})]
				}, slide.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "deck-controls",
				"aria-label": "Slide navigation",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Previous slide",
						disabled: current === 0,
						onClick: () => go(current - 1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { "aria-hidden": true })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "deck-dots",
						children: slides.map((slide, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							"aria-label": `Go to slide ${index + 1}: ${slide.title}`,
							"aria-current": index === current ? "step" : void 0,
							onClick: () => go(index),
							className: "deck-dot",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						}, slide.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Next slide",
						disabled: current === slides.length - 1,
						onClick: () => go(current + 1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { "aria-hidden": true })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "sr-only",
				"aria-live": "polite",
				children: [
					"Slide ",
					current + 1,
					" of ",
					slides.length,
					": ",
					slides[current]?.title
				]
			})
		]
	});
}
//#endregion
//#region src/routes/deck.tsx?tsr-split=component
var SplitComponent = CompanyDeck;
//#endregion
export { SplitComponent as component };
