const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/invoicePdf-A90lLS2D.js","assets/site-DZTAQn57.js","assets/visible-V0DJ41aX.js","assets/preload-helper-DxWiKyOd.js","assets/portal-types-B3452X2t.js"])))=>i.map(i=>d[i]);
import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as Link } from "./link-DhZbiYXQ.js";
import { t as createLucideIcon } from "./createLucideIcon-D_v-FLWL.js";
import { n as PortalDashboard } from "./PortalDashboard-7o7XJ0la.js";
import { t as __vitePreload } from "./preload-helper-DxWiKyOd.js";
import { f as toast } from "./index-sH_TfzMw.js";
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Info = createLucideIcon("info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]);
//#endregion
//#region src/content/demoPortal.ts
var import_react = /* @__PURE__ */ __toESM(require_react());
var iso = (offsetDays) => {
	const d = /* @__PURE__ */ new Date();
	d.setUTCDate(d.getUTCDate() + offsetDays);
	return d.toISOString().slice(0, 10);
};
function getDemoPortal() {
	return {
		client: {
			name: "Sample Client",
			business_name: "Sample Roofing Co"
		},
		projects: [{
			id: "demo-project",
			name: "Website + 24/7 AI calling agent",
			status: "in_progress",
			progress: 65,
			target_date: iso(21),
			summary: "A booking website and a 24/7 AI calling agent for a sample roofing company.",
			milestones: [
				{
					id: "m1",
					title: "Discovery call",
					status: "done",
					due_date: iso(-28)
				},
				{
					id: "m2",
					title: "Plan & design",
					status: "done",
					due_date: iso(-14)
				},
				{
					id: "m3",
					title: "Build & integrate",
					status: "in_progress",
					due_date: iso(7)
				},
				{
					id: "m4",
					title: "Launch & support",
					status: "todo",
					due_date: iso(21)
				}
			],
			deliverables: [{
				id: "d1",
				title: "Homepage design (PDF)",
				file_path: "demo",
				external_url: null
			}, {
				id: "d2",
				title: "AI agent call script (PDF)",
				file_path: "demo",
				external_url: null
			}]
		}],
		invoices: [{
			id: "i1",
			number: "INC-2026-001",
			project_id: "demo-project",
			issue_date: iso(-30),
			due_date: iso(-23),
			status: "paid",
			notes: null,
			items: [{
				description: "Growth plan setup fee",
				quantity: 1,
				unit_price: 999
			}]
		}, {
			id: "i2",
			number: "INC-2026-002",
			project_id: "demo-project",
			issue_date: iso(0),
			due_date: iso(7),
			status: "sent",
			notes: null,
			items: [{
				description: "Growth plan monthly fee",
				quantity: 1,
				unit_price: 149
			}]
		}],
		payments: [{
			id: "p1",
			invoice_id: "i1",
			method: "wise",
			reference: "INC-2026-001",
			reported_at: iso(-25),
			confirmed_at: iso(-24)
		}]
	};
}
//#endregion
//#region src/routes/portal.demo.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function PortalDemo() {
	const [data] = (0, import_react.useState)(getDemoPortal);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-bg-soft pt-24 md:pt-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "note",
			className: "border-y border-border bg-demo-note text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site flex flex-wrap items-center justify-between gap-3 py-3 type-small",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex items-center gap-2 font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
						"aria-hidden": true,
						className: "size-4 shrink-0"
					}), " Sample project. This is example data, not a real client."]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/portal",
					className: "-my-[3px] inline-flex items-center py-[3px] font-medium underline underline-offset-4",
					children: "Exit demo"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDashboard, {
				data,
				mode: "demo",
				onDownloadDeliverable: async (d) => {
					const { downloadSamplePdf } = await __vitePreload(async () => {
						const { downloadSamplePdf } = await import("./invoicePdf-A90lLS2D.js");
						return { downloadSamplePdf };
					}, __vite__mapDeps([0,1,2,3,4]));
					await downloadSamplePdf(d.title.replace(" (PDF)", ""));
				},
				onDownloadInvoice: async (inv) => {
					const { downloadInvoicePdf } = await __vitePreload(async () => {
						const { downloadInvoicePdf } = await import("./invoicePdf-A90lLS2D.js");
						return { downloadInvoicePdf };
					}, __vite__mapDeps([0,1,2,3,4]));
					await downloadInvoicePdf(inv, data.client, { sample: true });
				},
				onReportPaid: async () => {
					toast("This is a demo. No payment was recorded.");
					return true;
				}
			})
		})]
	});
}
//#endregion
export { PortalDemo as component };
