import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { t as useQuery } from "./useQuery-B1O5V73E.js";
import { t as PillButton } from "./Button-iOLhAAbB.js";
import { t as createLucideIcon } from "./createLucideIcon-D_v-FLWL.js";
import { t as Chip } from "./PortalDashboard-DYRqCoun.js";
import { t as Plus } from "./plus-C_9tRa6M.js";
import { M as useQueryClient, N as supabase, f as toast } from "./index-QLeXjHkE.js";
import { l as paymentMethodLabels, n as invoiceStatusLabels, o as usd, r as invoiceTotal, t as fmtDate } from "./portal-types-B3452X2t.js";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, t as Dialog } from "./dialog-D00dBTLQ.js";
import { a as inputCls, i as Field, n as Box, r as ConfirmButton, t as AdminTitle } from "./ui-CbCwm7AJ.js";
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Trash2 = createLucideIcon("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]);
//#endregion
//#region src/routes/_authenticated/admin.invoices.tsx?tsr-split=component
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statuses = Object.keys(invoiceStatusLabels);
function Invoices() {
	const qc = useQueryClient();
	const [creating, setCreating] = (0, import_react.useState)(false);
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const q = useQuery({
		queryKey: ["admin-invoices"],
		queryFn: async () => {
			const { data, error } = await supabase.from("invoices").select("*, clients(name, business_name), invoice_items(description, quantity, unit_price), payments(*)").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const refresh = () => qc.invalidateQueries({ queryKey: ["admin-invoices"] });
	async function setStatus(id, status) {
		const { error } = await supabase.from("invoices").update({ status }).eq("id", id);
		if (error) return void toast.error("Could not update the status.");
		toast.success("Status updated");
		refresh();
	}
	async function markPaid(inv) {
		const { data: auth } = await supabase.auth.getUser();
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const latest = [...inv.payments].sort((a, b) => (b.reported_at ?? "").localeCompare(a.reported_at ?? ""))[0];
		const { error: pErr } = latest ? await supabase.from("payments").update({
			confirmed_at: now,
			confirmed_by: auth.user?.id ?? null
		}).eq("id", latest.id) : await supabase.from("payments").insert({
			invoice_id: inv.id,
			method: "bank_transfer",
			reference: inv.number,
			reported_at: now,
			confirmed_at: now,
			confirmed_by: auth.user?.id ?? null
		});
		if (pErr) return void toast.error("Could not record the payment.");
		await setStatus(inv.id, "paid");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTitle, {
			title: "Invoices",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
				size: "sm",
				onClick: () => setCreating(true),
				children: "New invoice"
			})
		}),
		q.data?.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "type-body",
			children: "No invoices yet."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-3",
			children: q.data?.map((inv) => {
				const c = inv.clients;
				const items = inv.invoice_items.map((i) => ({
					...i,
					quantity: Number(i.quantity),
					unit_price: Number(i.unit_price)
				}));
				const open = openId === inv.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-expanded": open,
						onClick: () => setOpenId(open ? null : inv.id),
						className: "text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block font-medium text-ink",
							children: [
								inv.number,
								" · ",
								usd(invoiceTotal({ items }))
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block type-small text-muted-foreground",
							children: [
								c?.business_name || c?.name,
								" · Issued ",
								fmtDate(inv.issue_date),
								" · Due",
								" ",
								fmtDate(inv.due_date)
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								status: inv.status,
								label: invoiceStatusLabels[inv.status]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								"aria-label": `Status for ${inv.number}`,
								value: inv.status,
								onChange: (e) => setStatus(inv.id, e.target.value),
								className: `${inputCls} w-auto`,
								children: statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s,
									children: invoiceStatusLabels[s]
								}, s))
							}),
							inv.status !== "paid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
								size: "sm",
								onClick: () => markPaid(inv),
								children: "Mark as paid"
							})
						]
					})]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 border-t border-border pt-4 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium text-ink",
							children: "Line items"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 type-small",
							children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-3 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									it.description,
									" × ",
									it.quantity
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-ink",
									children: usd(it.quantity * it.unit_price)
								})]
							}, i))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium text-ink",
							children: "Payments"
						}), inv.payments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 type-small",
							children: "None yet."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 type-small",
							children: inv.payments.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "py-1",
								children: [
									paymentMethodLabels[p.method],
									" · ",
									p.reference || "No reference",
									" · Reported ",
									fmtDate(p.reported_at),
									p.confirmed_at ? ` · Confirmed ${fmtDate(p.confirmed_at)}` : " · Not confirmed"
								]
							}, p.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmButton, {
							className: "md:col-span-2 w-fit",
							label: "Delete invoice",
							title: `Delete ${inv.number}?`,
							description: "This also deletes its line items and payments.",
							onConfirm: async () => {
								const { error } = await supabase.from("invoices").delete().eq("id", inv.id);
								if (error) return void toast.error("Could not delete the invoice.");
								toast.success("Invoice deleted");
								refresh();
							}
						})
					]
				})] }) }, inv.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateInvoice, {
			open: creating,
			onClose: () => setCreating(false),
			onCreated: refresh
		})
	] });
}
function CreateInvoice({ open, onClose, onCreated }) {
	const [clientId, setClientId] = (0, import_react.useState)("");
	const [items, setItems] = (0, import_react.useState)([{
		description: "",
		quantity: 1,
		unit_price: 0
	}]);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const clients = useQuery({
		queryKey: ["admin-clients"],
		queryFn: async () => (await supabase.from("clients").select("id, name, business_name, email, user_id").order("name")).data ?? [],
		enabled: open
	});
	const projects = useQuery({
		queryKey: ["admin-client-projects", clientId],
		queryFn: async () => (await supabase.from("projects").select("id, name").eq("client_id", clientId)).data ?? [],
		enabled: !!clientId
	});
	const setItem = (i, patch) => setItems((arr) => arr.map((it, j) => j === i ? {
		...it,
		...patch
	} : it));
	async function submit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const valid = items.filter((i) => i.description.trim() && i.quantity > 0);
		if (!clientId || valid.length === 0) return void toast.error("Choose a client and add at least one line item.");
		setBusy(true);
		const { data: inv, error } = await supabase.from("invoices").insert({
			client_id: clientId,
			project_id: fd.get("project_id") || null,
			issue_date: fd.get("issue_date") || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			due_date: fd.get("due_date") || null,
			status: fd.get("status"),
			notes: String(fd.get("notes") ?? "").trim() || null
		}).select("id, number").single();
		if (error || !inv) {
			setBusy(false);
			toast.error("Could not create the invoice.");
			return;
		}
		const { error: itemErr } = await supabase.from("invoice_items").insert(valid.map((i) => ({
			...i,
			description: i.description.trim(),
			invoice_id: inv.id
		})));
		setBusy(false);
		if (itemErr) return void toast.error("Invoice created, but line items failed to save.");
		toast.success(`${inv.number} created`);
		setItems([{
			description: "",
			quantity: 1,
			unit_price: 0
		}]);
		setClientId("");
		onCreated();
		onClose();
	}
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (o) => !o && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto sm:max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "New invoice" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "grid gap-4 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Client",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: clientId,
							onChange: (e) => setClientId(e.target.value),
							className: inputCls,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Choose a client"
							}), clients.data?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c.id,
								children: c.business_name || c.name
							}, c.id))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Project (optional)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "project_id",
							className: inputCls,
							defaultValue: "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "None"
							}), projects.data?.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: p.id,
								children: p.name
							}, p.id))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Issue date",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							name: "issue_date",
							defaultValue: today,
							className: inputCls
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Due date",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							name: "due_date",
							className: inputCls
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Status",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							name: "status",
							defaultValue: "sent",
							className: inputCls,
							children: statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s,
								children: invoiceStatusLabels[s]
							}, s))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "type-small font-medium text-ink",
								children: "Line items (USD)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex flex-col gap-2",
								children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-[1fr_70px_100px_auto] items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											"aria-label": "Description",
											placeholder: "Description",
											value: it.description,
											onChange: (e) => setItem(i, { description: e.target.value }),
											className: inputCls
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											"aria-label": "Quantity",
											type: "number",
											min: 0,
											step: "0.5",
											value: it.quantity,
											onChange: (e) => setItem(i, { quantity: Number(e.target.value) }),
											className: inputCls
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											"aria-label": "Unit price",
											type: "number",
											min: 0,
											step: "0.01",
											value: it.unit_price,
											onChange: (e) => setItem(i, { unit_price: Number(e.target.value) }),
											className: inputCls
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": "Remove line",
											onClick: () => setItems((arr) => arr.filter((_, j) => j !== i)),
											className: "rounded-full p-2 hover:bg-bg-soft",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
												"aria-hidden": true,
												className: "size-4"
											})
										})
									]
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setItems((a) => [...a, {
										description: "",
										quantity: 1,
										unit_price: 0
									}]),
									className: "flex items-center gap-1 type-small font-medium text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
										"aria-hidden": true,
										className: "size-4"
									}), " Add line"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-medium text-ink",
									children: ["Total: ", usd(invoiceTotal({ items }))]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Notes (shown on the invoice)",
						className: "md:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "notes",
							rows: 2,
							className: inputCls
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
						type: "submit",
						disabled: busy,
						className: "md:col-span-2",
						children: "Create invoice"
					})
				]
			})]
		})
	});
}
//#endregion
export { Invoices as component };
