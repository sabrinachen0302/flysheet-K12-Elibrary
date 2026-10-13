import React from 'react';
import { BookCard } from '../cards/BookCard.jsx';
import { segTrack, segItem } from './FormatToggle.jsx';
// figma node: 2110:1518 搜尋結果檢視區塊 — retro. Header: 變更瀏覽模式 segmented (書封 / 資料預覽). Body: children, or a sample grid.
export function ResultViewSwitch(_p = {}) {
  const state = _p.state ?? "書卡";
  const header = (
    <div style={{ display: "flex", gap: 11, justifyContent: "flex-end", alignItems: "center" }}>
      <span style={{ fontFamily: "var(--font-base)", fontSize: 14, color: "var(--color-text-muted)", whiteSpace: "nowrap" }}>{_p.text1 ?? "變更瀏覽模式："}</span>
      <div style={segTrack}>
        <span style={segItem(state === "書卡", true)}>{_p.text2 ?? "書封"}</span>
        <span style={segItem(state === "資料庫卡", true)}>{_p.text3 ?? "資料預覽"}</span>
      </div>
    </div>
  );
  if (_p.headerOnly) return <div className={_p.className} style={{ width: "fit-content", ..._p.style }}>{header}</div>;
  return (
    <div className={_p.className} style={{ width: "fit-content", display: "flex", flexDirection: "column", gap: "var(--spacing-2xl)", ..._p.style }}>
      {header}
      {_p.children ?? <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 161px)", gap: "var(--spacing-2xl)" }}>{[0, 1, 2, 3].map(i => <BookCard key={i} />)}</div>}
    </div>
  );
}
export default ResultViewSwitch;
