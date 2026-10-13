import React from 'react';
import { Icon } from '../icons/Icon.jsx';
const BROWSE_MENU = [
  { head: "依資源", items: ["電子書", "有聲書", "電子雜誌", "新聞", "線上資源"] },
  { head: "依類別", items: ["依課綱探索", "文學小說類", "非小說類", "自主學習", "主題書單"] },
];
function MenuLink({ label, onClick }) {
  const [h, setH] = React.useState(false);
  return <a role="menuitem" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: "block", padding: "8px var(--space-3)", margin: "0 calc(var(--space-3) * -1)", borderRadius: "var(--corner-sm)", fontSize: 16, cursor: "pointer", whiteSpace: "nowrap", background: h ? "var(--color-mint-tint)" : "transparent", color: "var(--color-text)" }}>{label}</a>;
}
function NavItem({ label, chevron, count, active, open, onClick }) {
  const [hover, setHover] = React.useState(false);
  const on = active || open;
  return (
    <a onClick={onClick} aria-current={active ? "page" : undefined} aria-expanded={chevron ? open : undefined} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      height: 48, boxSizing: "border-box", display: "flex", alignItems: "center", gap: 8, padding: "0 var(--space-5)", cursor: "pointer", textDecoration: "none",
      borderWidth: "var(--border-width-md)", borderStyle: "solid", borderColor: on || hover ? "var(--color-border)" : "transparent",
      borderRadius: open ? "var(--corner-md) var(--corner-md) 0 0" : "var(--corner-md)", borderBottomColor: open ? "var(--color-surface)" : on || hover ? "var(--color-border)" : "transparent", position: open ? "relative" : undefined, zIndex: open ? 51 : undefined, background: on ? (open && !active ? "var(--color-surface)" : "var(--color-brand-accent)") : hover ? "var(--color-mint-tint)" : "transparent",
      color: "var(--color-text)",
      fontSize: 20, fontWeight: on ? 700 : 500, lineHeight: 1, whiteSpace: "nowrap", transition: "background .15s ease, color .15s ease, border-color .15s ease",
    }}>
      {label}
      {count != null && <span aria-label={`${count} 項`} style={{ minWidth: 22, height: 22, boxSizing: "border-box", padding: "0 6px", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 11, border: "var(--border-thin)", background: "var(--color-brand-cta)", fontSize: 12, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{count}</span>}
      {chevron && <Icon name="chevron-down" size={14} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s ease" }} />}
    </a>
  );
}
export function Navigation({ title = "高中圖書館", links = ["登入 / 註冊", "關於電子圖書館", "聯絡我們"], onTitleClick, onLinkClick, items = [{ label: "電子圖書館首頁" }, { label: "瀏覽", chevron: true }, { label: "我的收藏" }], active, onNavigate, onBrowse, search = false, onSearch, bar = true, centered = false, style }) {
  const [q, setQ] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const browseRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const close = (e) => { if (browseRef.current && !browseRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);
  return (
    <header style={{ fontFamily: "var(--font-base)", color: "var(--color-text)", ...style }}>
      <div style={{ height: 60, boxSizing: "border-box", padding: "0 var(--space-12)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--color-bg)", borderBottom: "var(--border-default)" }}>
        <a onClick={onTitleClick} style={{ display: "flex", alignItems: "center", gap: 14, cursor: onTitleClick ? "pointer" : "default", color: "inherit", textDecoration: "none" }}>
          <span aria-label="logo placeholder" style={{ width: 36, height: 36, boxSizing: "border-box", border: "var(--border-default)", borderRadius: "var(--corner-sm)", background: "var(--color-brand-accent)", boxShadow: "var(--shadow-hard-sm)", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 700, letterSpacing: ".06em", lineHeight: 1 }}>{title}</span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          {links.map((l, i) => (
            <React.Fragment key={l}>
              {i > 0 && <span aria-hidden="true" style={{ width: 1.5, height: 16, background: "var(--color-divider)" }} />}
              <a onClick={() => onLinkClick && onLinkClick(l)} style={{ padding: "6px var(--space-3)", fontSize: 16, color: "inherit", textDecoration: "none", cursor: "pointer" }}>{l}</a>
            </React.Fragment>
          ))}
        </nav>
      </div>
      {bar && <div style={{ height: 72, boxSizing: "border-box", padding: "0 var(--space-12)", display: "flex", alignItems: "center", justifyContent: centered ? "center" : "space-between", background: "var(--color-brand-mint)", borderBottom: "var(--border-default)" }}>
        <nav style={{ display: "flex", gap: "var(--space-2)" }}>
          {items.map((it) => it.chevron ? (
            <div key={it.label} ref={browseRef} style={{ position: "relative" }}>
              <NavItem {...it} active={active === it.label} open={open} onClick={() => setOpen(!open)} />
              {open && (
                <div role="menu" style={{ position: "absolute", top: "calc(100% - var(--border-width-md))", left: 0, zIndex: 50, display: "flex", gap: "var(--space-12)", padding: "var(--space-5) var(--space-6)", background: "var(--color-surface)", border: "var(--border-default)", borderRadius: "0 var(--corner-lg) var(--corner-lg) var(--corner-lg)", boxShadow: "var(--shadow-hard-md)" }}>
                  {BROWSE_MENU.map((col) => (
                    <div key={col.head} style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 110 }}>
                      <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: ".08em", color: "var(--color-text-muted)", paddingBottom: "var(--space-2)", marginBottom: "var(--space-1)", borderBottom: "var(--border-dashed)" }}>{col.head}</span>
                      {col.items.map((x) => <MenuLink key={x} label={x} onClick={() => { setOpen(false); onBrowse && onBrowse(x); }} />)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : <NavItem key={it.label} {...it} active={active === it.label} onClick={() => onNavigate && onNavigate(it.label)} />)}
        </nav>
        {search && (
          <form onSubmit={(e) => { e.preventDefault(); onSearch && onSearch(q); }} style={{ width: 400, height: 42, boxSizing: "border-box", display: "flex", alignItems: "center", gap: "var(--space-2)", padding: "0 6px 0 var(--space-4)", background: "var(--color-surface)", border: "var(--border-default)", borderRadius: "var(--corner-md)", boxShadow: focus ? "var(--shadow-hard-sm)" : "none", outline: focus ? "var(--focus-outline)" : "none", outlineOffset: 2 }}>
            <input value={q} onChange={(e) => setQ(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} placeholder="搜尋" aria-label="搜尋" style={{ flex: 1, minWidth: 0, border: 0, outline: 0, background: "transparent", fontFamily: "inherit", fontSize: 16, color: "var(--color-text)" }} />
            <button type="button" aria-label="搜尋" onClick={() => onSearch && onSearch(q)} style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", border: 0, borderRadius: "var(--corner-sm)", background: "var(--color-brand-accent)", padding: 0, cursor: "pointer", color: "var(--color-text)" }}><Icon name="search" size={18} /></button>
          </form>
        )}
      </div>}
    </header>
  );
}
export default Navigation;
