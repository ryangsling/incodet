import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as useQuery } from "./useQuery-B1O5V73E.js";
import { t as PillButton } from "./Button-iOLhAAbB.js";
import { i as string, r as object } from "./schemas-D7ISJfF9.js";
import { M as useQueryClient, N as supabase, f as toast } from "./index-QLeXjHkE.js";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, t as Dialog } from "./dialog-D00dBTLQ.js";
import { a as inputCls, i as Field, n as Box, r as ConfirmButton, t as AdminTitle } from "./ui-CbCwm7AJ.js";
//#region src/routes/_authenticated/admin.clients.tsx?tsr-split=component
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().trim().min(1, "Name is required").max(100),
	business_name: string().trim().max(120),
	email: string().trim().toLowerCase().email("Enter a valid email").max(255)
});
function Clients() {
	const qc = useQueryClient();
	const [editing, setEditing] = (0, import_react.useState)(null);
	const q = useQuery({
		queryKey: ["admin-clients"],
		queryFn: async () => {
			const { data, error } = await supabase.from("clients").select("id, name, business_name, email, user_id").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	async function save(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = schema.safeParse(Object.fromEntries(fd));
		if (!parsed.success) return void toast.error(parsed.error.issues[0]?.message ?? "Check the form");
		const row = {
			...parsed.data,
			business_name: parsed.data.business_name || null
		};
		const { error } = editing?.id ? await supabase.from("clients").update(row).eq("id", editing.id) : await supabase.from("clients").insert(row);
		if (error) return void toast.error(error.code === "23505" ? "A client with this email already exists." : "Could not save the client.");
		toast.success("Client saved");
		setEditing(null);
		qc.invalidateQueries({ queryKey: ["admin-clients"] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTitle, {
			title: "Clients",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
				size: "sm",
				onClick: () => setEditing({}),
				children: "New client"
			})
		}),
		q.data?.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "type-body",
			children: "No clients yet."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3 lg:grid-cols-2",
			children: q.data?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-ink",
						children: c.business_name || c.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate type-small text-muted-foreground",
						children: [
							c.name,
							" · ",
							c.email,
							" · ",
							c.user_id ? "Signed in before" : "Not signed in yet"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
						size: "sm",
						variant: "secondary",
						onClick: () => setEditing(c),
						children: "Edit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmButton, {
						label: "Delete",
						title: "Delete this client?",
						description: "This also deletes their projects, invoices and payments.",
						onConfirm: async () => {
							const { error } = await supabase.from("clients").delete().eq("id", c.id);
							if (error) return void toast.error("Could not delete the client.");
							toast.success("Client deleted");
							qc.invalidateQueries({ queryKey: ["admin-clients"] });
						}
					})]
				})]
			}) }, c.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!editing,
			onOpenChange: (o) => !o && setEditing(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editing?.id ? "Edit client" : "New client" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: save,
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Contact name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "name",
							defaultValue: editing?.name ?? "",
							className: inputCls,
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Business name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "business_name",
							defaultValue: editing?.business_name ?? "",
							className: inputCls
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email (used to sign in)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							defaultValue: editing?.email ?? "",
							className: inputCls,
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
						type: "submit",
						children: "Save client"
					})
				]
			})] })
		})
	] });
}
//#endregion
export { Clients as component };
