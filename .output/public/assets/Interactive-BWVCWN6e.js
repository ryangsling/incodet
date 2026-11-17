import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { a as useControllableState, c as createContextScope, n as Presence, o as composeEventHandlers, r as Primitive, s as useLayoutEffect2, t as useId$1 } from "./dist-H7EBpuXu.js";
import { n as cn } from "./dist-Cm5lzMt_.js";
import { t as Plus } from "./plus-C_9tRa6M.js";
import { i as useComposedRefs } from "./dist-DoHzOJyV.js";
import { r as createCollection2, t as useDirection } from "./dist-oeLPm2vI.js";
//#region node_modules/@radix-ui/react-collapsible/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", {
	value,
	configurable: true
});
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function Collapsible2(props, forwardedRef) {
	const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: COLLAPSIBLE_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleProvider, {
		scope: __scopeCollapsible,
		disabled,
		contentId: useId$1(),
		open,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState$1(open),
			"data-disabled": disabled ? "" : void 0,
			...collapsibleProps,
			ref: forwardedRef
		})
	});
}, "Collapsible"));
var TRIGGER_NAME$1 = "CollapsibleTrigger";
var CollapsibleTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function CollapsibleTrigger2(props, forwardedRef) {
	const { __scopeCollapsible, ...triggerProps } = props;
	const context = useCollapsibleContext(TRIGGER_NAME$1, __scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-controls": context.open ? context.contentId : void 0,
		"aria-expanded": context.open || false,
		"data-state": getState$1(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		disabled: context.disabled,
		...triggerProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
}, "CollapsibleTrigger"));
var CONTENT_NAME$1 = "CollapsibleContent";
var CollapsibleContent = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function CollapsibleContent2(props, forwardedRef) {
	const { forceMount, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME$1, props.__scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContentImpl, {
			...contentProps,
			ref: forwardedRef,
			present
		})
	});
}, "CollapsibleContent"));
var CollapsibleContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function CollapsibleContentImpl2(props, forwardedRef) {
	const { __scopeCollapsible, present, children, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME$1, __scopeCollapsible);
	const [isPresent, setIsPresent] = import_react.useState(present);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const heightRef = import_react.useRef(0);
	const height = heightRef.current;
	const widthRef = import_react.useRef(0);
	const width = widthRef.current;
	const isOpen = context.open || isPresent;
	const isMountAnimationPreventedRef = import_react.useRef(isOpen);
	const originalStylesRef = import_react.useRef(void 0);
	import_react.useEffect(() => {
		const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
		return () => cancelAnimationFrame(rAF);
	}, []);
	useLayoutEffect2(() => {
		const node = ref.current;
		if (node) {
			originalStylesRef.current = originalStylesRef.current || {
				transitionDuration: node.style.transitionDuration,
				animationName: node.style.animationName
			};
			node.style.transitionDuration = "0s";
			node.style.animationName = "none";
			const rect = node.getBoundingClientRect();
			heightRef.current = rect.height;
			widthRef.current = rect.width;
			if (!isMountAnimationPreventedRef.current) {
				node.style.transitionDuration = originalStylesRef.current.transitionDuration;
				node.style.animationName = originalStylesRef.current.animationName;
			}
			setIsPresent(present);
		}
	}, [context.open, present]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getState$1(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		id: context.contentId,
		hidden: !isOpen,
		...contentProps,
		ref: composedRefs,
		style: {
			[`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
			[`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
			...props.style
		},
		children: isOpen && children
	});
}, "CollapsibleContentImpl"));
function getState$1(open) {
	return open ? "open" : "closed";
}
__name$1(getState$1, "getState");
//#endregion
//#region node_modules/@radix-ui/react-accordion/dist/index.mjs
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var AccordionType = {
	Single: "single",
	Multiple: "multiple"
};
var Orientation = {
	Vertical: "vertical",
	Horizontal: "horizontal"
};
var Direction = {
	LTR: "ltr",
	RTL: "rtl"
};
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = [
	"Home",
	"End",
	"ArrowDown",
	"ArrowUp",
	"ArrowLeft",
	"ArrowRight"
];
var [Collection, { useGetCollection, createCollectionScope }] = createCollection2(ACCORDION_NAME);
var [createAccordionContext, createAccordionScope] = createContextScope(ACCORDION_NAME, [createCollectionScope, createCollapsibleScope]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function Accordion2(props, forwardedRef) {
	const { type, ...accordionProps } = props;
	const singleProps = accordionProps;
	const multipleProps = accordionProps;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
		scope: props.__scopeAccordion,
		children: type === AccordionType.Multiple ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImplMultiple, {
			...multipleProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImplSingle, {
			...singleProps,
			ref: forwardedRef
		})
	});
}, "Accordion"));
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(ACCORDION_NAME, { collapsible: false });
var AccordionImplSingle = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AccordionImplSingle2(props, forwardedRef) {
	const { value: valueProp, defaultValue, onValueChange = /* @__PURE__ */ __name(() => {}, "onValueChange"), collapsible = false, ...accordionSingleProps } = props;
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange,
		caller: ACCORDION_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionValueProvider, {
		scope: props.__scopeAccordion,
		value: import_react.useMemo(() => value ? [value] : [], [value]),
		onItemOpen: setValue,
		onItemClose: import_react.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionCollapsibleProvider, {
			scope: props.__scopeAccordion,
			collapsible,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImpl, {
				...accordionSingleProps,
				ref: forwardedRef
			})
		})
	});
}, "AccordionImplSingle"));
var AccordionImplMultiple = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AccordionImplMultiple2(props, forwardedRef) {
	const { value: valueProp, defaultValue, onValueChange = /* @__PURE__ */ __name(() => {}, "onValueChange"), ...accordionMultipleProps } = props;
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? [],
		onChange: onValueChange,
		caller: ACCORDION_NAME
	});
	const handleItemOpen = import_react.useCallback((itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]), [setValue]);
	const handleItemClose = import_react.useCallback((itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)), [setValue]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionValueProvider, {
		scope: props.__scopeAccordion,
		value,
		onItemOpen: handleItemOpen,
		onItemClose: handleItemClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionCollapsibleProvider, {
			scope: props.__scopeAccordion,
			collapsible: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImpl, {
				...accordionMultipleProps,
				ref: forwardedRef
			})
		})
	});
}, "AccordionImplMultiple"));
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AccordionImpl2(props, forwardedRef) {
	const { __scopeAccordion, disabled, dir, orientation = Orientation.Vertical, ...accordionProps } = props;
	const accordionRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(accordionRef, forwardedRef);
	const getCollection = useGetCollection(__scopeAccordion);
	const isDirectionLTR = useDirection(dir) === Direction.LTR;
	const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
		if (!ACCORDION_KEYS.includes(event.key)) return;
		const collection = getCollection();
		const target = event.target;
		const triggerCollection = collection.filter(([, item]) => !item.element.disabled);
		const triggerIndex = triggerCollection.findIndex(([, item]) => item.element === target);
		const triggerCount = triggerCollection.size;
		if (triggerIndex === -1) return;
		event.preventDefault();
		let nextIndex = triggerIndex;
		const homeIndex = 0;
		const endIndex = triggerCount - 1;
		const moveNext = /* @__PURE__ */ __name(() => {
			nextIndex = triggerIndex + 1;
			if (nextIndex > endIndex) nextIndex = homeIndex;
		}, "moveNext");
		const movePrev = /* @__PURE__ */ __name(() => {
			nextIndex = triggerIndex - 1;
			if (nextIndex < homeIndex) nextIndex = endIndex;
		}, "movePrev");
		switch (event.key) {
			case "Home":
				nextIndex = homeIndex;
				break;
			case "End":
				nextIndex = endIndex;
				break;
			case "ArrowRight":
				if (orientation === Orientation.Horizontal) if (isDirectionLTR) moveNext();
				else movePrev();
				break;
			case "ArrowDown":
				if (orientation === Orientation.Vertical) moveNext();
				break;
			case "ArrowLeft":
				if (orientation === Orientation.Horizontal) if (isDirectionLTR) movePrev();
				else moveNext();
				break;
			case "ArrowUp": if (orientation === Orientation.Vertical) movePrev();
		}
		const clampedIndex = nextIndex % triggerCount;
		triggerCollection.at(clampedIndex)?.element.focus();
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImplProvider, {
		scope: __scopeAccordion,
		disabled,
		direction: dir,
		orientation,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
			scope: __scopeAccordion,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				...accordionProps,
				"data-orientation": orientation,
				ref: composedRefs,
				onKeyDown: disabled ? void 0 : handleKeyDown
			})
		})
	});
}, "AccordionImpl"));
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AccordionItem2(props, forwardedRef) {
	const { __scopeAccordion, value, ...accordionItemProps } = props;
	const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
	const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
	const collapsibleScope = useCollapsibleScope(__scopeAccordion);
	const triggerId = useId$1();
	const open = value && valueContext.value.includes(value) || false;
	const disabled = accordionContext.disabled || props.disabled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItemProvider, {
		scope: __scopeAccordion,
		open,
		disabled,
		triggerId,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collapsible, {
			"data-orientation": accordionContext.orientation,
			"data-state": getState(open),
			...collapsibleScope,
			...accordionItemProps,
			ref: forwardedRef,
			disabled,
			open,
			onOpenChange: (open2) => {
				if (open2) valueContext.onItemOpen(value);
				else valueContext.onItemClose(value);
			}
		})
	});
}, "AccordionItem"));
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AccordionHeader2(props, forwardedRef) {
	const { __scopeAccordion, ...headerProps } = props;
	const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
	const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h3, {
		"data-orientation": accordionContext.orientation,
		"data-state": getState(itemContext.open),
		"data-disabled": itemContext.disabled ? "" : void 0,
		...headerProps,
		ref: forwardedRef
	});
}, "AccordionHeader"));
var TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AccordionTrigger2(props, forwardedRef) {
	const { __scopeAccordion, ...triggerProps } = props;
	const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
	const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
	const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
	const collapsibleScope = useCollapsibleScope(__scopeAccordion);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
		scope: __scopeAccordion,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger, {
			"aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
			"data-orientation": accordionContext.orientation,
			id: itemContext.triggerId,
			...collapsibleScope,
			...triggerProps,
			ref: forwardedRef
		})
	});
}, "AccordionTrigger"));
var CONTENT_NAME = "AccordionContent";
var AccordionContent = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AccordionContent2(props, forwardedRef) {
	const { __scopeAccordion, ...contentProps } = props;
	const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
	const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
	const collapsibleScope = useCollapsibleScope(__scopeAccordion);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
		role: "region",
		"aria-labelledby": itemContext.triggerId,
		"data-orientation": accordionContext.orientation,
		...collapsibleScope,
		...contentProps,
		ref: forwardedRef,
		style: {
			"--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
			"--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
			...props.style
		}
	});
}, "AccordionContent"));
function getState(open) {
	return open ? "open" : "closed";
}
__name(getState, "getState");
//#endregion
//#region src/components/site/Interactive.tsx
function Accordion({ items, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion$1, {
		type: "single",
		collapsible: true,
		className: cn("flex flex-col gap-3", className),
		children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
			value: `item-${i}`,
			className: "rounded-card-sm border border-border bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger, {
				className: "group flex w-full items-center justify-between gap-4 rounded-card-sm px-6 py-5 text-left text-[18px] font-medium text-ink",
				children: [it.question, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-9 shrink-0 items-center justify-center rounded-full bg-bg-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						"aria-hidden": true,
						className: "size-4 transition-transform duration-500 ease-[var(--ease)] group-data-[state=open]:rotate-45"
					})
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
				className: "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-6 pb-6 type-body",
					children: it.answer
				})
			})]
		}, i))
	});
}
function SegmentedTabs({ tabs, className }) {
	const [active, setActive] = (0, import_react.useState)(0);
	const id = (0, import_react.useId)();
	const btns = (0, import_react.useRef)([]);
	const onKey = (e) => {
		let n = active;
		if (e.key === "ArrowRight") n = (active + 1) % tabs.length;
		else if (e.key === "ArrowLeft") n = (active - 1 + tabs.length) % tabs.length;
		else if (e.key === "Home") n = 0;
		else if (e.key === "End") n = tabs.length - 1;
		else return;
		e.preventDefault();
		setActive(n);
		btns.current[n]?.focus();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "tablist",
				onKeyDown: onKey,
				className: "inline-flex max-w-full gap-1 overflow-x-auto rounded-full bg-bg-soft p-1.5",
				children: tabs.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					ref: (el) => {
						btns.current[i] = el;
					},
					role: "tab",
					id: `${id}-tab-${i}`,
					"aria-controls": `${id}-panel-${i}`,
					"aria-selected": active === i,
					tabIndex: active === i ? 0 : -1,
					onClick: () => setActive(i),
					className: cn("rounded-full px-5 py-2.5 type-small font-medium whitespace-nowrap transition-all duration-300", active === i ? "bg-background text-ink shadow-soft" : "text-body hover:text-ink"),
					children: t.label
				}, t.label))
			})
		}), tabs.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "tabpanel",
			id: `${id}-panel-${i}`,
			"aria-labelledby": `${id}-tab-${i}`,
			hidden: active !== i,
			className: "mt-8",
			children: t.content
		}, t.label))]
	});
}
//#endregion
export { SegmentedTabs as n, Accordion as t };
