var $aJCrN$reactjsxruntime = require("react/jsx-runtime");
var $aJCrN$react = require("react");
var $aJCrN$radixuireactid = require("@radix-ui/react-id");
var $aJCrN$radixuireactusecontrollablestate = require("@radix-ui/react-use-controllable-state");
var $aJCrN$radixuireactcontext = require("@radix-ui/react-context");
var $aJCrN$radixuireactportal = require("@radix-ui/react-portal");
var $aJCrN$rouilockscroll = require("@roui/lock-scroll");
var $aJCrN$radixuiprimitive = require("@radix-ui/primitive");
var $aJCrN$radixuireactcomposerefs = require("@radix-ui/react-compose-refs");
var $aJCrN$radixuireactdismissablelayer = require("@radix-ui/react-dismissable-layer");
var $aJCrN$radixuireactfocusscope = require("@radix-ui/react-focus-scope");
var $aJCrN$radixuireactpresence = require("@radix-ui/react-presence");
var $aJCrN$radixuireactfocusguards = require("@radix-ui/react-focus-guards");
var $aJCrN$radixuireactprimitive = require("@radix-ui/react-primitive");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Dialog", () => $09c2172a34ceebe4$export$2e2bcd8739ae039);
$parcel$export(module.exports, "DialogPortal", () => $88a154937b8c0d42$export$2e2bcd8739ae039);
$parcel$export(module.exports, "DialogContent", () => $dfbf798e0803b3ab$export$2e2bcd8739ae039);
$parcel$export(module.exports, "DialogOverlay", () => $29acfeeace899570$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Portal", () => $88a154937b8c0d42$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Content", () => $dfbf798e0803b3ab$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Overlay", () => $29acfeeace899570$export$2e2bcd8739ae039);





const $48efaee55876917b$export$475d9ae028cfe45e = "Dialog";
const $48efaee55876917b$export$5608130cb88a2915 = "DialogPresence";
const $48efaee55876917b$export$13a090075d34f11c = "DialogOverlay";
const $48efaee55876917b$export$83ae6148e1d25302 = "DialogContent";
const $48efaee55876917b$export$b906ef6790b23235 = "DialogPortal";
const [$48efaee55876917b$export$28cae32d2a4ac1e2, $48efaee55876917b$export$cc702773b8ea3e41] = (0, $aJCrN$radixuireactcontext.createContextScope)($48efaee55876917b$export$475d9ae028cfe45e);
const $48efaee55876917b$export$50fdfeece43146fd = (open)=>open ? "open" : "closed";


const [$09c2172a34ceebe4$var$DialogProvider, $09c2172a34ceebe4$export$898e461c0669e62d] = (0, $48efaee55876917b$export$28cae32d2a4ac1e2)((0, $48efaee55876917b$export$475d9ae028cfe45e), {
    dialogId: "",
    open: false,
    onOpenChange: (val)=>{},
    onOpenToggle: ()=>{},
    modal: true
});
const $09c2172a34ceebe4$var$Dialog = (props)=>{
    const { __scopeDialog: __scopeDialog , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const triggerRef = (0, ($parcel$interopDefault($aJCrN$react))).useRef(null);
    const contentRef = (0, ($parcel$interopDefault($aJCrN$react))).useRef(null);
    const [open = false, setOpen] = (0, $aJCrN$radixuireactusecontrollablestate.useControllableState)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ (0, $aJCrN$reactjsxruntime.jsx)($09c2172a34ceebe4$var$DialogProvider, {
        scope: __scopeDialog,
        triggerRef: triggerRef,
        contentRef: contentRef,
        dialogId: (0, $aJCrN$radixuireactid.useId)(),
        open: open,
        onOpenChange: setOpen,
        onOpenToggle: (0, ($parcel$interopDefault($aJCrN$react))).useCallback(()=>setOpen((prevOpen)=>!prevOpen), [
            setOpen
        ]),
        modal: modal,
        children: children
    });
};
var $09c2172a34ceebe4$export$2e2bcd8739ae039 = $09c2172a34ceebe4$var$Dialog;








const [$88a154937b8c0d42$var$PortalProvider, $88a154937b8c0d42$export$40dd24f08c9c9fa8] = (0, $48efaee55876917b$export$28cae32d2a4ac1e2)((0, $48efaee55876917b$export$b906ef6790b23235), {
    forceMount: undefined
});
const [$88a154937b8c0d42$var$PresenceProvider, $88a154937b8c0d42$var$usePresenceContext] = (0, $48efaee55876917b$export$28cae32d2a4ac1e2)((0, $48efaee55876917b$export$5608130cb88a2915), {
    count: 0
});
const $88a154937b8c0d42$var$PresenceGroup = (props)=>{
    const { open: open  } = (0, $09c2172a34ceebe4$export$898e461c0669e62d)((0, $48efaee55876917b$export$5608130cb88a2915), props.__scopeDialog);
    const [count, setCount] = (0, ($parcel$interopDefault($aJCrN$react))).useState(0);
    const _open = open || !open && count > 0;
    (0, $aJCrN$rouilockscroll.useScrollLocker)(_open);
    return /*#__PURE__*/ (0, $aJCrN$reactjsxruntime.jsx)($88a154937b8c0d42$var$PresenceProvider, {
        onSub: ()=>setCount((prev)=>prev + 1),
        onUnSub: ()=>setCount((prev)=>prev == 0 ? 0 : prev - 1),
        count: count,
        scope: props.__scopeDialog,
        children: _open ? props.children : null
    });
};
const $88a154937b8c0d42$var$DialogPortal = (props)=>{
    const { __scopeDialog: __scopeDialog , forceMount: forceMount , children: children , container: container , ...rest } = props;
    return /*#__PURE__*/ (0, $aJCrN$reactjsxruntime.jsx)($88a154937b8c0d42$var$PortalProvider, {
        scope: __scopeDialog,
        forceMount: forceMount,
        children: /*#__PURE__*/ (0, $aJCrN$reactjsxruntime.jsx)((0, $aJCrN$radixuireactportal.Portal), {
            container: container,
            asChild: (0, ($parcel$interopDefault($aJCrN$react))).Children.count(children) < 2,
            ...rest,
            children: /*#__PURE__*/ (0, $aJCrN$reactjsxruntime.jsx)($88a154937b8c0d42$var$PresenceGroup, {
                children: children
            })
        })
    });
};
$88a154937b8c0d42$var$DialogPortal.displayName = (0, $48efaee55876917b$export$b906ef6790b23235);
const $88a154937b8c0d42$export$de9af8c036df97b5 = (consumerName, scope)=>{
    const pContext = $88a154937b8c0d42$var$usePresenceContext(consumerName, scope);
    (0, ($parcel$interopDefault($aJCrN$react))).useEffect(()=>{
        pContext.onSub?.();
        return ()=>{
            pContext.onUnSub?.();
        };
    }, []);
};
var $88a154937b8c0d42$export$2e2bcd8739ae039 = $88a154937b8c0d42$var$DialogPortal;













const $dfbf798e0803b3ab$var$DialogContentModal = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , onOpenAutoFocus: onOpenAutoFocus , onCloseAutoFocus: onCloseAutoFocus , ...contentProps } = props;
    const contentRef = $aJCrN$react.useRef(null);
    const context = (0, $09c2172a34ceebe4$export$898e461c0669e62d)((0, $48efaee55876917b$export$83ae6148e1d25302), __scopeDialog);
    const composedRefs = (0, $aJCrN$radixuireactcomposerefs.useComposedRefs)(forwardedRef, context.contentRef, contentRef);
    (0, $88a154937b8c0d42$export$de9af8c036df97b5)((0, $48efaee55876917b$export$83ae6148e1d25302), __scopeDialog);
    (0, $aJCrN$radixuireactfocusguards.useFocusGuards)();
    return /*#__PURE__*/ (0, $aJCrN$reactjsxruntime.jsx)((0, $aJCrN$radixuireactfocusscope.FocusScope), {
        asChild: true,
        loop: true,
        trapped: context.open,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: (0, $aJCrN$radixuiprimitive.composeEventHandlers)(props.onCloseAutoFocus, (event)=>{
            event.preventDefault();
            context.triggerRef?.current?.focus();
        }),
        children: /*#__PURE__*/ (0, $aJCrN$reactjsxruntime.jsx)((0, $aJCrN$radixuireactdismissablelayer.DismissableLayer), {
            role: "dialog",
            id: `${context.dialogId}content`,
            "aria-describedby": `${context.dialogId}description`,
            "aria-labelledby": `${context.dialogId}title`,
            "data-state": (0, $48efaee55876917b$export$50fdfeece43146fd)(context.open),
            "aria-modal": "true",
            ...contentProps,
            onPointerDownOutside: (0, $aJCrN$radixuiprimitive.composeEventHandlers)(props.onPointerDownOutside, (event)=>{
                const originalEvent = event.detail.originalEvent;
                const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
                const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
                // If the event is a right-click, we shouldn't close because
                // it is effectively as if we right-clicked the `Overlay`.
                if (isRightClick) event.preventDefault();
            }),
            onFocusOutside: (0, $aJCrN$radixuiprimitive.composeEventHandlers)(props.onFocusOutside, (event)=>event.preventDefault()),
            ref: composedRefs,
            onDismiss: ()=>context.onOpenChange(false)
        })
    });
});
const $dfbf798e0803b3ab$var$DialogContent = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , forceMount: forceMount , ...contentProps } = props;
    const portalContext = (0, $88a154937b8c0d42$export$40dd24f08c9c9fa8)((0, $48efaee55876917b$export$83ae6148e1d25302), __scopeDialog);
    const context = (0, $09c2172a34ceebe4$export$898e461c0669e62d)((0, $48efaee55876917b$export$83ae6148e1d25302), __scopeDialog);
    return /*#__PURE__*/ (0, $aJCrN$reactjsxruntime.jsx)((0, $aJCrN$radixuireactpresence.Presence), {
        present: (forceMount ?? portalContext.forceMount) || context.open,
        children: /*#__PURE__*/ (0, $aJCrN$reactjsxruntime.jsx)($dfbf798e0803b3ab$var$DialogContentModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
$dfbf798e0803b3ab$var$DialogContent.displayName = (0, $48efaee55876917b$export$83ae6148e1d25302);
var $dfbf798e0803b3ab$export$2e2bcd8739ae039 = $dfbf798e0803b3ab$var$DialogContent;










const $29acfeeace899570$var$DialogOverlayImpl = /*#__PURE__*/ (0, ($parcel$interopDefault($aJCrN$react))).forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...overlayProps } = props;
    const context = (0, $09c2172a34ceebe4$export$898e461c0669e62d)((0, $48efaee55876917b$export$13a090075d34f11c), __scopeDialog);
    (0, $88a154937b8c0d42$export$de9af8c036df97b5)((0, $48efaee55876917b$export$13a090075d34f11c), __scopeDialog);
    return /*#__PURE__*/ (0, $aJCrN$reactjsxruntime.jsx)((0, $aJCrN$radixuireactprimitive.Primitive).div, {
        "data-state": (0, $48efaee55876917b$export$50fdfeece43146fd)(context.open),
        ...overlayProps,
        ref: forwardedRef,
        style: {
            pointerEvents: "auto",
            ...overlayProps.style
        }
    });
});
const $29acfeeace899570$var$DialogOverlay = /*#__PURE__*/ (0, ($parcel$interopDefault($aJCrN$react))).forwardRef((props, forwardedRef)=>{
    const { forceMount: forceMount , __scopeDialog: __scopeDialog , ...overlayProps } = props;
    const context = (0, $09c2172a34ceebe4$export$898e461c0669e62d)((0, $48efaee55876917b$export$13a090075d34f11c), __scopeDialog);
    const portalContext = (0, $88a154937b8c0d42$export$40dd24f08c9c9fa8)((0, $48efaee55876917b$export$13a090075d34f11c), __scopeDialog);
    return context.modal ? /*#__PURE__*/ (0, $aJCrN$reactjsxruntime.jsx)((0, $aJCrN$radixuireactpresence.Presence), {
        present: (forceMount ?? portalContext.forceMount) || context.open,
        children: /*#__PURE__*/ (0, $aJCrN$reactjsxruntime.jsx)($29acfeeace899570$var$DialogOverlayImpl, {
            ...overlayProps,
            ref: forwardedRef
        })
    }) : null;
});
$29acfeeace899570$var$DialogOverlay.displayName = (0, $48efaee55876917b$export$13a090075d34f11c);
var $29acfeeace899570$export$2e2bcd8739ae039 = $29acfeeace899570$var$DialogOverlay;




//# sourceMappingURL=index.js.map
