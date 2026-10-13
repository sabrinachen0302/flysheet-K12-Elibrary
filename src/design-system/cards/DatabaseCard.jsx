import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Button } from '../core/Button.jsx';
import { Badge, BadgeTone } from '../core/Badge.jsx';
// figma node: 2066:85 資料庫卡 — retro list card (fills container). Paper surface, 2px stroke, hard shadow, colour category badge.
export const retroCheck = (checked, label, onClick) => (
  <button type="button" role="checkbox" aria-checked={checked} aria-label={(checked ? "取消選取 " : "選取 ") + label} onClick={onClick} style={{ width: 20, height: 20, flexShrink: 0, padding: 0, boxSizing: "border-box", borderRadius: 4, border: "1.5px solid var(--color-border)", background: checked ? "var(--color-brand-mint)" : "var(--color-surface)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{checked && <Icon name="check" size={12} color="var(--color-text)" />}</button>
);
export const retroRow = { width: "100%", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "var(--spacing-lg)", padding: "var(--spacing-lg)", background: "var(--color-surface)", border: "2px solid var(--color-border)", borderRadius: 8, boxShadow: "3px 3px 0 0 var(--color-border)", fontFamily: "var(--font-base)", color: "var(--color-text)" };
// 分享懸浮視窗：複製連結／產生 QR code。點外面或按 Esc 關閉。
export function SharePopover({ url, title, onClose }) {
  const ref = React.useRef(null);
  const [copied, setCopied] = React.useState(false);
  const [qr, setQr] = React.useState(false);
  React.useEffect(() => { const c = (e) => { if (ref.current && !ref.current.parentNode.contains(e.target)) onClose(); }; const k = (e) => e.key === "Escape" && onClose(); document.addEventListener("mousedown", c); document.addEventListener("keydown", k); return () => { document.removeEventListener("mousedown", c); document.removeEventListener("keydown", k); }; }, []);
  const copy = () => { const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1600); }; if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, done); else done(); };
  const qrSrc = "https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=8&data=" + encodeURIComponent(url);
  return (
    <div ref={ref} role="dialog" aria-label="分享" style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, zIndex: 50, width: 300, boxSizing: "border-box", padding: 16, display: "flex", flexDirection: "column", gap: 12, background: "var(--color-surface)", border: "2px solid var(--color-border)", borderRadius: 8, boxShadow: "3px 3px 0 0 var(--color-border)", fontFamily: "var(--font-base)", color: "var(--color-text)", textAlign: "left" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>分享</span>
        <Button variant="icon" size="sm" ariaLabel="關閉" onClick={onClose}>✕</Button>
      </div>
      {title && <span style={{ fontSize: 13, color: "var(--color-text-muted)", marginTop: -6, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</span>}
      <input readOnly value={url} onFocus={(e) => e.target.select()} style={{ width: "100%", boxSizing: "border-box", height: 36, padding: "0 10px", border: "1.5px solid var(--color-border)", borderRadius: 4, background: "var(--color-bg)", fontFamily: "inherit", fontSize: 13, color: "var(--color-text)" }} />
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 8 }}>
        <Button size="sm" variant="primary" width="100%" icon={copied ? "check" : undefined} onClick={copy}>{copied ? "已複製" : "複製連結"}</Button>
        <Button size="sm" tone="paper" width="100%" selected={qr} onClick={() => setQr(!qr)}>{qr ? "隱藏 QR code" : "產生 QR code"}</Button>
      </div>
      {qr && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingTop: 12, borderTop: "var(--border-dashed)" }}>
          <img src={qrSrc} alt={"QR code：" + url} width="160" height="160" style={{ display: "block", border: "1.5px solid var(--color-border)", borderRadius: 4, background: "#fff" }} />
          <a href={qrSrc} target="_blank" rel="noopener" style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text)", textDecoration: "underline", textUnderlineOffset: 3 }}>下載 QR code</a>
        </div>
      )}
    </div>
  );
}
export function DatabaseCard(p = {}) {
  const [shareOpen, setShareOpen] = React.useState(false);
  const shareUrl = p.shareUrl ?? (typeof window !== "undefined" ? window.location.href : "");
  const category = p.category ?? p.text1 ?? "DATABASE";
  const name = p.name ?? p.text2 ?? "資源名稱";
  const description = p.description ?? p.text3 ?? "這裡放一句簡短的資源說明文字。";
  const readMore = p.readMore ?? p.text4 ?? "閱讀更多";
  const [checkedInner, setChecked] = React.useState(!!p.checked);
  const checkCtl = typeof p.onCheck === "function";
  const checked = checkCtl ? !!p.checked : checkedInner;
  const [savedInner, setSaved] = React.useState(!!p.bookmarked);
  const controlled = typeof p.onBookmark === "function";
  const saved = controlled ? !!p.bookmarked : savedInner;
  const [lh, setLh] = React.useState(false);
  const tone = BadgeTone(category);
  const tint = { mint: "var(--color-mint-tint)", accent: "var(--color-accent-tint)", paper: "var(--color-bg)" }[tone];
  return (
    <div className={p.className} style={{ ...retroRow, ...p.style }}>
      {retroCheck(checked, name, () => checkCtl ? p.onCheck(!checked) : setChecked(!checked))}
      <div style={{ width: 64, height: 64, flexShrink: 0, boxSizing: "border-box", borderRadius: 4, border: p.thumbnailNode ? 0 : "1.5px solid var(--color-border)", overflow: "hidden", background: p.thumbnailNode ? "transparent" : p.thumbnail ? `center / cover no-repeat url(${p.thumbnail})` : tint, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {p.thumbnailNode && <div style={{ border: "1.5px solid var(--color-border)", lineHeight: 0 }}>{p.thumbnailNode}</div>}
        {!p.thumbnail && !p.thumbnailNode && <span style={{ width: 24, height: 24, boxSizing: "border-box", borderRadius: 3, border: "1.5px solid var(--color-border)", background: "var(--color-brand-accent)" }} />}
      </div>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 6 }}>
        <Badge size="sm" tone={tone}>{category}</Badge>
        <a onClick={p.onOpen} onMouseEnter={() => setLh(true)} onMouseLeave={() => setLh(false)} style={{ color: "var(--color-text)", textDecoration: lh && p.onOpen ? "underline" : "none", textUnderlineOffset: 3, cursor: p.onOpen ? "pointer" : "default", fontSize: 17, fontWeight: 700, lineHeight: 1.3 }}>{name}</a>
        <span style={{ fontSize: 13, lineHeight: 1.5, color: "var(--color-text-muted)", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{description}</span>
        <a onClick={p.onReadMore} style={{ color: "var(--color-text)", textDecoration: "underline", textUnderlineOffset: 3, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>{readMore}</a>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
        <div style={{ display: "flex", gap: 2, position: "relative" }}>
          <Button variant="icon" size="sm" icon="share" ariaLabel="分享" selected={shareOpen} onClick={() => setShareOpen(o => !o)} />
          {shareOpen && <SharePopover url={shareUrl} title={name} onClose={() => setShareOpen(false)} />}
          <Button variant="icon" size="sm" icon="external-link" ariaLabel="外部連結" />
          <Button variant="icon" size="sm" icon={saved ? "bookmark-filled" : "bookmark"} selected={saved} ariaLabel={saved ? "移出我的最愛" : "加入我的最愛"} title={saved ? "移出我的最愛" : "加入我的最愛"} onClick={() => controlled ? p.onBookmark(!saved) : setSaved(!saved)} />
        </div>
        <Button size="sm" iconRight="chevron-right" onClick={p.onGo}>簡介</Button>
      </div>
    </div>
  );
}
export default DatabaseCard;
