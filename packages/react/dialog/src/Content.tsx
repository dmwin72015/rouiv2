import * as React from "react";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { DismissableLayer } from "@radix-ui/react-dismissable-layer";
import { FocusScope } from "@radix-ui/react-focus-scope";
import { Presence } from "@radix-ui/react-presence";
import { useFocusGuards } from "@radix-ui/react-focus-guards";

import type {
  ScopedProps,
  DialogContentProps,
  DialogContentElement,
  DialogContentTypeElement,
  DialogContentTypeProps,
} from "./interface";
import { DialogContentName, getState } from "./context";

import { usePortalContext, usePresenceSub } from "./Portal";
import { useDialogContext } from "./Root";

const DialogContentModal = React.forwardRef<
  DialogContentTypeElement,
  DialogContentTypeProps
>((props: ScopedProps<DialogContentTypeProps>, forwardedRef) => {
  const { __scopeDialog, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } =
    props;

  const contentRef = React.useRef<HTMLDivElement>(null);
  const context = useDialogContext(DialogContentName, __scopeDialog);

  const composedRefs = useComposedRefs(
    forwardedRef,
    context.contentRef,
    contentRef
  );
  usePresenceSub(DialogContentName, __scopeDialog);
  useFocusGuards();

  return (
    <FocusScope
      asChild
      loop
      trapped={context.open}
      onMountAutoFocus={onOpenAutoFocus}
      onUnmountAutoFocus={composeEventHandlers(
        props.onCloseAutoFocus,
        (event) => {
          event.preventDefault();
          context.triggerRef?.current?.focus();
        }
      )}
    >
      <DismissableLayer
        role="dialog"
        id={`${context.dialogId}content`}
        aria-describedby={`${context.dialogId}description`}
        aria-labelledby={`${context.dialogId}title`}
        data-state={getState(context.open)}
        aria-modal="true"
        {...contentProps}
        onPointerDownOutside={composeEventHandlers(
          props.onPointerDownOutside,
          (event) => {
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick =
              originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;

            // If the event is a right-click, we shouldn't close because
            // it is effectively as if we right-clicked the `Overlay`.
            if (isRightClick) event.preventDefault();
          }
        )}
        onFocusOutside={composeEventHandlers(props.onFocusOutside, (event) =>
          event.preventDefault()
        )}
        ref={composedRefs}
        onDismiss={() => context.onOpenChange(false)}
      />
    </FocusScope>
  );
});

const DialogContent = React.forwardRef<
  DialogContentElement,
  DialogContentProps
>((props: ScopedProps<DialogContentProps>, forwardedRef) => {
  const { __scopeDialog, forceMount, ...contentProps } = props;
  const portalContext = usePortalContext(DialogContentName, __scopeDialog);
  const context = useDialogContext(DialogContentName, __scopeDialog);
  return (
    <Presence
      present={(forceMount ?? portalContext.forceMount) || context.open}
    >
      <DialogContentModal {...contentProps} ref={forwardedRef} />
    </Presence>
  );
});

DialogContent.displayName = DialogContentName;

export default DialogContent;
