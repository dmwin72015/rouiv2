import React, { useLayoutEffect } from "react";
import { injectStyle, removeStyle } from "./lockBody";
import getScrollBarSize from "./getScrollBarSize";
import { isBodyOverflowing } from "./utils";

const UNIQUE_ID = `rc-lockbody-${Date.now()}`;
let uuid = 0;

export default function useScrollLocker(lock?: boolean) {
  const mergedLock = !!lock;
  const [id] = React.useState(() => {
    uuid += 1;
    return `${UNIQUE_ID}_${uuid}`;
  });

  useLayoutEffect(() => {
    if (mergedLock) {
      const scrollbarSize = getScrollBarSize();
      const isOverflow = isBodyOverflowing();

      injectStyle(
        `
html body {
  overflow-y: hidden;
  ${isOverflow ? `width: calc(100% - ${scrollbarSize}px);` : ""}
}`,
        id
      );
    } else {
      removeStyle(id);
    }

    return () => {
      removeStyle(id);
    };
  }, [mergedLock, id]);
}
