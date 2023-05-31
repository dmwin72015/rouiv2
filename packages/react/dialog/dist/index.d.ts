import React from "react";
import * as Radix from "@radix-ui/react-primitive";
import { Primitive } from "@radix-ui/react-primitive";
import { DismissableLayer } from "@radix-ui/react-dismissable-layer";
import { FocusScope } from "@radix-ui/react-focus-scope";
import { Portal as _Portal1 } from "@radix-ui/react-portal";
type DismissableLayerProps = Radix.ComponentPropsWithoutRef<typeof DismissableLayer>;
type FocusScopeProps = Radix.ComponentPropsWithoutRef<typeof FocusScope>;
export interface DialogProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    modal?: boolean;
}
interface DialogOverlayImplProps extends Radix.ComponentPropsWithoutRef<typeof Primitive.div> {
}
export interface DialogOverlayProps extends DialogOverlayImplProps {
    forceMount?: true;
}
interface DialogContentImplProps extends Omit<DismissableLayerProps, "onDismiss"> {
    trapFocus?: FocusScopeProps["trapped"];
    onOpenAutoFocus?: FocusScopeProps["onMountAutoFocus"];
    onCloseAutoFocus?: FocusScopeProps["onUnmountAutoFocus"];
}
interface DialogContentTypeProps extends Omit<DialogContentImplProps, "trapFocus" | "disableOutsidePointerEvents"> {
}
export interface DialogContentProps extends DialogContentTypeProps {
    forceMount?: true;
}
type PortalProps = React.ComponentPropsWithoutRef<typeof _Portal1>;
export interface DialogPortalProps extends Omit<PortalProps, "asChild"> {
    children?: React.ReactNode;
    forceMount?: true;
}
export default Dialog;
export const DialogPortal: React.FC<DialogPortalProps>;
export default DialogPortal;
export const DialogContent: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>>;
export default DialogContent;
export const DialogOverlay: React.ForwardRefExoticComponent<DialogOverlayProps & React.RefAttributes<HTMLDivElement>>;
export default DialogOverlay;

//# sourceMappingURL=index.d.ts.map
