import React from 'react';
import { useId } from '@radix-ui/react-id';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { DialogName, createDialogContext } from './context';

import type {
  ScopedProps,
  DialogContextValue,
  DialogProps,
  DialogContentElement,
} from './interface';

const [DialogProvider, useDialogContext] =
  createDialogContext<DialogContextValue>(DialogName, {
    dialogId: '',
    open: false,
    onOpenChange: (val: boolean) => {},
    onOpenToggle: () => {},
    modal: true,
  });

const Dialog: React.FC<DialogProps> = (props: ScopedProps<DialogProps>) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true,
  } = props;

  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const contentRef = React.useRef<DialogContentElement>(null);

  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  return (
    <DialogProvider
      scope={__scopeDialog}
      triggerRef={triggerRef}
      contentRef={contentRef}
      dialogId={useId()}
      open={open}
      onOpenChange={setOpen}
      onOpenToggle={React.useCallback(
        () => setOpen((prevOpen) => !prevOpen),
        [setOpen]
      )}
      modal={modal}
    >
      {children}
    </DialogProvider>
  );
};

export default Dialog;

export { useDialogContext };
