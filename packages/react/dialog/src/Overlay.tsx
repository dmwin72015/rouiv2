import React from 'react';
import { Primitive } from '@radix-ui/react-primitive';
import { Presence } from '@radix-ui/react-presence';
import { DialogOverlayName, getState } from './context';
import { usePortalContext, usePresenceSub } from './Portal';
import { useDialogContext } from './Root';

import type {
  ScopedProps,
  DialogOverlayProps,
  DialogOverlayElement,
  DialogOverlayImplProps,
  DialogOverlayImplElement,
} from './interface';

const DialogOverlayImpl = React.forwardRef<
  DialogOverlayImplElement,
  DialogOverlayImplProps
>((props: ScopedProps<DialogOverlayImplProps>, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = useDialogContext(DialogOverlayName, __scopeDialog);

  usePresenceSub(DialogOverlayName, __scopeDialog);

  return (
    <Primitive.div
      data-state={getState(context.open)}
      {...overlayProps}
      ref={forwardedRef}
      style={{ pointerEvents: 'auto', ...overlayProps.style }}
    />
  );
});

const DialogOverlay = React.forwardRef<
  DialogOverlayElement,
  DialogOverlayProps
>((props: ScopedProps<DialogOverlayProps>, forwardedRef) => {
  const { forceMount, __scopeDialog, ...overlayProps } = props;
  const context = useDialogContext(DialogOverlayName, __scopeDialog);
  const portalContext = usePortalContext(DialogOverlayName, __scopeDialog);

  return context.modal ? (
    <Presence
      present={(forceMount ?? portalContext.forceMount) || context.open}
    >
      <DialogOverlayImpl
        {...overlayProps}
        ref={forwardedRef}
      ></DialogOverlayImpl>
    </Presence>
  ) : null;
});

DialogOverlay.displayName = DialogOverlayName;

export default DialogOverlay;
