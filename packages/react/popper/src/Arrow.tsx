import { Side } from "@floating-ui/react-dom";
import React from "react";
import * as ArrowPrimitive from "@radix-ui/react-arrow";
import {
  ScopedProps,
  PopperAnchorElement,
  PopperArrowProps,
} from "./interface";
import { useContentContext } from "./Content";

const ArrowName = "PopperArrow";

const OppositeSide: Record<Side, Side> = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right",
};

const PopperArrow = React.forwardRef<PopperAnchorElement, PopperArrowProps>(
  function PopperArrow(props: ScopedProps<PopperArrowProps>, forwardedRef) {
    const { __scopePopper, ...arrowProps } = props;

    const contentContext = useContentContext(ArrowName, __scopePopper);

    const baseSide = OppositeSide[contentContext.placedSide];

    return (
      // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
      // doesn't report size as we'd expect on SVG elements.
      // it reports their bounding box which is effectively the largest path inside the SVG.
      <span
        ref={contentContext.onArrowChange}
        style={{
          position: "absolute",
          left: contentContext.arrowX,
          top: contentContext.arrowY,
          [baseSide]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0",
          }[contentContext.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: `rotate(180deg)`,
            left: "translateY(50%) rotate(-90deg) translateX(50%)",
          }[contentContext.placedSide],
          visibility: contentContext.shouldHideArrow ? "hidden" : undefined,
        }}
      >
        <ArrowPrimitive.Root
          {...arrowProps}
          ref={forwardedRef}
          style={{
            ...arrowProps.style,
            // ensures the element can be measured correctly (mostly for if SVG)
            display: "block",
          }}
        />
      </span>
    );
  }
);

PopperArrow.displayName = ArrowName;

export default PopperArrow;
