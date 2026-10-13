import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Button } from '../core/Button.jsx';
import { Badge } from '../core/Badge.jsx';
import { retroCheck, retroRow } from './DatabaseCard.jsx';
// 新聞列卡 — retro, same frame as 資料庫卡. No detail page: title and 前往閱讀 open the external article.
export function NewsCard(p = {}) {
  const title = p.title ?? "新聞標題";
  const [checkedInner, setChecked] = React.useState(!!p.checked);
  const checkCtl = typeof p.onCheck === "function";
  const checked = checkCtl ? !!p.checked : checkedInner;
  const [savedInner, setSaved] = React.useState(!!p.bookmarked);
  const saveCtl = typeof p.onBookmark === "function";
  const saved = saveCtl ? !!p.bookmarked : savedInner;
  const [lh, setLh] = React.useState(false);
  const open = () => { if (p.onOpen) p.onOpen(); else if (p.url) window.open(p.url, "_blank", "noopener"); };
  return (
    <div className={p.className} style={{ ...retroRow, ...p.style }}>
      {retroCheck(checked, title, () => checkCtl ? p.onCheck(!checked) : setChecked(!checked))}
      <div style={{ width: 96, height: 64, flexShrink: 0, boxSizing: "border-box", borderRadius: 4, border: "1.5px solid var(--color-border)", overflow: "hidden", background: p.thumbnail ? `center / cover no-repeat url(${p.thumbnail})` : "var(--color-accent-tint)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text)", fontFamily: '"Noto Sans TC", sans-serif', fontWeight: 700, fontSize: 11, lineHeight: 1.2, textAlign: "center", padding: 6 }}>
        {p.thumbnailNode ?? (!p.thumbnail && (p.source ?? "新聞來源"))}
      </div>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--color-text-muted)" }}>
          <Badge size="sm" tone="mint">{p.section ?? "新聞"}</Badge>
          <span>{p.source ?? "新聞來源"}</span><span>·</span><span>{p.date ?? "2026/01/01"}</span>
        </div>
        <a onClick={open} onMouseEnter={() => setLh(true)} onMouseLeave={() => setLh(false)} style={{ color: "var(--color-text)", textDecoration: lh ? "underline" : "none", textUnderlineOffset: 3, cursor: "pointer", fontSize: 17, fontWeight: 700, lineHeight: 1.35 }}>{title}<Icon name="external-link" size={13} style={{ display: "inline", marginLeft: 6, verticalAlign: "-1px" }} /></a>
        <span style={{ fontSize: 13, lineHeight: 1.5, color: "var(--color-text-muted)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.summary ?? "新聞摘要文字。"}</span>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
        <div style={{ display: "flex", gap: 2 }}>
          <Button variant="icon" size="sm" icon="share" ariaLabel="分享" />
          <Button variant="icon" size="sm" icon={saved ? "bookmark-filled" : "bookmark"} selected={saved} ariaLabel={saved ? "移出我的最愛" : "加入我的最愛"} title={saved ? "移出我的最愛" : "加入我的最愛"} onClick={() => saveCtl ? p.onBookmark(!saved) : setSaved(!saved)} />
        </div>
        <Button size="sm" iconRight="external-link" onClick={open}>前往閱讀</Button>
      </div>
    </div>
  );
}
export default NewsCard;
