import React from 'react';
import * as DS from '../design-system/index.js';
import { lnk } from './BookDetail.jsx';
// 主題書單清單 — 資料來自 data/curations.json；項目以 "b:<書籍 id>" / "r:<電子資源 id>" 參照既有資料，不另存內容。
const { Badge: CBadge, Button: CButton } = DS;
let curCache = null;
function useCurations() {
  const [data, setData] = React.useState(curCache);
  React.useEffect(() => { if (!curCache) fetch("data/curations.json").then(r => r.json()).then(d => { curCache = d; setData(d); }); }, []);
  return data;
}
const resolveCurItem = (ref) => { const [k, id] = [ref.slice(0, 1), ref.slice(2)]; if (k === "b") { const b = window.bookById(id); return b ? { kind: "book", b } : null; } const x = window.resourceById(id); return x ? { kind: "res", x } : null; };
const openCurItem = (go, it) => it.kind === "book" ? window.openBook(go, it.b.id) : window.openExternal(it.x.url);
const openCuration = (go, id) => { localStorage.setItem("k12-curation", id); go("curation"); };
const CUR_TINT = { accent: "var(--color-brand-accent)", mint: "var(--color-brand-mint)", cta: "var(--color-brand-cta)" };
const fmtDate = (d) => d ? d.replace(/-/g, ".") : "-";
function CurThumb({ it, w }) {
  if (!it) return null;
  if (it.kind === "book") return <div style={{ width: w, lineHeight: 0, border: "var(--border-default)", boxShadow: "var(--shadow-hard-sm)", background: "var(--color-surface)" }}><window.BookCover book={it.b} width={w} /></div>;
  return <div style={{ width: w, height: w * 1.45, boxSizing: "border-box", border: "var(--border-default)", boxShadow: "var(--shadow-hard-sm)", background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8, padding: 8 }}><window.ResLogo r={it.x} h={w * 0.7} pad={4} style={{ border: 0 }} /><span style={{ fontSize: Math.max(11, w / 11), fontWeight: 700, lineHeight: 1.3, textAlign: "center", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{it.x.title}</span></div>;
}
function CurMeta({ c, size = 14, inline }) {
  if (inline) {
    const pair = (k, v) => <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ color: "var(--color-text-muted)" }}>{k}</span>{v}</div>;
    const sep = <span aria-hidden="true" style={{ width: 1.5, height: 14, background: "var(--color-divider)" }} />;
    return (
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "8px 20px", fontSize: size }}>
        {pair("策展人", <b>{c.curator || "-"}</b>)}{sep}
        {pair("對應課綱", (c.curriculum || []).length ? <span style={{ display: "flex", gap: 6 }}>{c.curriculum.map(s => <span key={s} style={{ whiteSpace: "nowrap", lineHeight: 1.5, padding: "2px 10px", borderRadius: 999, border: "var(--border-thin)", fontSize: size - 2 }}>{s}</span>)}</span> : "-")}{sep}
        {pair("更新日期", <span style={{ fontVariantNumeric: "tabular-nums" }}>{fmtDate(c.updated)}</span>)}
      </div>
    );
  }
  return (
    <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "6px 14px", fontSize: size, alignItems: "center" }}>
      <dt style={{ color: "var(--color-text-muted)" }}>策展人</dt><dd style={{ margin: 0, fontWeight: 700 }}>{c.curator || "-"}</dd>
      <dt style={{ color: "var(--color-text-muted)" }}>對應課綱</dt><dd style={{ margin: 0, display: "flex", flexWrap: "wrap", gap: 6, rowGap: 6, minWidth: 0 }}>{(c.curriculum || []).length ? c.curriculum.map(s => <span key={s} style={{ whiteSpace: "nowrap", flexShrink: 0, lineHeight: 1.5, padding: "2px 10px", borderRadius: 999, border: "var(--border-thin)", background: "var(--color-surface)", fontSize: size - 2 }}>{s}</span>) : "-"}</dd>
      <dt style={{ color: "var(--color-text-muted)" }}>更新日期</dt><dd style={{ margin: 0, fontVariantNumeric: "tabular-nums" }}>{fmtDate(c.updated)}</dd>
    </dl>
  );
}
function CurFan({ items, w, n, spread, lift }) {
  const pick = items.slice(0, n);
  const mid = (pick.length - 1) / 2;
  return (
    <div style={{ position: "relative", height: w * 1.5 + lift, display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
      {pick.map((it, i) => (
        <div key={i} style={{ position: "relative", marginLeft: i ? -w * (1 - spread) : 0, zIndex: n - Math.abs(Math.round(i - mid)), transform: `rotate(${(i - mid) * 5}deg) translateY(${-Math.max(0, lift - Math.abs(i - mid) * (lift / (mid || 1)))}px)` }}>
          <CurThumb it={it} w={w} />
        </div>
      ))}
    </div>
  );
}
function CurationCard({ c, go, idx }) {
  const [h, setH] = React.useState(false);
  const items = c.sets.flatMap(s => s.items).map(resolveCurItem).filter(Boolean);
  const uniq = items.filter((it, i) => items.findIndex(o => (o.kind === "book" ? o.b.id : o.x.id) === (it.kind === "book" ? it.b.id : it.x.id)) === i);
  const tint = CUR_TINT[c.tint] || CUR_TINT.mint;
  const tag = c.layout === "journey" ? "閱讀旅程" : "主題書單";
  const caption = c.layout === "journey" ? (c.scenes || []).length + " 個閱讀站" : c.sets.map(s => s.title).join("・");
  return (
    <article onClick={() => openCuration(go, c.id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ cursor: "pointer", minWidth: 0, display: "flex", flexDirection: "column", borderLeft: idx ? "var(--border-default)" : 0, background: h ? "var(--color-surface)" : "transparent", transition: "background .15s ease" }}>
      <div style={{ position: "relative", aspectRatio: "4 / 5", background: tint, borderBottom: "var(--border-default)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span aria-hidden="true" style={{ position: "absolute", top: 18, right: 14, writingMode: "vertical-rl", fontSize: 13, fontWeight: 700, letterSpacing: ".2em" }}>CURATION {String(idx + 1).padStart(2, "0")}</span>
        <div style={{ transform: h ? "translateY(-6px) scale(1.03)" : "none", transition: "transform .25s ease" }}><CurFan items={uniq} w={104} n={4} spread={0.48} lift={18} /></div>
        <span style={{ position: "absolute", left: 16, right: 40, bottom: 14, fontSize: 15, fontWeight: 700, lineHeight: 1.4 }}>{caption}</span>
      </div>
      <div style={{ flex: 1, padding: "18px 28px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <span style={{ fontSize: 12, fontWeight: 700, padding: "1px 8px", borderRadius: 999, border: "var(--border-thin)" }}>#{tag}</span>
          <span style={{ fontSize: 15, fontVariantNumeric: "tabular-nums", color: "var(--color-text-secondary)" }}>{fmtDate(c.updated)}</span>
        </div>
        <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 700, lineHeight: 1.35, letterSpacing: ".08em", textDecoration: h ? "underline" : "none", textDecorationColor: "var(--color-brand-cta)", textUnderlineOffset: 6 }}>{c.title}</h2>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: "var(--color-text-secondary)", textWrap: "pretty" }}>{c.lede}</p>
        <div style={{ marginTop: "auto", paddingTop: 16, display: "flex", alignItems: "flex-end", gap: 12 }}>
          <span aria-hidden="true" style={{ width: 52, height: 52, flexShrink: 0, borderRadius: "50%", border: "var(--border-default)", background: tint, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700 }}>{(c.curator || "-").slice(0, 1)}</span>
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 4, paddingBottom: 4 }}>
            <span style={{ fontSize: 14, fontWeight: 700 }}>{c.curator || "-"}</span>
            <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{(c.curriculum || []).join(" / ") || "-"}</span>
          </div>
          <span aria-hidden="true" style={{ fontFamily: "var(--font-heading)", fontSize: 76, fontWeight: 700, lineHeight: 0.8, fontVariantNumeric: "tabular-nums" }}>{String(idx + 1).padStart(2, "0")}</span>
        </div>
      </div>
    </article>
  );
}
function CurationListScreen({ go }) {
  const list = useCurations();
  window.useResources();
  const lnk = { color: "inherit", textDecoration: "underline", cursor: "pointer" };
  return (
    <div style={{ paddingBottom: 64, display: "flex", flexDirection: "column", gap: 28, fontFamily: "var(--font-base)", color: "var(--color-text)" }}>
      <div style={{ padding: "24px 48px 0", display: "flex", flexDirection: "column", gap: 28 }}>
        <nav aria-label="breadcrumb" style={{ fontSize: 13, color: "var(--color-text-secondary)", display: "flex", gap: 8 }}><a onClick={() => go("home")} style={lnk}>首頁</a><span>›</span><span>瀏覽</span><span>›</span><span>主題書單</span></nav>
        <header style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 40, fontWeight: 700, letterSpacing: ".06em" }}>主題書單</h1>
            <span style={{ fontSize: 16, color: "var(--color-text-secondary)" }}>老師與圖書館為你挑選的書與電子資源</span>
          </div>
          {list && <span style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>共 {list.length} 個主題</span>}
        </header>
      </div>
      {list && <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(4, list.length)}, minmax(0, 1fr))`, borderTop: "var(--border-default)", borderBottom: "var(--border-default)" }}>{list.map((c, i) => <CurationCard key={c.id} c={c} go={go} idx={i} />)}</div>}
    </div>
  );
}
Object.assign(window, { useCurations, resolveCurItem, openCurItem, openCuration, CurThumb, CurMeta, CUR_TINT, CurationListScreen });

export { CBadge, CButton, curCache, useCurations, resolveCurItem, openCurItem, openCuration, CUR_TINT, fmtDate, CurThumb, CurMeta, CurFan, CurationCard, CurationListScreen };
