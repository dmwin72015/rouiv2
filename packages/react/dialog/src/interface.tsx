import * as React from "react";
import type * as Radix from "@radix-ui/react-primitive";
import { DismissableLayer } from "@radix-ui/react-dismissable-layer";
import { FocusScope } from "@radix-ui/react-focus-scope";
import { Primitive } from "@radix-ui/react-primitive";
import { Portal as PortalPrimitive } from "@radix-ui/react-portal";

import type { Scope } from "@radix-ui/react-context";

export type ScopedProps<P> = P & { __scopeDialog?: Scope };

/* Base */
type DismissableLayerProps = Radix.ComponentPropsWithoutRef<
  typeof DismissableLayer
>;
type FocusScopeProps = Radix.ComponentPropsWithoutRef<typeof FocusScope>;

/* Root */
export type DialogContextValue = {
  triggerRef?: React.RefObject<HTMLButtonElement>;
  contentRef?: React.RefObject<DialogContentElement>;
  dialogId: string;
  open: boolean;
  onOpenChange(open: boolean): void;
  onOpenToggle(): void;
  modal: boolean;
};

export interface DialogProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
  modal?: boolean;
}

export type PresenceGroupContextValue = {
  onSub?(): void;
  onUnSub?(): void;
  count: number;
};

/* Overlay */
export type DialogOverlayImplElement = React.ElementRef<typeof Primitive.div>;
export type DialogOverlayElement = DialogOverlayImplElement;
export interface DialogOverlayImplProps
  extends Radix.ComponentPropsWithoutRef<typeof Primitive.div> {}
export interface DialogOverlayProps extends DialogOverlayImplProps {
  forceMount?: true;
}

/*Content */
export interface DialogContentImplProps
  extends Omit<DismissableLayerProps, "onDismiss"> {
  trapFocus?: FocusScopeProps["trapped"];
  onOpenAutoFocus?: FocusScopeProps["onMountAutoFocus"];
  onCloseAutoFocus?: FocusScopeProps["onUnmountAutoFocus"];
}
export interface DialogContentTypeProps
  extends Omit<
    DialogContentImplProps,
    "trapFocus" | "disableOutsidePointerEvents"
  > {}

export type DialogContentImplElement = React.ElementRef<
  typeof DismissableLayer
>;
export type DialogContentElement = DialogContentImplElement;
export type DialogContentTypeElement = DialogContentImplElement;

export interface DialogContentProps extends DialogContentTypeProps {
  forceMount?: true;
}

/** Portal */
export type PortalContextValue = {
  forceMount?: true;
  open?: boolean;
  onChange?: (val?: boolean) => void;
};

export type PortalProps = React.ComponentPropsWithoutRef<
  typeof PortalPrimitive
>;

export interface DialogPortalProps extends Omit<PortalProps, "asChild"> {
  children?: React.ReactNode;
  forceMount?: true;
}

//
export { Scope };
