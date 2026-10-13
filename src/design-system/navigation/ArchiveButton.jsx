import React from 'react';
// figma node: 118:217 Archive Button (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ArchiveButton(_p = {}) {
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
        left: 51,
        top: 23,
        width: 80,
        height: 26,
        fontFamily: "var(--font-base)",
        fontWeight: 500,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-background-white)",
      }}>{props.text1 ?? "我的收藏"}</span>
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
        left: 51,
        top: 23,
        width: 80,
        height: 26,
        fontFamily: "var(--font-base)",
        fontWeight: 500,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "我的收藏"}</span>
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
export default ArchiveButton;
