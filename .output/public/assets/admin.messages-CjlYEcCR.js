import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as useQuery } from "./useQuery-0CCibYWS.js";
import { n as cn } from "./dist-Cm5lzMt_.js";
import { t as PillButton } from "./Button-iOLhAAbB.js";
import { t as Chip } from "./PortalDashboard-7o7XJ0la.js";
import { i as planLabels } from "./contact-schema-CruKgo7-.js";
import { M as useQueryClient, N as supabase, f as toast } from "./index-sH_TfzMw.js";
import { t as fmtDate } from "./portal-types-B3452X2t.js";
import { n as Box, r as ConfirmButton, t as AdminTitle } from "./ui-BPSnab4g.js";
//#region src/routes/_authenticated/admin.messages.tsx?tsr-split=component
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Messages() {
	const qc = useQueryClient();
	const [filter, setFilter] = (0, import_react.useState)("new");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const q = useQuery({
		queryKey: ["admin-messages", filter],
		queryFn: async () => {
			let query = supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
			if (filter !== "all") query = query.eq("status", filter);
			const { data, error } = await query;
			if (error) throw error;
			return data;
		}
	});
	const refresh = () => qc.invalidateQueries({ queryKey: ["admin-messages"] });
	async function setStatus(id, status) {
		const { error } = await supabase.from("contact_messages").update({ status }).eq("id", id);
		if (error) return void toast.error("Could not update the message.");
		toast.success(status === "archived" ? "Message archived" : "Message updated");
		refresh();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTitle, { title: "Messages" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "tablist",
			"aria-label": "Filter messages",
			className: "mb-5 flex flex-wrap gap-2",
			children: [
				"new",
				"read",
				"archived",
				"all"
			].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				role: "tab",
				"aria-selected": filter === f,
				onClick: () => setFilter(f),
				className: cn("rounded-full border px-4 py-1.5 type-small font-medium capitalize", filter === f ? "border-ink bg-ink text-primary-foreground" : "border-border bg-background text-ink"),
				children: f
			}, f))
		}),
		q.data?.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "type-body",
			children: "No messages here."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-3",
			children: q.data?.map((m) => {
				const open = openId === m.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
					className: cn(m.status === "new" && "border-ink"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-expanded": open,
						onClick: () => {
							setOpenId(open ? null : m.id);
							if (!open && m.status === "new") setStatus(m.id, "read");
						},
						className: "flex w-full flex-wrap items-center justify-between gap-3 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block font-medium text-ink",
							children: [
								m.name,
								" ",
								m.business_name ? `· ${m.business_name}` : ""
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block type-small text-muted-foreground",
							children: [
								m.email,
								" · ",
								fmtDate(m.created_at),
								" · ",
								planLabels[m.plan],
								" · ",
								m.source_page
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							status: m.status === "new" ? "pending_confirmation" : "sent",
							label: m.status
						})]
					}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-pre-wrap text-ink",
							children: m.message
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${m.email}`,
									className: "type-small font-medium text-ink underline underline-offset-4",
									children: "Reply by email"
								}),
								m.status !== "archived" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
									size: "sm",
									variant: "secondary",
									onClick: () => setStatus(m.id, "archived"),
									children: "Archive"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
									size: "sm",
									variant: "secondary",
									onClick: () => setStatus(m.id, "read"),
									children: "Unarchive"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmButton, {
									label: "Delete",
									title: "Delete this message?",
									description: "This permanently removes the message.",
									onConfirm: async () => {
										const { error } = await supabase.from("contact_messages").delete().eq("id", m.id);
										if (error) return void toast.error("Could not delete the message.");
										toast.success("Message deleted");
										refresh();
									}
								})
							]
						})]
					})]
				}) }, m.id);
			})
		})
	] });
}
//#endregion
export { Messages as component };
