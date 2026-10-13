import React from 'react';
const TONES = { surface: "var(--color-surface)", bg: "var(--color-bg)", mint: "var(--color-mint-tint)", accent: "var(--color-accent-tint)", primary: "var(--color-brand-primary)" };
export function Card({ children, tone = "surface", shadow = "sm", interactive = false, padding = "var(--space-card)", tab, tabTone = "accent", onClick, as = "div", ariaLabel, style, className }) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  const base = shadow === "none" ? "none" : shadow === "md" ? "var(--shadow-hard-md)" : "var(--shadow-hard-sm)";
  const Tag = as;
  return (
    <Tag className={className} aria-label={ariaLabel} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      position: "relative", boxSizing: "border-box", background: TONES[tone] || tone, color: tone === "primary" ? "var(--color-on-primary)" : "var(--color-text)",
      border: "var(--border-default)", borderRadius: tab ? "0 var(--corner-lg) var(--corner-lg) var(--corner-lg)" : "var(--corner-lg)", padding,
      boxShadow: lift ? "var(--shadow-hard-md)" : base, transform: lift ? "translate(-2px,-2px)" : "none",
      transition: "transform var(--motion-press), box-shadow var(--motion-press)", cursor: onClick ? "pointer" : "default",
      marginTop: tab ? 34 : undefined, fontFamily: "var(--font-base)", ...style,
    }}>
      {tab && (
        <span style={{ position: "absolute", left: -2, bottom: "100%", height: 34, boxSizing: "border-box", display: "flex", alignItems: "center", padding: "0 var(--space-5)", background: tabTone === "mint" ? "var(--color-brand-mint)" : tabTone === "primary" ? "var(--color-brand-primary)" : "var(--color-brand-accent)", color: tabTone === "primary" ? "var(--color-on-primary)" : "var(--color-text)", border: "var(--border-default)", borderBottom: 0, borderRadius: "var(--corner-md) var(--corner-md) 0 0", fontSize: 14, fontWeight: 700, letterSpacing: ".04em", whiteSpace: "nowrap" }}>{tab}</span>
      )}
      {children}
    </Tag>
  );
}
export default Card;
