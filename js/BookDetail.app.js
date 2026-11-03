const { CTAButton: DCTA, BookCard: DBook, Icon: DIcon, Button: DBtn, SharePopover: DShare } = window.DesignSystem_65d3d1;
const SYN = "霍爾與卡西法之謎，蘇菲與其相遇的最初的旅程\n　　巫師霍爾──因格利王國最惡名昭彰的邪惡巫師，帶著移動城堡在王國內各處遊蕩，傳聞他會帶走所有被他誘惑的女孩，並吃下她們的心臟。身為海特帽子店的繼承人，也身為家中三姊妹中的老大──蘇菲，一直自認沒有出息，人生就此完蛋，還得被荒野女巫下咒變成老人的姿態。而她並沒有了解自己在「魔法」上的天賦與才能，直到他與「邪惡巫師（真的嗎？）」霍爾相遇──\n\n　　為了替妹妹擺脫霍爾的糾纏，在移動城堡內一直擔任清潔婦的蘇菲，與「火魔」卡西法、學徒麥可邂逅，答應幫助其解除與霍爾的契約而慢慢深入了霍爾、因格利王國、巫師沙利曼等人之間的鬥爭與拉扯，並與其一同對抗荒野女巫其覬覦因格利王國的荒謬野心。不知不覺中，蘇菲在他們之間扮演極為重要的角色，與荒野女巫及第二隻與巫師訂下契約的「火魔」的戰爭，最終的結果將由蘇菲的天賦決定──\n\n　　與動畫版不同，更加豐富立體的原作角色們\n　　雖然還是帥氣，霍爾與動畫版相比，顯得更加讓人生氣，但又有對於解決問題的獨到見解與深謀遠慮。蘇菲則是溫柔裡多添了一些嘮叨。相較之下，卡西法的活靈活現為這部作品灌入了有趣、輕鬆的閱讀感。";
const lnk = { color: "inherit", textDecoration: "underline", cursor: "pointer" };
const Tag = ({ hi, onClick, children }) => <span onClick={onClick} style={{ cursor: onClick ? "pointer" : "default", height: 18, minWidth: 48, padding: "0 6px", boxSizing: "border-box", borderRadius: 2, fontSize: 14, display: "inline-flex", alignItems: "center", justifyContent: "center", background: hi ? "var(--color-brand-cta)" : "var(--color-disabled)" }}>{children}</span>;
const Field = ({ label, w, children }) => <div style={{ display: "flex", gap: 16, fontSize: 14, alignItems: "center" }}><span style={{ width: w }}>{label}</span>{children}</div>;
const toSearch = (go, label) => { localStorage.setItem("k12-search", JSON.stringify({ terms: [], applied: [label], scope: "全部" })); go("search"); };
function FormatButton({ book, go }) {
  const [h, setH] = React.useState(false);
  const open = () => { localStorage.setItem("k12-search", JSON.stringify({ terms: [], applied: book.edition ? [book.edition] : [], scope: book.type })); go("search"); };
  return (
    <button type="button" onClick={open} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} title={`查看所有${book.type}${book.edition ? `（${book.edition}）` : ""}`} style={{ alignSelf: "flex-start", marginTop: -12, display: "flex", alignItems: "stretch", padding: 0, border: "2px solid var(--color-border)", borderRadius: 6, overflow: "hidden", cursor: "pointer", fontFamily: "inherit", fontSize: 14, fontWeight: 700, background: h ? "var(--color-background-page)" : "var(--color-surface)", transition: "background .15s ease" }}>
      <span style={{ padding: "6px 14px", background: "var(--color-brand-mint)", color: "var(--color-text)" }}>{book.type}</span>
      {book.edition && <span style={{ padding: "6px 12px 6px 14px", color: "var(--color-text)", display: "flex", alignItems: "center", gap: 8 }}>{book.edition}<DIcon name="chevron-right" size={10} /></span>}
    </button>
  );
}
function ZhInfo({ onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <span style={{ position: "relative", display: "inline-flex" }}>
      <button type="button" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onFocus={() => setH(true)} onBlur={() => setH(false)} aria-label="顯示中文簡介" style={{ width: 28, height: 28, padding: 0, borderRadius: "50%", border: "2px solid var(--color-border)", background: h ? "var(--color-brand-mint)" : "var(--color-surface)", color: "var(--color-text)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .15s ease" }}>
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 11v7" /><circle cx="12" cy="6.5" r="0.6" fill="currentColor" /></svg>
      </button>
      {h && <span role="tooltip" style={{ position: "absolute", left: "50%", bottom: "calc(100% + 8px)", transform: "translateX(-50%)", whiteSpace: "nowrap", padding: "6px 10px", borderRadius: 4, background: "var(--color-text)", color: "var(--color-surface)", fontSize: 13, fontWeight: 600, pointerEvents: "none", zIndex: 20 }}>顯示中文簡介</span>}
    </span>
  );
}
function ZhSynopsis({ book, onClose }) {
  return ReactDOM.createPortal(
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(40,30,70,.35)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div role="dialog" aria-modal="true" aria-label={book.title + " 中文簡介"} onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: 600, maxWidth: "100%", maxHeight: "80vh", overflow: "auto", boxSizing: "border-box", padding: "28px 32px 32px", display: "flex", flexDirection: "column", gap: 16, background: "var(--color-surface)", border: "2px solid var(--color-border)", borderRadius: 0, boxShadow: "none", fontFamily: "var(--font-base)", color: "var(--color-text)" }}>
        <div style={{ position: "absolute", top: 14, right: 14 }}><DBtn variant="icon" size="sm" ariaLabel="關閉" onClick={onClose}>✕</DBtn></div>
        <span style={{ fontFamily: "var(--font-label)", fontSize: 13, fontWeight: 700, letterSpacing: ".1em", color: "var(--color-text-muted)" }}>中文簡介</span>
        <p style={{ margin: 0, paddingTop: 14, borderTop: "var(--border-dashed)", fontSize: 15, lineHeight: 1.85, textWrap: "pretty" }}>{book.synopsisZh}</p>
      </div>
    </div>, document.body);
}
function BookDetailScreen({ go }) {
  window.useFavs();
  const [shareOpen, setShareOpen] = React.useState(false);
  const [zhOpen, setZhOpen] = React.useState(false);
  React.useEffect(() => { if (!zhOpen) return; const k = (e) => e.key === "Escape" && setZhOpen(false); document.addEventListener("keydown", k); return () => document.removeEventListener("keydown", k); }, [zhOpen]);
  const book = window.bookById(localStorage.getItem("k12-book"));
  const similar = window.K12_BOOKS.filter(b => b.id !== book.id && window.bookTag(b) === window.bookTag(book)).concat(window.K12_BOOKS.filter(b => window.bookTag(b) !== window.bookTag(book))).slice(0, 3);
  return (
    <div style={{ paddingTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ paddingLeft: 48, fontSize: 13, color: "var(--color-text-secondary)" }}>
        <a style={lnk} onClick={() => go("home")}>首頁</a>　›　<a style={lnk} onClick={() => go("search")}>搜尋結果</a>　›　{book.title}
      </div>
      <div style={{ display: "flex", gap: 48, padding: "40px 48px", alignItems: "flex-start" }}>
        <div style={{ width: 220, display: "flex", justifyContent: "center", flexShrink: 0, alignSelf: "flex-start", marginTop: 10 }}>
          <div style={{ filter: "drop-shadow(6px 6px 0 #3A2F5A)" }}><window.BookCover book={book} width={181} /></div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}><h1 style={{ margin: 0, padding: 10, fontSize: 32, fontWeight: 400 }}>{book.title}</h1>{book.synopsisZh && <ZhInfo onClick={() => setZhOpen(true)} />}</div>
            <div style={{ display: "flex", gap: 2, position: "relative" }}>
              <DBtn variant="icon" size="sm" icon="share" ariaLabel="分享" title="分享" selected={shareOpen} onClick={() => setShareOpen(o => !o)} />
              {shareOpen && <DShare url={book.url || window.location.href} title={book.title} onClose={() => setShareOpen(false)} />}
              <DBtn variant="icon" size="sm" icon="external-link" ariaLabel="在新分頁開啟平台" title="在新分頁開啟平台" disabled={!book.url} onClick={() => book.url && window.open(book.url, "_blank", "noopener")} />
              <DBtn variant="icon" size="sm" icon={window.favStore.has(book.id) ? "bookmark-filled" : "bookmark"} selected={window.favStore.has(book.id)} ariaLabel={window.favStore.has(book.id) ? "移出我的最愛" : "加入我的最愛"} title={window.favStore.has(book.id) ? "移出我的最愛" : "加入我的最愛"} onClick={() => window.favStore.toggle(book.id)} />
            </div>
          </div>
          <FormatButton book={book} go={go} />
          {(() => { const h = [...book.id].reduce((n, c) => (n * 31 + c.charCodeAt(0)) >>> 0, 7); const views = 300 + (h % 9700), favs = Math.round(views * (0.04 + (h % 7) / 100)) + (window.favStore.has(book.id) ? 1 : 0); return (
            <div style={{ display: "flex", gap: 20, fontSize: 14, color: "var(--color-text-muted)", marginTop: -8 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>點閱<b style={{ color: "var(--color-text)", fontVariantNumeric: "tabular-nums" }}>{views.toLocaleString()}</b>次</span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}><DIcon name="bookmark" size={14} />收藏<b style={{ color: "var(--color-text)", fontVariantNumeric: "tabular-nums" }}>{favs.toLocaleString()}</b>次</span>
            </div>); })()}
          <div style={{ display: "flex", gap: 8, fontSize: 14 }}><span style={{ width: 56 }}>作者</span>{book.author ? <a style={lnk}>{book.author}</a> : <span>-</span>}</div>
          {book.subtitle && <div style={{ display: "flex", gap: 8, fontSize: 14 }}><span style={{ width: 56 }}>副標題</span><span>{book.subtitle}</span></div>}
          {book.source && <div style={{ display: "flex", gap: 8, fontSize: 14 }}><span style={{ width: 56 }}>來源平台</span><span>{book.source}</span></div>}
          <div style={{ display: "flex", gap: 64 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Field label="出版社" w={56}><span>{book.publisher || "-"}</span></Field><Field label="譯者" w={56}><span>{book.translator || "-"}</span></Field><Field label="出版年" w={56}><span>{book.year || "-"}</span></Field>
              <Field label="狀態" w={56}>{book.available ? <Tag hi={book.available === "可用"} onClick={() => toSearch(go, book.available)}>{book.available}</Tag> : <span>-</span>}</Field>
              <Field label="讀者" w={56}>{book.reader ? <Tag onClick={() => toSearch(go, book.reader)}>{book.reader}</Tag> : <span>-</span>}</Field>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Field label="類別" w={56}>{book.klass ? <Tag hi onClick={() => toSearch(go, book.klass)}>{book.klass}</Tag> : <span>-</span>}</Field>
              <Field label="對應課綱" w={56}>{(book.curriculum || []).length ? <div style={{ display: "flex", gap: 15 }}>{book.curriculum.map(t => <Tag key={t} onClick={() => toSearch(go, t)}>{t}</Tag>)}</div> : <span>-</span>}</Field>
              <Field label="主題" w={56}>{(book.topics || []).length ? <div style={{ display: "grid", gridTemplateColumns: "repeat(5, auto)", justifyContent: "start", gap: "8px 15px" }}>{book.topics.map(t => <Tag key={t} onClick={() => toSearch(go, t)}>{t}</Tag>)}</div> : <span>-</span>}</Field>
            </div>
          </div>
          <hr style={{ border: 0, borderTop: "1px solid #000", margin: 0, width: "100%" }} />
          <p style={{ margin: 0, fontSize: 14, whiteSpace: "pre-wrap", lineHeight: 1.5 }}>{book.id === "howl" ? SYN : book.synopsis ? "　　" + book.synopsis + "\n\n　　（展示用簡介，之後可替換為正式書目資料。）" : "-"}</p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <DCTA bordered icon width={153} href={book.url}>進入平台</DCTA>
          </div>
        </div>
        <div style={{ width: 180, flexShrink: 0, display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ fontSize: 16 }}>相似書籍推薦</span>
          {similar.map(b => <div key={b.id} style={{ width: 150, height: 259, overflow: "hidden" }}><div style={{ transform: "scale(0.9317)", transformOrigin: "0 0", width: 161 }}><DBook {...window.bookCardProps(b)} onClick={() => window.openBook(go, b.id)} /></div></div>)}
        </div>
      </div>
      {zhOpen && <ZhSynopsis book={book} onClose={() => setZhOpen(false)} />}
    </div>
  );
}
window.BookDetailScreen = BookDetailScreen;
