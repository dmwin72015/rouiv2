// https://github.com/react-component/util/blob/master/src/Dom/dynamicCSS.ts 简易版本
import { canUseDom } from "./utils";

const MarkKey = "data-key";

interface Options {
  csp?: { nonce?: string };
}

function getContainer() {
  return document.querySelector("head") || document.body;
}

export function injectStyle(css: string, key: string, option?: Options) {
  if (!canUseDom()) {
    return null;
  }
  const { csp } = option || {};
  const styleNode = document.createElement("style");
  styleNode.setAttribute(MarkKey, key);
  if (csp?.nonce) {
    styleNode.nonce = csp?.nonce;
  }
  styleNode.innerHTML = css;
  const container = getContainer();
  container.appendChild(styleNode);
  return styleNode;
}

export function removeStyle(key: string) {
  document.querySelector(`style[data-key='${key}']`)?.remove();
}
