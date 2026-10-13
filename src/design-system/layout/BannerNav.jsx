import React from 'react';
import { Icon } from '../icons/Icon.jsx';
const BROWSE_MENU = [
  { head: "依資源", items: ["電子書", "有聲書", "電子雜誌", "新聞", "線上資源"] },
  { head: "依類別", items: ["依課綱探索", "文學小說類", "非小說類", "自主學習", "主題書單"] },
];
function BrowseMenu({ onPick }) {
  const cell = { fontFamily: "var(--font-inter)", fontSize: 20, lineHeight: "100%", color: "var(--color-background-page)", whiteSpace: "nowrap" };
  return (
    <div role="menu" style={{ position: "absolute", top: 72, left: 0, width: 383, boxSizing: "border-box", padding: "35px 34px 34px", background: "var(--color-brand-primary)", display: "flex", gap: 100, zIndex: 50 }}>
      {BROWSE_MENU.map((col) => (
        <div key={col.head} style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 80 }}>
          <span style={{ ...cell, fontWeight: 600 }}>{col.head}</span>
          {col.items.map((it) => <MenuLink key={it} label={it} style={cell} onClick={() => onPick(it)} />)}
        </div>
      ))}
    </div>
  );
}
function MenuLink({ label, style, onClick }) {
  const [h, setH] = React.useState(false);
  return <a role="menuitem" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ ...style, fontWeight: 400, cursor: "pointer", color: h ? "var(--color-brand-accent)" : style.color }}>{label}</a>;
}
function NavItem({ label, chevron, active, open, onClick }) {
  const [hover, setHover] = React.useState(false);
  const on = hover || active || open;
  return (
    <a onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      width: 182, height: 72, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, cursor: "pointer",
      background: on ? "var(--color-brand-primary)" : "transparent", color: on ? "var(--color-background-white)" : "var(--color-text-primary)",
      fontSize: 20, fontWeight: 500, lineHeight: "normal", textDecoration: "none", transition: "background .15s ease, color .15s ease",
    }}>
      {label}
      {chevron && <Icon name="chevron-right" size={14} style={{ transform: hover || open ? "rotate(90deg)" : "none", transition: "transform .2s ease" }} />}
    </a>
  );
}
export function BannerNav({ items = [{ label: "電子圖書館首頁" }, { label: "瀏覽", chevron: true }, { label: "我的收藏" }], active, onNavigate, onBrowse, search = false, onSearch, style }) {
  const [q, setQ] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const browseRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const close = (e) => { if (browseRef.current && !browseRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);
  return (
    <div style={{ height: 72, width: "100%", background: "var(--color-brand-mint)", display: "flex", alignItems: "center", justifyContent: search ? "space-between" : "center", padding: search ? "0 var(--spacing-3xl) 0 106px" : 0, boxSizing: "border-box", fontFamily: "var(--font-base)", ...style }}>
      <nav style={{ display: "flex" }}>
        {items.map((it) => it.chevron ? (
          <div key={it.label} ref={browseRef} style={{ position: "relative" }}>
            <NavItem {...it} active={active === it.label} open={open} onClick={() => setOpen(!open)} />
            {open && <BrowseMenu onPick={(l) => { setOpen(false); onBrowse && onBrowse(l); }} />}
          </div>
        ) : <NavItem key={it.label} {...it} active={active === it.label} onClick={() => onNavigate && onNavigate(it.label)} />)}
      </nav>
      {search && (
        <form onSubmit={(e) => { e.preventDefault(); onSearch && onSearch(q); }} style={{ width: 444, height: 50, background: "var(--color-background-white)", borderRadius: 1000, display: "flex", alignItems: "center", padding: "0 var(--spacing-xl)", boxSizing: "border-box", gap: "var(--spacing-md)" }}>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="搜尋" style={{ flex: 1, minWidth: 0, border: 0, outline: 0, background: "transparent", fontFamily: "inherit", fontSize: 20, color: "var(--color-text-primary)" }} />
          <button type="button" aria-label="搜尋" onClick={() => onSearch && onSearch(q)} style={{ border: 0, background: "none", padding: 0, cursor: "pointer", color: "var(--color-text-primary)" }}><Icon name="search" size={22} /></button>
        </form>
      )}
    </div>
  );
}
export default BannerNav;
