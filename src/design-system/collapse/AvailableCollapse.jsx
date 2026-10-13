import React from 'react';
import { FilterCheckbox } from '../filters/FilterCheckbox.jsx';

// figma node: 2122:1438 可用_收合區塊 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function AvailableCollapse(_p = {}) {
  const props = { ..._p, state: _p.state ?? "展開" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 280,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: "var(--spacing-md)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "可用"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.text2 ?? "⌃"}</span>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <FilterCheckbox
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text1={"可用"}
          text2={"3150"}
          state={props.selected ? (props.selected.includes("可用") ? "checked" : "unchecked") : "checked"}
          onClick={props.onToggle ? () => props.onToggle("可用") : undefined}
        />
        <FilterCheckbox
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text1={"不可用"}
          text2={"277"}
          state={props.selected ? (props.selected.includes("不可用") ? "checked" : "unchecked") : "unchecked"}
          onClick={props.onToggle ? () => props.onToggle("不可用") : undefined}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 280,
      height: 20,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 15,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "可用"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.text2 ?? "⌄"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=展開
    "state=展開": __body0,
    // figma: State=收合
    "state=收合": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AvailableCollapse;
