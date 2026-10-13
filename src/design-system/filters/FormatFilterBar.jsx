import React from 'react';
import { Button } from '../core/Button.jsx';
// figma node: 2162:1704 格式篩選列 — retro chip toggles (paper → Mint when picked). Multi-select by default: 全部 = nothing picked; picking formats narrows.
const DEFAULT_OPTIONS = ["全部", "電子書", "有聲書", "雜誌", "新聞", "電子資料庫"];
export function FormatFilterBar({ options = DEFAULT_OPTIONS, value, state, onChange, multi = true, className, style, text1, text2, text3, text4 }) {
  const sel = value ?? (state && state !== "全部" ? [state] : []);
  const over = [text1, text2, text3, text4];
  const click = (o) => {
    if (!onChange) return;
    if (o === options[0]) return onChange([]);
    if (!multi) return onChange([o]);
    onChange(sel.includes(o) ? sel.filter(x => x !== o) : [...sel, o]);
  };
  return (
    <div role="group" aria-label="格式" className={className} style={{ width: "fit-content", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", ...style }}>
      {options.map((o, i) => {
        const on = i === 0 ? sel.length === 0 : sel.includes(o);
        return <Button key={o} size="sm" tone="paper" selected={on} icon={on ? "check" : undefined} onClick={() => click(o)}>{over[i] ?? o}</Button>;
      })}
    </div>
  );
}
export default FormatFilterBar;
