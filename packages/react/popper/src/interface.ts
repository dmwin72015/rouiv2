import { Primitive } from "@radix-ui/react-primitive";
import type { Scope } from "@radix-ui/react-context";
import type * as Radix from "@radix-ui/react-primitive";
import type { Measurable } from "@radix-ui/rect";
import * as ArrowPrimitive from "@radix-ui/react-arrow";

/* -----------------------
 * PopperCommon
 * ----------------------- */

export type ScopedProps<P> = P & { __scopePopper?: Scope };
export type PrimitiveDivProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.div
>;

export const SideOptions = ["top", "right", "bottom", "left"] as const;
export const AlignOptions = ["start", "center", "end"] as const;

export type Side = (typeof SideOptions)[number];
export type Align = (typeof AlignOptions)[number];

/* -----------------------
 * PopperRoot
 * ----------------------- */

export interface PopperProps {
  children?: React.ReactNode;
}

export type PopperContextValue = {
  anchor: Measurable | null;
  onAnchorChange(anchor: Measurable | null): void;
};

/* -----------------------
 * PopperAnchor
 * ----------------------- */

export type PopperAnchorElement = React.ElementRef<typeof Primitive.div>;
export interface PopperAnchorProps extends PrimitiveDivProps {
  virtualRef?: React.RefObject<Measurable>;
}

/* -----------------------
 * PopperContent
 * ----------------------- */

export type PopperContentContextValue = {
  placedSide: Side;
  onArrowChange(arrow: HTMLSpanElement | null): void;
  arrowX?: number;
  arrowY?: number;
  shouldHideArrow: boolean;
};

type Boundary = Element | null;

export type PopperContentElement = React.ElementRef<typeof Primitive.div>;

export interface PopperContentProps extends PrimitiveDivProps {
  side?: Side;
  sideOffset?: number;
  align?: Align;
  alignOffset?: number;
  arrowPadding?: number;
  collisionBoundary?: Boundary | Boundary[];
  collisionPadding?: number | Partial<Record<Side, number>>;
  sticky?: "partial" | "always";
  hideWhenDetached?: boolean;
  avoidCollisions?: boolean;
  onPlaced?: () => void;
  zIndex?: number;
}

/* -----------------------
 * PopperArrow
 * ----------------------- */
export type PopperArrowElement = React.ElementRef<typeof ArrowPrimitive.Root>;
export type ArrowProps = Radix.ComponentPropsWithoutRef<
  typeof ArrowPrimitive.Root
>;
export interface PopperArrowProps extends ArrowProps {}
