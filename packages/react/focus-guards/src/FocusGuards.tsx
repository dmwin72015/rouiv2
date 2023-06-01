import React from 'react';
let count = 0;

export function useFocusGuards(dom?: React.RefObject<HTMLDivElement>) {
  React.useEffect(() => {
    const edgeGuards = document.querySelectorAll('[data-radix-focus-guard]');
    (
      (dom?.current?.parentNode as HTMLElement) ?? document.body
    ).insertAdjacentElement('afterbegin', edgeGuards[0] ?? createFocusGuard());
    (
      (dom?.current?.parentNode as HTMLElement) ?? document.body
    ).insertAdjacentElement('beforeend', edgeGuards[1] ?? createFocusGuard());
    count++;
    return () => {
      if (count === 1) {
        document
          .querySelectorAll('[data-radix-focus-guard]')
          .forEach((node) => node.remove());
      }
      count--;
    };
  }, []);
}

function createFocusGuard() {
  const element = document.createElement('span');
  element.setAttribute('data-radix-focus-guard', '');
  element.tabIndex = 0;
  element.style.cssText =
    'outline: none; opacity: 0; position: fixed; pointer-events: none';
  return element;
}