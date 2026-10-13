import React from 'react';
// figma node: 2121:1539 分頁 — retro. state = current page ("1"…"6", "76"). Current = Accent + hard shadow; cells = 2px Primary stroke.
// Leaf text nodes are click targets for the page's Clickable wrapper — keep the labels exact.
const CELLS = ["‹", "1", "2", "3", "4", "5", "6", "…", "76", "›"];
export function Pagination(_p = {}) {
  const cur = String(_p.state ?? "1");
  const over = { 0: _p.text1, 1: _p.text2, 2: _p.text3, 3: _p.text4 };
  return (
    <nav aria-label="分頁" className={_p.className} style={{ width: "fit-content", display: "flex", gap: 8, alignItems: "center", ..._p.style }}>
      {CELLS.map((c, i) => {
        if (c === "…") return <span key={i} aria-hidden="true" style={{ minWidth: 20, textAlign: "center", fontFamily: "var(--font-base)", color: "var(--color-text-muted)" }}>…</span>;
        const on = c === cur;
        const arrow = c === "‹" || c === "›";
        return (
          <span key={i} role="button" aria-current={on ? "page" : undefined} aria-label={arrow ? (c === "‹" ? "上一頁" : "下一頁") : undefined} style={{
            minWidth: 40, height: 40, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 8px", cursor: "pointer",
            border: "2px solid var(--color-border)", borderRadius: 6, background: on ? "var(--color-brand-accent)" : "var(--color-surface)",
            boxShadow: on ? "3px 3px 0 0 var(--color-border)" : "none", transform: on ? "translate(-1px,-1px)" : "none",
            fontFamily: "var(--font-base)", fontSize: 15, fontWeight: on ? 700 : 500, color: "var(--color-text)",
          }}>{over[i] ?? c}</span>
        );
      })}
    </nav>
  );
}
export default Pagination;
