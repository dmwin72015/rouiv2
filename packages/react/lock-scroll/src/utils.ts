export function canUseDom() {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
}

export function isBodyOverflowing() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  );
}
