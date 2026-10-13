import React from 'react';
import * as DS from '../design-system/index.js';
import { toSearch } from './BookDetail.jsx';
// 分類瀏覽：資源類型輪盤 → 熱門主題 → 內容集合 → 目前顯示內容
// Mapping layer：只讀取既有資料（K12_BOOKS / K12_MAGAZINES / K12_NEWS），不改寫、不新增分類。
const { Button: CBtn, Icon: CIcon } = DS;
const CAT_TYPES = [
  { key: "fiction", label: "文學小說電子書", route: "topics-fiction", scope: "電子書", extra: ["文學小說類"], pool: () => window.K12_BOOKS.filter(b => b.type === "電子書" && b.klass === "文學小說類"), topics: (x) => x.topics || [], open: (go, x) => window.openBook(go, x.id), kind: "book" },
  { key: "nonfiction", label: "非小說電子書", route: "topics-nonfiction", scope: "電子書", extra: ["非小說類"], pool: () => window.K12_BOOKS.filter(b => b.type === "電子書" && b.klass === "非小說類"), topics: (x) => x.topics || [], open: (go, x) => window.openBook(go, x.id), kind: "book" },
  { key: "audio", label: "有聲書", route: "topics-audio", scope: "有聲書", pool: () => window.K12_BOOKS.filter(b => b.type === "有聲書"), topics: (x) => x.category ? [x.category] : [], open: (go, x) => window.openBook(go, x.id), kind: "book" },
  { key: "magazine", label: "電子雜誌", route: "topics-magazine", scope: "雜誌", pool: () => window.K12_MAGAZINES, topics: (x) => x.category ? [x.category] : [], open: (go, x) => window.openExternal(x.url), kind: "book" },
  { key: "news", label: "新聞", route: "topics-news", scope: "新聞", pool: () => window.K12_NEWS, topics: (x) => x.category ? [x.category] : [], open: (go, x) => window.openNews(x), kind: "news" },
];
const HOT_N = 5;
const hotTopics = (t, pool) => {
  const c = new Map();
  pool.forEach(x => t.topics(x).forEach(k => c.set(k, (c.get(k) || 0) + 1)));
  return [...c.entries()].sort((a, b) => b[1] - a[1]).slice(0, HOT_N).map(([k, n]) => ({ name: k, n }));
};
const TOPIC_FILLS = ["var(--color-mint-tint)", "var(--color-accent-tint)", "var(--color-primary-tint)", "var(--color-accent-tint)", "var(--color-mint-tint)"];
const COVER_W = 240, COVER_H = 360;
function TopicSlot({ label, sub, fill, on, onClick, browse }) {
  const [h, setH] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} aria-pressed={browse ? undefined : on}
      style={{ position: "relative", width: 300, height: 76, padding: 0, border: 0, background: "none", cursor: "pointer", fontFamily: "var(--font-base)", color: "var(--color-text)" }}>
      <span aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, width: 282, height: 60, background: "var(--color-brand-primary)", borderRadius: "var(--corner-sm)" }} />
      <span style={{ position: "absolute", left: 14, top: 14, right: 0, bottom: 0, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, border: "var(--border-default)", borderRadius: "var(--corner-sm)", background: browse ? "var(--color-brand-cta)" : on ? "var(--color-brand-accent)" : fill, fontSize: 16, fontWeight: on || browse ? 700 : 600, transform: `translate(${h ? -3 : 0}px, ${h ? -3 : 0}px)`, transition: "transform .15s ease" }}>
        {on && <CIcon name="check" size={14} />}
        {label}
        {sub != null && <span style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-muted)", fontVariantNumeric: "tabular-nums" }}>{sub}</span>}
        {browse && <CIcon name="chevron-right" size={12} />}
      </span>
    </button>
  );
}
const WHEEL_R = 1300, WHEEL_STEP = 9.5, WHEEL_VIS = 240;
function TypeWheel({ sel, onPick }) {
  return (
    <div style={{ position: "relative", height: WHEEL_VIS, overflow: "hidden", marginTop: 8 }}>
      <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: 18, width: WHEEL_R * 2 + 28, height: WHEEL_R * 2 + 28, marginLeft: -(WHEEL_R + 14), boxSizing: "border-box", borderRadius: "50%", border: "var(--border-default)", background: "var(--color-surface)" }} />
      <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: 32, width: WHEEL_R * 2, height: WHEEL_R * 2, marginLeft: -WHEEL_R, boxSizing: "border-box", borderRadius: "50%", border: "var(--border-default)", borderColor: "var(--color-brand-mint)", background: "var(--color-brand-mint)" }} />
      <span aria-hidden="true" style={{ position: "absolute", left: "50%", top: 30, marginLeft: -10, width: 0, height: 0, borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderTop: "12px solid var(--color-brand-accent)", zIndex: 2 }} />
      <div role="tablist" aria-label="資源類型" style={{ position: "absolute", left: "50%", top: 32 + WHEEL_R, width: 0, height: 0, transform: `rotate(${-sel * WHEEL_STEP}deg)`, transition: "transform .6s cubic-bezier(.3,.7,.2,1)" }}>
        {CAT_TYPES.map((t, i) => {
          const on = i === sel;
          return (
            <button key={t.key} type="button" role="tab" aria-selected={on} onClick={() => onPick(i)}
              style={{ position: "absolute", left: 0, top: 0, transform: `rotate(${i * WHEEL_STEP}deg) translate(-50%, ${-WHEEL_R + 34}px)`, transformOrigin: "0 0", whiteSpace: "nowrap", padding: "9px 22px", borderRadius: 999, border: on ? "var(--border-default)" : "var(--border-width-md) solid transparent", background: on ? "var(--color-brand-accent)" : "transparent", color: on ? "var(--color-text)" : "var(--color-surface)", fontFamily: "var(--font-heading)", fontSize: on ? 22 : 18, fontWeight: 700, letterSpacing: ".06em", cursor: "pointer", boxShadow: on ? "var(--shadow-hard-sm)" : "none", transition: "background .2s ease, color .2s ease, font-size .2s ease" }}>
              {t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
function NavCircle({ dir, dis, onClick }) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const hot = !dis && (h || p);
  return (
    <button type="button" disabled={dis} onClick={onClick} aria-label={dir < 0 ? "上一筆" : "下一筆"} onMouseEnter={() => setH(true)} onMouseLeave={() => { setH(false); setP(false); }} onMouseDown={() => setP(true)} onMouseUp={() => setP(false)}
      style={{ width: 44, height: 44, borderRadius: "50%", border: "var(--border-default)", background: dis ? "var(--color-divider)" : hot ? "var(--color-brand-cta)" : "var(--color-surface)", color: dis ? "var(--color-text-muted)" : "var(--color-text)", cursor: dis ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: dis || p ? "none" : "var(--shadow-hard-sm)", transform: p ? "translate(2px, 2px)" : "none", transition: "background .15s ease", padding: 0 }}>
      <CIcon name="chevron-right" size={16} style={dir < 0 ? { transform: "rotate(180deg)" } : undefined} />
    </button>
  );
}
function CategoriesScreen({ go, initialType }) {
  const [sel, setSel] = React.useState(() => Math.max(0, CAT_TYPES.findIndex(c => c.key === initialType)));
  const [topic, setTopic] = React.useState(null);
  const [idx, setIdx] = React.useState(0);
  const t = CAT_TYPES[sel];
  const pool = React.useMemo(() => t.pool(), [sel]);
  const hots = React.useMemo(() => hotTopics(t, pool), [sel, pool]);
  const items = topic ? pool.filter(x => t.topics(x).includes(topic)) : pool;
  const cur = items[idx];
  const n = items.length;
  const pickType = (i) => { if (i === sel) return; setSel(i); setTopic(null); setIdx(0); };
  const pickTopic = (k) => { setTopic(topic === k ? null : k); setIdx(0); };
  // 熱門主題 → 既有搜尋結果頁（沿用 Topics 頁的 k12-search 參數格式）
  const toSearch = (k) => { localStorage.setItem("k12-search", JSON.stringify({ terms: [], applied: [k, ...(t.extra || [])], scope: t.scope })); go("search"); };
  const slot = (h, i) => <TopicSlot key={h.name} label={h.name} sub={h.n} fill={TOPIC_FILLS[i % TOPIC_FILLS.length]} on={false} onClick={() => toSearch(h.name)} />;
  const left = hots.slice(0, 3), right = hots.slice(3);
  const navBtn = (dir, dis) => <NavCircle dir={dir} dis={dis} onClick={() => setIdx(idx + dir)} />;
  return (
    <div style={{ padding: "48px 0 0", display: "flex", flexDirection: "column", gap: 24, overflow: "hidden" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 44, fontWeight: 700, letterSpacing: ".08em", lineHeight: 1.15, whiteSpace: "nowrap" }}>{t.label}</h1>
        <span style={{ fontSize: 15, color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: 12 }}>
          {topic ? <>主題：<b style={{ color: "var(--color-text)" }}>{topic}</b><a onClick={() => pickTopic(topic)} style={{ cursor: "pointer", color: "var(--color-text)", textDecoration: "underline", textUnderlineOffset: 3 }}>顯示全部</a></> : <>推薦內容 · 共 {pool.length} 筆</>}
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "start", gap: 56, padding: "0 72px" }}>
        <div style={{ height: 264, marginTop: 70, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 18 }}>{left.map((h, i) => slot(h, i))}</div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div style={{ width: COVER_H + 44, height: COVER_H + 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <button type="button" onClick={() => cur && t.open(go, cur)} disabled={!cur} aria-label={cur ? `開啟「${cur.title}」` : "沒有內容"} title={cur ? cur.title : undefined}
              style={{ width: COVER_H, height: COVER_H, padding: 0, border: "var(--border-default)", borderRadius: 36, overflow: "hidden", background: "var(--color-bg)", cursor: cur ? "pointer" : "default", display: "flex", alignItems: "flex-start", justifyContent: "center", lineHeight: 0 }}>
              {cur && (t.kind === "news" ? <window.NewsCover key={cur.id} news={cur} width={COVER_H} /> : <window.BookCover key={cur.id} book={cur} width={COVER_H} />)}
            </button>
          </div>
          <div style={{ width: COVER_W + 44, minHeight: 48, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, textAlign: "center" }}>
            <span style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.3, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>{cur ? cur.title : "-"}</span>
            {cur && (cur.author || cur.source) && <span style={{ fontSize: 13, color: "var(--color-text-muted)" }}>{cur.author || cur.source}</span>}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {navBtn(-1, idx <= 0)}
            <span style={{ minWidth: 64, textAlign: "center", fontSize: 16, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{n ? idx + 1 : 0} / {n}</span>
            {navBtn(1, idx >= n - 1)}
          </div>
        </div>
        <div style={{ height: 264, marginTop: 70, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end", gap: 18 }}>
          {right.map((h, i) => slot(h, i + 3))}
          <TopicSlot browse label={`瀏覽所有${t.label.replace("電子書", "")}主題`} onClick={() => go(t.route)} />
        </div>
      </div>
      <TypeWheel sel={sel} onPick={pickType} />
    </div>
  );
}
window.CategoriesScreen = CategoriesScreen;

export { CBtn, CIcon, CAT_TYPES, HOT_N, hotTopics, TOPIC_FILLS, COVER_W, COVER_H, TopicSlot, WHEEL_R, WHEEL_STEP, WHEEL_VIS, TypeWheel, NavCircle, CategoriesScreen };
