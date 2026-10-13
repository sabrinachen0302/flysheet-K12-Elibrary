import React from 'react';
import * as DS from '../design-system/index.js';
const { CTAButton: LCTA, Icon: LIcon } = DS;
const LI = "images/";
const FLOAT = [
  { x: 1064, y: 165, w: 168, id: "little-prince" },
  { x: 734, y: 285, w: 158, id: "sapiens" },
  { x: 854, y: 488, w: 190, id: "red-chamber" },
];
const CATS = [["icon-ebooks", "電子書"], ["icon-online-learning", "線上學習資源"], ["icon-news", "新聞"], ["icon-study-zone", "學習專區"], ["icon-curriculum", "依課綱探索"]];
function FloatCard({ x, y, w, id, onClick }) {
  const book = window.bookById(id);
  const [h, setH] = React.useState(false);
  return (
    <a onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ position: "absolute", left: x, top: y, width: w, height: 56, background: "var(--color-surface)", borderRadius: 3, display: "flex", alignItems: "center", gap: 10, padding: "0 12px", boxSizing: "border-box", cursor: "pointer", color: "var(--color-text)", textDecoration: "none", transform: h ? "translateY(-3px)" : "none", transition: "transform .2s ease" }}>
      <img src={LI + "badge-new.png"} style={{ position: "absolute", left: -14, top: -16, width: 33 }} />
      <window.BookCover book={book} width={31} />
      <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
        <span style={{ fontSize: 14, fontWeight: 700, whiteSpace: "nowrap" }}>{book.title}</span>
        <span style={{ fontSize: 10, whiteSpace: "nowrap" }}>{book.author}</span>
      </div>
    </a>
  );
}
function LandingScreen({ go }) {
  const [q, setQ] = React.useState("");
  return (
    <div>
      <div style={{ position: "relative", height: 700 }}>
        <div style={{ position: "absolute", left: 166, top: 144, width: 377, textAlign: "center", fontFamily: "var(--font-display)", fontSize: 61, lineHeight: 1.2, zIndex: 2, display: "flex", flexDirection: "column" }}>
          <span>Digital</span><span>Library</span>
          <span style={{ position: "relative", whiteSpace: "nowrap" }}>for <span style={{ position: "relative", display: "inline-block" }}>Teens<img src={LI + "landing-scribble.png"} style={{ position: "absolute", left: "50%", top: "50%", width: 267, height: 108, transform: "translate(-50%,-50%) rotate(5deg)", pointerEvents: "none", mixBlendMode: "multiply" }} /></span></span>
        </div>
        <LCTA width={169} onClick={() => go("home")} style={{ position: "absolute", left: 270, top: 414 }}>探索電子圖書館</LCTA>
        <form onSubmit={(e) => { e.preventDefault(); go("search"); }} style={{ position: "absolute", left: 107, top: 504, width: 496, height: 56, background: "var(--color-surface)", borderRadius: 6, boxShadow: "4px 4px 0 0 var(--color-border)", display: "flex", alignItems: "center", padding: "0 9px 0 31px", boxSizing: "border-box" }}>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="你想找什麼？" style={{ flex: 1, border: 0, outline: 0, fontFamily: "var(--font-base)", fontSize: 20, color: "var(--color-text)", background: "transparent" }} />
          <button type="button" aria-label="搜尋" onClick={() => go("search")} style={{ width: 39, height: 39, borderRadius: "50%", border: 0, background: "var(--color-text)", color: "var(--color-text)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0 }}><LIcon name="search" size={20} /></button>
        </form>
        <img src={LI + "landing-books-stack.png"} style={{ position: "absolute", left: 771, top: 144, width: 585, height: 476, objectFit: "cover" }} />
        {FLOAT.map((c, i) => <FloatCard key={i} {...c} onClick={() => window.openBook(go, c.id)} />)}
      </div>
      <div style={{ background: "var(--color-brand-accent)", minHeight: 242, display: "flex", justifyContent: "center", gap: 150, padding: "36px 0", boxSizing: "border-box" }}>
        {CATS.map(([ic, l]) => (
          <a key={l} onClick={l === "學習專區" ? () => go("curation") : l === "依課綱探索" ? () => go("curriculum") : l === "新聞" ? () => go("topics-news") : l === "線上學習資源" ? () => go("resources") : l === "電子書" ? () => go("categories") : undefined} style={{ width: 133, display: "flex", flexDirection: "column", alignItems: "center", gap: 18, cursor: "pointer", textDecoration: "none" }}>
            <img src={LI + ic + ".png"} style={{ width: 90, height: 90, objectFit: "contain" }} />
            <span style={{ width: "100%", height: 60, background: "var(--color-text)", borderRadius: 2, color: "var(--color-brand-accent)", fontWeight: 700, fontSize: 22, display: "flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap" }}>{l}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
window.LandingScreen = LandingScreen;

export { LCTA, LIcon, LI, FLOAT, CATS, FloatCard, LandingScreen };
