import React from 'react';
import { Icon } from '../icons/Icon.jsx';
const SIZES = { sm: { h: "var(--control-sm)", px: 14, fs: 14 }, md: { h: "var(--control-md)", px: 20, fs: 16 }, lg: { h: "var(--control-lg)", px: 28, fs: 20 } };
export function Button({ children, variant = "secondary", tone = "mint", size = "md", icon, iconRight, selected = false, disabled = false, href, type = "button", onClick, ariaLabel, title, width, style, className }) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const isIcon = variant === "icon";
  const isGhost = variant === "ghost";
  const raised = !isGhost && !isIcon && !disabled;
  const bg = disabled ? "var(--color-disabled)"
    : variant === "primary" ? (hover ? "var(--color-cta-hover)" : "var(--color-brand-cta)")
    : isGhost ? (hover ? "var(--color-primary-tint)" : "transparent")
    : isIcon ? (selected ? "var(--color-brand-accent)" : hover ? "var(--color-mint-tint)" : "transparent")
    : selected ? "var(--color-brand-mint)"
    : tone === "paper" ? (hover ? "var(--color-mint-tint)" : "var(--color-surface)")
    : (hover ? "#B4E2DD" : "var(--color-brand-mint)");
  const shadow = !raised ? "none" : down ? "var(--shadow-hard-pressed)" : hover ? "var(--shadow-hard-md)" : "var(--shadow-hard-sm)";
  const shift = !raised ? "none" : down ? "translate(2px,2px)" : hover ? "translate(-1px,-1px)" : "none";
  const Tag = href ? "a" : "button";
  return (
    <Tag className={className} href={href} target={href ? "_blank" : undefined} rel={href ? "noreferrer" : undefined} type={href ? undefined : type}
      disabled={disabled} aria-label={ariaLabel} aria-pressed={variant === "secondary" || isIcon ? selected : undefined} title={title}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)} onMouseUp={() => setDown(false)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "var(--space-2)", boxSizing: "border-box",
        height: isIcon ? (size === "sm" ? 32 : 36) : s.h, width: isIcon ? (size === "sm" ? 32 : 36) : width, padding: isIcon ? 0 : `0 ${s.px}px`,
        border: isGhost || (isIcon && !selected) ? "var(--border-width-sm) solid transparent" : "var(--border-default)",
        borderColor: isIcon && hover && !selected ? "var(--color-border)" : undefined,
        borderRadius: "var(--corner-md)", background: bg, color: disabled ? "var(--color-text-muted)" : "var(--color-text)",
        boxShadow: shadow, transform: shift, transition: "transform var(--motion-press), box-shadow var(--motion-press), background .15s ease",
        outline: focus ? "var(--focus-outline)" : "none", outlineOffset: "var(--focus-offset)",
        fontFamily: "var(--font-base)", fontSize: s.fs, fontWeight: variant === "primary" ? 700 : 600, lineHeight: 1, whiteSpace: "nowrap",
        cursor: disabled ? "not-allowed" : "pointer", textDecoration: "none", flexShrink: 0, ...style,
      }}>
      {icon && <Icon name={icon} size={isIcon ? 16 : s.fs} color="var(--color-text)" />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.fs - 4} color="var(--color-text)" />}
    </Tag>
  );
}
export default Button;
