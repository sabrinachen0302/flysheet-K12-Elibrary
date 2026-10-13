import React from 'react';
import * as DS from '../design-system/index.js';
// 新聞資料來自 data/news.json — 每筆只存 metadata（標題、摘要、來源、分類、日期、外部連結），點選後開啟外部新聞頁。
// category 對應 Topics.jsx 的新聞分類；sectionLabel 為搜尋結果上顯示的欄目名稱。
const K12_NEWS = [];
window.K12_LOADERS = window.K12_LOADERS || [];
const K12_NEWS_SECTIONS = [];
window.K12_LOADERS.push(() => window.loadJSON("data/news.json", K12_NEWS), () => window.loadJSON("data/news-sections.json", K12_NEWS_SECTIONS).then(() => { if (window.K12_TOPICS) window.K12_TOPICS.news = K12_NEWS_SECTIONS.flatMap(g => g.items.map(i => i.zh)); }));
const NEWS_TODAY = new Date("2026-09-29T12:00:00");
const NEWS_TIMES = [["24 小時內", 1], ["一週內", 7], ["一個月內", 31], ["一年內", 366]];
const newsAgeDays = (n) => (NEWS_TODAY - new Date(n.date + "T12:00:00")) / 864e5;
const newsInTime = (n, label) => { const t = NEWS_TIMES.find(([l]) => l === label); return !t || newsAgeDays(n) < t[1]; };
const newsKey = (n) => "news:" + n.id;
const newsById = (id) => K12_NEWS.find(n => n.id === id);
const openNews = (n) => window.open(n.url, "_blank", "noopener");
const fmtNewsDate = (d) => d.replace(/-/g, "/");
// field: null=所有欄位 | 名稱 | 平台（來源） | 主題（分類）
function newsMatches(n, t) {
  const s = t.text.toLowerCase();
  const pool = t.field === "名稱" ? [n.title] : t.field === "平台" ? [n.source] : t.field === "主題" ? [n.category, n.sectionLabel] : t.field === "作者" ? [] : [n.title, n.summary, n.source, n.category, n.sectionLabel];
  return pool.some(v => (v || "").toLowerCase().includes(s));
}
function newsMatchTerms(n, terms) {
  if (!terms.length) return true;
  return terms.reduce((acc, t, i) => i === 0 ? newsMatches(n, t) : t.op === "OR" ? acc || newsMatches(n, t) : acc && newsMatches(n, t), true);
}
// 2:3 新聞預覽封面（與書卡同尺寸）：來源、欄目、標題、日期。
function NewsCover({ news, width = 150.67 }) {
  return (
    <div role="img" aria-label={news.title + " 新聞預覽"} style={{ position: "relative", width, height: width * 1.5, flexShrink: 0, overflow: "hidden", background: "var(--color-brand-mint)", color: "var(--color-text)", containerType: "inline-size" }}>
      {news.image && <img src={news.image} alt="" loading="lazy" style={{ display: "block", width: "100%", height: "42%", objectFit: "cover", borderBottom: "1.5px solid var(--color-border)" }} />}
      <div style={{ position: "absolute", inset: news.image ? "42% 0 0 0" : 0, padding: news.image ? "6cqw 8cqw" : "9cqw", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: news.image ? "3cqw" : "4cqw" }}>
      {!news.image && <span style={{ fontFamily: '"Noto Serif TC", serif', fontSize: "7.5cqw", fontWeight: 700, letterSpacing: "0.02em", lineHeight: 1.1 }}>{news.source}</span>}
      {!news.image && <span style={{ height: 1, background: "var(--color-border)", flexShrink: 0 }} />}
      <span style={{ fontSize: "6.5cqw", fontWeight: 700, color: "var(--color-text)", letterSpacing: "0.1em", flexShrink: 0 }}>{news.sectionLabel}</span>
      <span style={{ fontFamily: '"Noto Serif TC", serif', fontSize: news.image ? "8cqw" : "9.5cqw", fontWeight: 700, lineHeight: 1.25, flex: news.image ? "0 1 auto" : undefined, minHeight: 0, display: "-webkit-box", WebkitLineClamp: news.image ? 3 : 7, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{news.title}</span>
      <span style={{ marginTop: "auto", fontSize: "6cqw", opacity: 0.8, flexShrink: 0 }}>{fmtNewsDate(news.date)}</span>
      </div>
    </div>
  );
}
const newsCardProps = (n) => ({ title: n.title, author: n.source + " · " + fmtNewsDate(n.date), synopsis: n.summary, text1: "新聞摘要", coverNode: <NewsCover news={n} /> });
Object.assign(window, { K12_NEWS_SECTIONS, NewsCover, newsCardProps, K12_NEWS, NEWS_TIMES, newsInTime, newsKey, newsById, openNews, fmtNewsDate, newsMatchTerms });

export { K12_NEWS, K12_NEWS_SECTIONS, NEWS_TODAY, NEWS_TIMES, newsAgeDays, newsInTime, newsKey, newsById, openNews, fmtNewsDate, newsMatches, newsMatchTerms, NewsCover, newsCardProps };
