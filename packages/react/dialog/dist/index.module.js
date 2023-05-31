import {jsx as $67UHm$jsx} from "react/jsx-runtime";
import $67UHm$react, {forwardRef as $67UHm$forwardRef, useRef as $67UHm$useRef} from "react";
import {useId as $67UHm$useId} from "@radix-ui/react-id";
import {useControllableState as $67UHm$useControllableState} from "@radix-ui/react-use-controllable-state";
import {createContextScope as $67UHm$createContextScope} from "@radix-ui/react-context";
import {Portal as $67UHm$Portal} from "@radix-ui/react-portal";
import {useScrollLocker as $67UHm$useScrollLocker} from "@roui/lock-scroll";
import {composeEventHandlers as $67UHm$composeEventHandlers} from "@radix-ui/primitive";
import {useComposedRefs as $67UHm$useComposedRefs} from "@radix-ui/react-compose-refs";
import {DismissableLayer as $67UHm$DismissableLayer} from "@radix-ui/react-dismissable-layer";
import {FocusScope as $67UHm$FocusScope} from "@radix-ui/react-focus-scope";
import {Presence as $67UHm$Presence} from "@radix-ui/react-presence";
import {useFocusGuards as $67UHm$useFocusGuards} from "@radix-ui/react-focus-guards";
import {Primitive as $67UHm$Primitive} from "@radix-ui/react-primitive";






const $6ae8ad6f9300bfb1$export$475d9ae028cfe45e = "Dialog";
const $6ae8ad6f9300bfb1$export$5608130cb88a2915 = "DialogPresence";
const $6ae8ad6f9300bfb1$export$13a090075d34f11c = "DialogOverlay";
const $6ae8ad6f9300bfb1$export$83ae6148e1d25302 = "DialogContent";
const $6ae8ad6f9300bfb1$export$b906ef6790b23235 = "DialogPortal";
const [$6ae8ad6f9300bfb1$export$28cae32d2a4ac1e2, $6ae8ad6f9300bfb1$export$cc702773b8ea3e41] = (0, $67UHm$createContextScope)($6ae8ad6f9300bfb1$export$475d9ae028cfe45e);
const $6ae8ad6f9300bfb1$export$50fdfeece43146fd = (open)=>open ? "open" : "closed";


const [$8f3594d61688cce7$var$DialogProvider, $8f3594d61688cce7$export$898e461c0669e62d] = (0, $6ae8ad6f9300bfb1$export$28cae32d2a4ac1e2)((0, $6ae8ad6f9300bfb1$export$475d9ae028cfe45e), {
    dialogId: "",
    open: false,
    onOpenChange: (val)=>{},
    onOpenToggle: ()=>{},
    modal: true
});
const $8f3594d61688cce7$var$Dialog = (props)=>{
    const { __scopeDialog: __scopeDialog , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const triggerRef = (0, $67UHm$react).useRef(null);
    const contentRef = (0, $67UHm$react).useRef(null);
    const [open = false, setOpen] = (0, $67UHm$useControllableState)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ (0, $67UHm$jsx)($8f3594d61688cce7$var$DialogProvider, {
        scope: __scopeDialog,
        triggerRef: triggerRef,
        contentRef: contentRef,
        dialogId: (0, $67UHm$useId)(),
        open: open,
        onOpenChange: setOpen,
        onOpenToggle: (0, $67UHm$react).useCallback(()=>setOpen((prevOpen)=>!prevOpen), [
            setOpen
        ]),
        modal: modal,
        children: children
    });
};
var $8f3594d61688cce7$export$2e2bcd8739ae039 = $8f3594d61688cce7$var$Dialog;








const [$ce455b6aa4e9ab25$var$PortalProvider, $ce455b6aa4e9ab25$export$40dd24f08c9c9fa8] = (0, $6ae8ad6f9300bfb1$export$28cae32d2a4ac1e2)((0, $6ae8ad6f9300bfb1$export$b906ef6790b23235), {
    forceMount: undefined
});
const [$ce455b6aa4e9ab25$var$PresenceProvider, $ce455b6aa4e9ab25$var$usePresenceContext] = (0, $6ae8ad6f9300bfb1$export$28cae32d2a4ac1e2)((0, $6ae8ad6f9300bfb1$export$5608130cb88a2915), {
    count: 0
});
const $ce455b6aa4e9ab25$var$PresenceGroup = (props)=>{
    const { open: open  } = (0, $8f3594d61688cce7$export$898e461c0669e62d)((0, $6ae8ad6f9300bfb1$export$5608130cb88a2915), props.__scopeDialog);
    const [count, setCount] = (0, $67UHm$react).useState(0);
    const _open = open || !open && count > 0;
    (0, $67UHm$useScrollLocker)(_open);
    return /*#__PURE__*/ (0, $67UHm$jsx)($ce455b6aa4e9ab25$var$PresenceProvider, {
        onSub: ()=>setCount((prev)=>prev + 1),
        onUnSub: ()=>setCount((prev)=>prev == 0 ? 0 : prev - 1),
        count: count,
        scope: props.__scopeDialog,
        children: _open ? props.children : null
    });
};
const $ce455b6aa4e9ab25$var$DialogPortal = (props)=>{
    const { __scopeDialog: __scopeDialog , forceMount: forceMount , children: children , container: container , ...rest } = props;
    return /*#__PURE__*/ (0, $67UHm$jsx)($ce455b6aa4e9ab25$var$PortalProvider, {
        scope: __scopeDialog,
        forceMount: forceMount,
        children: /*#__PURE__*/ (0, $67UHm$jsx)((0, $67UHm$Portal), {
            container: container,
            asChild: (0, $67UHm$react).Children.count(children) < 2,
            ...rest,
            children: /*#__PURE__*/ (0, $67UHm$jsx)($ce455b6aa4e9ab25$var$PresenceGroup, {
                children: children
            })
        })
    });
};
$ce455b6aa4e9ab25$var$DialogPortal.displayName = (0, $6ae8ad6f9300bfb1$export$b906ef6790b23235);
const $ce455b6aa4e9ab25$export$de9af8c036df97b5 = (consumerName, scope)=>{
    const pContext = $ce455b6aa4e9ab25$var$usePresenceContext(consumerName, scope);
    (0, $67UHm$react).useEffect(()=>{
        pContext.onSub?.();
        return ()=>{
            pContext.onUnSub?.();
        };
    }, []);
};
var $ce455b6aa4e9ab25$export$2e2bcd8739ae039 = $ce455b6aa4e9ab25$var$DialogPortal;













const $83a7ca2e5097ddd4$var$DialogContentModal = /*#__PURE__*/ $67UHm$forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , onOpenAutoFocus: onOpenAutoFocus , onCloseAutoFocus: onCloseAutoFocus , ...contentProps } = props;
    const contentRef = $67UHm$useRef(null);
    const context = (0, $8f3594d61688cce7$export$898e461c0669e62d)((0, $6ae8ad6f9300bfb1$export$83ae6148e1d25302), __scopeDialog);
    const composedRefs = (0, $67UHm$useComposedRefs)(forwardedRef, context.contentRef, contentRef);
    (0, $ce455b6aa4e9ab25$export$de9af8c036df97b5)((0, $6ae8ad6f9300bfb1$export$83ae6148e1d25302), __scopeDialog);
    (0, $67UHm$useFocusGuards)();
    return /*#__PURE__*/ (0, $67UHm$jsx)((0, $67UHm$FocusScope), {
        asChild: true,
        loop: true,
        trapped: context.open,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: (0, $67UHm$composeEventHandlers)(props.onCloseAutoFocus, (event)=>{
            event.preventDefault();
            context.triggerRef?.current?.focus();
        }),
        children: /*#__PURE__*/ (0, $67UHm$jsx)((0, $67UHm$DismissableLayer), {
            role: "dialog",
            id: `${context.dialogId}content`,
            "aria-describedby": `${context.dialogId}description`,
            "aria-labelledby": `${context.dialogId}title`,
            "data-state": (0, $6ae8ad6f9300bfb1$export$50fdfeece43146fd)(context.open),
            "aria-modal": "true",
            ...contentProps,
            onPointerDownOutside: (0, $67UHm$composeEventHandlers)(props.onPointerDownOutside, (event)=>{
                const originalEvent = event.detail.originalEvent;
                const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
                const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
                // If the event is a right-click, we shouldn't close because
                // it is effectively as if we right-clicked the `Overlay`.
                if (isRightClick) event.preventDefault();
            }),
            onFocusOutside: (0, $67UHm$composeEventHandlers)(props.onFocusOutside, (event)=>event.preventDefault()),
            ref: composedRefs,
            onDismiss: ()=>context.onOpenChange(false)
        })
    });
});
const $83a7ca2e5097ddd4$var$DialogContent = /*#__PURE__*/ $67UHm$forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , forceMount: forceMount , ...contentProps } = props;
    const portalContext = (0, $ce455b6aa4e9ab25$export$40dd24f08c9c9fa8)((0, $6ae8ad6f9300bfb1$export$83ae6148e1d25302), __scopeDialog);
    const context = (0, $8f3594d61688cce7$export$898e461c0669e62d)((0, $6ae8ad6f9300bfb1$export$83ae6148e1d25302), __scopeDialog);
    return /*#__PURE__*/ (0, $67UHm$jsx)((0, $67UHm$Presence), {
        present: (forceMount ?? portalContext.forceMount) || context.open,
        children: /*#__PURE__*/ (0, $67UHm$jsx)($83a7ca2e5097ddd4$var$DialogContentModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
$83a7ca2e5097ddd4$var$DialogContent.displayName = (0, $6ae8ad6f9300bfb1$export$83ae6148e1d25302);
var $83a7ca2e5097ddd4$export$2e2bcd8739ae039 = $83a7ca2e5097ddd4$var$DialogContent;










const $c8b9a21014fffdbd$var$DialogOverlayImpl = /*#__PURE__*/ (0, $67UHm$react).forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...overlayProps } = props;
    const context = (0, $8f3594d61688cce7$export$898e461c0669e62d)((0, $6ae8ad6f9300bfb1$export$13a090075d34f11c), __scopeDialog);
    (0, $ce455b6aa4e9ab25$export$de9af8c036df97b5)((0, $6ae8ad6f9300bfb1$export$13a090075d34f11c), __scopeDialog);
    return /*#__PURE__*/ (0, $67UHm$jsx)((0, $67UHm$Primitive).div, {
        "data-state": (0, $6ae8ad6f9300bfb1$export$50fdfeece43146fd)(context.open),
        ...overlayProps,
        ref: forwardedRef,
        style: {
            pointerEvents: "auto",
            ...overlayProps.style
        }
    });
});
const $c8b9a21014fffdbd$var$DialogOverlay = /*#__PURE__*/ (0, $67UHm$react).forwardRef((props, forwardedRef)=>{
    const { forceMount: forceMount , __scopeDialog: __scopeDialog , ...overlayProps } = props;
    const context = (0, $8f3594d61688cce7$export$898e461c0669e62d)((0, $6ae8ad6f9300bfb1$export$13a090075d34f11c), __scopeDialog);
    const portalContext = (0, $ce455b6aa4e9ab25$export$40dd24f08c9c9fa8)((0, $6ae8ad6f9300bfb1$export$13a090075d34f11c), __scopeDialog);
    return context.modal ? /*#__PURE__*/ (0, $67UHm$jsx)((0, $67UHm$Presence), {
        present: (forceMount ?? portalContext.forceMount) || context.open,
        children: /*#__PURE__*/ (0, $67UHm$jsx)($c8b9a21014fffdbd$var$DialogOverlayImpl, {
            ...overlayProps,
            ref: forwardedRef
        })
    }) : null;
});
$c8b9a21014fffdbd$var$DialogOverlay.displayName = (0, $6ae8ad6f9300bfb1$export$13a090075d34f11c);
var $c8b9a21014fffdbd$export$2e2bcd8739ae039 = $c8b9a21014fffdbd$var$DialogOverlay;




export {$8f3594d61688cce7$export$2e2bcd8739ae039 as Dialog, $ce455b6aa4e9ab25$export$2e2bcd8739ae039 as DialogPortal, $ce455b6aa4e9ab25$export$2e2bcd8739ae039 as Portal, $83a7ca2e5097ddd4$export$2e2bcd8739ae039 as DialogContent, $83a7ca2e5097ddd4$export$2e2bcd8739ae039 as Content, $c8b9a21014fffdbd$export$2e2bcd8739ae039 as DialogOverlay, $c8b9a21014fffdbd$export$2e2bcd8739ae039 as Overlay};
//# sourceMappingURL=index.module.js.map
