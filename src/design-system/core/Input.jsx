import React from 'react';
import { Icon } from '../icons/Icon.jsx';
const H = { sm: "var(--control-sm)", md: "var(--control-md)", lg: "var(--control-lg)" };
const FS = { sm: 14, md: 16, lg: 20 };
const fieldBox = (focus, size) => ({ height: H[size], boxSizing: "border-box", display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "0 var(--space-4)", background: "var(--color-surface)", border: "var(--border-default)", borderRadius: "var(--corner-md)", outline: focus ? "var(--focus-outline)" : "none", outlineOffset: "var(--focus-offset)", boxShadow: focus ? "var(--shadow-hard-sm)" : "none", transition: "box-shadow var(--motion-press)", fontFamily: "var(--font-base)" });
export function Input({ value, defaultValue, onChange, onEnter, placeholder, size = "md", icon, trailing, ariaLabel, type = "text", disabled, width, style, inputStyle, className }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label className={className} style={{ ...fieldBox(focus, size), width, background: disabled ? "var(--color-disabled)" : "var(--color-surface)", ...style }}>
      {icon && <Icon name={icon} size={FS[size] + 2} color="var(--color-text)" />}
      <input type={type} value={value} defaultValue={defaultValue} disabled={disabled} placeholder={placeholder} aria-label={ariaLabel || placeholder}
        onChange={(e) => onChange && onChange(e.target.value, e)} onKeyDown={(e) => { if (e.key === "Enter" && onEnter) onEnter(e.target.value); }}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ flex: 1, minWidth: 0, height: "100%", border: 0, outline: 0, background: "transparent", padding: 0, fontFamily: "inherit", fontSize: FS[size], color: "var(--color-text)", ...inputStyle }} />
      {trailing}
    </label>
  );
}
export function Select({ options = [], value, placeholder, onChange, size = "md", width = 160, height, defaultOpen = false, ariaLabel, style }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(null);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);
  return (
    <div ref={ref} style={{ position: "relative", width, flexShrink: 0, ...style }}>
      <button type="button" aria-haspopup="listbox" aria-expanded={open} aria-label={ariaLabel} onClick={() => setOpen(!open)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ ...fieldBox(focus || open, size), height: height ?? H[size], width: "100%", justifyContent: "space-between", cursor: "pointer", fontSize: FS[size], color: value ? "var(--color-text)" : "var(--color-text-muted)" }}>
        {value ?? placeholder}
        <Icon name="chevron-down" size={14} color="var(--color-text)" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .15s ease" }} />
      </button>
      {open && (
        <div role="listbox" style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0, zIndex: 30, padding: "var(--space-1)", background: "var(--color-surface)", border: "var(--border-default)", borderRadius: "var(--corner-md)", boxShadow: "var(--shadow-hard-md)" }}>
          {options.map((o) => (
            <div key={o} role="option" aria-selected={o === value} onMouseEnter={() => setHover(o)} onMouseLeave={() => setHover(null)} onClick={() => { setOpen(false); onChange && onChange(o); }}
              style={{ padding: "10px var(--space-3)", borderRadius: "var(--corner-sm)", fontSize: 16, cursor: "pointer", fontWeight: o === value ? 700 : 400, background: o === value ? "var(--color-brand-mint)" : o === hover ? "var(--color-mint-tint)" : "transparent", color: "var(--color-text)" }}>{o}</div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Input;
