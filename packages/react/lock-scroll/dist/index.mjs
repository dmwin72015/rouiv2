import $74lsD$react, {useLayoutEffect as $74lsD$useLayoutEffect} from "react";


// https://github.com/react-component/util/blob/master/src/Dom/dynamicCSS.ts 简易版本
function $a17a723eb4dfc473$export$c81b8d8584b2fbae() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function $a17a723eb4dfc473$export$31b5c8f1131a3a52() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}


const $59dee0e21eb00bb5$var$MarkKey = "data-key";
function $59dee0e21eb00bb5$var$getContainer() {
    return document.querySelector("head") || document.body;
}
function $59dee0e21eb00bb5$export$bcff8c34900aff72(css, key, option) {
    if (!(0, $a17a723eb4dfc473$export$c81b8d8584b2fbae)()) return null;
    const { csp: csp  } = option || {};
    const styleNode = document.createElement("style");
    styleNode.setAttribute($59dee0e21eb00bb5$var$MarkKey, key);
    if (csp?.nonce) styleNode.nonce = csp?.nonce;
    styleNode.innerHTML = css;
    const container = $59dee0e21eb00bb5$var$getContainer();
    container.appendChild(styleNode);
    return styleNode;
}
function $59dee0e21eb00bb5$export$afe978aceb0adefd(key) {
    document.querySelector(`style[data-key='${key}']`)?.remove();
}


// https://github.com/react-component/util/blob/master/src/getScrollBarSize.tsx
let $79e4f6c99055b0f7$var$cached;
function $79e4f6c99055b0f7$export$2e2bcd8739ae039(fresh) {
    if (typeof document === "undefined") return 0;
    if (fresh || $79e4f6c99055b0f7$var$cached === undefined) {
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
        $79e4f6c99055b0f7$var$cached = widthContained - widthScroll;
    }
    return $79e4f6c99055b0f7$var$cached;
}



const $356669956dc15d16$var$UNIQUE_ID = `rc-lockbody-${Date.now()}`;
let $356669956dc15d16$var$uuid = 0;
function $356669956dc15d16$export$2e2bcd8739ae039(lock) {
    const mergedLock = !!lock;
    const [id] = (0, $74lsD$react).useState(()=>{
        $356669956dc15d16$var$uuid += 1;
        return `${$356669956dc15d16$var$UNIQUE_ID}_${$356669956dc15d16$var$uuid}`;
    });
    (0, $74lsD$useLayoutEffect)(()=>{
        if (mergedLock) {
            const scrollbarSize = (0, $79e4f6c99055b0f7$export$2e2bcd8739ae039)();
            const isOverflow = (0, $a17a723eb4dfc473$export$31b5c8f1131a3a52)();
            (0, $59dee0e21eb00bb5$export$bcff8c34900aff72)(`
html body {
  overflow-y: hidden;
  ${isOverflow ? `width: calc(100% - ${scrollbarSize}px);` : ""}
}`, id);
        } else (0, $59dee0e21eb00bb5$export$afe978aceb0adefd)(id);
        return ()=>{
            (0, $59dee0e21eb00bb5$export$afe978aceb0adefd)(id);
        };
    }, [
        mergedLock,
        id
    ]);
}




export {$356669956dc15d16$export$2e2bcd8739ae039 as useScrollLocker};
//# sourceMappingURL=index.mjs.map
