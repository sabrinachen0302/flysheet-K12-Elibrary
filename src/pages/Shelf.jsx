import React from 'react';
import * as DS from '../design-system/index.js';
// 電子書書架：資料一律讀取 books.json（window.bookById），不改寫、不補寫；空欄位直接略過。
const SH = DS;
const SHELF_LISTS = { "新到電子書": ["tb-01", "tb-05", "tb-16", "tb-22", "tb-28"], "熱門電子書": ["namiya", "courage-disliked", "pride-prejudice", "taipei-people", "little-prince"] };
const SPINE_H = [372, 344, 392, 356, 380];
const SPINE_COMBOS = [["mint"], ["cta"], ["accent"], ["mint", "cta"], ["mint", "accent"], ["cta", "accent"], ["accent", "mint"], ["cta", "mint"]];
const spineHash = (s) => [...s].reduce((n, ch) => (n * 31 + ch.charCodeAt(0)) >>> 0, 7);
const spineW = (b) => Math.min(92, Math.max(58, 52 + [...b.title].length * 5));
const spineBg = (b) => { const c = SPINE_COMBOS[spineHash(b.id) % SPINE_COMBOS.length].map(k => `var(--color-brand-${k})`); return c.length > 1 ? `linear-gradient(90deg, ${c[0]}, ${c[1]})` : c[0]; };
const DEPTH = 12;
const PAGE_EDGE = "repeating-linear-gradient(90deg, var(--color-surface) 0 2px, var(--color-divider) 2px 3px)";
// 書的厚度：上方書頂（頁緣）+ 右側書口，以 45° 斜切做出等角立體感
function Thickness({ d = DEPTH, side = false, tone }) {
  return <>
    <span aria-hidden="true" style={{ position: "absolute", left: -2, right: -2, top: -d - 2, height: d, boxSizing: "border-box", border: "var(--border-default)", borderBottom: 0, background: tone || "repeating-linear-gradient(0deg, var(--color-surface) 0 2px, var(--color-divider) 2px 3px)", transform: "skewX(-45deg)", transformOrigin: "bottom left", pointerEvents: "none" }} />
    {side && <span aria-hidden="true" style={{ position: "absolute", top: -2, bottom: -2, right: -d - 2, width: d, boxSizing: "border-box", border: "var(--border-default)", borderLeft: 0, background: PAGE_EDGE, transform: "skewY(-45deg)", transformOrigin: "top left", pointerEvents: "none" }} />}
  </>;
}
const SPINE_SHADE = "linear-gradient(90deg, rgba(0,0,0,.14), rgba(0,0,0,0) 18%, rgba(255,255,255,.32) 42%, rgba(255,255,255,0) 62%, rgba(0,0,0,.16))";
const lineColor = (b) => (b.coverColor && b.coverColor.accent) || "var(--color-brand-primary)";
function Spine({ b, h, showAuthor, onClick }) {
  const [hv, setHv] = React.useState(false);
  const rule = { height: 0, borderTop: `3px solid ${lineColor(b)}`, margin: "0 8px" };
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHv(true)} onMouseLeave={() => setHv(false)} aria-label={`${b.title}（書背）`} title={b.title}
      style={{ position: "relative", width: spineW(b), height: h, flexShrink: 0, boxSizing: "border-box", padding: "14px 0", display: "flex", flexDirection: "column", gap: 14, border: "var(--border-default)", borderBottom: 0, borderRadius: "var(--corner-sm) var(--corner-sm) 0 0", background: spineBg(b), color: "var(--color-text)", cursor: "pointer", fontFamily: "inherit", transform: `translateY(${hv ? -12 : 0}px)`, transition: "transform .18s ease", boxShadow: hv ? "var(--shadow-hard-sm)" : "none" }}>
      <span aria-hidden="true" style={{ position: "absolute", inset: 0, background: SPINE_SHADE, pointerEvents: "none" }} />
      <span style={rule} />
      <span style={{ position: "relative", flex: 1, minHeight: 0, display: "flex", justifyContent: "center", overflow: "hidden" }}>
        <span style={{ writingMode: "vertical-rl", textOrientation: "sideways", transform: "rotate(180deg)", fontFamily: "var(--font-heading)", fontSize: 17, fontWeight: 700, letterSpacing: ".08em", lineHeight: 1.15, maxHeight: "100%", overflow: "hidden" }}>{b.title}</span>
      </span>
      {showAuthor && b.author && <span style={{ position: "relative", alignSelf: "center", writingMode: "vertical-rl", textOrientation: "sideways", transform: "rotate(180deg)", fontSize: 12, letterSpacing: ".1em", maxHeight: 110, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{b.author}</span>}
      <span style={rule} />
    </button>
  );
}
function FaceOut({ b, h, onClick }) {
  const [hv, setHv] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHv(true)} onMouseLeave={() => setHv(false)} aria-label={`翻開《${b.title}》`} title="點封面翻開"
      style={{ position: "relative", marginRight: DEPTH + 4, padding: 0, border: "var(--border-default)", borderBottom: 0, background: "none", cursor: "pointer", lineHeight: 0, flexShrink: 0, transform: `translateY(${hv ? -8 : 0}px)`, transition: "transform .18s ease", boxShadow: "var(--shadow-hard-md)" }}>
      <Thickness side />
      <window.BookCover book={b} width={Math.round(h / 1.5)} />
      <span aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 14, background: "linear-gradient(90deg, rgba(0,0,0,.22), rgba(0,0,0,.06) 55%, rgba(255,255,255,.18) 70%, rgba(0,0,0,0))", borderRight: "1px solid rgba(0,0,0,.18)", pointerEvents: "none" }} />
    </button>
  );
}
const shelfMeta = (b) => [["類型", b.type], ["版本", b.edition], ["讀者", b.reader], ["課綱", (b.curriculum || []).join("、")], ["主題", (b.topics || []).join("、")]].filter(([, v]) => v);
const PAGE_BASE = { width: 330, height: 440, boxSizing: "border-box", padding: "36px 32px", background: "var(--color-surface)", border: "var(--border-default)", display: "flex", flexDirection: "column" };
const PAGE_L = { ...PAGE_BASE, borderRight: "1px solid var(--color-divider)", borderRadius: "var(--corner-sm) 0 0 var(--corner-sm)", background: "linear-gradient(90deg, var(--color-surface) 82%, var(--color-mint-tint))", justifyContent: "space-between", alignItems: "center", textAlign: "center" };
const PAGE_R = { ...PAGE_BASE, borderLeft: 0, borderRadius: "0 var(--corner-sm) var(--corner-sm) 0", background: "linear-gradient(270deg, var(--color-surface) 82%, var(--color-mint-tint))", gap: 16 };
function LeftContent({ b }) {
  return <>
    {b.category ? <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".16em" }}>{b.category}</span> : <span />}
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <span style={{ width: 40, borderTop: `3px solid ${lineColor(b)}` }} />
      <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: [...b.title].length > 16 ? 24 : 30, fontWeight: 700, lineHeight: 1.25, letterSpacing: ".04em", textWrap: "balance" }}>{b.title}</h3>
      {b.author && <span style={{ fontSize: 15 }}>{b.author}　著</span>}
      <span style={{ width: 40, borderTop: `3px solid ${lineColor(b)}` }} />
    </div>
    <dl style={{ alignSelf: "stretch", margin: 0, padding: "12px 4px 0", borderTop: "var(--border-dashed)", display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "6px 14px", fontSize: 13, textAlign: "left" }}>
      {shelfMeta(b).map(([k, v]) => <React.Fragment key={k}><dt style={{ color: "var(--color-text-muted)" }}>{k}</dt><dd style={{ margin: 0 }}>{v}</dd></React.Fragment>)}
    </dl>
  </>;
}
function RightContent({ b }) {
  const ok = b.available === "可用";
  return <>
    {b.synopsis && <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".14em" }}>內容簡介</span>
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, textWrap: "pretty", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 10, WebkitBoxOrient: "vertical" }}>{b.synopsis}</p>
    </div>}
    <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, color: ok ? "var(--color-text)" : "var(--color-text-muted)" }}>
      <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: "50%", border: "var(--border-thin)", background: ok ? "var(--color-brand-mint)" : "var(--color-divider)" }} />
      {ok ? "可借閱" : "目前無法借閱"}
    </div>
  </>;
}
// 翻頁：下一本 = 右頁沿書脊翻向左；上一本 = 左頁翻向右。翻動中底下兩頁分別顯示舊／新書內容。
const FLIP_MS = 700;
function OpenBook({ b, dir = 1 }) {
  const [shown, setShown] = React.useState(false);
  const [flip, setFlip] = React.useState(null);
  const prev = React.useRef(b);
  React.useEffect(() => { const t = setTimeout(() => setShown(true), 40); return () => clearTimeout(t); }, []);
  React.useEffect(() => {
    const old = prev.current; prev.current = b;
    if (old.id === b.id) return;
    setFlip({ old, dir, go: false });
    const t1 = setTimeout(() => setFlip(f => f && { ...f, go: true }), 30);
    const t2 = setTimeout(() => setFlip(null), FLIP_MS + 60);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [b.id]);
  const leftB = flip && flip.dir > 0 ? flip.old : b;
  const rightB = flip && flip.dir < 0 ? flip.old : b;
  const pageT = "transform .55s cubic-bezier(.2,.7,.2,1)";
  const face = { position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" };
  let leaf = null;
  if (flip) {
    const fwd = flip.dir > 0;
    const from = fwd ? -10 : 10, to = fwd ? -170 : 170;
    leaf = (
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: fwd ? 330 : 0, width: 330, height: 440, zIndex: 5, transformStyle: "preserve-3d", transformOrigin: fwd ? "left center" : "right center", transform: `rotateY(${flip.go ? to : from}deg)`, transition: flip.go ? `transform ${FLIP_MS}ms cubic-bezier(.45,.05,.3,1)` : "none" }}>
        <div style={{ ...(fwd ? PAGE_R : PAGE_L), ...face, boxShadow: "0 0 0 transparent" }}>{fwd ? <RightContent b={flip.old} /> : <LeftContent b={flip.old} />}</div>
        <div style={{ ...(fwd ? PAGE_L : PAGE_R), ...face, transform: "rotateY(180deg)" }}>{fwd ? <LeftContent b={b} /> : <RightContent b={b} />}</div>
      </div>
    );
  }
  return (
    <div style={{ perspective: 1800, display: "flex", justifyContent: "center", padding: "12px 0 28px" }}>
      <div style={{ position: "relative", display: "flex", transformStyle: "preserve-3d", transform: "rotateX(14deg)" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: "-10px -12px -14px", background: "var(--color-brand-primary)", border: "var(--border-default)", borderRadius: "var(--corner-md)", boxShadow: "var(--shadow-hard-md)", transform: "translateZ(-2px)" }} />
        <div style={{ ...PAGE_L, position: "relative", transformOrigin: "right center", transform: `rotateY(${shown ? 10 : 80}deg)`, transition: pageT }}><LeftContent b={leftB} /></div>
        <div style={{ ...PAGE_R, position: "relative", transformOrigin: "left center", transform: `rotateY(${shown ? -10 : -80}deg)`, transition: pageT }}><RightContent b={rightB} /></div>
        {leaf}
      </div>
    </div>
  );
}
// 資料夾頁籤（梯形圓角）：選中頁籤為 CTA 橘，與面板頂部橘色帶相連
const TAB_W = 128, TAB_H = 42, TAB_S = 16;
function FolderTab({ label, on, z, first, onClick }) {
  const [hv, setHv] = React.useState(false);
  const h = TAB_H + (on ? 4 : 0), w = TAB_W, s = TAB_S;
  const d = `M1,${h} L${s - 3},6 Q${s},1 ${s + 5},1 L${w - s - 5},1 Q${w - s},1 ${w - s + 3},6 L${w - 1},${h}`;
  return (
    <button type="button" role="tab" aria-selected={on} onClick={onClick} onMouseEnter={() => setHv(true)} onMouseLeave={() => setHv(false)}
      style={{ position: "relative", zIndex: on ? 10 : z, width: w, height: h, marginLeft: first ? 0 : -18, marginBottom: on ? -4 : 0, padding: 0, border: 0, background: "none", cursor: "pointer", fontFamily: "var(--font-base)", fontSize: 16, fontWeight: on ? 700 : 600, color: "var(--color-text)" }}>
      <svg aria-hidden="true" width={w} height={h} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
        <path d={d + " Z"} style={{ fill: on ? "var(--color-brand-cta)" : hv ? "var(--color-mint-tint)" : "var(--color-surface)", stroke: "none" }} />
        <path d={d} style={{ fill: "none", stroke: "var(--color-border)", strokeWidth: 2, strokeLinejoin: "round" }} />
      </svg>
      <span style={{ position: "relative", padding: "1px 6px" }}>{label}</span>
    </button>
  );
}
function FolderTabs({ items, value, onChange, ariaLabel = "電子書排序" }) {
  return (
    <div role="tablist" aria-label={ariaLabel} style={{ display: "flex", alignItems: "flex-end", paddingLeft: 12, position: "relative", zIndex: 2 }}>
      {items.map((t, i) => <FolderTab key={t} label={t} on={t === value} z={items.length - i} first={i === 0} onClick={() => onChange(t)} />)}
    </div>
  );
}
function BookShelf({ go, mode = "先展示封面", spineAuthor = true }) {
  window.useFavs();
  const [tab, setTab] = React.useState("新到電子書");
  const [sel, setSel] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [dir, setDir] = React.useState(1);
  const isShelf = !!SHELF_LISTS[tab];
  const books = (SHELF_LISTS[tab] || SHELF_LISTS["新到電子書"]).map(id => window.bookById(id));
  const direct = mode === "直接翻開";
  const switchTab = (t) => { setTab(t); setSel(0); setOpen(false); };
  const b = books[sel];
  const n = books.length;
  const faved = window.favStore.has(b.id);
  return (
    <section style={{ padding: "32px 48px", display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 700, letterSpacing: ".04em", lineHeight: 1.2 }}>數位館藏</h2>
        <SH.Button size="sm" tone="paper" iconRight="chevron-right" onClick={() => go(tab === "有聲書" ? "categories-audio" : tab === "電子雜誌" ? "categories-magazine" : tab === "新聞" ? "categories-news" : "categories")}>瀏覽全部</SH.Button>
      </div>
      <div>
        <FolderTabs items={["新到電子書", "熱門電子書", "有聲書", "電子雜誌", "新聞"]} value={tab} onChange={switchTab} />
        <SH.Card shadow="sm" tone="bg" padding={0} style={{ overflow: "hidden", background: "var(--color-bg)", position: "relative", zIndex: 1 }}>
          <div aria-hidden="true" style={{ height: 14, background: "var(--color-brand-cta)", borderBottom: "var(--border-default)" }} />
          {!isShelf ? <MediaPanel tab={tab} go={go} /> : open ? (
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 300px", gap: 32, alignItems: "center", padding: "28px 40px 28px 24px" }}>
              <OpenBook b={b} dir={dir} />
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}><SH.Button size="sm" variant="ghost" onClick={() => setOpen(false)}>回到書架 ✕</SH.Button></div>
                <span style={{ fontSize: 13, color: "var(--color-text-muted)", fontVariantNumeric: "tabular-nums" }}>{tab} · {sel + 1} / {n}</span>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 700, lineHeight: 1.3 }}>{b.title}</span>
                {b.author && <span style={{ fontSize: 15, color: "var(--color-text-muted)", marginTop: -6 }}>{b.author}</span>}
                <SH.Button variant="primary" size="lg" width="100%" iconRight="chevron-right" onClick={() => window.openBook(go, b.id)}>書籍詳細資料</SH.Button>
                <SH.Button size="md" tone="paper" width="100%" selected={faved} icon={faved ? "bookmark-filled" : "bookmark"} onClick={() => window.favStore.toggle(b.id)}>{faved ? "已收藏" : "加入收藏"}</SH.Button>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 10, paddingTop: 6, borderTop: "var(--border-dashed)" }}>
                  <SH.Button size="sm" tone="paper" width="100%" onClick={() => { setDir(-1); setSel((sel - 1 + n) % n); }} ariaLabel="上一本">‹ 上一本</SH.Button>
                  <SH.Button size="sm" tone="paper" width="100%" onClick={() => { setDir(1); setSel((sel + 1) % n); }} ariaLabel="下一本">下一本 ›</SH.Button>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ padding: "52px 40px 0" }}>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 10, minHeight: 404 }}>
                {books.map((x, i) => !direct && i === sel
                  ? <FaceOut key={x.id} b={x} h={SPINE_H[i % SPINE_H.length]} onClick={() => setOpen(true)} />
                  : <Spine key={x.id} b={x} h={SPINE_H[i % SPINE_H.length]} showAuthor={spineAuthor} onClick={() => { setSel(i); if (direct) setOpen(true); }} />)}
              </div>
              <div aria-hidden="true" style={{ height: 18, margin: "0 -40px", background: "var(--color-brand-cta)", borderTop: "var(--border-default)" }} />
              <div aria-hidden="true" style={{ height: 10, margin: "0 -40px", background: "var(--color-brand-cta)" }} />
            </div>
          )}
        </SH.Card>
      </div>
    </section>
  );
}
// 非書架分頁：有聲書（方形封面列）、電子雜誌（立架封面）、新聞（頭條＋列表）。資料皆讀既有 K12_BOOKS / K12_MAGAZINES / K12_NEWS。
// 書卡 hover state：2px 框、硬陰影 2→4px、左上位移 2px，並以薄荷底顯示簡介。
const cardLift = (h) => ({ border: "2px solid var(--color-border)", borderRadius: 4, boxShadow: h ? "4px 4px 0 0 var(--color-border)" : "2px 2px 0 0 var(--color-border)", transform: h ? "translate(-2px,-2px)" : "none", transition: "transform .12s ease, box-shadow .12s ease" });
function HoverSynopsis({ label = "簡介", text }) {
  return (
    <div style={{ position: "absolute", inset: 0, padding: 14, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 8, background: "var(--color-mint-tint)" }}>
      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1.5px" }}>{label}</span>
      <span style={{ height: 0, borderTop: "1.5px solid var(--color-border)" }} />
      <span style={{ fontSize: 12.5, lineHeight: 1.5, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 8, WebkitBoxOrient: "vertical" }}>{text}</span>
    </div>
  );
}
function MediaCover({ src, title, sub, ratio, onClick, synopsis, label }) {
  const [h, setH] = React.useState(false);
  return (
    <a onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 0, cursor: "pointer", color: "var(--color-text)", textDecoration: "none" }}>
      <div style={{ position: "relative", aspectRatio: ratio, boxSizing: "border-box", overflow: "hidden", background: "var(--color-surface, #fff)", ...cardLift(h) }}>
        {src && <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
        {h && synopsis && <HoverSynopsis label={label} text={synopsis} />}
      </div>
      <span style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.35, textDecoration: h ? "underline" : "none", textUnderlineOffset: 3, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{title}</span>
      {sub && <span style={{ fontSize: 13, color: "var(--color-text-muted)", marginTop: -6 }}>{sub}</span>}
    </a>
  );
}
function MediaPanel({ tab, go }) {
  const grid6 = { display: "grid", gridTemplateColumns: "repeat(6, minmax(0,1fr))", gap: 24 };
  if (tab === "有聲書") {
    const list = (window.K12_BOOKS || []).filter(b => b.type === "有聲書" && b.cover).slice(0, 6);
    return <div style={{ padding: "32px 40px 36px", ...grid6 }}>{list.map(b => <MediaCover key={b.id} src={b.cover} title={b.title} sub={b.edition} ratio="1 / 1" label="有聲書簡介" synopsis={[b.subtitle, b.category, b.source].filter(Boolean).join("　·　")} onClick={() => window.openPreview("audio", b)} />)}</div>;
  }
  if (tab === "電子雜誌") {
    const list = (window.K12_MAGAZINES || []).slice(0, 6);
    return (
      <div style={{ padding: "32px 40px 0" }}>
        <div style={{ ...grid6, alignItems: "end" }}>{list.map(m => <MediaCover key={m.id} src={m.cover} title={m.title} sub={m.category} ratio="3 / 4" label="雜誌資訊" synopsis={[m.category, m.author, m.source && "來源：" + m.source].filter(Boolean).join("　·　")} onClick={() => window.openPreview("magazine", m)} />)}</div>
        <div aria-hidden="true" style={{ height: 18, margin: "20px -40px 0", background: "var(--color-brand-cta)", borderTop: "var(--border-default)" }} />
      </div>
    );
  }
  const news = [...(window.K12_NEWS || [])].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const lead = news.find(n => n.image) || news[0];
  const rest = news.filter(n => n !== lead).slice(0, 4);
  if (!lead) return null;
  const date = (d) => window.fmtNewsDate ? window.fmtNewsDate(d) : d;
  const [hv, setHv] = React.useState(null);
  const hp = (id) => ({ onMouseEnter: () => setHv(id), onMouseLeave: () => setHv(null) });
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: 32, padding: "28px 40px 32px" }}>
      <a onClick={() => window.openPreview("news", lead)} {...hp("lead")} style={{ display: "flex", flexDirection: "column", gap: 12, cursor: "pointer", color: "var(--color-text)", textDecoration: "none", minWidth: 0 }}>
        {lead.image && <div style={{ position: "relative", aspectRatio: "16 / 9", boxSizing: "border-box", overflow: "hidden", ...cardLift(hv === "lead") }}><img src={lead.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />{hv === "lead" && lead.summary && <HoverSynopsis label="新聞摘要" text={lead.summary} />}</div>}
        <span style={{ fontSize: 13, color: "var(--color-text-muted)" }}>{[lead.sectionLabel, lead.source, date(lead.date)].filter(Boolean).join(" · ")}</span>
        <span style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700, lineHeight: 1.3, textWrap: "pretty", textDecoration: hv === "lead" ? "underline" : "none", textUnderlineOffset: 4 }}>{lead.title}</span>
      </a>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {rest.map((n, i) => (
          <a key={n.id} onClick={() => window.openPreview("news", n)} {...hp(n.id)} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 112px", gap: 16, alignItems: "center", padding: "14px 0", borderTop: i ? "var(--border-dashed)" : "none", cursor: "pointer", color: "var(--color-text)", textDecoration: "none" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0 }}>
              <span style={{ fontSize: 12, color: "var(--color-text-muted)" }}>{[n.sectionLabel, date(n.date)].filter(Boolean).join(" · ")}</span>
              <span style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35, textDecoration: hv === n.id ? "underline" : "none", textUnderlineOffset: 3, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{n.title}</span>
            </div>
            {n.image ? <img src={n.image} alt="" style={{ width: 112, aspectRatio: "4 / 3", objectFit: "cover", boxSizing: "border-box", display: "block", ...cardLift(hv === n.id) }} /> : <span></span>}
          </a>
        ))}
      </div>
    </div>
  );
}
Object.assign(window, { BookShelf, FolderTabs });

export { SH, SHELF_LISTS, SPINE_H, SPINE_COMBOS, spineHash, spineW, spineBg, DEPTH, PAGE_EDGE, Thickness, SPINE_SHADE, lineColor, Spine, FaceOut, shelfMeta, PAGE_BASE, PAGE_L, PAGE_R, LeftContent, RightContent, FLIP_MS, OpenBook, TAB_W, TAB_H, TAB_S, FolderTab, FolderTabs, BookShelf, cardLift, HoverSynopsis, MediaCover, MediaPanel };
