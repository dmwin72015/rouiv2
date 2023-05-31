var $3duJA$react = require("react");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "useScrollLocker", () => $e4d4f4370bc523c8$export$2e2bcd8739ae039);

// https://github.com/react-component/util/blob/master/src/Dom/dynamicCSS.ts 简易版本
function $2636b32029f76b0a$export$c81b8d8584b2fbae() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function $2636b32029f76b0a$export$31b5c8f1131a3a52() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}


const $21d66765508ce6c4$var$MarkKey = "data-key";
function $21d66765508ce6c4$var$getContainer() {
    return document.querySelector("head") || document.body;
}
function $21d66765508ce6c4$export$bcff8c34900aff72(css, key, option) {
    if (!(0, $2636b32029f76b0a$export$c81b8d8584b2fbae)()) return null;
    const { csp: csp  } = option || {};
    const styleNode = document.createElement("style");
    styleNode.setAttribute($21d66765508ce6c4$var$MarkKey, key);
    if (csp?.nonce) styleNode.nonce = csp?.nonce;
    styleNode.innerHTML = css;
    const container = $21d66765508ce6c4$var$getContainer();
    container.appendChild(styleNode);
    return styleNode;
}
function $21d66765508ce6c4$export$afe978aceb0adefd(key) {
    document.querySelector(`style[data-key='${key}']`)?.remove();
}


// https://github.com/react-component/util/blob/master/src/getScrollBarSize.tsx
let $2ea082308b4d5059$var$cached;
function $2ea082308b4d5059$export$2e2bcd8739ae039(fresh) {
    if (typeof document === "undefined") return 0;
    if (fresh || $2ea082308b4d5059$var$cached === undefined) {
        const inner = document.createElement("div");
        inner.style.width = "100%";
        inner.style.height = "200px";
        const outer = document.createElement("div");
        const outerStyle = outer.style;
        outerStyle.position = "absolute";
        outerStyle.top = "0";
        outerStyle.left = "0";
        outerStyle.pointerEvents = "none";
        outerStyle.visibility = "hidden";
        outerStyle.width = "200px";
        outerStyle.height = "150px";
        outerStyle.overflow = "hidden";
        outer.appendChild(inner);
        document.body.appendChild(outer);
        const widthContained = inner.offsetWidth;
        outer.style.overflow = "scroll";
        let widthScroll = inner.offsetWidth;
        if (widthContained === widthScroll) widthScroll = outer.clientWidth;
        document.body.removeChild(outer);
        $2ea082308b4d5059$var$cached = widthContained - widthScroll;
    }
    return $2ea082308b4d5059$var$cached;
}



const $e4d4f4370bc523c8$var$UNIQUE_ID = `rc-lockbody-${Date.now()}`;
let $e4d4f4370bc523c8$var$uuid = 0;
function $e4d4f4370bc523c8$export$2e2bcd8739ae039(lock) {
    const mergedLock = !!lock;
    const [id] = (0, ($parcel$interopDefault($3duJA$react))).useState(()=>{
        $e4d4f4370bc523c8$var$uuid += 1;
        return `${$e4d4f4370bc523c8$var$UNIQUE_ID}_${$e4d4f4370bc523c8$var$uuid}`;
    });
    (0, $3duJA$react.useLayoutEffect)(()=>{
        if (mergedLock) {
            const scrollbarSize = (0, $2ea082308b4d5059$export$2e2bcd8739ae039)();
            const isOverflow = (0, $2636b32029f76b0a$export$31b5c8f1131a3a52)();
            (0, $21d66765508ce6c4$export$bcff8c34900aff72)(`
html body {
  overflow-y: hidden;
  ${isOverflow ? `width: calc(100% - ${scrollbarSize}px);` : ""}
}`, id);
        } else (0, $21d66765508ce6c4$export$afe978aceb0adefd)(id);
        return ()=>{
            (0, $21d66765508ce6c4$export$afe978aceb0adefd)(id);
        };
    }, [
        mergedLock,
        id
    ]);
}




//# sourceMappingURL=index.js.map
