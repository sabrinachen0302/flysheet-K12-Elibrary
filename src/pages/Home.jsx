import React from 'react';
import * as DS from '../design-system/index.js';
const { Button, Card, Tabs, Input, Select, Badge, BadgeTone, Icon } = DS;
const NEWS = [["【新書上架】九月新到：奇幻與冒險類暢銷書","2026/09/21"],["有聲書新功能：離線收聽正式上線","2026/09/18"],["【活動】暑期閱讀心得徵稿，抽誠品禮券","2026/09/15"],["圖書館系統維護通知：9/25（五）暫停服務","2026/09/10"],["新增電子雜誌資源：國家地理雜誌數位版","2026/09/05"]];
const HOME_NEW_IDS = ["tb-01", "tb-05", "tb-16", "tb-22", "tb-28"];
const HOME_HOT_IDS = ["namiya", "courage-disliked", "pride-prejudice", "taipei-people"];
const ERES = [["大英百科線上版","百科資料庫"],["康軒學習雲","學習平台"],["國家地理雜誌","電子期刊"],["TED 影音資源","影音平台"],["未來少年雜誌","電子期刊"]];
const HOT_RES = [["大英百科線上版","百科資料庫","查詢各領域百科全書條目，資料來源可靠。"],["康軒學習雲","學習平台","銜接各版本教材的數位學習資源。"],["國家地理雜誌","電子期刊","這裡放一句簡短的資源說明文字。"],["TED 影音資源","影音平台","這裡放一句簡短的資源說明文字。"]];
const SCOPES = ["全部", "電子書", "有聲書", "雜誌", "新聞", "線上學習資源"];
const FIELDS = ["所有欄位", "名稱", "作者", "平台", "主題"];
const TINT = { mint: "var(--color-mint-tint)", accent: "var(--color-accent-tint)", paper: "var(--color-bg)", primary: "var(--color-primary-tint)" };
const homeH2 = { margin: 0, fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 700, letterSpacing: ".04em", lineHeight: 1.2, color: "var(--color-text)" };
function SectionHead({ title, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
      <h2 style={homeH2}>{title}</h2>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>{children}</div>
    </div>
  );
}
function HeroSearch({ go }) {
  const [q, setQ] = React.useState("");
  const [field, setField] = React.useState(undefined);
  const [scopes, setScopes] = React.useState([]);
  const submit = () => {
    const text = q.trim();
    localStorage.setItem("k12-search", JSON.stringify({ terms: text ? [{ text, field: field && field !== "所有欄位" ? field : null, op: null }] : [], applied: [], scope: scopes }));
    go("search");
  };
  const pick = (o) => o === SCOPES[0] ? setScopes([]) : setScopes(scopes.includes(o) ? scopes.filter(x => x !== o) : [...scopes, o]);
  return (
    <section style={{ padding: "48px 48px 16px" }}>
      <Card padding="40px 48px 36px" style={{ display: "flex", flexDirection: "column", gap: 24, borderRadius: 20, boxShadow: "none" }}>
        <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 40, fontWeight: 700, letterSpacing: ".06em", lineHeight: 1.1 }}>你想找什麼？</h1>
        <div style={{ display: "flex", gap: 12 }}>
          <Input size="lg" icon="search" value={q} onChange={setQ} onEnter={submit} placeholder="搜尋電子圖書館" ariaLabel="搜尋電子圖書館" style={{ flex: 1 }} />
          <Select size="lg" width={170} options={FIELDS} value={field} placeholder="所有欄位" onChange={setField} ariaLabel="搜尋欄位" />
          <Button variant="primary" size="lg" onClick={submit} width={120}>搜尋</Button>
        </div>
        <div role="group" aria-label="格式" style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          {SCOPES.map((o, i) => {
            const on = i === 0 ? scopes.length === 0 : scopes.includes(o);
            return <Button key={o} size="sm" tone="paper" selected={on} icon={on ? "check" : undefined} onClick={() => pick(o)}>{o}</Button>;
          })}
        </div>
      </Card>
    </section>
  );
}
function NewsRow({ t, d, first }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: "flex", alignItems: "center", gap: 24, padding: "16px 24px", borderTop: first ? 0 : "var(--border-dashed)", background: h ? "var(--color-mint-tint)" : "transparent", cursor: "pointer" }}>
      <span style={{ flex: 1, fontSize: 16, lineHeight: 1.4 }}>{t}</span>
      <span style={{ fontSize: 14, color: "var(--color-text-muted)", fontVariantNumeric: "tabular-nums" }}>{d}</span>
      <Icon name="chevron-right" size={12} color="var(--color-text)" />
    </div>
  );
}
function News() {
  return (
    <section style={{ padding: "32px 48px", display: "flex", flexDirection: "column", gap: 16 }}>
      <SectionHead title="最新消息"><Button size="sm" tone="paper" iconRight="chevron-right">更多</Button></SectionHead>
      <Card padding="4px 0" style={{ overflow: "hidden" }}>
        {NEWS.map(([t, d], i) => <NewsRow key={t} t={t} d={d} first={i === 0} />)}
      </Card>
    </section>
  );
}
function BookTile({ b, onOpen }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ minWidth: 0 }}>
      <Card interactive padding={0} onClick={onOpen} style={{ overflow: "hidden", height: "100%" }}>
        <div style={{ position: "relative", height: 250, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--color-bg)", borderBottom: "var(--border-default)" }}>
          <div style={{ border: "var(--border-thin)", boxShadow: "var(--shadow-hard-sm)", lineHeight: 0 }}><window.BookCover book={b} width={140} /></div>
          {h && b.synopsis && (
            <div style={{ position: "absolute", inset: 0, padding: 18, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 10, background: "var(--color-mint-tint)" }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".12em" }}>書籍簡介</span>
              <span style={{ height: 0, borderTop: "var(--border-thin)" }} />
              <span style={{ fontSize: 13, lineHeight: 1.6, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 8, WebkitBoxOrient: "vertical" }}>{b.synopsis}</span>
            </div>
          )}
        </div>
        <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
          <Badge size="sm" tone={BadgeTone(b.category)}>{b.category}</Badge>
          <span style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}>{b.title}</span>
          <span style={{ fontSize: 14, color: "var(--color-text-muted)" }}>{b.author}</span>
        </div>
      </Card>
    </div>
  );
}
function ListCard({ category, name, description, thumb, bookmarked, onBookmark, onOpen, onGo }) {
  const [checked, setChecked] = React.useState(false);
  const [lh, setLh] = React.useState(false);
  return (
    <Card padding={16} style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <button type="button" role="checkbox" aria-checked={checked} aria-label={(checked ? "取消選取 " : "選取 ") + name} onClick={() => setChecked(!checked)} style={{ width: 20, height: 20, flexShrink: 0, padding: 0, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", border: "var(--border-thin)", borderRadius: "var(--corner-sm)", background: checked ? "var(--color-brand-mint)" : "var(--color-surface)", cursor: "pointer" }}>{checked && <Icon name="check" size={12} color="var(--color-text)" />}</button>
      {thumb || <div style={{ width: 56, height: 56, flexShrink: 0, boxSizing: "border-box", border: "var(--border-thin)", borderRadius: "var(--corner-sm)", background: TINT[BadgeTone(category)], display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ width: 22, height: 22, boxSizing: "border-box", borderRadius: 3, border: "var(--border-thin)", background: "var(--color-brand-accent)" }} /></div>}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 6 }}>
        <Badge size="sm" tone={BadgeTone(category)}>{category}</Badge>
        <a onClick={onOpen} onMouseEnter={() => setLh(true)} onMouseLeave={() => setLh(false)} style={{ fontSize: 17, fontWeight: 700, color: "var(--color-text)", textDecoration: lh ? "underline" : "none", textUnderlineOffset: 3, cursor: onOpen ? "pointer" : "default" }}>{name}</a>
        <span style={{ fontSize: 13, lineHeight: 1.5, color: "var(--color-text-muted)", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{description}</span>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
        <div style={{ display: "flex", gap: 2 }}>
          <Button variant="icon" size="sm" icon="share" ariaLabel="分享" />
          <Button variant="icon" size="sm" icon="external-link" ariaLabel="外部連結" />
          <Button variant="icon" size="sm" icon={bookmarked ? "bookmark-filled" : "bookmark"} selected={bookmarked} ariaLabel={bookmarked ? "移出我的最愛" : "加入我的最愛"} title={bookmarked ? "移出我的最愛" : "加入我的最愛"} onClick={() => onBookmark(!bookmarked)} />
        </div>
        <Button size="sm" iconRight="chevron-right" onClick={onGo}>簡介</Button>
      </div>
    </Card>
  );
}
function ResTile({ name, type, r }) {
  const tone = BadgeTone(type);
  return (
    <Card padding={0} style={{ overflow: "hidden", minWidth: 0, boxShadow: "none" }}>
      <div style={{ minHeight: 188, height: "100%", boxSizing: "border-box", padding: 18, gap: 14, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", background: TINT[tone] }}>
        {r && <window.ResLogo r={r} h={88} pad={10} />}
        <Badge size="sm" tone={tone}>{type}</Badge>
        <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: 21, fontWeight: 700, lineHeight: 1.3, letterSpacing: ".03em", textWrap: "balance" }}>{name}</span>
      </div>
    </Card>
  );
}
function TabbedSection({ title, onBrowseAll, renderNew, renderPopular, extraTabs = {} }) {
  const [tab, setTab] = React.useState("新到");
  return (
    <section style={{ padding: "32px 48px", display: "flex", flexDirection: "column", gap: 16 }}>
      <SectionHead title={title}><Button size="sm" tone="paper" iconRight="chevron-right" onClick={onBrowseAll}>瀏覽全部</Button></SectionHead>
      <div>
        <window.FolderTabs items={["新到", "熱門", ...Object.keys(extraTabs)]} value={tab} onChange={setTab} ariaLabel={title + "排序"} />
        <Card shadow="sm" tone="bg" padding={0} style={{ overflow: "hidden", position: "relative", zIndex: 1 }}>
          <div aria-hidden="true" style={{ height: 14, background: "var(--color-brand-cta)", borderBottom: "var(--border-default)" }} />
          <div style={{ padding: 24 }}>{tab === "新到" ? renderNew() : tab === "熱門" ? renderPopular() : extraTabs[tab]()}</div>
        </Card>
      </div>
    </section>
  );
}
function HomeScreen({ go, tweaks = {} }) {
  window.useFavs();
  const fav = (key) => ({ bookmarked: window.favStore.has(key), onBookmark: () => window.favStore.toggle(key) });
  const grid5 = { display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 20 };
  const grid2 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 };
  const grid3 = { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16 };
  // 電子資源：與「線上學習資源」同一份 data/resources.json；新到 = 預設順序前 6 筆，熱門 = 點閱數前 6 筆
  const res = window.useResources().data || [];
  const resNew = [...res].sort((a, b) => a.order - b.order).slice(0, 5);
  const resHot = [...res].sort((a, b) => b.clicks - a.clicks).slice(0, 4);
  // 自主學習：categories 含「自主學習」者，依點閱數取前 5 筆
  const resSelf = res.filter(r => (r.categories || []).includes("自主學習")).sort((a, b) => b.clicks - a.clicks).slice(0, 5);
  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-base)", paddingBottom: 40 }}>
      <HeroSearch go={go} />
      <window.BookShelf go={go} mode={tweaks.shelfMode} spineAuthor={tweaks.spineAuthor} />
      <TabbedSection title="電子資源" onBrowseAll={() => go("resources")}
        renderNew={() => <div style={grid5}>{resNew.map(r => <div key={window.olrKey(r)} onClick={() => window.openPreview("res", r)} style={{ cursor: "pointer", minWidth: 0, display: "grid" }}><ResTile r={r} name={r.title} type={(r.categories || [])[0] || "線上學習資源"} /></div>)}</div>}
        extraTabs={{ "自主學習": () => <div style={grid5}>{resSelf.map(r => <div key={window.olrKey(r)} onClick={() => window.openPreview("res", r)} style={{ cursor: "pointer", minWidth: 0, display: "grid" }}><ResTile r={r} name={r.title} type="自主學習" /></div>)}</div> }}
        renderPopular={() => <div style={grid2}>{resHot.map(r => <ListCard key={window.olrKey(r)} thumb={<window.ResLogo r={r} w={88} h={56} pad={4} />} category={(r.categories || [])[0] || "線上學習資源"} name={r.title} description={[r.publisher, r.description].filter(Boolean).join("　")} {...fav(window.olrKey(r))} onOpen={() => window.openPreview("res", r)} onGo={() => window.openPreview("res", r)} />)}</div>} />
    </div>
  );
}
function NewsPopover({ onClose }) {
  const ref = React.useRef(null);
  React.useEffect(() => { const c = (e) => { if (ref.current && !ref.current.contains(e.target) && (e.target.closest("header a") || {}).textContent !== "最新消息") onClose(); }; const k = (e) => e.key === "Escape" && onClose(); document.addEventListener("mousedown", c); document.addEventListener("keydown", k); return () => { document.removeEventListener("mousedown", c); document.removeEventListener("keydown", k); }; }, []);
  return (
    <div ref={ref} role="dialog" aria-label="最新消息" style={{ position: "absolute", top: 50, right: 48, zIndex: 60, width: 520 }}>
      <Card shadow="md" padding="4px 0" style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 24px 12px", borderBottom: "var(--border-default)" }}>
          <span style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700, letterSpacing: ".04em" }}>最新消息</span>
          <Button size="sm" tone="paper" iconRight="chevron-right">更多</Button>
        </div>
        {NEWS.map(([t, d], i) => <NewsRow key={t} t={t} d={d} first={i === 0} />)}
      </Card>
    </div>
  );
}
Object.assign(window, { HomeScreen, NewsPopover });

export { Button, Card, Tabs, Input, Select, Badge, BadgeTone, Icon, NEWS, HOME_NEW_IDS, HOME_HOT_IDS, ERES, HOT_RES, SCOPES, FIELDS, TINT, homeH2, SectionHead, HeroSearch, NewsRow, News, BookTile, ListCard, ResTile, TabbedSection, HomeScreen, NewsPopover };
