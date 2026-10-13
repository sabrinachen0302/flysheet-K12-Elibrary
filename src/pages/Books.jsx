import React from 'react';
import * as DS from '../design-system/index.js';
// 書目資料來自 data/books.json（含 coverColor / coverPattern / 書目欄位）；電子雜誌來自 data/magazines.json。
// 載入器只登記、不自動執行：index.html 會在渲染前呼叫 window.K12_LOADERS。
window.K12_LOADERS = window.K12_LOADERS || [];
const K12_BOOKS = [];
const K12_MAGAZINES = [];
const loadJSON = (path, into) => fetch(path).then(r => { if (!r.ok) throw new Error(path + " " + r.status); return r.json(); }).then(d => { into.push(...d); });
const K12_PLATFORMS = {};
window.K12_LOADERS.push(() => loadJSON("data/books.json", K12_BOOKS), () => loadJSON("data/magazines.json", K12_MAGAZINES), () => fetch("data/platforms.json").then(r => r.json()).then(d => Object.assign(K12_PLATFORMS, d)));
// 對應課綱：領域 → 必修科目
const CURRICULUM = [
  ["國文", ["國文"]], ["數學", ["數學"]], ["英文", ["英文"]], ["自然科學", ["物理", "化學", "生物"]],
  ["地科", ["地科"]], ["社會", ["歷史", "地理", "公民與社會"]], ["藝術", ["音樂", "美術", "藝術生活"]], ["科技", ["生活科技", "資訊科技"]],
  ["綜合活動", ["生涯規劃", "生命教育"]], ["高中家政", ["高中家政"]], ["健康與體育", ["健康與護理", "體育", "全民國防"]],
];
const subjectCount = (s) => 24 + ([...s].reduce((n, ch) => n + ch.charCodeAt(0), 0) % 160);
const bookById = (id) => K12_BOOKS.find(b => b.id === id) || K12_BOOKS[0];
function CoverPattern({ kind, c }) {
  const A = { position: "absolute", pointerEvents: "none" };
  switch (kind) {
    case "sun": return <div style={{ ...A, width: "58%", aspectRatio: "1", right: "-12%", bottom: "14%", borderRadius: "50%", background: c.accent, boxShadow: `0 0 0 5cqw ${c.accent}33, 0 0 0 11cqw ${c.accent}1f` }} />;
    case "waves": return <>{[0, 1, 2].map(i => <div key={i} style={{ ...A, left: "-20%", right: "-20%", bottom: `${6 + i * 11}%`, height: "30%", borderRadius: "50%", borderTop: `1.6cqw solid ${c.accent}`, opacity: 1 - i * 0.28 }} />)}</>;
    case "stripes": return <div style={{ ...A, left: 0, right: 0, bottom: 0, height: "46%", background: `repeating-linear-gradient(90deg, ${c.accent} 0 6cqw, transparent 6cqw 12cqw)`, opacity: 0.85 }} />;
    case "grid": return <div style={{ ...A, inset: 0, backgroundImage: `linear-gradient(${c.accent}40 1px, transparent 1px), linear-gradient(90deg, ${c.accent}40 1px, transparent 1px)`, backgroundSize: "12.5cqw 12.5cqw" }}><div style={{ ...A, width: "12.5cqw", height: "12.5cqw", right: "25cqw", bottom: "37.5cqw", background: c.accent }} /></div>;
    case "rings": return <>{[62, 44, 26].map((s, i) => <div key={s} style={{ ...A, width: `${s}%`, aspectRatio: "1", left: `${50 - s / 2}%`, bottom: `${22 - s / 4}%`, borderRadius: "50%", border: `1.4cqw solid ${c.accent}`, opacity: 0.45 + i * 0.25 }} />)}</>;
    case "triangle": return <div style={{ ...A, left: "18%", right: "-10%", bottom: 0, height: "52%", background: c.accent, clipPath: "polygon(40% 0, 100% 100%, 0 100%)", opacity: 0.9 }} />;
    case "windows": return <div style={{ ...A, left: "12%", bottom: "12%", width: "48%", height: "30%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3cqw" }}>{[1, 0.35, 0.35, 1].map((o, i) => <div key={i} style={{ background: c.accent, opacity: o }} />)}</div>;
    case "moon": return <div style={{ ...A, width: "64%", aspectRatio: "1", left: "-18%", bottom: "8%", borderRadius: "50%", boxShadow: `inset 9cqw -4cqw 0 0 ${c.accent}` }} />;
    case "bars": return <>{[0, 1, 2, 3, 4].map(i => <div key={i} style={{ ...A, left: `${10 + i * 7}%`, top: `${30 + (i % 3) * 8}%`, bottom: "10%", width: "0.9cqw", background: i === 2 ? c.ink : c.accent }} />)}</>;
    case "hills": return <>{[0, 1].map(i => <div key={i} style={{ ...A, width: `${120 - i * 30}%`, aspectRatio: "1", left: `${-40 + i * 45}%`, top: `${68 - i * 6}%`, borderRadius: "50%", background: c.accent, opacity: 0.22 + i * 0.25 }} />)}</>;
    case "dots": return <div style={{ ...A, left: "10%", bottom: "12%", width: "48%", height: "34%", backgroundImage: `radial-gradient(${c.accent} 1.3cqw, transparent 1.5cqw)`, backgroundSize: "8cqw 8cqw" }} />;
    case "orbit": return <><div style={{ ...A, width: "96%", aspectRatio: "1", left: "2%", bottom: "-28%", borderRadius: "50%", border: `0.8cqw solid ${c.accent}80` }} /><div style={{ ...A, width: "14%", aspectRatio: "1", left: "74%", bottom: "28%", borderRadius: "50%", background: c.accent }} /></>;
    case "diagonal": return <div style={{ ...A, inset: 0, background: `linear-gradient(135deg, transparent 58%, ${c.accent} 58% 66%, transparent 66% 74%, ${c.accent}66 74% 80%, transparent 80%)` }} />;
    default: return null;
  }
}
// 2:3 typographic cover rendered purely from data. Pass an explicit pixel width.
function BookCover({ book, width = 150, style }) {
  if (!book) return null;
  // 匯入資料（ZIP）附真實封面：固定 2:3 外框，object-fit: cover 保持比例不變形
  if (book.cover) return <div role="img" aria-label={`${book.title} 封面`} style={{ position: "relative", width, height: width * 1.5, flexShrink: 0, overflow: "hidden", background: "var(--color-bg)", ...style }}><img src={book.cover} alt="" loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} /></div>;
  const c = book.coverColor || { bg: ["var(--color-bg)"], ink: "var(--color-text)", accent: "var(--color-brand-mint)" };
  const bg = c.bg.length > 1 ? `linear-gradient(160deg, ${c.bg[0]}, ${c.bg[1]})` : c.bg[0];
  const vertical = book.category === "華文經典";
  const len = [...book.title].length;
  const latin = /^[\x00-\x7f]+$/.test(book.title);
  const tSize = latin ? 24 : vertical ? (len >= 5 ? 13 : 16) : len >= 6 ? 11.5 : len >= 5 ? 12.5 : 15;
  const font = vertical ? '"Noto Serif TC", "PMingLiU", serif' : '"Noto Sans TC", "PingFang TC", sans-serif';
  return (
    <div role="img" aria-label={`${book.title} 封面`} style={{ position: "relative", width, height: width * 1.5, flexShrink: 0, overflow: "hidden", background: bg, containerType: "inline-size", ...style }}>
      <CoverPattern kind={book.coverPattern} c={c} />
      {vertical ? (
        <div style={{ position: "absolute", inset: "10cqw", display: "flex", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "flex-start", color: c.ink, fontFamily: font }}>
          <span style={{ writingMode: "vertical-rl", fontSize: `${tSize}cqw`, fontWeight: 700, letterSpacing: "0.18em", lineHeight: 1 }}>{book.title}</span>
          <span style={{ writingMode: "vertical-rl", alignSelf: "flex-end", fontSize: "6cqw", letterSpacing: "0.3em", lineHeight: 1 }}>{book.author}</span>
        </div>
      ) : (
        <div style={{ position: "absolute", inset: "10cqw 10cqw auto 10cqw", display: "flex", flexDirection: "column", gap: "4cqw", color: c.ink, fontFamily: font }}>
          <span style={{ fontSize: `${tSize}cqw`, fontWeight: 700, letterSpacing: latin ? "0.04em" : "0.12em", lineHeight: 1.2 }}>{book.title}</span>
          <span style={{ fontSize: "6cqw", letterSpacing: "0.12em", lineHeight: 1.3, opacity: 0.85 }}>{book.author}</span>
        </div>
      )}
    </div>
  );
}
// Props for the design-system BookCard (cover box 161×226 → 2:3 cover 150.67 wide).
const bookCardProps = (b) => ({ title: b.title, author: b.author || b.subtitle || "", synopsis: b.synopsis || "", coverNode: <BookCover book={b} width={150.67} /> });
// 列表卡說明文字：缺少的欄位直接略過，不補字
const bookDesc = (b) => [b.author ? b.author + "　著" : b.subtitle, b.synopsis].filter(Boolean).join("　");
const openExternal = (url) => url && window.open(url, "_blank", "noopener");
const openBook = (go, id) => { localStorage.setItem("k12-book", id); go("detail"); };
Object.assign(window, { K12_PLATFORMS, bookDesc, openExternal, K12_MAGAZINES, loadJSON, K12_CURRICULUM: CURRICULUM, subjectCount, K12_BOOKS, bookById, BookCover, bookCardProps, openBook });

export { K12_BOOKS, K12_MAGAZINES, loadJSON, K12_PLATFORMS, CURRICULUM, subjectCount, bookById, CoverPattern, BookCover, bookCardProps, bookDesc, openExternal, openBook };
