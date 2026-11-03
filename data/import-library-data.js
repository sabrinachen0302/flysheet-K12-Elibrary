// 匯入對照層：把範例網站 data.js (LIBRARY_DATA) 轉成本專案 data/*.json 的格式。
// 只轉資料、不含任何 UI。ZIP 缺少的欄位一律留 null / "" / []，由元件自行隱藏。
// 封面已複製到 ui_kits/web/assets/covers/<type>/ 並改為英數檔名（下方 cover 路徑皆相對於 index.html）。
function importLibraryData(D, existing) {
  const pad = (n) => String(n).padStart(2, "0");
  const ext = (f) => f.split(".").pop().toLowerCase();
  const base = (p) => p.split("/").pop();
  const empty = { synopsis: "", available: null, reader: null, klass: null, curriculum: [], topics: [] };
  // 電子書（TumbleBook）— 保留現有 13 本，附加於後
  const ebooks = D.ebook.map((b) => { const f = base(b.file), n = f.slice(0, 2); return {
    id: "tb-" + n, title: b.title, author: b.author || "", tag: b.category, type: "電子書",
    edition: b.format || null, source: b.source, url: b.link, cover: "assets/covers/ebook/ebook-" + n + "." + ext(f), ...empty, topics: b.category ? [b.category] : [] }; });
  // 有聲書（小魯數位有聲書 + 飛聽Book）— 系列／專輯，無作者；subtitle 顯示於作者位置
  const audio = [...D.audiobook, ...D.flybook].map((b) => { const f = base(b.file).replace(/\.jpeg$/, ".jpg"); return {
    id: (b.type === "flybook" ? "fly-" : "lu-") + f.replace(/\.\w+$/, "").replace(/^fly_/, ""), title: b.title, author: "", subtitle: b.subtitle,
    tag: b.category, type: "有聲書", edition: b.type === "flybook" ? "飛聽Book" : "小魯數位有聲書", source: b.source, url: b.link,
    cover: "assets/covers/audiobook/" + f, ...empty, topics: b.category ? [b.category] : [] }; });
  const books = [...existing.books, ...ebooks, ...audio];
  // 電子雜誌（KONO）— 取代原本 6 筆示意資料
  const magazines = D.magazine.map((m, i) => ({ id: "kono-" + pad(i + 1), title: m.title, author: "KONO 電子雜誌", category: m.category, source: m.source, url: m.link, cover: "assets/covers/magazine/mag-" + pad(i + 1) + "." + ext(base(m.file)) }));
  // 紐約時報欄目 → 新聞分類（Topics「新聞」分組即此資料）
  const sections = D.newspaperSections.map((g) => ({ group: g.group, zh: g.zh, items: g.items.map((it) => ({ name: it.name, zh: it.zh, link: it.link })) }));
  const secByLink = {}; sections.forEach((g) => g.items.forEach((it) => { secByLink[it.link] = it.zh; }));
  // 新聞：每則頭條一筆；圖片用所屬版面照片；摘要只沿用標題相同的既有資料；無日期者視為同一天
  const old = {}; existing.news.forEach((n) => { old[n.title] = n; });
  const TODAY = "2026-09-29";
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48);
  const news = D.newspaper.flatMap((p) => p.headlines.map((h, i) => { const o = old[h.title]; return {
    id: o ? o.id : slug(h.title), category: secByLink[p.link] || p.zh, date: o ? o.date : TODAY, lead: i === 0, title: h.title,
    summary: o ? o.summary : "", source: "The New York Times", sectionLabel: p.zh, url: h.link, sectionUrl: p.link, image: "assets/covers/news/" + base(p.image) }; }));
  const platforms = { audiobook: [{ label: "小魯數位有聲書", url: "https://librispace.flysheet.com.tw/" }, { label: "飛聽Book", url: "https://flybook.flysheet.com.tw/" }] };
  return { books, magazines, news, sections, platforms };
}
if (typeof module !== "undefined") module.exports = { importLibraryData };
