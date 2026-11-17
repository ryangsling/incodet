import { n as __toESM } from "./rolldown-runtime-BPOCksWG.js";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DGkIEq3F.js";
import { c as createContextScope, o as composeEventHandlers } from "./dist-H7EBpuXu.js";
import { n as cn } from "./dist-Cm5lzMt_.js";
import { i as useComposedRefs } from "./dist-DoHzOJyV.js";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, l as createDialogScope, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "./dist-ByW0wQDP.js";
import { n as buttonVariants } from "./button-CfK1iZoW.js";
//#region node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var [createAlertDialogContext, createAlertDialogScope] = createContextScope("AlertDialog", [createDialogScope]);
var useDialogScope = createDialogScope();
var AlertDialog$1 = /* @__PURE__ */ __name((props) => {
	const { __scopeAlertDialog, ...alertDialogProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		...dialogScope,
		...alertDialogProps,
		modal: true
	});
}, "AlertDialog");
import_react.forwardRef(/* @__PURE__ */ __name(function AlertDialogTrigger2(props, forwardedRef) {
	const { __scopeAlertDialog, ...triggerProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
		...dialogScope,
		...triggerProps,
		ref: forwardedRef
	});
}, "AlertDialogTrigger"));
var AlertDialogPortal$1 = /* @__PURE__ */ __name((props) => {
	const { __scopeAlertDialog, ...portalProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal, {
		...dialogScope,
		...portalProps
	});
}, "AlertDialogPortal");
var AlertDialogOverlay$1 = import_react.forwardRef(/* @__PURE__ */ __name(function AlertDialogOverlay2(props, forwardedRef) {
	const { __scopeAlertDialog, ...overlayProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
		...dialogScope,
		...overlayProps,
		ref: forwardedRef
	});
}, "AlertDialogOverlay"));
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext("AlertDialogContent");
var AlertDialogContent$1 = import_react.forwardRef(/* @__PURE__ */ __name(function AlertDialogContent2(props, forwardedRef) {
	const { __scopeAlertDialog, children, ...contentProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, contentRef);
	const cancelRef = import_react.useRef(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogContentProvider, {
		scope: __scopeAlertDialog,
		cancelRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			role: "alertdialog",
			...dialogScope,
			...contentProps,
			ref: composedRefs,
			onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
				event.preventDefault();
				cancelRef.current?.focus({ preventScroll: true });
			}),
			onPointerDownOutside: (event) => event.preventDefault(),
			onInteractOutside: (event) => event.preventDefault(),
			children
		})
	});
}, "AlertDialogContent"));
var AlertDialogTitle$1 = import_react.forwardRef(/* @__PURE__ */ __name(function AlertDialogTitle2(props, forwardedRef) {
	const { __scopeAlertDialog, ...titleProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		...dialogScope,
		...titleProps,
		ref: forwardedRef
	});
}, "AlertDialogTitle"));
var AlertDialogDescription$1 = import_react.forwardRef(/* @__PURE__ */ __name(function AlertDialogDescription2(props, forwardedRef) {
	const { __scopeAlertDialog, ...descriptionProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
		...dialogScope,
		...descriptionProps,
		ref: forwardedRef
	});
}, "AlertDialogDescription"));
var AlertDialogAction$1 = import_react.forwardRef(/* @__PURE__ */ __name(function AlertDialogAction2(props, forwardedRef) {
	const { __scopeAlertDialog, ...actionProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
		...dialogScope,
		...actionProps,
		ref: forwardedRef
	});
}, "AlertDialogAction"));
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = import_react.forwardRef(/* @__PURE__ */ __name(function AlertDialogCancel2(props, forwardedRef) {
	const { __scopeAlertDialog, ...cancelProps } = props;
	const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
	const dialogScope = useDialogScope(__scopeAlertDialog);
	const ref = useComposedRefs(forwardedRef, cancelRef);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
		...dialogScope,
		...cancelProps,
		ref
	});
}, "AlertDialogCancel"));
//#endregion
//#region src/components/ui/alert-dialog.tsx
var AlertDialog = AlertDialog$1;
var AlertDialogPortal = AlertDialogPortal$1;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
AlertDialogOverlay.displayName = AlertDialogOverlay$1.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props
})] }));
AlertDialogContent.displayName = AlertDialogContent$1.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold", className),
	...props
}));
AlertDialogTitle.displayName = AlertDialogTitle$1.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
AlertDialogDescription.displayName = AlertDialogDescription$1.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction$1, {
	ref,
	className: cn(buttonVariants(), className),
	...props
}));
AlertDialogAction.displayName = AlertDialogAction$1.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel$1, {
	ref,
	className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
	...props
}));
AlertDialogCancel.displayName = AlertDialogCancel$1.displayName;
//#endregion
//#region src/components/admin/ui.tsx
var inputCls = "w-full rounded-xl border border-[#CFCFCF] bg-background px-3 py-2 text-[15px] text-ink outline-none focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-ink";
function Field({ label, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: cn("flex flex-col gap-1.5 type-small font-medium text-ink", className),
		children: [label, children]
	});
}
function AdminTitle({ title, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 flex flex-wrap items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-[28px] font-medium tracking-tight text-ink md:text-[34px]",
			children: title
		}), action]
	});
}
function Box({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-2xl border border-border bg-background p-5", className),
		children
	});
}
/** Confirm dialog wrapper: renders trigger, asks before running onConfirm. */
function ConfirmButton({ label, title, description, onConfirm, className }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => setOpen(true),
		className: cn("type-small font-medium text-destructive underline underline-offset-4", className),
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: description })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
			onClick: () => void onConfirm(),
			children: "Delete"
		})] })] })
	})] });
}
//#endregion
export { inputCls as a, Field as i, Box as n, ConfirmButton as r, AdminTitle as t };
