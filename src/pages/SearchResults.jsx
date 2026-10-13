import React from 'react';
import * as DS from '../design-system/index.js';
import { RES_TYPES } from './Resources.jsx';
const DSR = DS;
const SI = "images/";
const lnkS = { color: "inherit", textDecoration: "underline", cursor: "pointer" };
function Clickable({ onPick, children }) {
  return <div onClick={(e) => onPick(e.target.textContent.trim())} style={{ cursor: "pointer" }}>{children}</div>;
}
function Collapsible({ children }) {
  const [open, setOpen] = React.useState(true);
  const ref = React.useRef(null);
  const onClick = (e) => { const h = ref.current && ref.current.firstElementChild && ref.current.firstElementChild.firstElementChild; if (h && h.contains(e.target)) setOpen(o => !o); };
  return <div ref={ref} onClick={onClick}>{React.cloneElement(children, { state: open ? "展開" : "收合" })}</div>;
}
const fbHead = { fontFamily: "var(--font-base)", fontWeight: 700, fontSize: 15, lineHeight: "100%", color: "var(--color-text-primary)" };
function FilterBlock({ title, items, selected, onToggle, initial, step }) {
  const [open, setOpen] = React.useState(true);
  const [shown, setShown] = React.useState(initial || items.length);
  const ordered = [...items.filter(([l]) => selected.includes(l)), ...items.filter(([l]) => !selected.includes(l))];
  const visible = ordered.slice(0, Math.max(shown, items.filter(([l]) => selected.includes(l)).length));
  return (
    <div style={{ width: 280, display: "flex", flexDirection: "column", gap: 12 }}>
      <div onClick={() => setOpen(!open)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
        <span style={fbHead}>{title}</span><span style={{ fontSize: 12, lineHeight: "100%", color: "var(--color-text-secondary)" }}>{open ? "⌃" : "⌄"}</span>
      </div>
      {open && <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {visible.map(([l, n]) => <DSR.FilterCheckbox key={l} text1={l} text2={String(n)} state={selected.includes(l) ? "checked" : "unchecked"} onClick={() => onToggle(l)} style={{ alignSelf: "stretch", width: "auto" }} />)}
        {step && visible.length < items.length && <button onClick={() => setShown(v => Math.min(items.length, v + step))} style={{ alignSelf: "flex-start", border: 0, background: "none", padding: 0, cursor: "pointer", fontFamily: "inherit", fontSize: 14, color: "var(--color-link)", textDecoration: "underline" }}>顯示更多</button>}
      </div>}
    </div>
  );
}
function SearchResultsScreen({ go }) {
  window.useFavs();
  const selection = window.useSelection();
  const [page, setPage] = React.useState("1");
  const view = "資料庫卡";
  const [sortOpen, setSortOpen] = React.useState(false);
  const [sort, setSort] = React.useState("熱門度");
  const [picked, setPicked] = React.useState(["可用"]);
  const saved = React.useMemo(() => { try { return JSON.parse(localStorage.getItem("k12-search") || "{}"); } catch (e) { return {}; } }, []);
  const [applied, setApplied] = React.useState(saved.applied || []);
  const [terms, setTerms] = React.useState(saved.terms || []);
  const [q, setQ] = React.useState("");
  const [field, setField] = React.useState(undefined);
  const [within, setWithin] = React.useState(false);
  const [op, setOp] = React.useState("AND");
  const [scopes, setScopesRaw] = React.useState(() => Array.isArray(saved.scope) ? saved.scope : saved.scope && saved.scope !== "全部" ? [saved.scope] : []);
  const setScopes = (v) => { setScopesRaw(v); setPage("1"); };
  React.useEffect(() => { if (saved.applied) setPicked(saved.applied); }, []);
  React.useEffect(() => { localStorage.setItem("k12-search", JSON.stringify({ terms, applied, scope: scopes })); }, [terms, applied, scopes]);
  const BOOK_FMTS = ["電子書", "有聲書"];
  const bookTypes = scopes.length ? BOOK_FMTS.filter(f => scopes.includes(f)) : BOOK_FMTS;
  const withNews = !scopes.length || scopes.includes("新聞");
  const withRes = !scopes.length || scopes.includes("線上學習資源");
  const newsOnly = withNews && !bookTypes.length && !withRes;
  const resOnly = withRes && !bookTypes.length && !withNews;
  const { data: resData } = window.useResources();
  const RES_TYPES = window.RES_TYPES;
  const resDomains = React.useMemo(() => window.RES_SUBJECTS.filter(d => (resData || []).some(x => (x.subjects || []).includes(d))), [resData]);
  // 對應課綱（科目）→ 領域，讓書籍與資源共用學科篩選
  const domainOf = (label) => { if (resDomains.includes(label)) return label; const hit = window.K12_CURRICULUM.find(([, ss]) => ss.includes(label)); return hit ? (hit[0] === "高中家政" ? "家政" : hit[0]) : null; };
  const resMatch = (x, t) => { const k = t.text.toLowerCase(); const pool = t.field === "名稱" ? [x.title] : t.field === "平台" ? [x.publisher] : t.field === "作者" ? [] : t.field === "主題" ? [...(x.categories || []), ...(x.subjects || [])] : [x.title, x.description, x.publisher]; return pool.some(v => v && v.toLowerCase().includes(k)); };
  const resHitsAll = React.useMemo(() => {
    const types = applied.filter(l => RES_TYPES.includes(l));
    const doms = [...new Set(applied.map(domainOf).filter(Boolean))];
    return (resData || []).filter(x => (!terms.length || terms.reduce((acc, t, i) => i === 0 ? resMatch(x, t) : t.op === "OR" ? acc || resMatch(x, t) : acc && resMatch(x, t), true))
      && (!types.length || types.some(t => (x.categories || []).includes(t))) && (!doms.length || doms.some(d => (x.subjects || []).includes(d))));
  }, [resData, terms, applied, resDomains]);
  const resSorted = React.useMemo(() => [...resHitsAll].sort(sort === "熱門度" ? (a, b) => b.clicks - a.clicks : (a, b) => a.order - b.order), [resHitsAll, sort]);
  const hintRes = !withRes && resHitsAll.length > 0 && (terms.length > 0 || applied.some(l => domainOf(l) || RES_TYPES.includes(l)));
  const NEWS_CATS = React.useMemo(() => (window.K12_TOPICS && window.K12_TOPICS.news) || [], []);
  const TIME_LABELS = window.NEWS_TIMES.map(([l]) => l);
  const newsHits = React.useMemo(() => {
    if (!withNews) return [];
    const cats = applied.filter(l => NEWS_CATS.includes(l));
    const srcs = applied.filter(l => l === "The New York Times");
    const time = applied.find(l => TIME_LABELS.includes(l));
    return window.K12_NEWS.filter(n => window.newsMatchTerms(n, terms) && (!cats.length || cats.includes(n.category)) && (!srcs.length || srcs.includes(n.source)) && window.newsInTime(n, time)).sort((a, b) => b.date.localeCompare(a.date));
  }, [withNews, terms, applied]);
  React.useEffect(() => { if (newsOnly) setSort("出版日期新到舊"); }, [newsOnly]);
  const doSearch = () => {
    const text = q.trim();
    if (!text) return;
    const t = { text, field: field && field !== "所有欄位" ? field : null };
    setTerms(within && terms.length ? [...terms, { ...t, op }] : [{ ...t, op: null }]);
    setQ(""); setPage("1");
  };
  const removeTerm = (i) => setTerms(ts => ts.filter((_, j) => j !== i).map((t, j) => j === 0 ? { ...t, op: null } : t));
  const clearAll = () => { setTerms([]); setApplied([]); setPicked([]); setScopes([]); setQ(""); setWithin(false); };
  const total = React.useMemo(() => {
    let c = terms.length ? 128 : 3150;
    terms.slice(1).forEach(t => { c = t.op === "AND" ? Math.max(1, Math.round(c * 0.4)) : c + 57; });
    applied.forEach(() => { c = Math.max(1, Math.round(c * 0.8)); });
    if (!bookTypes.length) c = 0; else if (bookTypes.length === 1) c = Math.max(1, Math.round(c * 0.5));
    return c + newsHits.length + (withRes ? resHitsAll.length : 0);
  }, [terms, applied, scopes, newsHits, resHitsAll]);
  const resTypeItems = RES_TYPES.map(t => [t, (resData || []).filter(x => (x.categories || []).includes(t)).length]);
  const resDomainItems = resDomains.map(d => [d, (resData || []).filter(x => (x.subjects || []).includes(d)).length]);
  const toggleTime = (l) => setPicked(p => p.includes(l) ? p.filter(x => x !== l) : [...p.filter(x => !TIME_LABELS.includes(x)), l]);
  const newsCatItems = NEWS_CATS.map(c => [c, window.K12_NEWS.filter(n => n.category === c).length]);
  const timeItems = window.NEWS_TIMES.map(([l]) => [l, window.K12_NEWS.filter(n => window.newsInTime(n, l)).length]);
  const newsCard = (n) => <DSR.NewsCard key={n.id} style={{ boxShadow: "none" }} thumbnail={n.image} section={n.sectionLabel} source={n.source} date={window.fmtNewsDate(n.date)} title={n.title} summary={n.summary} url={n.url} checked={selection.has(window.newsKey(n))} onCheck={(on) => selection.set(window.newsKey(n), on)} bookmarked={window.favStore.has(window.newsKey(n))} onBookmark={() => window.favStore.toggle(window.newsKey(n))} onOpen={() => window.openPreview("news", n)} />;
  const fmtItems = [["電子書", window.K12_BOOKS.filter(b => b.type === "電子書").length], ["有聲書", window.K12_BOOKS.filter(b => b.type === "有聲書").length], ["雜誌", window.K12_MAGAZINES.length], ["新聞", window.K12_NEWS.length], ["線上學習資源", (resData || []).length]];
  const toggle = (l) => setPicked(p => p.includes(l) ? p.filter(x => x !== l) : [...p, l]);
  const chip = { border: 0, cursor: "pointer", background: "var(--color-accent-tint)", borderRadius: 6, padding: "4px 14px", fontFamily: "inherit", fontSize: 14, fontWeight: 700, color: "var(--color-text)", display: "flex", gap: 6, whiteSpace: "nowrap" };
  const topicItems = React.useMemo(() => { const T = window.K12_TOPICS || { fiction: [], nonfiction: [], magazine: [], news: [] }; return [...new Set([...T.fiction, ...T.nonfiction, ...T.magazine])].map(l => [l, 50]); }, []);
  const [perPage, setPerPage] = React.useState(20);
  const [preview, setPreview] = React.useState(null);
  const [ppOpen, setPpOpen] = React.useState(false);
  const bookPool = window.K12_BOOKS.filter(b => bookTypes.includes(b.type));
  const books = bookPool.length ? Array.from({ length: perPage }, (_, i) => bookPool[i % bookPool.length]) : [];
  // 單一結果清單：書籍為主，每 3 本穿插 1 則新聞、1 項線上學習資源（同一種清單卡呈現）
  const resPool = withRes ? resSorted : [];
  const results = React.useMemo(() => {
    const out = []; let ni = 0, ri = 0;
    books.forEach((b, i) => {
      out.push({ kind: "book", b });
      if (i % 3 === 2) { if (ni < newsHits.length) out.push({ kind: "news", n: newsHits[ni++] }); if (ri < resPool.length) out.push({ kind: "res", x: resPool[ri++] }); }
    });
    while (ni < newsHits.length || ri < resPool.length) { if (ni < newsHits.length) out.push({ kind: "news", n: newsHits[ni++] }); if (ri < resPool.length) out.push({ kind: "res", x: resPool[ri++] }); }
    return newsOnly ? out : out.slice(0, perPage);
  }, [books.length, bookPool.length, newsHits, resPool, perPage, newsOnly]);
  const rKey = (r) => r.kind === "book" ? r.b.id : r.kind === "news" ? window.newsKey(r.n) : window.olrKey(r.x);
  const batchKeys = [...new Set(results.map(rKey))];
  const resThumb = (x) => <window.ResLogo r={x} w={64} h={64} pad={4} />;
  const resRow = (x, i) => { const k = window.olrKey(x); return <DSR.DatabaseCard key={i} style={{ boxShadow: "none" }} shareUrl={x.url} category={(x.categories || [])[0] || "線上學習資源"} name={x.title} description={[x.publisher, x.description].filter(Boolean).join("　")} thumbnailNode={resThumb(x)} checked={selection.has(k)} onCheck={(on) => selection.set(k, on)} bookmarked={window.favStore.has(k)} onBookmark={() => window.favStore.toggle(k)} onOpen={() => window.openPreview("res", x)} onReadMore={() => window.openPreview("res", x)} readMore="閱讀更多" onGo={() => window.openExternal(x.url)} />; };
  return (
    <div style={{ padding: "20px 48px 32px", display: "flex", flexDirection: "column", gap: 12, background: "var(--color-surface)" }}>
      <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}><a style={lnkS} onClick={() => go("home")}>首頁</a>　›　<a style={lnkS} onClick={() => go("categories")}>瀏覽</a>　›　搜尋結果</div>
      <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
        <aside style={{ width: 280, flexShrink: 0, display: "flex", flexDirection: "column", gap: 32 }}>
          <h1 style={{ margin: 0, height: 53, display: "flex", alignItems: "center", fontSize: 28, fontWeight: 600 }}>篩選條件</h1>
          {applied.length > 0 && (<>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 14 }}>
              <span style={{ fontWeight: 700 }}>目前搜尋條件</span>
              <button onClick={() => { setApplied([]); setPicked([]); }} style={{ border: 0, background: "none", padding: 0, cursor: "pointer", fontFamily: "inherit", fontSize: 14, color: "var(--color-link)", textDecoration: "underline" }}>清除</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {applied.map(l => <span key={l} style={{ ...chip, cursor: "default", background: "var(--color-brand-mint)", color: "var(--color-text)" }}>{l}</span>)}
              </div>
            </div>
          </>)}
          <div style={{ border: "1px solid var(--color-border-default)", borderRadius: 8, padding: "8px 12px 8px 16px", display: "flex", flexDirection: "column", gap: 8, color: "var(--color-text-secondary)", boxSizing: "border-box", fontSize: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ whiteSpace: "nowrap" }}>已套用篩選：</span>
              <button onClick={() => setApplied(picked)} disabled={!picked.length} style={{ border: 0, cursor: picked.length ? "pointer" : "default", opacity: picked.length ? 1 : 0.4, background: "var(--color-brand-mint)", color: "var(--color-text)", borderRadius: 6, padding: "4px 16px", fontFamily: "inherit", fontSize: 14 }}>套用</button>
            </div>
            {picked.length > 0 && <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {picked.map(l => <button key={l} onClick={() => toggle(l)} style={chip}>{l} <span>✕</span></button>)}
            </div>}
          </div>
          <FilterBlock title="格式" items={fmtItems} selected={scopes} onToggle={(f) => setScopes(scopes.includes(f) ? scopes.filter(x => x !== f) : [...scopes, f])} />
          {bookTypes.length > 0 && <>
          <Collapsible><DSR.AvailableCollapse text1="狀態" selected={picked} onToggle={toggle} /></Collapsible>
          <Collapsible><DSR.ReaderCollapse selected={picked} onToggle={toggle} /></Collapsible>
          {bookTypes.includes("電子書") && <Collapsible><DSR.EbookCollapse selected={picked} onToggle={toggle} /></Collapsible>}
          {bookTypes.includes("有聲書") && <Collapsible><DSR.AudiobookCollapse selected={picked} onToggle={toggle} /></Collapsible>}
          <FilterBlock title="類別" items={[["文學小說類", 2400], ["非小說類", 750]]} selected={picked} onToggle={toggle} />
          <FilterBlock title="對應課綱" items={window.K12_CURRICULUM.flatMap(([, ss]) => ss).map(s => [s, window.subjectCount(s)])} selected={picked} onToggle={toggle} initial={6} step={5} />
          <FilterBlock title="主題" items={topicItems} selected={picked} onToggle={toggle} initial={6} step={5} />
          </>}
          {withRes && <>
          <FilterBlock title="資源類型" items={resTypeItems} selected={picked} onToggle={toggle} />
          </>}
          {withNews && <>
          <FilterBlock title="新聞來源" items={[["The New York Times", window.K12_NEWS.length]]} selected={picked} onToggle={toggle} />
          <FilterBlock title="新聞分類" items={newsCatItems} selected={picked} onToggle={toggle} initial={6} step={5} />
          </>}
        </aside>
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === "Enter" && doSearch()} placeholder={within && terms.length ? "在目前結果中搜尋…" : "搜尋電子圖書館"} style={{ flex: 1, height: 53, boxSizing: "border-box", border: "1.5px solid var(--color-brand-cta)", borderRadius: 8, padding: "12px 20px", fontFamily: "var(--font-base)", fontSize: 20, outline: 0 }} />
              <DSR.FieldDropdown value={field} onChange={setField} style={{ height: 50 }} />
              <DSR.CTAButton onClick={doSearch} style={{ width: 96, height: 50, padding: "12px 24px" }}>搜尋</DSR.CTAButton>
            </div>
            {terms.length > 0 && (
              <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 14 }}>
                {[[false, "新搜尋"], [true, "在結果中搜尋"]].map(([v, l]) => (
                  <label key={l} onClick={() => setWithin(v)} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}><DSR.Icon name={within === v ? "radio-checked" : "radio-unchecked"} size={18} />{l}</label>
                ))}
                {within && (
                  <div role="tablist" style={{ display: "flex", gap: 4, padding: 4, borderRadius: 8, background: "var(--color-bg)" }}>
                    {["AND", "OR"].map(o => <button key={o} type="button" role="tab" aria-selected={op === o} onClick={() => setOp(o)} style={{ border: 0, cursor: "pointer", padding: "4px 14px", borderRadius: 8, fontFamily: "inherit", fontSize: 13, fontWeight: 700, background: op === o ? "var(--color-brand-accent)" : "transparent", color: op === o ? "var(--color-text)" : "var(--color-text-secondary)" }}>{o}</button>)}
                  </div>
                )}
                {within && <span style={{ color: "var(--color-text-secondary)" }}>{op === "AND" ? "同時包含兩個關鍵字" : "包含任一關鍵字"}</span>}
              </div>
            )}
            {(terms.length > 0 || scopes.length > 0) && (
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", fontSize: 14, padding: "10px 16px", background: "var(--color-background-page)", borderRadius: 8 }}>
                {terms.map((t, i) => (
                  <React.Fragment key={i}>
                    {t.op && <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text)" }}>{t.op}</span>}
                    <button onClick={() => removeTerm(i)} style={{ ...chip, background: "var(--color-brand-mint)", color: "var(--color-text)" }}>「{t.text}」{t.field && <span style={{ fontWeight: 400 }}>· {t.field}</span>}<span>✕</span></button>
                  </React.Fragment>
                ))}
                {scopes.map(f => <button key={f} onClick={() => setScopes(scopes.filter(x => x !== f))} style={chip}>格式：{f} <span>✕</span></button>)}
                <button onClick={() => { setTerms([]); setScopes([]); setQ(""); setWithin(false); }} style={{ marginLeft: "auto", border: 0, background: "none", padding: 0, cursor: "pointer", fontFamily: "inherit", fontSize: 14, color: "var(--color-link)", textDecoration: "underline", whiteSpace: "nowrap" }}>清除全部</button>
              </div>
            )}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 14 }}>
            <span>共 {total.toLocaleString()} 筆結果</span>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center", color: "var(--color-text-secondary)", position: "relative" }}>
                每頁顯示：
                <div style={{ position: "relative" }}>
                  <button type="button" onClick={() => setPpOpen(!ppOpen)} style={{ border: 0, boxShadow: "inset 0 0 0 2px var(--color-border)", borderRadius: 8, background: "var(--color-surface)", padding: "8px 16px", display: "flex", gap: 8, alignItems: "center", cursor: "pointer", fontFamily: "inherit", fontSize: 14, color: "var(--color-text-primary)", lineHeight: "100%" }}>{perPage} 筆<span style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>⌄</span></button>
                  {ppOpen && <div role="listbox" style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, minWidth: "100%", zIndex: 20, background: "var(--color-surface)", border: "1px solid #e6e6e6", borderRadius: 8, boxShadow: "4px 4px 0 0 var(--color-border)", padding: "8px 0" }}>
                    {[10, 20, 30, 50].map(n => <div key={n} role="option" aria-selected={n === perPage} onClick={() => { setPerPage(n); setPpOpen(false); }} style={{ padding: "8px 16px", fontSize: 14, cursor: "pointer", whiteSpace: "nowrap", background: n === perPage ? "var(--color-mint-tint)" : "transparent", color: n === perPage ? "var(--color-brand-cta)" : "var(--color-text-primary)" }}>{n} 筆</div>)}
                  </div>}
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", color: "var(--color-text-secondary)", position: "relative" }}>
                排序：
                <Clickable onPick={(t) => { if (sortOpen && ["熱門度","相關度","出版日期新到舊","書名"].includes(t)) setSort(t); setSortOpen(!sortOpen); }}>
                  <div style={{ position: sortOpen ? "absolute" : "static", right: 0, top: 0, zIndex: 10 }}><DSR.SortDropdown state={sortOpen ? "open" : "closed-" + sort} /></div>
                  {sortOpen && <div style={{ width: 91, height: 36 }} />}
                </Clickable>
              </div>
            </div>
          </div>
          {hintRes && (
            <button type="button" onClick={() => setScopes(["線上學習資源"])} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", boxSizing: "border-box", border: "2px solid var(--color-border)", borderRadius: 8, background: "var(--color-background-page)", padding: "12px 16px", cursor: "pointer", fontFamily: "inherit", fontSize: 14, color: "var(--color-text-primary)", textAlign: "left" }}>
              <DSR.Icon name="external-link" size={14} style={{ color: "var(--color-text)" }} />
              <span style={{ flex: 1 }}>另有 <b>{resHitsAll.length}</b> 項線上學習資源符合{terms.length ? <>「{terms.map(t => t.text).join("」「")}」</> : "目前的篩選條件"}</span>
              <span style={{ color: "var(--color-link)", textDecoration: "underline", whiteSpace: "nowrap" }}>查看 ›</span>
            </button>
          )}
          {results.length > 0 && <window.BatchBar selection={selection} keys={batchKeys}><window.AddToFolderMenu keys={selection.keys()} onDone={selection.clear} /></window.BatchBar>}
          {!results.length && (
            <div style={{ padding: "64px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, color: "var(--color-text-secondary)", fontSize: 16 }}>
              <span>找不到符合條件的結果</span>
              <button type="button" onClick={clearAll} style={{ border: 0, background: "none", padding: 0, cursor: "pointer", fontFamily: "inherit", fontSize: 14, color: "var(--color-link)", textDecoration: "underline" }}>清除所有條件</button>
            </div>
          )}
          {results.length > 0 && (view === "書卡" ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 161px)", justifyContent: "center", columnGap: 32, rowGap: 32, padding: "4px 0 12px" }}>
              {results.map((r, i) => r.kind === "book"
                ? <DSR.BookCard key={i} {...window.bookCardProps(r.b)} selectable checked={selection.has(r.b.id)} onCheck={(on) => selection.set(r.b.id, on)} onClick={() => window.openBook(go, r.b.id)} />
                : r.kind === "res" ? <React.Fragment key={i} /> : <DSR.BookCard key={i} {...window.newsCardProps(r.n)} selectable checked={selection.has(window.newsKey(r.n))} onCheck={(on) => selection.set(window.newsKey(r.n), on)} onClick={() => window.openPreview("news", r.n)} />)}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {results.map((r, i) => r.kind === "book"
                ? <DSR.DatabaseCard key={i} style={{ boxShadow: "none" }} shareUrl={r.b.url || (location.href.split("#")[0] + "#book=" + r.b.id)} category={r.b.category} name={r.b.title} description={window.bookDesc(r.b)} thumbnailNode={<window.BookCover book={r.b} width={42.67} />} checked={selection.has(r.b.id)} onCheck={(on) => selection.set(r.b.id, on)} bookmarked={window.favStore.has(r.b.id)} onBookmark={() => window.favStore.toggle(r.b.id)} onOpen={() => setPreview(r.b)} onReadMore={() => setPreview(r.b)} readMore="閱讀更多" onGo={() => window.openBook(go, r.b.id)} />
                : r.kind === "res" ? resRow(r.x, i) : <React.Fragment key={i}>{newsCard(r.n)}</React.Fragment>)}
            </div>
          ))}
          {results.length > 0 && !newsOnly && <div style={{ display: "flex", justifyContent: "center" }}>
            <Clickable onPick={(t) => { if (["1","2","3","4","5","6","76"].includes(t)) setPage(t); else if (t === "›") setPage(String(Math.min(6, +page + 1))); else if (t === "‹") setPage(String(Math.max(1, +page - 1))); }}><DSR.Pagination state={page} /></Clickable>
          </div>}
        </div>
      </div>
      {preview && <BookPreview b={preview} go={go} onClose={() => setPreview(null)} />}
    </div>
  );
}
// 書籍預覽懸浮視窗：點標題或「閱讀更多」開啟；空欄位顯示「-」
function BookPreview({ b, go, onClose }) {
  React.useEffect(() => { const k = (e) => e.key === "Escape" && onClose(); document.addEventListener("keydown", k); return () => document.removeEventListener("keydown", k); }, []);
  window.useFavs();
  const saved = window.favStore.has(b.id);
  const rows = [["作者", b.author], ["類型", [b.type, b.edition].filter(Boolean).join(" · ")], ["狀態", b.available], ["讀者", b.reader], ["類別", b.klass || b.category], ["對應課綱", (b.curriculum || []).join("、")], ["主題", (b.topics || []).join("、")]];
  return ReactDOM.createPortal(
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(40,30,70,.35)", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ zoom: (document.getElementById("root") || {}).style?.zoom || 1, display: "flex" }}>
      <div role="dialog" aria-modal="true" aria-label={b.title} onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: 720, maxHeight: "86vh", overflow: "auto", boxSizing: "border-box", padding: 32, display: "flex", gap: 28, background: "var(--color-surface)", border: "var(--border-default)", borderRadius: "var(--corner-lg)", fontFamily: "var(--font-base)", color: "var(--color-text)" }}>
        <button type="button" aria-label="關閉" onClick={onClose} style={{ position: "absolute", top: 14, right: 14, width: 32, height: 32, border: "var(--border-thin)", borderRadius: "50%", background: "var(--color-surface)", cursor: "pointer", fontSize: 14, color: "var(--color-text)" }}>✕</button>
        <div style={{ flexShrink: 0, border: "var(--border-default)", boxShadow: "var(--shadow-hard-sm)", lineHeight: 0, alignSelf: "flex-start" }}><window.BookCover book={b} width={180} /></div>
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
          {b.category && <span style={{ alignSelf: "flex-start", fontSize: 12, fontWeight: 700, padding: "3px 8px", borderRadius: 4, border: "var(--border-thin)", background: "var(--color-accent-tint)" }}>{b.category}</span>}
          <h2 style={{ margin: 0, paddingRight: 32, fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 700, lineHeight: 1.25 }}>{b.title}</h2>
          <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "6px 16px", fontSize: 14 }}>
            {rows.map(([k, v]) => <React.Fragment key={k}><dt style={{ color: "var(--color-text-muted)" }}>{k}</dt><dd style={{ margin: 0 }}>{v || "-"}</dd></React.Fragment>)}
          </dl>
          <div style={{ borderTop: "var(--border-dashed)", paddingTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".1em" }}>內容簡介</span>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, textWrap: "pretty" }}>{b.synopsis || "-"}</p>
          </div>
          <div style={{ marginTop: "auto", paddingTop: 8, display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <DSR.Button size="md" tone="paper" selected={saved} icon={saved ? "bookmark-filled" : "bookmark"} onClick={() => window.favStore.toggle(b.id)}>{saved ? "已收藏" : "加入收藏"}</DSR.Button>
            <DSR.Button variant="primary" size="md" iconRight="chevron-right" onClick={() => window.openBook(go, b.id)}>書籍詳細資料</DSR.Button>
          </div>
        </div>
      </div></div>
    </div>, document.body
  );
}
window.SearchResultsScreen = SearchResultsScreen;

export { DSR, SI, lnkS, Clickable, Collapsible, fbHead, FilterBlock, SearchResultsScreen, BookPreview };
