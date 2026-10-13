import React from 'react';
// figma node: 2088:639 主題項目 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function TopicItem(_p = {}) {
  const props = { ..._p, state: _p.state ?? "hover" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "var(--spacing-sm)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-background-page)",
        boxShadow: "inset 0 0 0 1px var(--color-border-card)",
        display: "flex",
        flexDirection: "row",
        padding: "4px 8px 4px 8px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "var(--spacing-sm)",
        paddingTop: "var(--spacing-xs)",
        paddingRight: "var(--spacing-sm)",
        paddingBottom: "var(--spacing-xs)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "50"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-base)",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.text2 ?? "主題名稱"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "var(--spacing-sm)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-background-page)",
        boxShadow: "inset 0 0 0 1px var(--color-border-card)",
        display: "flex",
        flexDirection: "row",
        padding: "4px 8px 4px 8px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "var(--spacing-sm)",
        paddingTop: "var(--spacing-xs)",
        paddingRight: "var(--spacing-sm)",
        paddingBottom: "var(--spacing-xs)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "50"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-base)",
        fontWeight: 700,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        textDecoration: "underline",
        flexShrink: 0,
      }}>{props.text2 ?? "主題名稱"}</span>
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
export default TopicItem;
