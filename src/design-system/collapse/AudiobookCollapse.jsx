import React from 'react';
import { FilterCheckbox } from '../filters/FilterCheckbox.jsx';

// figma node: 2122:1508 有聲書_收合區塊 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function AudiobookCollapse(_p = {}) {
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
        }}>{props.text1 ?? "有聲書"}</span>
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
          text1={"OverDrive"}
          text2={"420"}
          state={props.selected ? (props.selected.includes("OverDrive") ? "checked" : "unchecked") : "unchecked"}
          onClick={props.onToggle ? () => props.onToggle("OverDrive") : undefined}
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
        }}>{props.text1 ?? "有聲書"}</span>
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
export default AudiobookCollapse;
