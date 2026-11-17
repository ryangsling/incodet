import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { n as require_react } from "./jsx-runtime-DGkIEq3F.js";
//#region src/hooks/use-motion.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function usePrefersReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(mq.matches);
		const on = () => setReduced(mq.matches);
		mq.addEventListener("change", on);
		return () => mq.removeEventListener("change", on);
	}, []);
	return reduced;
}
/**
* Pinned and scroll-driven effects need room: at least tablet width and 600px of height.
* Shorter screens (phones in landscape, small laptop windows) get the simple stacked layout.
*/
var PIN_QUERY = "(min-width: 768px) and (min-height: 600px)";
var PIN_QUERY_WIDE = "(min-width: 1024px) and (min-height: 600px)";
function useMediaQuery(query) {
	const [match, setMatch] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia(query);
		setMatch(mq.matches);
		const on = () => setMatch(mq.matches);
		mq.addEventListener("change", on);
		return () => mq.removeEventListener("change", on);
	}, [query]);
	return match;
}
/**
* Calls cb with progress 0..1 of an element scrolling through the viewport.
* mode "pin": 0 when the top hits the viewport top, 1 when the bottom hits the viewport bottom.
* mode "through": 0 when the top enters at the bottom, 1 when the top reaches 30% from top.
*/
function useScrollProgress(cb, mode = "pin") {
	const ref = (0, import_react.useRef)(null);
	const cbRef = (0, import_react.useRef)(cb);
	cbRef.current = cb;
	(0, import_react.useEffect)(() => {
		let raf = 0;
		const update = () => {
			raf = 0;
			const el = ref.current;
			if (!el) return;
			const r = el.getBoundingClientRect();
			const vh = window.innerHeight;
			let p;
			if (mode === "pin") {
				const dist = r.height - vh;
				p = dist <= 0 ? 0 : -r.top / dist;
			} else p = (vh - r.top) / (vh * .7 + r.height * .5);
			cbRef.current(Math.min(1, Math.max(0, p)));
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
	}, [mode]);
	return ref;
}
//#endregion
export { useScrollProgress as a, usePrefersReducedMotion as i, PIN_QUERY_WIDE as n, useMediaQuery as r, PIN_QUERY as t };
