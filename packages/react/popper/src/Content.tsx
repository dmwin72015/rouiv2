import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import { useSize } from "@radix-ui/react-use-size";
import {
  useFloating,
  autoUpdate,
  offset,
  shift,
  limitShift,
  size,
  arrow as floatingUIarrow,
  hide,
} from "@floating-ui/react-dom";
import type { Placement, Middleware } from "@floating-ui/react-dom";

import { createPopperContext, usePopperContext } from "./Popper";
import type {
  ScopedProps,
  PopperContentContextValue,
  PopperContentElement,
  PopperContentProps,
  Side,
  Align,
} from "./interface";

const ContentName = "PopperContent";

const [PopperContentProvider, useContentContext] =
  createPopperContext<PopperContentContextValue>(ContentName);

const [PositionContextProvider, usePositionContext] = createPopperContext(
  ContentName,
  {
    hasParent: false,
    positionUpdateFns: new Set<() => void>(),
  }
);

const PopperZindex = 1030;

const PopperContent = React.forwardRef<
  PopperContentElement,
  PopperContentProps
>((props: ScopedProps<PopperContentProps>, FrRef) => {
  const {
    __scopePopper,
    side = "bottom",
    align = "center",
    sideOffset = 0,
    alignOffset = 0,
    arrowPadding = 0,
    collisionBoundary = [],
    collisionPadding: collisionPaddingProp = 0,
    sticky = "partial",
    hideWhenDetached = false,
    avoidCollisions = true,
    onPlaced,
    zIndex = PopperZindex,
    ...contentProps
  } = props;

  const [content, setContent] = useState<HTMLDivElement | null>(null);
  const [arrow, setArrow] = React.useState<HTMLSpanElement | null>(null);

  const context = usePopperContext(ContentName, __scopePopper);
  const composedRefs = useComposedRefs(FrRef, (node) => setContent(node));

  const { width: arrowWidth = 0, height: arrowHeight = 0 } =
    useSize(arrow) || {};

  const desiredPlacement = floatPlacement(side, align);

  const collisionPadding =
    typeof collisionPaddingProp === "number"
      ? collisionPaddingProp
      : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };

  const boundary = Array.isArray(collisionBoundary)
    ? collisionBoundary
    : [collisionBoundary];

  const hasExplicitBoundaries = boundary.length > 0;
  // 检测是否 超出容器范围
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter(isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: hasExplicitBoundaries,
  };

  const floatingMiddleware: Middleware[] = [
    offset({
      mainAxis: sideOffset + arrowHeight,
      alignmentAxis: alignOffset,
    }),
    size({
      ...detectOverflowOptions,
      apply: ({ elements, rects, availableWidth, availableHeight }) => {
        const { width, height } = rects.reference;
        const contentStyle = elements.floating.style;
        [
          cssVar("available", "width", `${availableWidth}px`),
          cssVar("available", "height", `${availableHeight}px`),
          cssVar("anchor", "width", `${width}px`),
          cssVar("anchor", "height", `${height}px`),
        ].forEach(({ key, value }) => {
          contentStyle.setProperty(key, value);
        });
      },
    }),
    transformOrigin({ arrowWidth, arrowHeight }),
  ];
  if (avoidCollisions) {
    floatingMiddleware.push(
      shift({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? limitShift() : undefined,
        ...detectOverflowOptions,
      })
    );
  }
  if (arrow) {
    floatingMiddleware.push(
      floatingUIarrow({ element: arrow, padding: arrowPadding })
    );
  }
  if (hideWhenDetached) {
    floatingMiddleware.push(hide({ strategy: "referenceHidden" }));
  }

  const { refs, floating, strategy, x, y, placement, middlewareData, update } =
    useFloating({
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: autoUpdate,
      middleware: floatingMiddleware,
    });

  // assign the reference dynamically once `Content` has mounted so we can collocate the logic
  useLayoutEffect(() => {
    refs.setReference(context.anchor);
  }, [refs.setReference, context.anchor]);

  const isPlaced = x !== null && y !== null;
  const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
  const handlePlaced = useCallbackRef(onPlaced);
  useLayoutEffect(() => {
    if (isPlaced) {
      handlePlaced?.();
    }
  }, [isPlaced, handlePlaced]);

  // arrow size rect
  const arrowX = middlewareData.arrow?.x;
  const arrowY = middlewareData.arrow?.y;
  const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;

  // zindex 计算 没有太大必要，直接写死
  // const [contentZIndex, setContentZIndex] = React.useState<string>();
  // useLayoutEffect(() => {
  //   if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
  // }, [content]);

  //
  const { hasParent, positionUpdateFns } = usePositionContext(
    ContentName,
    __scopePopper
  );
  const isRoot = !hasParent;

  useLayoutEffect(() => {
    if (!isRoot) {
      positionUpdateFns.add(update);
      return () => {
        console.log("asdds");
        positionUpdateFns.delete(update);
      };
    }
  }, [isRoot, positionUpdateFns, update]);

  useLayoutEffect(() => {
    if (isRoot && isPlaced) {
      Array.from(positionUpdateFns)
        .reverse()
        .forEach((fn) => requestAnimationFrame(fn));
    }
  }, [isRoot, isPlaced, positionUpdateFns]);

  // props
  const commonProps = {
    "data-side": placedSide,
    "data-align": placedAlign,
    ...contentProps,
    ref: composedRefs,
    style: {
      ...contentProps.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: !isPlaced ? "none" : undefined,
      // hide the content if using the hide middleware and should be hidden
      opacity: middlewareData.hide?.referenceHidden ? 0 : undefined,
    },
  };

  const contentStyle = {
    position: strategy,
    left: 0,
    top: 0,
    transform: isPlaced
      ? `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`
      : "translate3d(0, -200%, 0)", // keep off the page when measuring
    zIndex,
    ["--radix-popper-transform-origin" as any]: [
      middlewareData.transformOrigin?.x,
      middlewareData.transformOrigin?.y,
    ].join(" "),
  };
  return (
    <div
      ref={floating}
      data-radix-popper-content-wrapper=""
      style={contentStyle}
      dir={props.dir}
    >
      <PopperContentProvider
        scope={__scopePopper}
        placedSide={placedSide}
        onArrowChange={setArrow}
        arrowX={arrowX}
        arrowY={arrowY}
        shouldHideArrow={cannotCenterArrow}
      >
        {isRoot ? (
          <PositionContextProvider
            scope={__scopePopper}
            hasParent
            positionUpdateFns={positionUpdateFns}
          >
            <Primitive.div {...commonProps} />
          </PositionContextProvider>
        ) : (
          <Primitive.div {...commonProps} />
        )}
      </PopperContentProvider>
    </div>
  );
});

export default PopperContent;
export { useContentContext, usePositionContext };

/** Utils **/
function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

function isNotNull<T>(value: T | null): value is T {
  return value !== null;
}

const transformOrigin = (options: {
  arrowWidth: number;
  arrowHeight: number;
}): Middleware => ({
  name: "transformOrigin",
  options,
  fn(data) {
    const { placement, rects, middlewareData } = data;

    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;

    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[
      placedAlign
    ];

    const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
    const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;

    let x = "";
    let y = "";

    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x, y } };
  },
});

function getSideAndAlignFromPlacement(placement: Placement) {
  const [side, align = "center"] = placement.split("-");
  return [side as Side, align as Align] as const;
}

function floatPlacement(side: Side, align: Align): Placement {
  return (side + (align !== "center" ? "-" + align : "")) as Placement;
}

function cssVar(prefix: string, cssName: string, value: string) {
  return { key: `--radix-popper-${prefix}-${cssName}`, value };
}
