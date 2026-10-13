import React from 'react';
// figma node: 2088:662 格式切換 — retro segmented control. Active = Accent; track = paper with 2px Primary stroke.
export const segTrack = { width: "fit-content", display: "flex", gap: 3, padding: 3, boxSizing: "border-box", background: "var(--color-surface)", border: "2px solid var(--color-border)", borderRadius: 6, position: "relative" };
export const segItem = (on, clickable) => ({ border: on ? "1.5px solid var(--color-border)" : "1.5px solid transparent", cursor: clickable ? "pointer" : "default", borderRadius: 4, background: on ? "var(--color-brand-accent)" : "transparent", padding: "6px 14px", fontFamily: "var(--font-base)", fontWeight: on ? 700 : 500, fontSize: 14, lineHeight: "100%", whiteSpace: "nowrap", color: "var(--color-text)" });
export function FormatToggle({ options = ["全部格式", "電子書", "有聲書"], state, onChange, className, style, text1, text2, text3 }) {
  const cur = state ?? "有聲書";
  const over = [text1, text2, text3];
  return (
    <div role="tablist" className={className} style={{ ...segTrack, ...style }}>
      {options.map((o, i) => <button key={o} type="button" role="tab" aria-selected={o === cur} onClick={() => onChange && onChange(o)} style={segItem(o === cur, !!onChange)}>{over[i] ?? o}</button>)}
    </div>
  );
}
export default FormatToggle;
