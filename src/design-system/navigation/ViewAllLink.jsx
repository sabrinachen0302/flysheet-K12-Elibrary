import React from 'react';
// figma node: 2093:902 查看全部連結 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ViewAllLink(_p = {}) {
  const props = { ..._p, state: _p.state ?? "hover" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-base)",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-brand-primary)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "查看全部 3,150 筆內容 ›"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-base)",
        fontWeight: 700,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-brand-primary)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "查看全部 3,150 筆內容 ›"}</span>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Hover
    "state=hover": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ViewAllLink;
