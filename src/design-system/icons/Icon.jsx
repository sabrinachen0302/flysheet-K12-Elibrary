import React from 'react';
// Paths copied verbatim from assets/icons/*.svg (repo export). Stroke/fill use currentColor.
const ICONS = {
  "bookmark": { w: 20, h: 20, body: <path d="M5 2.5h10v15l-5-3.333L5 17.5v-15Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" /> },
  "bookmark-filled": { w: 20, h: 20, body: <path d="M5 2.5h10v15l-5-3.333L5 17.5v-15Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" /> },
  "check": { w: 16, h: 16, body: <path d="M3 8.5l3.2 3.2L13 4.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" /> },
  "chevron-down": { w: 14, h: 14, body: <path d="M3.5 5.25 7 8.75l3.5-3.5" stroke="currentColor" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" fill="none" /> },
  "chevron-right": { w: 10, h: 15, body: <path d="M1 1l7.5 6.48L1 13.96" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /> },
  "chevron-left-large": { w: 56, h: 57, body: <path d="M40.3 6 20.4 28l19.9 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /> },
  "chevron-right-large": { w: 56, h: 57, body: <path d="M15.7 6l19.9 22-19.9 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /> },
  "enter": { w: 23, h: 23, body: <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M7.7 5V3.9A3 3 0 0 1 10.7.9h8.4a3 3 0 0 1 3 3v15.2a3 3 0 0 1-3 3h-8.4a3 3 0 0 1-3-3V18" /><path d="M.9 11.5h12M10 8.4l3.1 3.1-3.1 3.1" /></g> },
  "external-link": { w: 16, h: 16, body: <path d="M9.333 2.667h4v4M13.333 2.667 6.667 9.333M12 9.333v4H2.667V4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /> },
  "quote": { w: 20, h: 20, body: <path fill="currentColor" d="M5.833 7.5C4.583 7.5 3.75 8.333 3.75 9.583s.833 2.084 2.083 2.084c0 1.25-.833 2.083-2.083 2.083V15C5.833 15 7.5 13.333 7.5 10.833V7.5H5.833Zm7.5 0c-1.25 0-2.083.833-2.083 2.083s.833 2.084 2.083 2.084c0 1.25-.833 2.083-2.083 2.083V15C13.333 15 15 13.333 15 11.25V7.5h-1.667Z" /> },
  "search": { w: 22, h: 22, body: <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"><circle cx="9.5" cy="9.5" r="6.6" /><path d="M14.3 14.3l5 5" /></g> },
  "share": { w: 20, h: 20, body: <g stroke="currentColor" strokeWidth="2" fill="none"><circle cx="15" cy="4.167" r="2.5" /><circle cx="5" cy="10" r="2.5" /><circle cx="15" cy="15.833" r="2.5" /><path d="M7.167 8.75l5.666-3.333M7.167 11.25l5.666 3.333" /></g> },
  "radio-checked": { w: 18, h: 18, body: <g><circle cx="9" cy="9" r="8" fill="white" stroke="#3A2F5A" strokeWidth="2" /><circle cx="9" cy="9" r="4.5" fill="#3A2F5A" /></g> },
  "radio-unchecked": { w: 18, h: 18, body: <circle cx="9" cy="9" r="8.25" fill="white" stroke="#D9D9D9" strokeWidth="1.5" /> },
};
export const ICON_NAMES = Object.keys(ICONS);
export function Icon({ name, size, color, style, className }) {
  const ic = ICONS[name];
  if (!ic) return null;
  const h = size ?? ic.h;
  const w = (ic.w / ic.h) * h;
  return (
    <svg className={className} width={w} height={h} viewBox={`0 0 ${ic.w} ${ic.h}`} style={{ display: "block", flexShrink: 0, color: color ?? "currentColor", ...style }} aria-hidden="true">{ic.body}</svg>
  );
}
export default Icon;
