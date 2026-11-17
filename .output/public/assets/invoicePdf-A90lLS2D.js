const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jspdf.es.min-yLowp-cS.js","assets/rolldown-runtime-BPOCksWG.js","assets/preload-helper-DxWiKyOd.js","assets/typeof-KEtdrNHU.js"])))=>i.map(i=>d[i]);
import { i as site } from "./site-DZTAQn57.js";
import { t as __vitePreload } from "./preload-helper-DxWiKyOd.js";
import { c as methodLink, l as paymentMethodLabels, n as invoiceStatusLabels, o as usd, r as invoiceTotal, s as bankDetails, t as fmtDate } from "./portal-types-B3452X2t.js";
//#region src/components/portal/invoicePdf.ts
async function toDataUrl(url) {
	try {
		const blob = await (await fetch(url)).blob();
		return await new Promise((res) => {
			const r = new FileReader();
			r.onload = () => res(r.result);
			r.onerror = () => res(null);
			r.readAsDataURL(blob);
		});
	} catch {
		return null;
	}
}
/** Builds and downloads a branded invoice PDF in the browser. jsPDF is loaded on demand. */
async function downloadInvoicePdf(inv, client, opts = {}) {
	const { jsPDF } = await __vitePreload(async () => {
		const { jsPDF } = await import("./jspdf.es.min-yLowp-cS.js");
		return { jsPDF };
	}, __vite__mapDeps([0,1,2,3]));
	const doc = new jsPDF({
		unit: "pt",
		format: "a4"
	});
	const W = doc.internal.pageSize.getWidth();
	const H = doc.internal.pageSize.getHeight();
	const M = 48;
	const ink = [
		10,
		10,
		10
	];
	const body = [
		77,
		77,
		77
	];
	if (opts.sample) {
		doc.saveGraphicsState();
		doc.setTextColor(225, 225, 225);
		doc.setFont("helvetica", "bold");
		doc.setFontSize(120);
		doc.text("SAMPLE", W / 2, H / 2, {
			align: "center",
			angle: 35
		});
		doc.restoreGraphicsState();
	}
	let logoDrawn = false;
	if (site.logoUrl) {
		const data = await toDataUrl(site.logoUrl);
		if (data) try {
			doc.addImage(data, M, 42, 110, 32);
			logoDrawn = true;
		} catch {
			logoDrawn = false;
		}
	}
	if (!logoDrawn) {
		doc.setFont("helvetica", "bold");
		doc.setFontSize(26);
		doc.setTextColor(...ink);
		doc.text(site.name, M, 66);
	}
	doc.setFont("helvetica", "normal");
	doc.setFontSize(9);
	doc.setTextColor(...body);
	doc.text([site.address, site.email], W - M, 52, { align: "right" });
	doc.setFont("helvetica", "bold");
	doc.setFontSize(20);
	doc.setTextColor(...ink);
	doc.text("Invoice", M, 128);
	doc.setFontSize(11);
	doc.text(inv.number, M, 146);
	doc.setFont("helvetica", "normal");
	doc.setFontSize(10);
	doc.setTextColor(...body);
	const meta = [
		`Issue date: ${fmtDate(inv.issue_date)}`,
		`Due date: ${fmtDate(inv.due_date)}`,
		`Status: ${invoiceStatusLabels[inv.status]}`
	];
	doc.text(meta, W - M, 128, { align: "right" });
	doc.setFont("helvetica", "bold");
	doc.setTextColor(...ink);
	doc.text("Bill to", M, 182);
	doc.setFont("helvetica", "normal");
	doc.setTextColor(...body);
	doc.text([client.name, client.business_name ?? ""].filter(Boolean), M, 198);
	let y = 248;
	const cols = {
		desc: M,
		qty: W - M - 210,
		price: W - M - 120,
		amount: W - M
	};
	doc.setFillColor(247, 248, 248);
	doc.rect(M, y - 14, W - 96, 24, "F");
	doc.setFont("helvetica", "bold");
	doc.setTextColor(...ink);
	doc.text("Description", cols.desc + 8, y + 2);
	doc.text("Qty", cols.qty, y + 2, { align: "right" });
	doc.text("Unit price", cols.price, y + 2, { align: "right" });
	doc.text("Amount", cols.amount - 8, y + 2, { align: "right" });
	doc.setFont("helvetica", "normal");
	y += 28;
	for (const it of inv.items) {
		const lines = doc.splitTextToSize(it.description, cols.qty - cols.desc - 60);
		doc.setTextColor(...ink);
		doc.text(lines, cols.desc + 8, y);
		doc.text(String(it.quantity), cols.qty, y, { align: "right" });
		doc.text(usd(it.unit_price), cols.price, y, { align: "right" });
		doc.text(usd(it.quantity * it.unit_price), cols.amount - 8, y, { align: "right" });
		y += 16 * lines.length + 8;
		doc.setDrawColor(232, 232, 232);
		doc.line(M, y - 12, W - M, y - 12);
	}
	doc.setFont("helvetica", "bold");
	doc.setFontSize(12);
	doc.text(`Total (USD): ${usd(invoiceTotal(inv))}`, W - M - 8, y + 10, { align: "right" });
	y += 50;
	doc.setFontSize(12);
	doc.text("How to pay", M, y);
	doc.setFont("helvetica", "normal");
	doc.setFontSize(10);
	doc.setTextColor(...body);
	y += 18;
	doc.text(`Use ${inv.number} as your payment reference.`, M, y);
	y += 18;
	for (const m of [
		"payoneer",
		"wise",
		"paypal",
		"bank_transfer"
	]) {
		let detail;
		if (m === "bank_transfer") {
			const b = bankDetails();
			detail = b.length ? b.map((f) => `${f.label}: ${f.value}`).join(", ") : "Details sent by email";
		} else detail = methodLink(m) || "Details sent by email";
		const lines = doc.splitTextToSize(`${paymentMethodLabels[m]}: ${detail}`, W - 96);
		doc.text(lines, M, y);
		y += 14 * lines.length + 4;
	}
	if (inv.notes) {
		y += 10;
		doc.text(doc.splitTextToSize(inv.notes, W - 96), M, y);
	}
	doc.setFontSize(8);
	doc.text(`${site.name} | ${site.email}`, W / 2, H - 28, { align: "center" });
	doc.save(`${inv.number}.pdf`);
}
/** Small sample PDF for demo deliverables. */
async function downloadSamplePdf(title) {
	const { jsPDF } = await __vitePreload(async () => {
		const { jsPDF } = await import("./jspdf.es.min-yLowp-cS.js");
		return { jsPDF };
	}, __vite__mapDeps([0,1,2,3]));
	const doc = new jsPDF({
		unit: "pt",
		format: "a4"
	});
	doc.setFont("helvetica", "bold");
	doc.setFontSize(22);
	doc.text(title, 48, 80);
	doc.setFont("helvetica", "normal");
	doc.setFontSize(11);
	doc.text("Sample file from the Incodet portal demo. This is example content, not a real client file.", 48, 110);
	doc.setTextColor(225, 225, 225);
	doc.setFontSize(110);
	doc.text("SAMPLE", 300, 480, {
		align: "center",
		angle: 35
	});
	doc.save(`${title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.pdf`);
}
//#endregion
export { downloadInvoicePdf, downloadSamplePdf };
