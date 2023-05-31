import React from "react";
import { Portal as PortalPrimitive } from "@radix-ui/react-portal";
import { useScrollLocker } from "@roui/lock-scroll";

import type {
  ScopedProps,
  PortalContextValue,
  DialogPortalProps,
  PresenceGroupContextValue,
  Scope,
} from "./interface";

import {
  DialogPortalName,
  createDialogContext,
  DialogPresenceName,
} from "./context";
import { useDialogContext } from "./Root";

const [PortalProvider, usePortalContext] =
  createDialogContext<PortalContextValue>(DialogPortalName, {
    forceMount: undefined,
  });

const [PresenceProvider, usePresenceContext] =
  createDialogContext<PresenceGroupContextValue>(DialogPresenceName, {
    count: 0,
  });

const PresenceGroup: React.FC<any> = (
  props: ScopedProps<DialogPortalProps>
) => {
  const { open } = useDialogContext(DialogPresenceName, props.__scopeDialog);
  const [count, setCount] = React.useState<number>(0);
  const _open = open || (!open && count > 0);

  useScrollLocker(_open);

  return (
    <PresenceProvider
      onSub={() => setCount((prev) => prev + 1)}
      onUnSub={() => setCount((prev) => (prev == 0 ? 0 : prev - 1))}
      count={count}
      scope={props.__scopeDialog}
    >
      {_open ? props.children : null}
    </PresenceProvider>
  );
};

const DialogPortal: React.FC<DialogPortalProps> = (
  props: ScopedProps<DialogPortalProps>
) => {
  const { __scopeDialog, forceMount, children, container, ...rest } = props;
  return (
    <PortalProvider scope={__scopeDialog} forceMount={forceMount}>
      <PortalPrimitive
        container={container}
        asChild={React.Children.count(children) < 2}
        {...rest}
      >
        <PresenceGroup>{children}</PresenceGroup>
      </PortalPrimitive>
    </PortalProvider>
  );
};

DialogPortal.displayName = DialogPortalName;

export const usePresenceSub = (consumerName: string, scope: Scope) => {
  const pContext = usePresenceContext(consumerName, scope);
  React.useEffect(() => {
    pContext.onSub?.();
    return () => {
      pContext.onUnSub?.();
    };
  }, []);
};

export default DialogPortal;

export { usePortalContext };
