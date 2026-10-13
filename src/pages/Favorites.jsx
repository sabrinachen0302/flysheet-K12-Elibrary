import React from 'react';
import * as DS from '../design-system/index.js';
const FDS = DS;
// ── 我的收藏 store (localStorage "k12-favs"). Keys: book id, or "res:<name>" for 電子資源.
const FAV_KEY = "k12-favs";
const FAV_RES = { "大英百科線上版": "百科資料庫", "康軒學習雲": "學習平台", "國家地理雜誌": "電子期刊", "TED 影音資源": "影音平台", "未來少年雜誌": "電子期刊" };
const FAV_DEFAULT = {
  folders: [
    { id: "fav", name: "我的最愛", fixed: true, items: ["little-prince", "namiya", "sapiens", "res:大英百科線上版"] },
    { id: "f-report", name: "國文課堂報告", items: ["red-chamber", "taipei-people", "old-peking"] },
    { id: "f-summer", name: "暑假閱讀清單", items: ["1984", "animal-farm", "lord-flies", "old-man-sea", "pride-prejudice"] },
    { id: "f-career", name: "生涯探索", items: ["courage-disliked", "res:康軒學習雲"] },
    { id: "f-english", name: "英文閱讀", items: [] },
  ],
  recent: ["namiya", "res:大英百科線上版", "sapiens", "courage-disliked", "pride-prejudice", "little-prince"],
};
let favState = (() => { try { return JSON.parse(localStorage.getItem(FAV_KEY)) || FAV_DEFAULT; } catch (e) { return FAV_DEFAULT; } })();
const favSubs = new Set();
let favToast = null;
const emit = () => favSubs.forEach(f => f());
const favStore = {
  get: () => favState,
  set(fn) { favState = fn(favState); localStorage.setItem(FAV_KEY, JSON.stringify(favState)); emit(); },
  folder: (id) => favState.folders.find(f => f.id === id),
  has: (key, folder = "fav") => !!(favStore.folder(folder) || { items: [] }).items.includes(key),
  toast(msg, action) { favToast = { msg, action, t: Date.now() }; emit(); clearTimeout(favStore._t); favStore._t = setTimeout(() => { favToast = null; emit(); }, 3200); },
  add(key, folder = "fav") {
    favStore.set(s => ({ ...s, folders: s.folders.map(f => f.id === folder && !f.items.includes(key) ? { ...f, items: [key, ...f.items] } : f), recent: [key, ...s.recent.filter(k => k !== key)].slice(0, 12) }));
  },
  remove(key, folder = "fav") { favStore.set(s => ({ ...s, folders: s.folders.map(f => f.id === folder ? { ...f, items: f.items.filter(k => k !== key) } : f) })); },
  toggle(key, folder = "fav") {
    const name = favStore.folder(folder).name;
    if (favStore.has(key, folder)) { favStore.remove(key, folder); favStore.toast(`已從「${name}」移除`, { label: "復原", run: () => favStore.add(key, folder) }); }
    else { favStore.add(key, folder); favStore.toast(`已加入「${name}」`, { label: "查看", run: () => { localStorage.setItem("k12-fav-open", folder); window.__k12go && window.__k12go("favorites"); } }); }
  },
  addMany(keys, folder) {
    const fd = favStore.folder(folder); const fresh = keys.filter(k => !fd.items.includes(k));
    favStore.set(s => ({ ...s, folders: s.folders.map(f => f.id === folder ? { ...f, items: [...fresh, ...f.items] } : f), recent: [...fresh, ...s.recent.filter(k => !fresh.includes(k))].slice(0, 12) }));
    const dup = keys.length - fresh.length;
    favStore.toast(`已將 ${fresh.length} 項加入「${fd.name}」${dup ? `（${dup} 項已在資料夾中）` : ""}`, { label: "查看", run: () => { localStorage.setItem("k12-fav-open", folder); window.__k12go && window.__k12go("favorites"); } });
  },
  removeMany(keys, folder) {
    const fd = favStore.folder(folder); const prev = fd.items;
    favStore.set(s => ({ ...s, folders: s.folders.map(f => f.id === folder ? { ...f, items: f.items.filter(k => !keys.includes(k)) } : f) }));
    favStore.toast(`已從「${fd.name}」移除 ${keys.length} 項`, { label: "復原", run: () => favStore.set(s => ({ ...s, folders: s.folders.map(f => f.id === folder ? { ...f, items: prev } : f) })) });
  },
  addFolder(name) { const id = "f-" + Date.now(); favStore.set(s => ({ ...s, folders: [...s.folders, { id, name, items: [] }] })); return id; },
  rename(id, name) { favStore.set(s => ({ ...s, folders: s.folders.map(f => f.id === id ? { ...f, name } : f) })); },
  removeFolder(id) { favStore.set(s => ({ ...s, folders: s.folders.filter(f => f.id !== id) })); },
};
function useFavs() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => { favSubs.add(force); return () => favSubs.delete(force); }, []);
  return favState;
}
const resolveFav = (key) => key.startsWith("olr:") ? (x => x ? { key, olr: true, res: true, url: x.url, title: x.title, author: x.publisher || (x.categories || [])[0] || "線上學習資源", category: (x.categories || [])[0] || "線上學習資源", synopsis: x.description || "" } : { key, olr: true, res: true, title: "載入中…", author: "線上學習資源", category: "線上學習資源", synopsis: "" })(window.resourceById(key.slice(4))) : key.startsWith("news:") ? (n => ({ key, news: true, res: true, url: n.url, title: n.title, author: n.source, category: n.sectionLabel, synopsis: n.summary }))(window.newsById(key.slice(5))) : key.startsWith("res:") ? { key, res: true, title: key.slice(4), author: FAV_RES[key.slice(4)] || "電子資源", category: FAV_RES[key.slice(4)] || "電子資源", synopsis: "線上電子資源，點選即可進入平台。" } : { key, ...window.bookById(key) };
const openFavItem = (go, it) => it.news || (it.olr && it.url) ? window.open(it.url, "_blank", "noopener") : !it.res && window.openBook(go, it.id);
function FavToast() {
  useFavs();
  if (!favToast) return null;
  return (
    <div role="status" style={{ position: "fixed", left: "50%", bottom: 32, transform: "translateX(-50%)", zIndex: 100, display: "flex", alignItems: "center", gap: 20, padding: "12px 20px", borderRadius: 8, background: "var(--color-brand-mint)", color: "var(--color-text)", fontSize: 15, boxShadow: "4px 4px 0 0 var(--color-border)" }}>
      <FDS.Icon name="bookmark-filled" size={16} style={{ color: "var(--color-brand-accent)" }} />{favToast.msg}
      {favToast.action && <button type="button" onClick={() => { favToast.action.run(); favToast = null; emit(); }} style={{ border: 0, background: "none", padding: 0, cursor: "pointer", fontFamily: "inherit", fontSize: 15, fontWeight: 700, color: "var(--color-brand-accent)", textDecoration: "underline" }}>{favToast.action.label}</button>}
    </div>
  );
}
// ── UI
function useSelection() {
  const [sel, setSel] = React.useState(() => new Set());
  return {
    sel, size: sel.size, has: (k) => sel.has(k),
    set: (k, on) => setSel(s => { const n = new Set(s); on ? n.add(k) : n.delete(k); return n; }),
    all: (keys) => setSel(new Set(keys)), clear: () => setSel(new Set()),
    keys: () => [...sel],
  };
}
function SelBox({ checked, mixed, onClick, label }) {
  return (
    <button type="button" role="checkbox" aria-checked={mixed ? "mixed" : checked} onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 8, border: 0, background: "none", padding: 0, cursor: "pointer", fontFamily: "inherit", fontSize: 14, color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
      <span style={{ width: 18, height: 18, boxSizing: "border-box", borderRadius: "var(--radius-sm)", border: checked || mixed ? "1.5px solid var(--color-border)" : "1.5px solid var(--color-border)", background: checked || mixed ? "var(--color-brand-mint)" : "var(--color-surface)", color: "var(--color-text)", fontSize: 12, lineHeight: "18px", textAlign: "center" }}>{checked ? "✓" : mixed ? "–" : ""}</span>{label}
    </button>
  );
}
function AddToFolderMenu({ keys, onDone }) {
  const state = useFavs();
  const [open, setOpen] = React.useState(false);
  const [creating, setCreating] = React.useState(false);
  const [name, setName] = React.useState("");
  const ref = React.useRef(null);
  React.useEffect(() => { if (!open) return; const c = (e) => { if (ref.current && !ref.current.contains(e.target)) { setOpen(false); setCreating(false); } }; document.addEventListener("mousedown", c); return () => document.removeEventListener("mousedown", c); }, [open]);
  const pick = (id) => { favStore.addMany(keys, id); setOpen(false); setCreating(false); onDone && onDone(); };
  const create = () => { const n = name.trim(); if (!n) return; const id = favStore.addFolder(n); setName(""); pick(id); };
  const row = { display: "flex", alignItems: "center", gap: 10, width: "100%", border: 0, background: "none", padding: "10px 16px", cursor: "pointer", fontFamily: "inherit", fontSize: 15, color: "var(--color-text-primary)", textAlign: "left" };
  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button type="button" disabled={!keys.length} onClick={() => setOpen(!open)} style={{ border: 0, cursor: keys.length ? "pointer" : "default", opacity: keys.length ? 1 : 0.4, background: "var(--color-brand-mint)", color: "var(--color-text)", borderRadius: 6, padding: "7px 16px", fontFamily: "inherit", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
        <FDS.Icon name="bookmark" size={14} />加入收藏夾<FDS.Icon name="chevron-down" size={12} style={{ transform: open ? "rotate(180deg)" : "none" }} />
      </button>
      {open && (
        <div role="menu" style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 30, width: 260, background: "var(--color-surface)", border: "1px solid #e6e6e6", borderRadius: 8, boxShadow: "4px 4px 0 0 var(--color-border)", padding: "6px 0" }}>
          <div style={{ padding: "6px 16px 8px", fontSize: 12, color: "var(--color-text-secondary)" }}>將 {keys.length} 項加入…</div>
          {state.folders.map(fd => <MenuRow key={fd.id} style={row} onClick={() => pick(fd.id)}>{fd.fixed ? <FDS.Icon name="bookmark-filled" size={14} style={{ color: "var(--color-text)" }} /> : <span style={{ width: 14, height: 11, borderRadius: 2, background: FOLDER_FRONT, flexShrink: 0 }} />}<span style={{ flex: 1 }}>{fd.name}</span><span style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{fd.items.length}</span></MenuRow>)}
          <div style={{ borderTop: "1px solid var(--color-border-default)", margin: "6px 0" }} />
          {creating ? (
            <div style={{ display: "flex", gap: 8, padding: "6px 16px 8px" }}>
              <input autoFocus value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") create(); if (e.key === "Escape") setCreating(false); }} placeholder="新資料夾名稱" style={{ flex: 1, minWidth: 0, border: "1.5px solid var(--color-brand-cta)", borderRadius: 8, padding: "6px 10px", fontFamily: "inherit", fontSize: 14, outline: 0 }} />
              <button type="button" onClick={create} style={{ border: 0, cursor: "pointer", background: "var(--color-brand-cta)", color: "var(--color-text)", borderRadius: 8, padding: "0 12px", fontFamily: "inherit", fontSize: 14, fontWeight: 700 }}>建立</button>
            </div>
          ) : <MenuRow style={{ ...row, color: "var(--color-link)" }} onClick={() => setCreating(true)}>＋ 新增資料夾並加入</MenuRow>}
        </div>
      )}
    </div>
  );
}
function MenuRow({ style, onClick, children }) {
  const [h, setH] = React.useState(false);
  return <button type="button" role="menuitem" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ ...style, background: h ? "var(--color-mint-tint)" : "transparent" }}>{children}</button>;
}
// Selection toolbar: 全選 + count + actions. `keys` = selectable keys on screen.
function BatchBar({ selection, keys, children, style }) {
  const n = selection.size, all = keys.length > 0 && keys.every(k => selection.has(k));
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, minHeight: 48, padding: "6px 16px", boxSizing: "border-box", borderRadius: 8, background: n ? "var(--color-background-page)" : "transparent", border: n ? "2px solid var(--color-border)" : "1px solid transparent", transition: "background .15s ease", ...style }}>
      <SelBox checked={all} mixed={!all && n > 0} onClick={() => all ? selection.clear() : selection.all(keys)} label={all ? "取消全選" : "全選"} />
      {n > 0 ? <>
        <span style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>已選取 <b style={{ color: "var(--color-text-primary)" }}>{n}</b> 項</span>
        {children}
        <button type="button" onClick={selection.clear} style={{ ...favTextBtn, marginLeft: "auto" }}>取消選取</button>
      </> : <span style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>勾選書籍或電子資源，可批次加入收藏夾</span>}
    </div>
  );
}
const favLnk = { color: "inherit", textDecoration: "underline", cursor: "pointer" };
const favTextBtn = { border: 0, background: "none", padding: 0, cursor: "pointer", fontFamily: "inherit", fontSize: 14, color: "var(--color-link)", textDecoration: "underline" };
const FOLDER_FRONT = "var(--color-brand-mint)";
function ResCover({ item, width = 150.67 }) {
  return (
    <div style={{ width, height: width * 1.5, boxSizing: "border-box", padding: width * 0.1, background: "var(--color-brand-mint)", display: "flex", flexDirection: "column", justifyContent: "space-between", color: "var(--color-text)" }}>
      <span style={{ fontSize: Math.max(8, width * 0.08), fontWeight: 700, letterSpacing: 1 }}>{item.category}</span>
      <span style={{ fontSize: Math.max(9, width * 0.11), fontWeight: 700, lineHeight: 1.3 }}>{item.title}</span>
    </div>
  );
}
const favCover = (item, w) => item.news ? <window.NewsCover news={window.newsById(item.key.slice(5))} width={w} /> : item.res ? <ResCover item={item} width={w} /> : <window.BookCover book={item} width={w} />;
function FolderArt({ folder, lifted }) {
  const peek = folder.items.slice(0, 3).map(resolveFav);
  return (
    <div style={{ position: "relative", width: 200, height: 148 }}>
      <div style={{ position: "absolute", left: 0, top: 0, width: 84, height: 24, background: "var(--color-brand-mint)", borderRadius: "6px 6px 0 0" }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 14, bottom: 0, background: "var(--color-brand-mint)", borderRadius: "0 8px 8px 8px" }} />
      {peek.map((it, i) => (
        <div key={it.key} style={{ position: "absolute", left: 30 + i * 44, top: 22, transform: `translateY(${lifted ? -16 : 0}px) rotate(${(i - 1) * 7}deg)`, transition: "transform .2s ease", transitionDelay: `${i * 30}ms`, boxShadow: "2px 2px 0 0 var(--color-border)" }}>{favCover(it, 52)}</div>
      ))}
      <div style={{ position: "absolute", left: 0, right: 0, top: 50, bottom: 0, background: FOLDER_FRONT, borderRadius: 8, boxShadow: "0 -3px 0 0 var(--color-border)", display: "flex", alignItems: "flex-end", padding: 12, boxSizing: "border-box", gap: 6 }}>
        {folder.fixed && <span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-brand-accent)", color: "var(--color-text)", display: "flex", alignItems: "center", justifyContent: "center" }}><FDS.Icon name="bookmark-filled" size={14} /></span>}
        {!folder.items.length && <span style={{ fontSize: 12, color: "var(--color-text)" }}>空資料夾</span>}
      </div>
    </div>
  );
}
function FolderTile({ folder, onOpen }) {
  const [h, setH] = React.useState(false);
  return (
    <button type="button" onClick={onOpen} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ border: 0, cursor: "pointer", fontFamily: "inherit", color: "var(--color-text-primary)", background: h ? "var(--color-background-page)" : "transparent", borderRadius: 6, padding: "20px 16px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 14, transition: "background .15s ease" }}>
      <FolderArt folder={folder} lifted={h} />
      <span style={{ fontSize: 18, fontWeight: 600 }}>{folder.name}</span>
      <span style={{ fontSize: 14, color: "var(--color-text-secondary)", marginTop: -8 }}>{folder.items.length} 項</span>
    </button>
  );
}
function NewFolderTile({ onCreate }) {
  const [editing, setEditing] = React.useState(false);
  const [name, setName] = React.useState("");
  const [h, setH] = React.useState(false);
  const commit = () => { const n = name.trim(); if (n) onCreate(n); setEditing(false); setName(""); };
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ borderRadius: 6, padding: "20px 16px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
      <button type="button" onClick={() => setEditing(true)} style={{ width: 200, height: 148, boxSizing: "border-box", border: `2px dashed ${h ? "var(--color-brand-primary)" : "var(--color-border-default)"}`, borderRadius: 8, background: "transparent", cursor: "pointer", fontFamily: "inherit", fontSize: 36, fontWeight: 300, color: h ? "var(--color-text)" : "var(--color-text-secondary)" }}>＋</button>
      {editing ? (
        <input autoFocus value={name} onChange={(e) => setName(e.target.value)} onBlur={commit} onKeyDown={(e) => { if (e.key === "Enter") commit(); if (e.key === "Escape") { setEditing(false); setName(""); } }} placeholder="資料夾名稱" style={{ width: 180, boxSizing: "border-box", border: "1.5px solid var(--color-brand-cta)", borderRadius: 8, padding: "6px 10px", fontFamily: "inherit", fontSize: 16, outline: 0, textAlign: "center" }} />
      ) : <span style={{ fontSize: 18, fontWeight: 600, color: "var(--color-text-secondary)" }}>新增資料夾</span>}
    </div>
  );
}
function FavSearch({ q, setQ, field, setField, onSubmit }) {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === "Enter" && onSubmit()} placeholder="搜尋我的收藏" style={{ flex: 1, background: "var(--color-surface)", border: "1.5px solid var(--color-brand-cta)", borderRadius: 8, padding: "12px 20px", fontFamily: "var(--font-base)", fontSize: 20, outline: 0 }} />
      <FDS.FieldDropdown options={["所有欄位", "名稱", "作者", "資料夾"]} value={field} onChange={setField} />
      <FDS.CTAButton onClick={onSubmit} style={{ width: 96, height: "auto", padding: "12px 24px" }}>搜尋</FDS.CTAButton>
    </div>
  );
}
function RemovableCard({ item, onOpen, onRemove, checked, onCheck }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ position: "relative" }}>
      <FDS.BookCard title={item.title} author={item.author} synopsis={item.synopsis} coverNode={favCover(item, 150.67)} onClick={onOpen} selectable checked={checked} onCheck={onCheck} />
      {h && !checked && <button type="button" aria-label="移出資料夾" title="移出資料夾" onClick={onRemove} style={{ position: "absolute", top: -14, left: -8, zIndex: 2, width: 28, height: 28, borderRadius: "50%", border: 0, cursor: "pointer", background: "var(--color-brand-mint)", color: "var(--color-text)", fontSize: 14, boxShadow: "2px 2px 0 0 var(--color-border)" }}>✕</button>}
    </div>
  );
}
function ViewToggle({ view, setView }) {
  return (
    <div role="tablist" style={{ display: "flex", gap: 4, padding: 4, borderRadius: 8, background: "var(--color-bg)" }}>
      {["書封", "清單"].map(v => <button key={v} type="button" role="tab" aria-selected={view === v} onClick={() => setView(v)} style={{ border: 0, cursor: "pointer", padding: "6px 16px", borderRadius: 8, fontFamily: "inherit", fontSize: 14, fontWeight: 700, background: view === v ? "var(--color-brand-accent)" : "transparent", color: view === v ? "var(--color-text)" : "var(--color-text-secondary)" }}>{v}</button>)}
    </div>
  );
}
function ItemList({ items, go, folderOf, onRemove, selection }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map(it => <FDS.DatabaseCard key={it.key + (folderOf ? folderOf(it) : "")} category={folderOf ? folderOf(it) : it.category} name={it.title} description={it.res ? [it.category, it.synopsis].filter(Boolean).join("　") : window.bookDesc(it)} thumbnailNode={it.res ? <ResCover item={it} width={42.67} /> : <window.BookCover book={it} width={42.67} />} checked={selection ? selection.has(it.key) : undefined} onCheck={selection ? (on) => selection.set(it.key, on) : undefined} bookmarked={onRemove ? true : favStore.has(it.key)} onBookmark={() => onRemove ? onRemove(it) : favStore.toggle(it.key)} onOpen={() => openFavItem(go, it)} onGo={() => openFavItem(go, it)} />)}
    </div>
  );
}
function FolderView({ folder, go, back }) {
  const [view, setView] = React.useState("書封");
  const [renaming, setRenaming] = React.useState(false);
  const [name, setName] = React.useState(folder.name);
  const [confirmDel, setConfirmDel] = React.useState(false);
  const items = folder.items.map(resolveFav);
  const selection = useSelection();
  const remove = (it) => { favStore.remove(it.key, folder.id); favStore.toast(`已從「${folder.name}」移除`, { label: "復原", run: () => favStore.add(it.key, folder.id) }); };
  const commitName = () => { const n = name.trim(); if (n) favStore.rename(folder.id, n); else setName(folder.name); setRenaming(false); };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <button type="button" onClick={back} style={{ ...favTextBtn, alignSelf: "flex-start" }}>‹ 返回所有資料夾</button>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {folder.fixed && <FDS.Icon name="bookmark-filled" size={22} style={{ color: "var(--color-text)" }} />}
            {renaming ? <input autoFocus value={name} onChange={(e) => setName(e.target.value)} onBlur={commitName} onKeyDown={(e) => e.key === "Enter" && commitName()} style={{ fontFamily: "inherit", fontSize: 28, fontWeight: 600, border: "1.5px solid var(--color-brand-cta)", borderRadius: 8, padding: "2px 10px", outline: 0 }} /> : <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600 }}>{folder.name}</h2>}
            <span style={{ fontSize: 16, color: "var(--color-text-secondary)" }}>{items.length} 項</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {!folder.fixed && <button type="button" onClick={() => setRenaming(true)} style={favTextBtn}>重新命名</button>}
          {!folder.fixed && <button type="button" onClick={() => setConfirmDel(true)} style={favTextBtn}>刪除資料夾</button>}
          <ViewToggle view={view} setView={setView} />
        </div>
      </div>
      {confirmDel && (
        <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 16px", background: "var(--color-background-page)", borderRadius: 8, fontSize: 15 }}>
          <span style={{ flex: 1 }}>確定要刪除「{folder.name}」？資料夾內的 {items.length} 項收藏會一併移除，其他資料夾不受影響。</span>
          <button type="button" onClick={() => setConfirmDel(false)} style={favTextBtn}>取消</button>
          <button type="button" onClick={() => { favStore.removeFolder(folder.id); favStore.toast(`已刪除資料夾「${folder.name}」`); back(); }} style={{ border: 0, cursor: "pointer", background: "var(--color-brand-mint)", color: "var(--color-text)", borderRadius: 6, padding: "6px 18px", fontFamily: "inherit", fontSize: 14, fontWeight: 700 }}>刪除</button>
        </div>
      )}
      {items.length > 0 && (
        <BatchBar selection={selection} keys={items.map(it => it.key)}>
          <button type="button" onClick={() => { favStore.removeMany(selection.keys(), folder.id); selection.clear(); }} style={{ border: "2px solid var(--color-border)", cursor: "pointer", background: "var(--color-surface)", color: "var(--color-text)", borderRadius: 6, padding: "6px 16px", fontFamily: "inherit", fontSize: 14, fontWeight: 700 }}>移除所選（{selection.size}）</button>
          <AddToFolderMenu keys={selection.keys()} onDone={selection.clear} />
        </BatchBar>
      )}
      {!items.length ? (
        <div style={{ padding: "64px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, color: "var(--color-text-secondary)", fontSize: 16 }}>
          <span>這個資料夾還沒有內容</span>
          <span style={{ fontSize: 14, display: "flex", alignItems: "center", gap: 4, whiteSpace: "nowrap" }}>瀏覽書籍時點選<FDS.Icon name="bookmark" size={14} />即可收藏</span>
          <button type="button" onClick={() => go("categories")} style={favTextBtn}>前往瀏覽 ›</button>
        </div>
      ) : view === "書封" ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 161px)", columnGap: 40, rowGap: 32, paddingTop: 8 }}>
          {items.map(it => <RemovableCard key={it.key} item={it} onOpen={() => openFavItem(go, it)} onRemove={() => remove(it)} checked={selection.has(it.key)} onCheck={(on) => selection.set(it.key, on)} />)}
        </div>
      ) : <ItemList items={items} go={go} onRemove={remove} selection={selection} />}
    </div>
  );
}
function FavoritesScreen({ go }) {
  const state = useFavs();
  window.useResources();
  window.__k12go = go;
  const [openId, setOpenId] = React.useState(() => { const v = localStorage.getItem("k12-fav-open"); localStorage.removeItem("k12-fav-open"); return v; });
  const [q, setQ] = React.useState("");
  const [field, setField] = React.useState(undefined);
  const [query, setQuery] = React.useState(null);
  const folder = openId && favStore.folder(openId);
  const total = new Set(state.folders.flatMap(f => f.items)).size;
  const hits = React.useMemo(() => {
    if (!query) return [];
    const t = query.text.toLowerCase(), f = query.field;
    const out = [];
    state.folders.forEach(fd => fd.items.forEach(k => {
      const it = resolveFav(k);
      const pool = f === "名稱" ? [it.title] : f === "作者" ? [it.author] : f === "資料夾" ? [fd.name] : [it.title, it.author, fd.name, ...(it.topics || []), ...(it.curriculum || [])];
      if (pool.some(v => v && v.toLowerCase().includes(t))) out.push({ ...it, folder: fd.name });
    }));
    return out;
  }, [query, state]);
  const submit = () => { const t = q.trim(); setQuery(t ? { text: t, field: field && field !== "所有欄位" ? field : null } : null); setOpenId(null); };
  const recent = state.recent.filter(k => state.folders.some(f => f.items.includes(k))).slice(0, 6).map(resolveFav);
  return (
    <div style={{ background: "var(--color-surface)", padding: "20px 48px 56px", display: "flex", flexDirection: "column", gap: 32 }}>
      <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
        <a style={favLnk} onClick={() => go("home")}>首頁</a>　›　{folder || query ? <a style={favLnk} onClick={() => { setOpenId(null); setQuery(null); setQ(""); }}>我的收藏</a> : "我的收藏"}{folder && <>　›　{folder.name}</>}{query && <>　›　搜尋結果</>}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 600, whiteSpace: "nowrap" }}>我的收藏</h1>
        <span style={{ fontSize: 16, color: "var(--color-text-secondary)" }}>{state.folders.length} 個資料夾 · {total} 項收藏</span>
      </div>
      <FavSearch q={q} setQ={setQ} field={field} setField={setField} onSubmit={submit} />
      {query ? (
        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 14 }}>
            <span>在我的收藏中找到 {hits.length} 筆「{query.text}」{query.field && <span style={{ color: "var(--color-text-secondary)" }}>（{query.field}）</span>}</span>
            <button type="button" onClick={() => { setQuery(null); setQ(""); }} style={favTextBtn}>清除搜尋</button>
          </div>
          {hits.length ? <ItemList items={hits} go={go} folderOf={(it) => it.folder} /> : (
            <div style={{ padding: "48px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, color: "var(--color-text-secondary)" }}>
              <span>找不到符合的收藏</span>
              <button type="button" onClick={() => { localStorage.setItem("k12-search", JSON.stringify({ terms: [{ text: query.text, field: null, op: null }], applied: [], scope: "全部" })); go("search"); }} style={favTextBtn}>改在整個電子圖書館搜尋「{query.text}」 ›</button>
            </div>
          )}
        </section>
      ) : folder ? <FolderView key={folder.id} folder={folder} go={go} back={() => setOpenId(null)} /> : (
        <>
          <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600 }}>資料夾</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 232px)", gap: 16, marginLeft: -16 }}>
              {state.folders.map(f => <FolderTile key={f.id} folder={f} onOpen={() => setOpenId(f.id)} />)}
              <NewFolderTile onCreate={(n) => { favStore.addFolder(n); favStore.toast(`已新增資料夾「${n}」`); }} />
            </div>
          </section>
          {recent.length > 0 && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600 }}>最近加入</h2>
              <div style={{ display: "flex", gap: 40 }}>
                {recent.map(it => <FDS.BookCard key={it.key} title={it.title} author={it.author} synopsis={it.synopsis} coverNode={favCover(it, 150.67)} onClick={() => openFavItem(go, it)} />)}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
Object.assign(window, { favStore, useFavs, FavToast, FavoritesScreen, useSelection, BatchBar, AddToFolderMenu });

export { FDS, FAV_KEY, FAV_RES, FAV_DEFAULT, favState, favSubs, favToast, emit, favStore, useFavs, resolveFav, openFavItem, FavToast, useSelection, SelBox, AddToFolderMenu, MenuRow, BatchBar, favLnk, favTextBtn, FOLDER_FRONT, ResCover, favCover, FolderArt, FolderTile, NewFolderTile, FavSearch, RemovableCard, ViewToggle, ItemList, FolderView, FavoritesScreen };
