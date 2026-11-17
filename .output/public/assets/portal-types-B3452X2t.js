//#region src/config/payments.ts
var payments = {
	payoneerUrl: "",
	wiseUrl: "",
	paypalUrl: "",
	bank: {
		accountName: "",
		bankName: "",
		accountNumber: "",
		bsb: "",
		swift: "",
		iban: ""
	}
};
var paymentMethodLabels = {
	payoneer: "Payoneer",
	wise: "Wise",
	paypal: "PayPal",
	bank_transfer: "Bank transfer"
};
var bankFieldLabels = {
	accountName: "Account name",
	bankName: "Bank",
	accountNumber: "Account number",
	bsb: "BSB",
	swift: "SWIFT",
	iban: "IBAN"
};
function bankDetails() {
	return Object.keys(payments.bank).filter((k) => payments.bank[k]).map((k) => ({
		label: bankFieldLabels[k],
		value: payments.bank[k]
	}));
}
function methodLink(m) {
	return m === "payoneer" ? payments.payoneerUrl : m === "wise" ? payments.wiseUrl : m === "paypal" ? payments.paypalUrl : "";
}
//#endregion
//#region src/lib/portal-types.ts
var projectStatusLabels = {
	planning: "Planning",
	in_progress: "In progress",
	review: "In review",
	live: "Live",
	on_hold: "On hold"
};
var invoiceStatusLabels = {
	draft: "Draft",
	sent: "Sent",
	pending_confirmation: "Pending confirmation",
	paid: "Paid",
	overdue: "Overdue"
};
var milestoneStatusLabels = {
	todo: "To do",
	in_progress: "In progress",
	done: "Done"
};
var invoiceTotal = (inv) => inv.items.reduce((s, it) => s + Number(it.quantity) * Number(it.unit_price), 0);
var usd = (n) => new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD"
}).format(n);
function fmtDate(d) {
	if (!d) return "Not set";
	const date = new Date(d.length === 10 ? `${d}T00:00:00Z` : d);
	return new Intl.DateTimeFormat("en-AU", {
		day: "numeric",
		month: "short",
		year: "numeric",
		timeZone: "UTC"
	}).format(date);
}
//#endregion
export { projectStatusLabels as a, methodLink as c, milestoneStatusLabels as i, paymentMethodLabels as l, invoiceStatusLabels as n, usd as o, invoiceTotal as r, bankDetails as s, fmtDate as t };
