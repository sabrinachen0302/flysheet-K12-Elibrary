import React from 'react';
// figma node: 排序下拉 — retro. state: "closed-<option>" | "open". Leaf text nodes are click targets for the page's Clickable wrapper.
const OPTS = ["熱門度", "相關度", "出版日期新到舊", "書名"];
export function SortDropdown(_p = {}) {
  const state = _p.state ?? "closed-熱門度";
  const box = { width: "fit-content", boxSizing: "border-box", background: "var(--color-surface)", border: "2px solid var(--color-border)", borderRadius: 6, fontFamily: "var(--font-base)", fontSize: 14, color: "var(--color-text)", ..._p.style };
  if (state === "open") {
    const over = [_p.text1, _p.text2, _p.text3, _p.text4];
    return (
      <div role="listbox" className={_p.className} style={{ ...box, padding: 3, display: "flex", flexDirection: "column", boxShadow: "4px 4px 0 0 var(--color-border)", minWidth: 150 }}>
        {OPTS.map((o, i) => <span key={o} role="option" style={{ padding: "8px 12px", borderRadius: 4, cursor: "pointer", whiteSpace: "nowrap" }}>{over[i] ?? o}</span>)}
      </div>
    );
  }
  const cur = state.replace(/^closed-/, "");
  return (
    <div className={_p.className} style={{ ...box, height: 36, display: "flex", alignItems: "center", gap: 10, padding: "0 12px", cursor: "pointer" }}>
      <span style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{_p.text1 ?? cur}</span>
      <span aria-hidden="true" style={{ fontSize: 12 }}>{_p.text2 ?? "⌄"}</span>
    </div>
  );
}
export default SortDropdown;
