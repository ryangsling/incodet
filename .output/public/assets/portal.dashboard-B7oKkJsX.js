const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/invoicePdf-A90lLS2D.js","assets/site-DZTAQn57.js","assets/visible-V0DJ41aX.js","assets/preload-helper-DxWiKyOd.js","assets/portal-types-B3452X2t.js"])))=>i.map(i=>d[i]);
import { t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { n as useServerFn, r as createClientRpc, t as createServerFn } from "./createServerFn-CrC7FQCe.js";
import { t as Link } from "./link-DhZbiYXQ.js";
import { t as useNavigate } from "./useNavigate-B97AQ8f1.js";
import { t as useQuery } from "./useQuery-0CCibYWS.js";
import { i as site } from "./site-DZTAQn57.js";
import { r as pillButton, t as PillButton } from "./Button-iOLhAAbB.js";
import { n as PortalDashboard } from "./PortalDashboard-7o7XJ0la.js";
import { t as LoaderCircle } from "./loader-circle-CqNj_ICn.js";
import { t as __vitePreload } from "./preload-helper-DxWiKyOd.js";
import { L as createMiddleware, M as useQueryClient, N as supabase, f as toast } from "./index-sH_TfzMw.js";
//#region src/lib/portal-data.ts
/** Loads the signed-in client's own data. RLS limits every query to their client record. */
async function loadPortal() {
	await supabase.rpc("claim_portal_access");
	const { data: auth } = await supabase.auth.getUser();
	const uid = auth.user?.id ?? "";
	const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", uid);
	const isAdmin = !!roles?.some((r) => r.role === "admin");
	const { data: client } = await supabase.from("clients").select("id, name, business_name").eq("user_id", uid).maybeSingle();
	if (!client) return {
		kind: "none",
		isAdmin,
		email: auth.user?.email ?? ""
	};
	const [projects, invoices, payments] = await Promise.all([
		supabase.from("projects").select("id, name, status, progress, target_date, summary, milestones(id, title, status, due_date, sort_order), deliverables(id, title, file_path, external_url, created_at)").eq("client_id", client.id).order("created_at", { ascending: false }),
		supabase.from("invoices").select("id, number, project_id, issue_date, due_date, status, notes, invoice_items(description, quantity, unit_price)").eq("client_id", client.id).order("issue_date", { ascending: false }),
		supabase.from("payments").select("id, invoice_id, method, reference, reported_at, confirmed_at").order("reported_at", { ascending: false })
	]);
	if (projects.error || invoices.error || payments.error) throw new Error("Could not load your portal.");
	return {
		kind: "client",
		isAdmin,
		data: {
			client: {
				name: client.name,
				business_name: client.business_name
			},
			projects: (projects.data ?? []).map((p) => ({
				id: p.id,
				name: p.name,
				status: p.status,
				progress: p.progress,
				target_date: p.target_date,
				summary: p.summary,
				milestones: [...p.milestones ?? []].sort((a, b) => a.sort_order - b.sort_order),
				deliverables: p.deliverables ?? []
			})),
			invoices: (invoices.data ?? []).map((i) => ({
				id: i.id,
				number: i.number ?? "",
				project_id: i.project_id,
				issue_date: i.issue_date,
				due_date: i.due_date,
				status: i.status,
				notes: i.notes,
				items: (i.invoice_items ?? []).map((it) => ({
					...it,
					quantity: Number(it.quantity),
					unit_price: Number(it.unit_price)
				}))
			})),
			payments: (payments.data ?? []).filter((p) => (invoices.data ?? []).some((i) => i.id === p.invoice_id))
		}
	};
}
//#endregion
//#region src/integrations/supabase/auth-middleware.ts
var requireSupabaseAuth = createMiddleware({ type: "function" });
//#endregion
//#region src/lib/portal.functions.ts
/** Client reports a payment for their own invoice. Ownership is checked through RLS as the caller. */
var reportPayment = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(createClientRpc("a07f4c9f7955b2bbb740f96ecf3ec5a8b70d0dd2874ec9e8e3bc2fd470f45f6f"));
//#endregion
//#region src/routes/_authenticated/portal.dashboard.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const qc = useQueryClient();
	const navigate = useNavigate();
	const report = useServerFn(reportPayment);
	const q = useQuery({
		queryKey: ["portal"],
		queryFn: loadPortal
	});
	async function signOut() {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/portal",
			replace: true
		});
	}
	let content;
	if (q.isPending) content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-center py-32",
		role: "status",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
			"aria-hidden": true,
			className: "size-6 animate-spin text-ink"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Loading your portal"
		})]
	});
	else if (q.isError) content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "container-site py-24 type-body",
		children: "We could not load your portal. Please refresh the page."
	});
	else if (q.data.kind === "none") content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-site py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl rounded-card border border-border bg-background p-8 text-center md:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "type-h3",
					children: "We could not find a project for this email."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 type-body",
					children: [
						"You are signed in as ",
						q.data.email,
						". If you think this is a mistake, email us at",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${site.email}`,
							className: "font-medium text-ink underline underline-offset-4",
							children: site.email
						}),
						" ",
						"or message us on",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.whatsapp,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "font-medium text-ink underline underline-offset-4",
							children: "WhatsApp"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col justify-center gap-3 sm:flex-row",
					children: [q.data.isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: pillButton(),
						children: "Open admin"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
						type: "button",
						variant: "secondary",
						onClick: signOut,
						children: "Sign out"
					})]
				})
			]
		})
	});
	else {
		const data = q.data.data;
		content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalDashboard, {
			data,
			mode: "live",
			onSignOut: signOut,
			onDownloadDeliverable: async (d) => {
				if (!d.file_path) return;
				const { data: signed, error } = await supabase.storage.from("deliverables").createSignedUrl(d.file_path, 60);
				if (error || !signed) return void toast.error("Could not open this file. Please try again.");
				window.open(signed.signedUrl, "_blank", "noopener");
			},
			onDownloadInvoice: async (inv) => {
				const { downloadInvoicePdf } = await __vitePreload(async () => {
					const { downloadInvoicePdf } = await import("./invoicePdf-A90lLS2D.js");
					return { downloadInvoicePdf };
				}, __vite__mapDeps([0,1,2,3,4]));
				await downloadInvoicePdf(inv, data.client);
			},
			onReportPaid: async (inv, method, reference) => {
				try {
					const res = await report({ data: {
						invoiceId: inv.id,
						method,
						reference
					} });
					if (!res.ok) {
						toast.error(res.error ?? "Could not record your payment.");
						return false;
					}
					toast.success("Thanks. We will confirm your payment soon.");
					await qc.invalidateQueries({ queryKey: ["portal"] });
					return true;
				} catch {
					toast.error("Could not record your payment.");
					return false;
				}
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-bg-soft pt-28 md:pt-32",
		children: content
	});
}
//#endregion
export { Dashboard as component };
