import React from 'react';
import { Icon } from '../icons/Icon.jsx';
// figma node: 2022:52 書卡 — retro. Cover framed in a 2px Primary stroke; hover lifts with a hard shadow and reveals the synopsis on a mint panel.
export function BookCard(_p = {}) {
  const [hoverInner, setHover] = React.useState(false);
  const hover = (_p.state ?? (hoverInner ? "hover" : "default")) === "hover";
  const checked = !!_p.checked;
  const title = _p.title ?? "書名", author = _p.author ?? "作者";
  const synopsis = _p.synopsis ?? "這裡是這本書的簡介預留文字，滑鼠移到卡片上方即可顯示完整內容。";
  return (
    <div className={_p.className} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={_p.onClick} style={{ position: "relative", width: 161, display: "flex", flexDirection: "column", gap: 8, cursor: _p.onClick ? "pointer" : "default", fontFamily: "var(--font-base)", ..._p.style }}>
      <div style={{ position: "relative", height: 226, boxSizing: "border-box", overflow: "hidden", border: "2px solid var(--color-border)", borderRadius: 4, background: _p.cover ? `center / cover no-repeat url(${_p.cover})` : "var(--color-bg)", display: "flex", justifyContent: "center", alignItems: "center",
        boxShadow: hover ? "4px 4px 0 0 var(--color-border)" : "2px 2px 0 0 var(--color-border)", transform: hover ? "translate(-2px,-2px)" : "none", transition: "transform .12s ease, box-shadow .12s ease" }}>
        {_p.coverNode}
        {hover && synopsis && (
          <div style={{ position: "absolute", inset: 0, padding: 14, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 8, background: "var(--color-mint-tint)" }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1.5px", color: "var(--color-text)" }}>{_p.text1 ?? "書籍簡介"}</span>
            <span style={{ height: 0, borderTop: "1.5px solid var(--color-border)" }} />
            <span style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--color-text)", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 9, WebkitBoxOrient: "vertical" }}>{synopsis}</span>
          </div>
        )}
      </div>
      <span style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.3, color: "var(--color-text)", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{title}</span>
      {author && <span style={{ fontSize: 13, lineHeight: 1.2, color: "var(--color-text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{author}</span>}
      {_p.selectable && (
        <button type="button" role="checkbox" aria-checked={checked} aria-label={(checked ? "取消選取 " : "選取 ") + title} onClick={(e) => { e.stopPropagation(); _p.onCheck && _p.onCheck(!checked); }}
          style={{ position: "absolute", top: hover ? 4 : 8, right: hover ? 10 : 8, zIndex: 3, width: 24, height: 24, padding: 0, boxSizing: "border-box", borderRadius: 4, cursor: "pointer", border: "2px solid var(--color-border)", background: checked ? "var(--color-brand-mint)" : "var(--color-surface)", display: "flex", alignItems: "center", justifyContent: "center", transition: "top .12s ease, right .12s ease" }}>{checked && <Icon name="check" size={13} color="var(--color-text)" />}</button>
      )}
    </div>
  );
}
export default BookCard;
