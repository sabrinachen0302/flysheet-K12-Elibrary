import React from 'react';
import * as DS from '../design-system/index.js';
const { CTAButton: DCTA, BookCard: DBook, Icon: DIcon } = DS;
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
function BookDetailScreen({ go }) {
  window.useFavs();
  const book = window.bookById(localStorage.getItem("k12-book"));
  const similar = window.K12_BOOKS.filter(b => b.id !== book.id && b.category === book.category).concat(window.K12_BOOKS.filter(b => b.category !== book.category)).slice(0, 3);
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
            <h1 style={{ margin: 0, padding: 10, fontSize: 32, fontWeight: 400 }}>{book.title}</h1>
            <div style={{ display: "flex", gap: 12, color: "var(--color-text-muted)" }}><DIcon name="share" /><DIcon name="quote" /><button type="button" onClick={() => window.favStore.toggle(book.id)} aria-pressed={window.favStore.has(book.id)} title={window.favStore.has(book.id) ? "移出我的最愛" : "加入我的最愛"} style={{ border: 0, background: "none", padding: 0, cursor: "pointer", display: "flex", color: window.favStore.has(book.id) ? "var(--color-text)" : "inherit" }}><DIcon name={window.favStore.has(book.id) ? "bookmark-filled" : "bookmark"} /></button></div>
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
              <Field label="類別" w={56}>{book.klass || book.category ? <Tag hi onClick={book.klass ? () => toSearch(go, book.klass) : undefined}>{book.klass || book.category}</Tag> : <span>-</span>}</Field>
              <Field label="對應課綱" w={56}>{(book.curriculum || []).length ? <div style={{ display: "flex", gap: 15 }}>{book.curriculum.map(t => <Tag key={t} onClick={() => toSearch(go, t)}>{t}</Tag>)}</div> : <span>-</span>}</Field>
              <Field label="主題" w={56}>{(book.topics || []).length ? <div style={{ display: "flex", gap: 15 }}>{book.topics.map(t => <Tag key={t} onClick={() => toSearch(go, t)}>{t}</Tag>)}</div> : <span>-</span>}</Field>
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
    </div>
  );
}
window.BookDetailScreen = BookDetailScreen;

export { DCTA, DBook, DIcon, SYN, lnk, Tag, Field, toSearch, FormatButton, BookDetailScreen };
