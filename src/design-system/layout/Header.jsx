import React from 'react';
export function Header({ title = "高中圖書館", links = ["登入 / 註冊", "關於電子圖書館", "聯絡我們"], onTitleClick, onLinkClick, style }) {
  return (
    <header style={{ height: 100, boxSizing: "border-box", padding: "0 var(--spacing-3xl)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--color-background-page)", fontFamily: "var(--font-base)", color: "var(--color-text-primary)", ...style }}>
      <a onClick={onTitleClick} style={{ display: "flex", alignItems: "center", gap: 10, cursor: onTitleClick ? "pointer" : "default", color: "inherit", textDecoration: "none" }}>
        <span aria-label="logo placeholder" style={{ width: 30, height: 30, background: "var(--color-border-default)", flexShrink: 0 }} />
        <span style={{ fontSize: 24, fontWeight: 600, lineHeight: "normal" }}>{title}</span>
      </a>
      <nav style={{ display: "flex", gap: "var(--spacing-2xl)" }}>
        {links.map((l) => (
          <a key={l} onClick={() => onLinkClick && onLinkClick(l)} style={{ fontSize: 24, fontWeight: 400, lineHeight: "normal", color: "inherit", textDecoration: "none", cursor: "pointer" }}>{l}</a>
        ))}
      </nav>
    </header>
  );
}
export default Header;
