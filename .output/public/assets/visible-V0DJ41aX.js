//#region src/content/visible.ts
/** Returns only items that are finished: not marked todo and with every required field filled. */
function visible(items, required) {
	return items.filter((it) => {
		if (it.todo) return false;
		return required.every((k) => {
			const v = it[k];
			if (v === void 0 || v === null) return false;
			if (typeof v === "string") return v.trim().length > 0;
			if (Array.isArray(v)) return v.length > 0;
			return true;
		});
	});
}
//#endregion
export { visible as t };
