import { FC, useState } from "react";
import { createContextScope } from "./context";
import type { Measurable } from "@radix-ui/rect";
import type { ScopedProps, PopperProps, PopperContextValue } from "./interface";

const PopperName = "Popper";

const [createPopperContext, createPopperScope] = createContextScope(PopperName);

const [Provider, usePopperContext] =
  createPopperContext<PopperContextValue>(PopperName);

const Popper: FC<PopperProps> = (props: ScopedProps<PopperProps>) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = useState<Measurable | null>(null);
  return (
    <Provider scope={__scopePopper} anchor={anchor} onAnchorChange={setAnchor}>
      {children}
    </Provider>
  );
};

Popper.displayName = PopperName;

export default Popper;

export { usePopperContext, createPopperContext, createPopperScope };
