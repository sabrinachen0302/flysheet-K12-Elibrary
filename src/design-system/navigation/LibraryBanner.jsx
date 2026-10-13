import React from 'react';
// figma node: 118:179 圖書館LibraryBanner (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function LibraryBanner(_p = {}) {
  const props = { ..._p, state: _p.state ?? "hover" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 182,
      height: 72,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 182,
        height: 72,
        backgroundColor: "var(--color-brand-primary)",
      }} />
      <span style={{
        position: "absolute",
        left: 61,
        top: 23,
        width: 60,
        height: 26,
        fontFamily: "var(--font-base)",
        fontWeight: 500,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-background-white)",
      }}>{props.text1 ?? "圖書館"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 182,
      height: 72,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 182,
        height: 72,
        backgroundColor: "var(--color-brand-mint)",
      }} />
      <span style={{
        position: "absolute",
        left: 61,
        top: 23,
        width: 60,
        height: 26,
        fontFamily: "var(--font-base)",
        fontWeight: 500,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "圖書館"}</span>
    </div>
  );
  const __impls = {
    // figma: State=Hover
    "state=hover": __body0,
    // figma: State=Defalt
    "state=defalt": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default LibraryBanner;
