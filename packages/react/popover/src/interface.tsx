import type { Scope } from "@radix-ui/react-context";

/* ---------------------
 * Popover Common
 * -------------------*/

export type ScopedProps<P> = P & { __scopePopover?: Scope };

/* ---------------------
 * Popover Root
 * -------------------*/
export type PopoverContextValue = {
  triggerRef: React.RefObject<HTMLButtonElement>;
  contentId: string;
  open: boolean;
  onOpenChange(open: boolean): void;
  onOpenToggle(): void;
  hasCustomAnchor: boolean;
  onCustomAnchorAdd(): void;
  onCustomAnchorRemove(): void;
  modal: boolean;
};
