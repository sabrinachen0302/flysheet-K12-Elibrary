import React from 'react';
function Cell({ children, on, disabled, onClick, ariaLabel }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" disabled={disabled} aria-label={ariaLabel} aria-current={on ? "page" : undefined} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      minWidth: 40, height: 40, padding: "0 var(--space-2)", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center",
      border: "var(--border-default)", borderRadius: "var(--corner-md)", fontFamily: "var(--font-base)", fontSize: 15, fontWeight: on ? 700 : 500,
      background: disabled ? "var(--color-disabled)" : on ? "var(--color-brand-accent)" : hover ? "var(--color-mint-tint)" : "var(--color-surface)",
      color: disabled ? "var(--color-text-muted)" : "var(--color-text)", cursor: disabled ? "not-allowed" : "pointer",
      boxShadow: on ? "var(--shadow-hard-sm)" : "none", transform: on ? "translate(-1px,-1px)" : "none",
    }}>{children}</button>
  );
}
const range = (page, total, sib) => {
  const out = [];
  const lo = Math.max(2, page - sib), hi = Math.min(total - 1, page + sib);
  out.push(1);
  if (lo > 2) out.push("…l");
  for (let i = lo; i <= hi; i++) out.push(i);
  if (hi < total - 1) out.push("…r");
  if (total > 1) out.push(total);
  return out;
};
export function Paginator({ page = 1, total = 1, onChange, siblings = 2, style, className }) {
  const go = (p) => onChange && p >= 1 && p <= total && p !== page && onChange(p);
  return (
    <nav aria-label="分頁" className={className} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", ...style }}>
      <Cell ariaLabel="上一頁" disabled={page <= 1} onClick={() => go(page - 1)}>‹</Cell>
      {range(page, total, siblings).map((p) => typeof p === "string"
        ? <span key={p} aria-hidden="true" style={{ minWidth: 24, textAlign: "center", color: "var(--color-text-muted)", fontFamily: "var(--font-base)" }}>…</span>
        : <Cell key={p} on={p === page} ariaLabel={"第 " + p + " 頁"} onClick={() => go(p)}>{p}</Cell>)}
      <Cell ariaLabel="下一頁" disabled={page >= total} onClick={() => go(page + 1)}>›</Cell>
    </nav>
  );
}
export default Paginator;
