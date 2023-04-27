import React, { useEffect, useRef } from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import type {
  ScopedProps,
  PopperAnchorElement,
  PopperAnchorProps,
} from "./interface";

import { usePopperContext } from "./Popper";

const AnchorName = "PopperAnchor";

const PopperAnchor = React.forwardRef<PopperAnchorElement, PopperAnchorProps>(
  (props: ScopedProps<PopperAnchorProps>, FrRef) => {
    const { __scopePopper, virtualRef, ...anchorProps } = props;

    const context = usePopperContext(AnchorName, __scopePopper);
    const ref = useRef<PopperAnchorElement>(null);

    const composedRefs = useComposedRefs(ref, FrRef);

    useEffect(() => {
      context.onAnchorChange(virtualRef?.current || ref.current);
    });
    return virtualRef ? null : (
      <Primitive.div {...anchorProps} ref={composedRefs} />
    );
  }
);

PopperAnchor.displayName = AnchorName;

export default PopperAnchor;
