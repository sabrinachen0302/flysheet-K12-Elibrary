import React from 'react';
import * as DS from '../design-system/index.js';
import { lnk } from './BookDetail.jsx';
// 線上學習資源 — all content comes from data/resources.json (never hard-coded here).
const { FormatToggle: RToggle, Icon: RIcon } = DS;
const RES_TYPES = ["線上課程與影音", "博物館與線上展覽", "媒體與知識雜誌", "圖書館與學術資源", "自主學習", "學習歷程檔案", "閱讀推薦與電子書", "生涯與升學", "臺灣研究資料庫"];
const RES_SUBJECTS = ["國文", "數學", "英文", "自然科學", "地科", "社會", "藝術", "科技", "綜合活動", "家政", "健康與體育"];
const RES_PAGE = 24;
let resCache = null;
function useResources() {
  const [data, setData] = React.useState(resCache);
  const [err, setErr] = React.useState(null);
  React.useEffect(() => {
    if (resCache) return;
    fetch("data/resources.json").then(r => r.json()).then(d => { resCache = d; setData(d); }).catch(e => setErr(String(e)));
  }, []);
  return { data, err };
}
function useColumns() {
  const calc = () => window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const [n, setN] = React.useState(calc);
  React.useEffect(() => { const f = () => setN(calc()); window.addEventListener("resize", f); return () => window.removeEventListener("resize", f); }, []);
  return n;
}
function FacetTag({ label, count, on, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <button type="button" aria-pressed={on} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: "flex", alignItems: "center", gap: 6, border: 0, cursor: "pointer", borderRadius: 999, padding: "7px 14px", fontFamily: "inherit", fontSize: 14, lineHeight: "100%", whiteSpace: "nowrap", background: on ? "var(--color-brand-accent)" : h ? "var(--color-background-page)" : "var(--color-surface)", color: on ? "var(--color-text)" : "var(--color-text-primary)", boxShadow: on ? "none" : "inset 0 0 0 2px var(--color-border)", fontWeight: on ? 700 : 400 }}>
      {label}<span style={{ fontSize: 12, color: on ? "var(--color-text)" : "var(--color-text-secondary)" }}>{count}</span>
    </button>
  );
}
function FacetRow({ title, options, value, counts, total, onPick }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      <span style={{ width: 72, flexShrink: 0, paddingTop: 7, fontSize: 14, fontWeight: 700 }}>{title}</span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <FacetTag label="全部" count={total} on={!value} onClick={() => onPick(null)} />
        {options.map(o => <FacetTag key={o} label={o} count={counts[o] || 0} on={value === o} onClick={() => onPick(value === o ? null : o)} />)}
      </div>
    </div>
  );
}
const olrKey = (x) => "olr:" + (x.id ?? x.url);
const resourceById = (id) => (resCache || []).find(x => String(x.id ?? x.url) === String(id));
// 電子資源圖片（data/resources.json 的 image 欄位，路徑相對於 index.html）；多為橫式標誌，完整顯示不裁切
function ResLogo({ r, w = "100%", h = 96, pad = 12, radius = "var(--radius-md)", style }) {
  const [bad, setBad] = React.useState(false);
  return (
    <div style={{ width: w, height: h, flexShrink: 0, boxSizing: "border-box", padding: pad, background: "#fff", border: "1px solid var(--color-border-card)", borderRadius: radius, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", ...style }}>
      {r.image && !bad ? <img src={r.image} alt={r.title} loading="lazy" onError={() => setBad(true)} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }} /> : <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-muted)", textAlign: "center", lineHeight: 1.3 }}>{r.title}</span>}
    </div>
  );
}
function ResourceCard({ r, selection }) {
  const [h, setH] = React.useState(false);
  window.useFavs();
  const key = olrKey(r), saved = window.favStore.has(key), checked = selection ? selection.has(key) : false;
  const stop = (fn) => (e) => { e.preventDefault(); e.stopPropagation(); fn(); };
  const iconBtn = { border: 0, background: "none", padding: 0, cursor: "pointer", display: "flex" };
  return (
    <a href={r.url} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ position: "relative", display: "flex", flexDirection: "column", gap: 8, minWidth: 0, boxSizing: "border-box", padding: "var(--spacing-lg) var(--spacing-lg) var(--spacing-lg)", background: "var(--color-surface)", border: `1px solid ${h ? "var(--color-brand-primary)" : "var(--color-border-card)"}`, borderRadius: "var(--radius-xl)", textDecoration: "none", color: "var(--color-text-primary)", boxShadow: h ? "0 6px 16px var(--color-primary-tint)" : "none", transform: h ? "translateY(-2px)" : "none", transition: "box-shadow .15s ease, transform .15s ease, border-color .15s ease" }}>
      <ResLogo r={r} h={112} />
      <span style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.35, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", color: h ? "var(--color-link)" : "var(--color-text-primary)", textDecoration: h ? "underline" : "none" }}>{r.title}</span>
      {r.publisher && <span style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.3 }}>{r.publisher}</span>}
      {r.description && <span style={{ fontSize: 14, lineHeight: 1.55, color: "var(--color-text-secondary)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{r.description}</span>}
      <div style={{ marginTop: "auto", paddingTop: 8, display: "flex", flexWrap: "wrap", gap: 6 }}>
        {(r.categories || []).map(c => <span key={"c" + c} style={{ background: "var(--color-accent-tint)", borderRadius: "var(--radius-sm)", padding: "4px 8px", fontSize: 12, fontWeight: 700, color: "var(--color-text-muted)", lineHeight: "normal" }}>{c}</span>)}
        {(r.subjects || []).map(s => <span key={"s" + s} style={{ borderRadius: 6, padding: "3px 10px", fontSize: 12, color: "var(--color-text)", boxShadow: "inset 0 0 0 2px var(--color-border)", lineHeight: "normal" }}>{s}</span>)}
        <div style={{ marginLeft: "auto", alignSelf: "center", display: "flex", alignItems: "center", gap: 12 }}>
          {selection && <button type="button" role="checkbox" aria-checked={checked} aria-label={(checked ? "取消選取 " : "選取 ") + r.title} onClick={stop(() => selection.set(key, !checked))} style={{ width: 18, height: 18, padding: 0, boxSizing: "border-box", borderRadius: "var(--radius-sm)", cursor: "pointer", border: "1.5px solid var(--color-border)", background: checked ? "var(--color-brand-mint)" : "var(--color-surface)", color: "var(--color-text)", fontSize: 12, lineHeight: "18px" }}>{checked ? "✓" : ""}</button>}
          <button type="button" aria-pressed={saved} aria-label={saved ? "移出我的最愛" : "加入我的最愛"} title={saved ? "移出我的最愛" : "加入我的最愛"} onClick={stop(() => window.favStore.toggle(key))} style={{ ...iconBtn, color: saved ? "var(--color-text)" : "var(--color-text-muted)" }}><RIcon name={saved ? "bookmark-filled" : "bookmark"} size={16} /></button>
          <RIcon name="external-link" size={16} style={{ color: h ? "var(--color-text)" : "var(--color-text-muted)" }} />
        </div>
      </div>
    </a>
  );
}
function ResourcesScreen({ go }) {
  const { data, err } = useResources();
  const cols = useColumns();
  const [q, setQ] = React.useState("");
  const [type, setType] = React.useState(() => { const v = localStorage.getItem("k12-res-type"); localStorage.removeItem("k12-res-type"); return v; });
  React.useEffect(() => { const f = () => { const v = localStorage.getItem("k12-res-type"); if (v) { localStorage.removeItem("k12-res-type"); setQ(""); setSubject(null); setType(v); } }; window.addEventListener("k12-res-type", f); return () => window.removeEventListener("k12-res-type", f); }, []);
  const [subject, setSubject] = React.useState(null);
  const [sort, setSort] = React.useState("預設");
  const [shown, setShown] = React.useState(RES_PAGE);
  const selection = window.useSelection();
  React.useEffect(() => setShown(RES_PAGE), [q, type, subject, sort]);
  const all = data || [];
  const kw = q.trim().toLowerCase();
  const matchQ = (r) => !kw || [r.title, r.description, r.publisher].some(v => v && v.toLowerCase().includes(kw));
  const matchT = (r) => !type || (r.categories || []).includes(type);
  const matchS = (r) => !subject || (r.subjects || []).includes(subject);
  const base = all.filter(matchQ);
  const typePool = base.filter(matchS), subjPool = base.filter(matchT);
  const typeCounts = {}, subjCounts = {};
  typePool.forEach(r => (r.categories || []).forEach(c => typeCounts[c] = (typeCounts[c] || 0) + 1));
  subjPool.forEach(r => (r.subjects || []).forEach(s => subjCounts[s] = (subjCounts[s] || 0) + 1));
  const subjectsInData = RES_SUBJECTS.filter(s => all.some(r => (r.subjects || []).includes(s)));
  const list = base.filter(r => matchT(r) && matchS(r)).sort(sort === "最熱門" ? (a, b) => b.clicks - a.clicks : (a, b) => a.order - b.order);
  const clear = () => { setQ(""); setType(null); setSubject(null); };
  const lnk = { color: "inherit", textDecoration: "underline", cursor: "pointer" };
  return (
    <div style={{ background: "var(--color-surface)", padding: "20px 48px 56px", display: "flex", flexDirection: "column", gap: 28 }}>
      <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}><a style={lnk} onClick={() => go("home")}>首頁</a>　›　<a style={lnk} onClick={() => go("categories")}>瀏覽</a>　›　線上學習資源</div>
      <header style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 600 }}>線上學習資源</h1>
        <span style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>{data ? `共 ${list.length} 項資源` : err ? "資料載入失敗" : "載入中…"}</span>
      </header>
      <div style={{ position: "relative" }}>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="搜尋資源名稱、簡介或提供單位" aria-label="搜尋線上學習資源" style={{ width: "100%", boxSizing: "border-box", height: 53, border: "1.5px solid var(--color-brand-cta)", borderRadius: 8, padding: "12px 52px 12px 20px", fontFamily: "var(--font-base)", fontSize: 18, outline: 0 }} />
        {q ? <button type="button" aria-label="清除關鍵字" onClick={() => setQ("")} style={{ position: "absolute", right: 16, top: 14, border: 0, background: "none", cursor: "pointer", fontSize: 16, color: "var(--color-text-secondary)" }}>✕</button>
          : <RIcon name="search" size={22} style={{ position: "absolute", right: 18, top: 15, color: "var(--color-text-secondary)" }} />}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingBottom: 20, borderBottom: "1px solid var(--color-border-default)" }}>
        <FacetRow title="資源類型" options={RES_TYPES} value={type} counts={typeCounts} total={typePool.length} onPick={setType} />
        <FacetRow title="學科領域" options={subjectsInData} value={subject} counts={subjCounts} total={subjPool.length} onPick={setSubject} />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 12, fontSize: 14, color: "var(--color-text-secondary)" }}>
        {list.length > 0 && <window.BatchBar style={{ minWidth: 366, height: 32, minHeight: 32, fontSize: 16 }} selection={selection} keys={list.slice(0, shown).map(olrKey)}><window.AddToFolderMenu keys={selection.keys()} onDone={selection.clear} /></window.BatchBar>}
        排序：<RToggle options={["預設", "最熱門"]} state={sort} onChange={setSort} />
      </div>
      {data && !list.length ? (
        <div style={{ padding: "64px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, fontSize: 16, color: "var(--color-text-secondary)" }}>
          <span>找不到符合條件的資源</span>
          <button type="button" onClick={clear} style={{ border: 0, cursor: "pointer", background: "var(--color-brand-mint)", color: "var(--color-text)", borderRadius: 6, padding: "10px 24px", fontFamily: "inherit", fontSize: 14, fontWeight: 700 }}>清除篩選</button>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap: 20 }}>
          {list.slice(0, shown).map(r => <ResourceCard key={r.id ?? r.url} r={r} selection={selection} />)}
        </div>
      )}
      {shown < list.length && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <button type="button" onClick={() => setShown(n => n + RES_PAGE)} style={{ border: "2px solid var(--color-border)", cursor: "pointer", background: "var(--color-surface)", color: "var(--color-text)", borderRadius: 6, padding: "10px 32px", fontFamily: "inherit", fontSize: 15, fontWeight: 700 }}>載入更多</button>
          <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>已顯示 {Math.min(shown, list.length)} / {list.length} 項</span>
        </div>
      )}
    </div>
  );
}
Object.assign(window, { ResLogo, olrKey, resourceById, ResourcesScreen, useResources, ResourceCard, RES_TYPES, RES_SUBJECTS, useColumns });

export { RToggle, RIcon, RES_TYPES, RES_SUBJECTS, RES_PAGE, resCache, useResources, useColumns, FacetTag, FacetRow, olrKey, resourceById, ResLogo, ResourceCard, ResourcesScreen };
