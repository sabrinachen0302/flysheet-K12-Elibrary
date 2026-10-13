import React from 'react';
// figma node: 2102:886 篩選FilterCheckbox — retro. Checked = Mint fill + Primary stroke + dark ✓.
export function FilterCheckbox(_p = {}) {
  const on = (_p.state ?? "unchecked") === "checked";
  return (
    <div className={_p.className} onClick={_p.onClick} role="checkbox" aria-checked={on} style={{ cursor: _p.onClick ? "pointer" : undefined, width: 89, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, fontFamily: "var(--font-base)", ..._p.style }}>
      <div style={{ display: "flex", gap: "var(--spacing-sm)", alignItems: "center", minWidth: 0 }}>
        <span style={{ width: 18, height: 18, boxSizing: "border-box", flexShrink: 0, borderRadius: 4, border: "1.5px solid var(--color-border)", background: on ? "var(--color-brand-mint)" : "var(--color-surface)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "var(--color-text)", lineHeight: 1 }}>{on ? "✓" : ""}</span>
        <span style={{ fontSize: 14, fontWeight: on ? 700 : 400, lineHeight: "120%", color: "var(--color-text)" }}>{_p.text1 ?? "篩選項目"}</span>
      </div>
      <span style={{ fontSize: 12, lineHeight: "100%", color: "var(--color-text-muted)", fontVariantNumeric: "tabular-nums" }}>{_p.text2 ?? "0"}</span>
    </div>
  );
}
export default FilterCheckbox;
