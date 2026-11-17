import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { n as cn } from "./dist-Cm5lzMt_.js";
import { n as PillLink } from "./Button-iOLhAAbB.js";
import { t as createLucideIcon } from "./createLucideIcon-D_v-FLWL.js";
import { d as mockupSm, g as services, n as CallCardUI, r as ChatUI, u as getCaseStudy, y as CalendarCheck } from "./MiniUI-gkEDlXuK.js";
import { t as Check } from "./check-BKX-Ic2_.js";
import { t as MessageCircle } from "./message-circle-tzE19y1F.js";
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Bell = createLucideIcon("bell", [["path", {
	d: "M10.268 21a2 2 0 0 0 3.464 0",
	key: "vwvbt9"
}], ["path", {
	d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
	key: "11g9vi"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CalendarSync = createLucideIcon("calendar-sync", [
	["path", {
		d: "M11 10v4h4",
		key: "172dkj"
	}],
	["path", {
		d: "m11 14 1.535-1.605a5 5 0 0 1 8 1.5",
		key: "vu0qm5"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["path", {
		d: "m21 18-1.535 1.605a5 5 0 0 1-8-1.5",
		key: "1qgeyt"
	}],
	["path", {
		d: "M21 22v-4h-4",
		key: "hrummi"
	}],
	["path", {
		d: "M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3",
		key: "mctw84"
	}],
	["path", {
		d: "M3 10h4",
		key: "1el30a"
	}],
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Heart = createLucideIcon("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Image = createLucideIcon("image", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}]
]);
//#endregion
//#region src/components/site/ServiceSampleUI.tsx
var import_jsx_runtime = require_jsx_runtime();
function ServiceSampleUI({ kind }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full items-center justify-center bg-bg-soft p-5 text-ink",
		children: kind === "phone" || kind === "social" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "h-full w-[145px] overflow-hidden rounded-[20px] border-[5px] border-ink bg-background p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-4 h-1 w-10 rounded-full bg-ink" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] font-medium",
					children: kind === "social" ? "Your feed" : "Welcome back"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-3 flex h-14 items-center justify-center rounded-md bg-accent",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
						"aria-hidden": true,
						className: "size-6"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px]",
					children: kind === "social" ? "A moment worth sharing" : "Your next appointment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-2",
					children: kind === "social" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						"aria-hidden": true,
						className: "size-4"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
						"aria-hidden": true,
						className: "size-4"
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
						"aria-hidden": true,
						className: "size-4"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						"aria-hidden": true,
						className: "size-4"
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 rounded bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-3/4 rounded bg-border" })]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full rounded-md border border-border bg-background p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(kind === "notification" ? Bell : kind === "reminder" ? CalendarCheck : CalendarSync, {
					"aria-hidden": true,
					className: "size-7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mt-4 text-[17px] font-medium",
					children: kind === "notification" ? "Owner notification" : kind === "reminder" ? "Appointment reminder" : "Calendar sync"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 type-small",
					children: kind === "notification" ? "A new enquiry is ready to review." : kind === "reminder" ? "Your appointment reminder is ready." : "Appointments stay in sync."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-4 inline-flex items-center gap-2 type-small",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						"aria-hidden": true,
						className: "size-4"
					}), kind === "notification" ? "Delivered" : kind === "reminder" ? "Scheduled" : "Connected"]
				})
			]
		})
	});
}
//#endregion
//#region src/lib/service-strip.ts
/** Blank image positions become generic service UI after the first two. */
function serviceStripEntries(service) {
	const entries = [...service.images];
	if (service.ui) entries.push("call", "chat");
	if (service.id === "business-automation") entries.push("notification", "reminder", "sync");
	while (entries.length < 4) entries.push(null);
	let blank = 0;
	return entries.map((entry) => !entry && ++blank > 2 ? service.id === "social-media-growth" ? "sample-social" : "sample-phone" : entry);
}
//#endregion
//#region src/content/tempImages.ts
var tile = {
	widths: [300, 600],
	w: 300,
	h: 300
};
var wide = {
	widths: [640, 1280],
	w: 640,
	h: 400
};
var comparison = {
	widths: [
		700,
		1300,
		2432
	],
	w: 700,
	h: 306
};
var phoneComparison = {
	widths: [
		700,
		1300,
		2432
	],
	w: 700,
	h: 276
};
var industry = {
	widths: [400, 800],
	w: 400,
	h: 440
};
var tempImages = {
	"industry-roofing": {
		...industry,
		alt: "Two roofers in hard hats and harnesses working on timber roof battens"
	},
	"industry-epoxy-flooring": {
		...industry,
		alt: "Swirling blue and teal glossy epoxy floor finish inside a modern room"
	},
	"industry-salons": {
		...industry,
		alt: "Modern hair and beauty salon interior with styling chairs and lit mirrors"
	},
	"industry-barber-shops": {
		...industry,
		alt: "Barber styling and blow-drying a client's fade haircut"
	},
	"industry-clinics": {
		...industry,
		alt: "Doctor in white coat consulting warmly with a patient in a bright clinic"
	},
	"industry-custom": {
		...industry,
		alt: "Business owners shaking hands in silhouette inside a bright glass office"
	},
	"calling-phone-desk": {
		...tile,
		alt: "Smartphone on a stand beside a notepad on a wooden desk"
	},
	"chatbot-bloom-assistant": {
		...tile,
		alt: "Bloom Studio website chat assistant suggesting common questions"
	},
	"app-wireframe-paper": {
		...tile,
		alt: "Hand-drawn app and website wireframes on paper with an orange pen"
	},
	"app-wireframe-paper-wide": {
		...wide,
		alt: "Hand-drawn app and website wireframes on paper with an orange pen"
	},
	"app-wireframe-blue": {
		...tile,
		alt: "Hand-drawn wireframe sketches on a dark blue background"
	},
	"uiux-humandata-mobile": {
		...tile,
		alt: "HumanData Labs website shown on a phone screen"
	},
	"software-portal-demo": {
		...tile,
		alt: "Incodet client portal demo showing project progress for a sample client"
	},
	"software-brhex-floorplan": {
		...tile,
		alt: "BRHEX Studio floor plan viewer showing a ground floor layout"
	},
	"social-studio-lights": {
		...tile,
		alt: "Small content studio with lights, stands and paper backdrops"
	},
	"social-studio-lights-wide": {
		...wide,
		alt: "Small content studio with lights, stands and paper backdrops"
	},
	"social-planning-flatlay": {
		...tile,
		alt: "Pens, markers and paper clips on a white desk for content planning"
	},
	"webdev-bloom-before": {
		...comparison,
		alt: "Grey-box wireframe of the Bloom Studio homepage"
	},
	"webdev-bloom-after": {
		...comparison,
		alt: "Finished Bloom Studio homepage with booking and salon assistant buttons"
	},
	"uiux-bloom-mobile-before": {
		...phoneComparison,
		alt: "Grey-box wireframe of the Bloom Studio homepage on a phone"
	},
	"uiux-bloom-mobile-after": {
		...phoneComparison,
		alt: "Finished Bloom Studio homepage on a phone"
	},
	"appdev-humandata-mobile-before": {
		...phoneComparison,
		alt: "Grey-box wireframe of the HumanData Labs homepage on a phone"
	},
	"appdev-humandata-mobile-after": {
		...phoneComparison,
		alt: "Finished HumanData Labs homepage on a phone"
	}
};
var tempImageSrc = (id, width) => `/images/temp/${id}-${width}.webp`;
//#endregion
//#region src/components/site/TempImage.tsx
/** Self-hosted temporary image (see docs/temp-images.md), served at 1x and 2x via srcset. */
function TempImage({ id, sizes, eager = false, className }) {
	const { widths, w, h, alt } = tempImages[id];
	const smallest = widths[0] ?? 300;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: tempImageSrc(id, smallest),
		srcSet: widths.map((width) => `${tempImageSrc(id, width)} ${width}w`).join(", "),
		sizes,
		alt,
		width: w,
		height: h,
		loading: eager ? "eager" : "lazy",
		decoding: "async",
		className: cn("size-full object-cover", className)
	});
}
//#endregion
//#region src/components/site/ServicePanels.tsx
function DiamondDots() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		"aria-hidden": true,
		className: "grid size-4 rotate-45 grid-cols-2 gap-0.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "rounded-full bg-current" })
		]
	});
}
function ServicePlaceholder({ label = "Image coming soon", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-placeholder": "true",
		className: cn("service-placeholder flex items-center justify-center text-center type-small", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })
	});
}
function ServiceImage({ slug, eager = false, sizes = "(min-width: 768px) 420px, 300px" }) {
	const c = getCaseStudy(slug);
	if (!c) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePlaceholder, { className: "size-full" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: c.mockup ? mockupSm(c.mockup) : c.image.src,
		srcSet: c.mockup ? `${mockupSm(c.mockup)} 800w, ${c.mockup} 1600w` : void 0,
		sizes,
		alt: `${c.name} ${c.type === "Demo" ? "demo" : c.type === "Concept" ? "concept" : "website"} mockup`,
		loading: eager ? "eager" : "lazy",
		decoding: "async",
		width: 800,
		height: 500,
		className: "size-full object-cover"
	});
}
function ServiceStrip({ service }) {
	const entries = serviceStripEntries(service);
	const temps = [...service.temp?.strip ?? []];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "region",
		"aria-label": `${service.title} images`,
		tabIndex: 0,
		className: "service-image-strip",
		children: entries.map((entry, i) => {
			const temp = entry ? void 0 : temps.shift();
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "service-image-tile",
				children: entry === "call" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-background p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallCardUI, {})
				}) : entry === "chat" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-background p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatUI, {})
				}) : entry && [
					"notification",
					"reminder",
					"sync",
					"sample-phone",
					"sample-social"
				].includes(entry) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceSampleUI, { kind: entry === "sample-phone" ? "phone" : entry === "sample-social" ? "social" : entry }) : entry ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceImage, { slug: entry }) : temp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TempImage, {
					id: temp,
					sizes: "(min-width: 768px) 258px, 240px"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePlaceholder, { className: "size-full" })
			}, `${entry}-${i}`);
		})
	});
}
function ServicePanels() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-site flex flex-col gap-6 pb-6",
		children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			"data-theme": "dark",
			className: cn("service-panel text-on-dark", s.color),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "service-panel-title",
					children: s.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					"aria-hidden": true,
					className: "service-panel-number",
					children: ["/", String(i + 1).padStart(2, "0")]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "service-panel-inner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_auto_1.3fr] lg:items-center lg:gap-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "service-panel-copy flex max-w-[230px] items-start gap-3 type-small",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "mt-1.5 size-2 shrink-0 rounded-full bg-on-dark"
							}), s.short]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PillLink, {
							to: s.to,
							variant: "primary-inverted",
							size: "sm",
							className: "self-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiamondDots, {}), "Explore service"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "service-panel-copy max-w-md type-small-body",
							children: s.description
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceStrip, { service: s })]
			})]
		}, s.id))
	});
}
//#endregion
export { Bell as a, TempImage as i, ServicePanels as n, ServicePlaceholder as r, ServiceImage as t };
