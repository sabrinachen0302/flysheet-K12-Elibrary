import React from 'react';
import { Badge, BadgeTone } from '../core/Badge.jsx';
// Retro e-resource tile: tinted typographic cover (type badge + name), 2px stroke, hard shadow.
export function EResourceCard({ name = "大英百科線上版", type = "百科資料庫", thumbnail, width = 249.6, onClick, style }) {
  const [h, setH] = React.useState(false);
  const tone = BadgeTone(type);
  const tint = { mint: "var(--color-mint-tint)", accent: "var(--color-accent-tint)", paper: "var(--color-bg)" }[tone];
  const lift = onClick && h;
  return (
    <a onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ width, boxSizing: "border-box", display: "flex", flexDirection: "column", minHeight: 188, overflow: "hidden", background: thumbnail ? `center / cover no-repeat url(${thumbnail})` : tint, border: "2px solid var(--color-border)", borderRadius: 8, boxShadow: lift ? "4px 4px 0 0 var(--color-border)" : "3px 3px 0 0 var(--color-border)", transform: lift ? "translate(-2px,-2px)" : "none", transition: "transform .12s ease, box-shadow .12s ease", fontFamily: "var(--font-base)", cursor: onClick ? "pointer" : "default", color: "var(--color-text)", textDecoration: "none", ...style }}>
      <div style={{ flex: 1, padding: 18, gap: 16, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Badge size="sm" tone={tone}>{type}</Badge>
        <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: 21, fontWeight: 700, lineHeight: 1.3, letterSpacing: ".03em", textWrap: "balance" }}>{name}</span>
      </div>
    </a>
  );
}
export default EResourceCard;
