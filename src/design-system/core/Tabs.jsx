import React from 'react';
const norm = (it) => typeof it === "string" ? { value: it, label: it } : it;
function Tab({ it, on, shape, size, onClick }) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const h = size === "sm" ? 34 : 42;
  const fill = on ? "var(--color-brand-accent)" : hover ? "var(--color-mint-tint)" : "var(--color-surface)";
  const common = { position: "relative", height: on ? h + 2 : h, marginBottom: on ? -2 : 0, zIndex: on ? 2 : 1, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, border: 0, cursor: "pointer", fontFamily: "var(--font-base)", fontSize: size === "sm" ? 14 : 16, fontWeight: on ? 700 : 600, color: "var(--color-text)", whiteSpace: "nowrap", outline: focus ? "var(--focus-outline)" : "none", outlineOffset: 2 };
  const handlers = { type: "button", role: "tab", "aria-selected": on, onClick, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onFocus: () => setFocus(true), onBlur: () => setFocus(false) };
  if (shape === "trapezoid") {
    const slant = 12;
    return (
      <button {...handlers} style={{ ...common, padding: `0 ${slant + 14}px`, background: "var(--color-border)", clipPath: `polygon(${slant}px 0, calc(100% - ${slant}px) 0, 100% 100%, 0 100%)` }}>
        <span aria-hidden="true" style={{ position: "absolute", inset: "2px 2px 0 2px", background: fill, clipPath: `polygon(${slant - 1}px 0, calc(100% - ${slant - 1}px) 0, 100% 100%, 0 100%)` }} />
        <span style={{ position: "relative" }}>{it.label}</span>
        {it.count != null && <span style={{ position: "relative", fontSize: 12, color: "var(--color-text-muted)" }}>{it.count}</span>}
      </button>
    );
  }
  return (
    <button {...handlers} style={{ ...common, padding: "0 var(--space-5)", background: fill, border: "var(--border-default)", borderBottom: on ? "var(--border-width-md) solid var(--color-brand-accent)" : 0, borderRadius: "var(--corner-md) var(--corner-md) 0 0" }}>
      {it.label}
      {it.count != null && <span style={{ fontSize: 12, color: "var(--color-text-muted)" }}>{it.count}</span>}
    </button>
  );
}
export function Tabs({ items = [], value, defaultValue, onChange, shape = "folder", size = "md", baseline = true, ariaLabel, style, className }) {
  const list = items.map(norm);
  const [inner, setInner] = React.useState(defaultValue ?? (list[0] && list[0].value));
  const cur = value !== undefined ? value : inner;
  return (
    <div role="tablist" aria-label={ariaLabel} className={className} style={{ display: "flex", alignItems: "flex-end", gap: shape === "trapezoid" ? 2 : 6, borderBottom: baseline ? "var(--border-default)" : 0, ...style }}>
      {list.map((it, i) => <Tab key={it.value} it={it} on={cur === it.value} shape={shape} size={size} onClick={() => { setInner(it.value); onChange && onChange(it.value); }} />)}
    </div>
  );
}
export default Tabs;
