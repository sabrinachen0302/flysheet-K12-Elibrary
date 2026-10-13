import React from 'react';
import * as DS from '../design-system/index.js';
// 通用簡介懸浮視窗：有聲書 / 電子雜誌 / 新聞 / 電子資源。window.openPreview(kind, item) 開啟；PreviewHost 掛在 App。空欄位顯示「-」。
const PVDS = DS;
function previewCfg(kind, x, go) {
  if (kind === "audio") return { key: x.id, badge: x.category, title: x.title, media: <img src={x.cover} alt="" style={{ width: 180, aspectRatio: "1 / 1", objectFit: "cover", display: "block" }} />,
    rows: [["副標題", x.subtitle], ["類型", [x.type, x.edition].filter(Boolean).join(" · ")], ["來源", x.source], ["作者", x.author]], label: "內容簡介", text: x.synopsis,
    primary: ["書籍詳細資料", () => window.openBook(go, x.id)] };
  if (kind === "magazine") return { key: x.id, badge: x.category, title: x.title, media: <img src={x.cover} alt="" style={{ width: 180, aspectRatio: "3 / 4", objectFit: "cover", display: "block" }} />,
    rows: [["類別", x.category], ["出版", x.author], ["平台", x.source]], label: "雜誌簡介", text: x.synopsis || x.description,
    primary: ["前往閱讀", () => window.openExternal(x.url)] };
  if (kind === "news") return { key: window.newsKey ? window.newsKey(x) : x.id, badge: x.sectionLabel || x.category, title: x.title, wide: true, media: x.image ? <img src={x.image} alt="" style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", display: "block" }} /> : null,
    rows: [["來源", x.source], ["日期", window.fmtNewsDate ? window.fmtNewsDate(x.date) : x.date], ["版面", x.sectionLabel || x.category]], label: "新聞摘要", text: x.summary,
    primary: ["閱讀全文", () => window.openNews(x)] };
  return { key: window.olrKey(x), badge: (x.categories || [])[0] || "線上學習資源", title: x.title, media: <div style={{ width: 180, background: "var(--color-surface)" }}><window.ResLogo r={x} w={180} h={120} pad={12} /></div>,
    rows: [["提供單位", x.publisher], ["類型", (x.categories || []).join("、")], ["學科領域", (x.subjects || []).join("、")]], label: "資源簡介", text: x.description,
    primary: ["前往資源", () => window.openExternal(x.url)] };
}
function ItemPreview({ kind, item, go, onClose }) {
  React.useEffect(() => { const k = (e) => e.key === "Escape" && onClose(); document.addEventListener("keydown", k); return () => document.removeEventListener("keydown", k); }, []);
  window.useFavs();
  const c = previewCfg(kind, item, go);
  const saved = window.favStore.has(c.key);
  const body = (
    <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
      {c.badge && <span style={{ alignSelf: "flex-start", fontSize: 12, fontWeight: 700, padding: "3px 8px", borderRadius: 4, border: "var(--border-thin)", background: "var(--color-accent-tint)" }}>{c.badge}</span>}
      <h2 style={{ margin: 0, paddingRight: 32, fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 700, lineHeight: 1.25, textWrap: "pretty" }}>{c.title}</h2>
      <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "6px 16px", fontSize: 14 }}>
        {c.rows.map(([k, v]) => <React.Fragment key={k}><dt style={{ color: "var(--color-text-muted)" }}>{k}</dt><dd style={{ margin: 0 }}>{v || "-"}</dd></React.Fragment>)}
      </dl>
      <div style={{ borderTop: "var(--border-dashed)", paddingTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".1em" }}>{c.label}</span>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, textWrap: "pretty" }}>{c.text || "-"}</p>
      </div>
      <div style={{ marginTop: "auto", paddingTop: 8, display: "flex", gap: 12, justifyContent: "flex-end" }}>
        <PVDS.Button size="md" tone="paper" selected={saved} icon={saved ? "bookmark-filled" : "bookmark"} onClick={() => window.favStore.toggle(c.key)}>{saved ? "已收藏" : "加入收藏"}</PVDS.Button>
        <PVDS.Button variant="primary" size="md" iconRight="chevron-right" onClick={() => { onClose(); c.primary[1](); }}>{c.primary[0]}</PVDS.Button>
      </div>
    </div>
  );
  const frame = c.media && <div style={{ flexShrink: 0, border: "var(--border-default)", boxShadow: "var(--shadow-hard-sm)", lineHeight: 0, alignSelf: "flex-start", overflow: "hidden", width: c.wide ? "100%" : undefined, boxSizing: "border-box" }}>{c.media}</div>;
  return ReactDOM.createPortal(
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(40,30,70,.35)", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ zoom: (document.getElementById("root") || {}).style?.zoom || 1, display: "flex" }}>
      <div role="dialog" aria-modal="true" aria-label={c.title} onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: 720, maxHeight: "86vh", overflow: "auto", boxSizing: "border-box", padding: 32, display: "flex", flexDirection: c.wide ? "column" : "row", gap: c.wide ? 20 : 28, background: "var(--color-surface)", border: "var(--border-default)", borderRadius: "var(--corner-lg)", fontFamily: "var(--font-base)", color: "var(--color-text)" }}>
        <button type="button" aria-label="關閉" onClick={onClose} style={{ position: "absolute", top: 14, right: 14, zIndex: 2, width: 32, height: 32, border: "var(--border-thin)", borderRadius: "50%", background: "var(--color-surface)", cursor: "pointer", fontSize: 14, color: "var(--color-text)" }}>✕</button>
        {frame}{body}
      </div></div>
    </div>, document.body
  );
}
function PreviewHost({ go }) {
  const [p, setP] = React.useState(null);
  React.useEffect(() => { const h = (e) => setP(e.detail); window.addEventListener("k12-preview", h); return () => window.removeEventListener("k12-preview", h); }, []);
  return p ? <ItemPreview kind={p.kind} item={p.item} go={go} onClose={() => setP(null)} /> : null;
}
window.openPreview = (kind, item) => window.dispatchEvent(new CustomEvent("k12-preview", { detail: { kind, item } }));
Object.assign(window, { ItemPreview, PreviewHost });

export { PVDS, previewCfg, ItemPreview, PreviewHost };
