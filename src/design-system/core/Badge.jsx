import React from 'react';
const FILL = { primary: "var(--color-brand-primary)", mint: "var(--color-brand-mint)", accent: "var(--color-brand-accent)", cta: "var(--color-brand-cta)", paper: "var(--color-surface)" };
const ROTATION = ["mint", "accent", "paper"];
/** Stable colour for a category label, cycling the brand palette only. */
export const BadgeTone = (label = "") => ROTATION[[...String(label)].reduce((a, c) => a + c.charCodeAt(0), 0) % ROTATION.length];
export function Badge({ children, tone = "mint", variant = "solid", size = "md", style, className }) {
  const solid = variant === "solid";
  const dark = solid && tone === "primary";
  return (
    <span className={className} style={{
      display: "inline-flex", alignItems: "center", gap: 4, boxSizing: "border-box", height: size === "sm" ? 20 : 24, padding: size === "sm" ? "0 6px" : "0 var(--space-2)",
      background: solid ? FILL[tone] : "var(--color-surface)", color: dark ? "var(--color-on-primary)" : "var(--color-text)",
      border: "var(--border-thin)", borderRadius: "var(--corner-sm)", fontFamily: "var(--font-base)", fontSize: size === "sm" ? 11 : 12, fontWeight: 700,
      letterSpacing: ".04em", lineHeight: 1, whiteSpace: "nowrap", flexShrink: 0, ...style,
    }}>{children}</span>
  );
}
export default Badge;
