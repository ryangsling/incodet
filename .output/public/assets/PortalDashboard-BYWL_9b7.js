import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { a as useControllableState, c as createContextScope, n as Presence, o as composeEventHandlers, r as Primitive, s as useLayoutEffect2, t as useId } from "./dist-H7EBpuXu.js";
import { t as Link } from "./link-DhZbiYXQ.js";
import { i as site } from "./site-DZTAQn57.js";
import { n as cn } from "./dist-Cm5lzMt_.js";
import { r as pillButton, t as PillButton } from "./Button-iOLhAAbB.js";
import { t as createLucideIcon } from "./createLucideIcon-D_v-FLWL.js";
import { t as Check } from "./check-BKX-Ic2_.js";
import { n as CircleDot, r as CircleCheck, t as Circle } from "./circle-C_9ClbX2.js";
import { t as Download } from "./download-BNjaGrnN.js";
import { n as FileText, t as LogOut } from "./log-out-E31F5SV6.js";
import { t as LoaderCircle } from "./loader-circle-CqNj_ICn.js";
import { i as useComposedRefs } from "./dist-DoHzOJyV.js";
import { n as createCollection, t as useDirection } from "./dist-oeLPm2vI.js";
import { f as toast } from "./index-DjAHSjYu.js";
import { a as projectStatusLabels, c as methodLink, i as milestoneStatusLabels, l as paymentMethodLabels, n as invoiceStatusLabels, o as usd, r as invoiceTotal, s as bankDetails, t as fmtDate } from "./portal-types-B3452X2t.js";
import { y as useCallbackRef } from "./dist-CS7AYyQ5.js";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-CEHgDf12.js";
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleQuestionMark = createLucideIcon("circle-question-mark", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
		key: "1u773s"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Copy = createLucideIcon("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ExternalLink = createLucideIcon("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]);
//#endregion
//#region node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var __defProp$2 = Object.defineProperty;
var __name$2 = (target, value) => __defProp$2(target, "name", {
	value,
	configurable: true
});
var _isHydrated = false;
function useIsHydrated() {
	const [isHydrated, setIsHydrated] = import_react.useState(_isHydrated);
	import_react.useEffect(() => {
		if (!_isHydrated) {
			_isHydrated = true;
			setIsHydrated(true);
		}
	}, []);
	return isHydrated;
}
__name$2(useIsHydrated, "useIsHydrated");
var useReactSyncExternalStore = import_react[" useSyncExternalStore ".trim().toString()];
function subscribe() {
	return () => {};
}
__name$2(subscribe, "subscribe");
function useIsHydratedModern() {
	return useReactSyncExternalStore(subscribe, () => true, () => false);
}
__name$2(useIsHydratedModern, "useIsHydratedModern");
var useIsHydrated2 = typeof useReactSyncExternalStore === "function" ? useIsHydratedModern : useIsHydrated;
//#endregion
//#region node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var import_jsx_runtime = require_jsx_runtime();
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", {
	value,
	configurable: true
});
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(GROUP_NAME, [createCollectionScope]);
var Orientation = {
	Vertical: "vertical",
	Horizontal: "horizontal"
};
var Direction = {
	LTR: "ltr",
	RTL: "rtl"
};
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function RovingFocusGroup2(props, forwardedRef) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
		scope: props.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
			scope: props.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroupImpl, {
				...props,
				ref: forwardedRef
			})
		})
	});
}, "RovingFocusGroup"));
var RovingFocusGroupImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function RovingFocusGroupImpl2(props, forwardedRef) {
	const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, preventScrollOnEntryFocus = false, ...groupProps } = props;
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const direction = useDirection(dir);
	const [currentTabStopId, setCurrentTabStopId] = useControllableState({
		prop: currentTabStopIdProp,
		defaultProp: defaultCurrentTabStopId ?? null,
		onChange: onCurrentTabStopIdChange,
		caller: GROUP_NAME
	});
	const [isTabbingBackOut, setIsTabbingBackOut] = import_react.useState(false);
	const handleEntryFocus = useCallbackRef(onEntryFocus);
	const getItems = useCollection(__scopeRovingFocusGroup);
	const isClickFocusRef = import_react.useRef(false);
	const [focusableItemsCount, setFocusableItemsCount] = import_react.useState(0);
	import_react.useEffect(() => {
		const node = ref.current;
		if (node) {
			node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
			return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
		}
	}, [handleEntryFocus]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusProvider, {
		scope: __scopeRovingFocusGroup,
		orientation,
		dir: direction,
		loop,
		currentTabStopId,
		onItemFocus: import_react.useCallback((tabStopId) => setCurrentTabStopId(tabStopId), [setCurrentTabStopId]),
		onItemShiftTab: import_react.useCallback(() => setIsTabbingBackOut(true), []),
		onFocusableItemAdd: import_react.useCallback(() => setFocusableItemsCount((prevCount) => prevCount + 1), []),
		onFocusableItemRemove: import_react.useCallback(() => setFocusableItemsCount((prevCount) => prevCount - 1), []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
			"data-orientation": orientation,
			...groupProps,
			ref: composedRefs,
			style: {
				outline: "none",
				...props.style
			},
			onMouseDown: composeEventHandlers(props.onMouseDown, () => {
				isClickFocusRef.current = true;
			}),
			onFocus: composeEventHandlers(props.onFocus, (event) => {
				const isKeyboardFocus = !isClickFocusRef.current;
				if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
					const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
					event.currentTarget.dispatchEvent(entryFocusEvent);
					if (!entryFocusEvent.defaultPrevented) {
						const items = getItems().filter((item) => item.focusable);
						focusFirst([
							items.find((item) => item.active),
							items.find((item) => item.id === currentTabStopId),
							...items
						].filter(Boolean).map((item) => item.ref.current), preventScrollOnEntryFocus);
					}
				}
				isClickFocusRef.current = false;
			}),
			onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
		})
	});
}, "RovingFocusGroupImpl"));
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function RovingFocusGroupItem2(props, forwardedRef) {
	const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, children, ...itemProps } = props;
	const autoId = useId();
	const id = tabStopId || autoId;
	const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
	const isCurrentTabStop = context.currentTabStopId === id;
	const getItems = useCollection(__scopeRovingFocusGroup);
	const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
	const isHydrated = useIsHydrated2();
	useLayoutEffect2(() => {
		if (!isHydrated || !focusable) return;
		onFocusableItemAdd();
		return () => onFocusableItemRemove();
	}, [
		isHydrated,
		focusable,
		onFocusableItemAdd,
		onFocusableItemRemove
	]);
	import_react.useEffect(() => {
		if (isHydrated || !focusable) return;
		onFocusableItemAdd();
		return () => onFocusableItemRemove();
	}, [
		isHydrated,
		focusable,
		onFocusableItemAdd,
		onFocusableItemRemove
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
		scope: __scopeRovingFocusGroup,
		id,
		focusable,
		active,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			tabIndex: isCurrentTabStop ? 0 : -1,
			"data-orientation": context.orientation,
			...itemProps,
			ref: forwardedRef,
			onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
				if (!focusable) event.preventDefault();
				else context.onItemFocus(id);
			}),
			onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if (event.key === "Tab" && event.shiftKey) {
					context.onItemShiftTab();
					return;
				}
				if (event.target !== event.currentTarget) return;
				const focusIntent = getFocusIntent(event, context.orientation, context.dir);
				if (focusIntent !== void 0) {
					if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
					event.preventDefault();
					let candidateNodes = getItems().filter((item) => item.focusable).map((item) => item.ref.current);
					if (focusIntent === "last") candidateNodes.reverse();
					else if (focusIntent === "prev" || focusIntent === "next") {
						if (focusIntent === "prev") candidateNodes.reverse();
						const currentIndex = candidateNodes.indexOf(event.currentTarget);
						candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
					}
					setTimeout(() => focusFirst(candidateNodes));
				}
			}),
			children: typeof children === "function" ? children({
				isCurrentTabStop,
				hasTabStop: currentTabStopId != null
			}) : children
		})
	});
}, "RovingFocusGroupItem"));
var MAP_KEY_TO_FOCUS_INTENT = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function getDirectionAwareKey(key, dir) {
	if (dir !== Direction.RTL) return key;
	return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
__name$1(getDirectionAwareKey, "getDirectionAwareKey");
function getFocusIntent(event, orientation, dir) {
	const key = getDirectionAwareKey(event.key, dir);
	if (orientation === Orientation.Vertical && ["ArrowLeft", "ArrowRight"].includes(key)) return;
	if (orientation === Orientation.Horizontal && ["ArrowUp", "ArrowDown"].includes(key)) return;
	return MAP_KEY_TO_FOCUS_INTENT[key];
}
__name$1(getFocusIntent, "getFocusIntent");
function focusFirst(candidates, preventScroll = false) {
	const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
	for (const candidate of candidates) {
		if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
		candidate.focus({ preventScroll });
		if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
	}
}
__name$1(focusFirst, "focusFirst");
function wrapArray(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
__name$1(wrapArray, "wrapArray");
//#endregion
//#region node_modules/@radix-ui/react-tabs/dist/index.mjs
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var ActivationMode = {
	Automatic: "automatic",
	Manual: "manual"
};
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [createRovingFocusGroupScope]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function Tabs2(props, forwardedRef) {
	const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = ActivationMode.Automatic, ...tabsProps } = props;
	const direction = useDirection(dir);
	const [value, setValue] = useControllableState({
		prop: valueProp,
		onChange: onValueChange,
		defaultProp: defaultValue ?? "",
		caller: TABS_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsProvider, {
		scope: __scopeTabs,
		baseId: useId(),
		value,
		onValueChange: setValue,
		orientation,
		dir: direction,
		activationMode,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			dir: direction,
			"data-orientation": orientation,
			...tabsProps,
			ref: forwardedRef
		})
	});
}, "Tabs"));
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function TabsList2(props, forwardedRef) {
	const { __scopeTabs, loop = true, ...listProps } = props;
	const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroup, {
		asChild: true,
		...rovingFocusGroupScope,
		orientation: context.orientation,
		dir: context.dir,
		loop,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			role: "tablist",
			"aria-orientation": context.orientation,
			...listProps,
			ref: forwardedRef
		})
	});
}, "TabsList"));
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function TabsTrigger2(props, forwardedRef) {
	const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
	const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const isSelected = value === context.value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroupItem, {
		asChild: true,
		...rovingFocusGroupScope,
		focusable: !disabled,
		active: isSelected,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "tab",
			"aria-selected": isSelected,
			"aria-controls": contentId,
			"data-state": isSelected ? "active" : "inactive",
			"data-disabled": disabled ? "" : void 0,
			disabled,
			id: triggerId,
			...triggerProps,
			ref: forwardedRef,
			onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
				if (!disabled && event.button === 0 && event.ctrlKey === false) {
					event.currentTarget.focus();
					context.onValueChange(value);
				} else event.preventDefault();
			}),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if (disabled || event.target !== event.currentTarget) return;
				if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
			}),
			onFocus: composeEventHandlers(props.onFocus, () => {
				const isAutomaticActivation = context.activationMode !== ActivationMode.Manual;
				if (!isSelected && !disabled && isAutomaticActivation) context.onValueChange(value);
			})
		})
	});
}, "TabsTrigger"));
var CONTENT_NAME = "TabsContent";
var TabsContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function TabsContent2(props, forwardedRef) {
	const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
	const context = useTabsContext(CONTENT_NAME, __scopeTabs);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const isSelected = value === context.value;
	const isMountAnimationPreventedRef = import_react.useRef(isSelected);
	import_react.useEffect(() => {
		const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
		return () => cancelAnimationFrame(rAF);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isSelected,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": isSelected ? "active" : "inactive",
			"data-orientation": context.orientation,
			role: "tabpanel",
			"aria-labelledby": triggerId,
			hidden: !present,
			id: contentId,
			tabIndex: 0,
			...contentProps,
			ref: forwardedRef,
			style: {
				...props.style,
				animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
			},
			children: present && children
		})
	});
}, "TabsContent"));
function makeTriggerId(baseId, value) {
	return `${baseId}-trigger-${value}`;
}
__name(makeTriggerId, "makeTriggerId");
function makeContentId(baseId, value) {
	return `${baseId}-content-${value}`;
}
__name(makeContentId, "makeContentId");
//#endregion
//#region src/components/ui/tabs.tsx
var Tabs = Tabs$1;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList$1, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = TabsList$1.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger$1, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = TabsTrigger$1.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent$1, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = TabsContent$1.displayName;
//#endregion
//#region src/components/portal/PayModal.tsx
var methods = [
	"payoneer",
	"wise",
	"paypal",
	"bank_transfer"
];
var field = "w-full rounded-2xl border border-[#CFCFCF] bg-background px-4 py-3 text-[16px] text-ink outline-none focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-ink";
function NotSet() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "type-body",
		children: [
			"We will email you these payment details. Questions? Email",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${site.email}`,
				className: "font-medium text-ink underline underline-offset-4",
				children: site.email
			}),
			"."
		]
	});
}
function PayModal({ invoice, onClose, onReport }) {
	const [step, setStep] = (0, import_react.useState)("details");
	const [method, setMethod] = (0, import_react.useState)("payoneer");
	const [reference, setReference] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const close = () => {
		setStep("details");
		setReference("");
		onClose();
	};
	async function copy() {
		if (!invoice) return;
		try {
			await navigator.clipboard.writeText(invoice.number);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2e3);
		} catch {
			toast.error("Could not copy. Please copy the invoice number by hand.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !!invoice,
		onOpenChange: (o) => !o && close(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto rounded-card sm:max-w-lg",
			children: invoice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
					className: "text-[24px] font-medium",
					children: ["Pay ", invoice.number]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
					"Amount due: ",
					usd(invoiceTotal(invoice)),
					" USD"
				] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-bg-soft p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "type-small text-ink",
						children: [
							"Use ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: invoice.number }),
							" as your payment reference"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: copy,
						className: pillButton({
							size: "sm",
							variant: "secondary"
						}),
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							"aria-hidden": true,
							className: "size-4"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
							"aria-hidden": true,
							className: "size-4"
						}), copied ? "Copied" : "Copy"]
					})]
				}),
				step === "details" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					defaultValue: "payoneer",
					onValueChange: (v) => setMethod(v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
						className: "grid h-auto w-full grid-cols-2 gap-1 rounded-2xl bg-bg-soft p-1 sm:grid-cols-4",
						children: methods.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: m,
							className: "rounded-full py-2",
							children: paymentMethodLabels[m]
						}, m))
					}), methods.map((m) => {
						const link = methodLink(m);
						const bank = m === "bank_transfer" ? bankDetails() : [];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: m,
							className: "pt-4",
							children: m === "bank_transfer" ? bank.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 type-small",
								children: bank.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "contents",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: b.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-medium text-ink",
										children: b.value
									})]
								}, b.label))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotSet, {}) : link ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: link,
								target: "_blank",
								rel: "noopener noreferrer",
								className: pillButton(),
								children: [
									"Pay with ",
									paymentMethodLabels[m],
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
										"aria-hidden": true,
										className: "size-4"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotSet, {})
						}, m);
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
					type: "button",
					variant: "secondary",
					className: "w-full",
					onClick: () => setStep("report"),
					children: "I've paid"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex flex-col gap-4",
					onSubmit: async (e) => {
						e.preventDefault();
						setBusy(true);
						const ok = await onReport(invoice, method, reference);
						setBusy(false);
						if (ok) close();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "pay-method",
							className: "mb-2 block type-small font-medium text-ink",
							children: "How did you pay?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "pay-method",
							value: method,
							onChange: (e) => setMethod(e.target.value),
							className: field,
							children: methods.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: m,
								children: paymentMethodLabels[m]
							}, m))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "pay-ref",
							className: "mb-2 block type-small font-medium text-ink",
							children: [
								"Transaction reference",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-normal text-muted-foreground",
									children: "(optional)"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "pay-ref",
							value: reference,
							maxLength: 200,
							onChange: (e) => setReference(e.target.value),
							className: field
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
								type: "button",
								variant: "secondary",
								onClick: () => setStep("details"),
								children: "Back"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PillButton, {
								type: "submit",
								disabled: busy,
								children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									"aria-hidden": true,
									className: "size-4 animate-spin"
								}), " Confirm payment"]
							})]
						})
					]
				})
			] })
		})
	});
}
//#endregion
//#region src/components/portal/Tour.tsx
var portalTourSteps = [
	{
		target: "progress",
		text: "Your project progress, updated by our team"
	},
	{
		target: "invoices",
		text: "All your invoices in one place"
	},
	{
		target: "pay",
		text: "Pay with Payoneer, Wise, PayPal or bank transfer"
	},
	{
		target: "download",
		text: "Download a PDF copy any time"
	}
];
function findTarget(t) {
	return Array.from(document.querySelectorAll(`[data-tour="${t}"]`)).find((e) => e.getClientRects().length > 0) ?? null;
}
function store(key, v) {
	try {
		if (v === void 0) return window.localStorage.getItem(key);
		window.localStorage.setItem(key, v);
	} catch {}
	return null;
}
/** Guided tour of elements marked data-tour="<target>". Shows once per storageKey; replay via the returned start(). */
function useTour(storageKey, ready) {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (ready && !store(storageKey)) {
			const t = window.setTimeout(() => setOpen(true), 400);
			return () => window.clearTimeout(t);
		}
	}, [ready, storageKey]);
	return {
		open,
		start: () => setOpen(true),
		close: (0, import_react.useCallback)(() => {
			store(storageKey, "done");
			setOpen(false);
		}, [storageKey])
	};
}
function Tour({ steps, open, onClose }) {
	const [i, setI] = (0, import_react.useState)(0);
	const [rect, setRect] = (0, import_react.useState)(null);
	const nextRef = (0, import_react.useRef)(null);
	const available = open ? steps.filter((s) => findTarget(s.target)) : [];
	const step = available[i];
	(0, import_react.useEffect)(() => {
		if (open) setI(0);
	}, [open]);
	const measure = (0, import_react.useCallback)(() => {
		if (!step) return;
		const el = findTarget(step.target);
		if (el) setRect(el.getBoundingClientRect());
	}, [step]);
	(0, import_react.useLayoutEffect)(() => {
		if (!open || !step) return;
		const el = findTarget(step.target);
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		el?.scrollIntoView({
			block: "center",
			behavior: reduce ? "auto" : "smooth"
		});
		measure();
		const t = window.setTimeout(measure, reduce ? 0 : 450);
		window.addEventListener("resize", measure);
		window.addEventListener("scroll", measure, { passive: true });
		return () => {
			window.clearTimeout(t);
			window.removeEventListener("resize", measure);
			window.removeEventListener("scroll", measure);
		};
	}, [
		open,
		step,
		measure
	]);
	const hasRect = !!rect;
	(0, import_react.useEffect)(() => {
		if (open && hasRect) nextRef.current?.focus({ preventScroll: true });
	}, [
		open,
		i,
		hasRect
	]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowRight") setI((v) => Math.min(v + 1, available.length - 1));
			if (e.key === "ArrowLeft") setI((v) => Math.max(v - 1, 0));
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		open,
		onClose,
		available.length
	]);
	if (!open || !step || !rect) return null;
	const last = i === available.length - 1;
	const vw = window.innerWidth;
	const cardW = Math.min(320, vw - 32);
	const top = rect.bottom + 200 < window.innerHeight ? rect.bottom + 12 : Math.max(16, rect.top - 12 - 170);
	const left = Math.min(Math.max(16, rect.left + rect.width / 2 - cardW / 2), vw - cardW - 16);
	const pad = 6;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[70]",
		"aria-live": "polite",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none fixed rounded-2xl ring-2 ring-ink transition-all duration-300",
			style: {
				top: rect.top - pad,
				left: rect.left - pad,
				width: rect.width + 12,
				height: rect.height + 12,
				boxShadow: "0 0 0 9999px rgba(0,0,0,0.45)"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "tour-text",
			className: "fixed rounded-2xl bg-background p-5 shadow-pill",
			style: {
				top,
				left,
				width: cardW
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "type-small text-muted-foreground",
					children: [
						"Step ",
						i + 1,
						" of ",
						available.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: "tour-text",
					className: "mt-2 text-[17px] font-medium text-ink",
					children: step.text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "-my-[3px] type-small py-[3px] font-medium text-ink underline underline-offset-4",
						children: "Skip"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
							type: "button",
							size: "sm",
							variant: "secondary",
							onClick: () => setI(i - 1),
							children: "Back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
							ref: nextRef,
							type: "button",
							size: "sm",
							onClick: () => last ? onClose() : setI(i + 1),
							children: last ? "Done" : "Next"
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/portal/PortalDashboard.tsx
var chipCls = {
	paid: "bg-mint text-mint-ink",
	live: "bg-mint text-mint-ink",
	pending_confirmation: "bg-[#FEF3C7] text-[#78350F]",
	overdue: "bg-[#FEE2E2] text-[#7F1D1D]",
	on_hold: "bg-[#FEE2E2] text-[#7F1D1D]"
};
function Chip({ status, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex rounded-full px-3 py-1 type-small font-medium", chipCls[status] ?? "bg-bg-soft text-ink"),
		children: label
	});
}
function Panel({ title, children, className, tour }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"data-tour": tour,
		"aria-labelledby": `h-${title}`,
		className: cn("rounded-card border border-border bg-background p-6 md:p-8", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			id: `h-${title}`,
			className: "type-h3",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children
		})]
	});
}
function PortalDashboard({ data, mode, onSignOut, onDownloadDeliverable, onDownloadInvoice, onReportPaid }) {
	const [projectId, setProjectId] = (0, import_react.useState)(data.projects[0]?.id ?? "");
	const [paying, setPaying] = (0, import_react.useState)(null);
	const project = data.projects.find((p) => p.id === projectId) ?? data.projects[0];
	const tour = useTour(`incodet-portal-tour-${mode}`, true);
	const invoiceNumbers = (0, import_react.useMemo)(() => new Map(data.invoices.map((i) => [i.id, i.number])), [data.invoices]);
	const payable = (s) => s === "sent" || s === "overdue";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-site pb-[72px] md:pb-[120px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-small text-muted-foreground",
					children: "Client portal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-[34px] leading-tight font-medium tracking-tight text-ink md:text-[44px]",
					children: data.client.business_name || data.client.name
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						data.projects.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2 type-small text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Project" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: project?.id,
								onChange: (e) => setProjectId(e.target.value),
								className: "h-10 rounded-full border border-[#CFCFCF] bg-background px-4 text-ink focus-visible:ring-2 focus-visible:ring-ink",
								children: data.projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: p.id,
									children: p.name
								}, p.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: tour.start,
							"aria-label": "Replay the guided tour",
							className: "flex size-10 items-center justify-center rounded-full border border-border bg-background text-ink hover:bg-bg-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, {
								"aria-hidden": true,
								className: "size-5"
							})
						}),
						mode === "live" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PillButton, {
							type: "button",
							size: "sm",
							variant: "secondary",
							onClick: onSignOut,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
								"aria-hidden": true,
								className: "size-4"
							}), " Sign out"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/portal",
							className: pillButton({
								size: "sm",
								variant: "secondary"
							}),
							children: "Exit demo"
						})
					]
				})]
			}),
			!project ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 type-body",
				children: "Your project will appear here once our team sets it up."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-5 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						"data-tour": "progress",
						"aria-labelledby": "h-progress",
						className: "rounded-card bg-dark p-6 text-on-dark md:p-8 lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									id: "h-progress",
									className: "type-h3 text-on-dark",
									children: project.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-on-dark px-3 py-1 type-small font-medium text-ink",
									children: projectStatusLabels[project.status]
								})]
							}),
							project.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 type-small-body text-on-dark-muted",
								children: project.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-8 text-[64px] leading-none font-medium tracking-tight",
								children: [project.progress, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								role: "progressbar",
								"aria-label": "Project progress",
								"aria-valuenow": project.progress,
								"aria-valuemin": 0,
								"aria-valuemax": 100,
								className: "mt-5 h-3 overflow-hidden rounded-full bg-on-dark/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-on-dark",
									style: { width: `${project.progress}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 type-small text-on-dark-muted",
								children: ["Target date: ", fmtDate(project.target_date)]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Milestones",
						children: project.milestones.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-small",
							children: "No milestones yet."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "flex flex-col gap-4",
							children: project.milestones.map((m) => {
								const Icon = m.status === "done" ? CircleCheck : m.status === "in_progress" ? CircleDot : Circle;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										"aria-hidden": true,
										className: cn("mt-0.5 size-5 shrink-0", m.status === "todo" ? "text-muted-foreground" : "text-ink")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-ink",
										children: m.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "type-small text-muted-foreground",
										children: [milestoneStatusLabels[m.status], m.due_date ? ` · ${fmtDate(m.due_date)}` : ""]
									})] })]
								}, m.id);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Deliverables",
						className: "lg:col-span-3",
						children: project.deliverables.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-small",
							children: "Files will appear here as we share them."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "divide-y divide-border",
							children: project.deliverables.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex flex-wrap items-center justify-between gap-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3 text-ink",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
											"aria-hidden": true,
											className: "size-5"
										}),
										" ",
										d.title
									]
								}), d.file_path ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PillButton, {
									type: "button",
									size: "sm",
									variant: "secondary",
									onClick: () => onDownloadDeliverable(d),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										"aria-hidden": true,
										className: "size-4"
									}), " Download"]
								}) : d.external_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: d.external_url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: pillButton({
										size: "sm",
										variant: "secondary"
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
										"aria-hidden": true,
										className: "size-4"
									}), " Open"]
								}) : null]
							}, d.id))
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Invoices",
				tour: "invoices",
				className: "mt-5",
				children: data.invoices.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-small",
					children: "No invoices yet."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "hidden w-full text-left md:table",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "type-small text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 font-medium",
									children: "Number"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 font-medium",
									children: "Issue date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 font-medium",
									children: "Due date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 font-medium",
									children: "Amount (USD)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 font-medium",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "w-[260px] py-3 text-right font-medium",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Actions"
									})
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: data.invoices.map((inv) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border last:border-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-4 font-medium text-ink",
								children: inv.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-4",
								children: fmtDate(inv.issue_date)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-4",
								children: fmtDate(inv.due_date)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-4 text-ink",
								children: usd(invoiceTotal(inv))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									status: inv.status,
									label: invoiceStatusLabels[inv.status]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "w-[260px] py-4 text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-end gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PillButton, {
										type: "button",
										size: "sm",
										variant: "secondary",
										"data-tour": "download",
										onClick: () => onDownloadInvoice(inv),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
											"aria-hidden": true,
											className: "size-4"
										}), " Download invoice"]
									}), payable(inv.status) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
										type: "button",
										size: "sm",
										"data-tour": "pay",
										onClick: () => setPaying(inv),
										className: "w-[72px]",
										children: "Pay"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "invisible inline-block h-10 w-[72px]"
									})]
								})
							})
						]
					}, inv.id)) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-4 md:hidden",
					children: data.invoices.map((inv) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl border border-border p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-ink",
									children: inv.number
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									status: inv.status,
									label: invoiceStatusLabels[inv.status]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-3 grid grid-cols-2 gap-2 type-small",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "Issue date"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-ink",
										children: fmtDate(inv.issue_date)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "Due date"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-ink",
										children: fmtDate(inv.due_date)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "Amount (USD)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-ink",
										children: usd(invoiceTotal(inv))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PillButton, {
									type: "button",
									size: "sm",
									variant: "secondary",
									"data-tour": "download",
									onClick: () => onDownloadInvoice(inv),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										"aria-hidden": true,
										className: "size-4"
									}), " Download invoice"]
								}), payable(inv.status) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
									type: "button",
									size: "sm",
									"data-tour": "pay",
									onClick: () => setPaying(inv),
									children: "Pay"
								})]
							})
						]
					}, inv.id))
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Payment history",
				className: "mt-5",
				children: data.payments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-small",
					children: "No payments yet."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border",
					children: data.payments.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-wrap items-center justify-between gap-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-medium text-ink",
							children: [
								invoiceNumbers.get(p.invoice_id) ?? "Invoice",
								" ·",
								" ",
								paymentMethodLabels[p.method]
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "type-small text-muted-foreground",
							children: [p.confirmed_at ? `Confirmed ${fmtDate(p.confirmed_at)}` : `Reported ${fmtDate(p.reported_at)}`, p.reference ? ` · Ref ${p.reference}` : ""]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							status: p.confirmed_at ? "paid" : "pending_confirmation",
							label: p.confirmed_at ? "Confirmed" : "Reported"
						})]
					}, p.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayModal, {
				invoice: paying,
				onClose: () => setPaying(null),
				onReport: onReportPaid
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tour, {
				steps: portalTourSteps,
				open: tour.open,
				onClose: tour.close
			})
		]
	});
}
//#endregion
export { PortalDashboard as n, Chip as t };
