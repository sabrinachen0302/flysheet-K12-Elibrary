# 高中電子圖書館（靜態網站）

純前端靜態網站，無需建置（no build step）。React 18 與 Babel 由 CDN 載入，JSX 於瀏覽器端即時編譯。

## 部署到 Vercel
1. 將本資料夾（deploy/）的內容推上 GitHub（可作為 repo 根目錄，或在 Vercel 設定 Root Directory = `deploy`）。
2. Vercel → Add New Project → Import 該 repo。
3. Framework Preset 選 **Other**；Build Command 與 Output Directory 留空。
4. Deploy。

## 本機預覽
資料以 fetch 載入，需透過本機伺服器開啟（不能直接雙擊 index.html）：
```
npx serve .
```

## 更新內容
- 書籍、資源、策展等資料：`data/*.json`
- 封面：`assets/covers/`、`covers/resources/`
- 樣式 tokens：`styles.css`、`tokens/`

注意：`_ds_bundle.js` 是設計系統元件的快照；設計系統元件更新後需重新匯出本資料夾。

---

# 高中電子圖書館 Design System

K12 (senior-high) e-library web — a school digital library where students search e-books, audiobooks, magazines, news and databases, browse curated themes, and jump out to partner platforms (HyRead, KONO, NYT…). Desktop-first at 1440px; no mobile designs exist yet. 網站入口即為首頁。 Brief from the owner: 採用活潑、適合高中生的設計 — lively, teen-friendly.

## Sources

- **Figma:** Flysheet(test).fig
- **GitHub:** https://github.com/sabrinachen0302/K12_e-library_design — tokens.css (source of truth for color/spacing/radius), spec/*.md (per-component/page specs), screens/*.png, assets/. Explore that repo for more exact page specs when building new screens.

## Index（本資料夾 deploy/）

- `index.html` — 網站入口；載入 React、設計系統 bundle 與各頁面。
- `js/*.app.js` — 各頁面（Home、Categories、SearchResults、BookDetail、Curation、Journey、Favorites…）。
- `_ds_bundle.js` — 設計系統元件的編譯快照（元件原始碼在設計系統專案的 `components/`，不在本資料夾）。
- `styles.css` — entry; imports tokens/fonts.css, colors.css, spacing.css, typography.css, assets.css.
- `data/` — books.json（41 本實際匯入書籍）、books-sample.json（原示範書(假書)，網站不顯示）、resources.json、NCKU-OA-resource.JSON、self-learning-resources.json、curations.json 等。
- `assets/icons/` (12 SVG), `assets/images/` (covers, New badge, old school logo), `assets/covers/`（電子書、有聲書封面）, `assets/fonts/`, `assets/figma/` (2 bitmaps from the Figma import)；`covers/resources/`（電子資源圖片）。
- `vercel.json` — Vercel 設定。

設計系統專案另含 `guidelines/`、`components/`、`ui_kits/web/`、`SKILL.md`、`github.md`、`thumbnail.html`，未包含於本部署資料夾。

## Components

### Retro core
Colorado-Minimal-GUI, `components/core/`, tokens in `tokens/retro.css` — phase 1, used by Home only; other pages migrate after sign-off:

- Button (primary CTA / secondary mint·paper / ghost / icon), Card (optional folder tab), Tabs (folder / trapezoid, active = Accent), Input + Select, Badge (+ BadgeTone), Paginator (current = Accent), Navigation (masthead + Mint nav band; Primary purple = strokes/shadows only, headings Noto Sans TC, replaces Header + BannerNav).

### Spec-driven (spec/00-shared-components.md)

- **Header** — 高中電子圖書館 version (Waterstone High School header is retired).
- **BannerNav** — mint bar, 182×72 items, hover = primary bg / white; 瀏覽 chevron rotates. search variant.
- **Footer** — 72px mint bar.
- **BookCard** — 書卡, live hover shows 書籍簡介 glass overlay; cover prop.
- **EResourceCard** — 電子資源卡.
- **DatabaseCard** — 資料庫卡, fills container.
- **NewPopularSection** — 新到／熱門切換區塊.
- **FieldDropdown** — 欄位下拉選單.
- **PillButton** — 膠囊按鈕. **CTAButton** — 行動按鈕.

### Figma component families (materialized from the .fig, 26/26)

- **Navigation:** LibraryBanner (圖書館Banner), BrowseButton, ArchiveButton, CloseButton, ViewAllLink (查看全部連結), Pagination (分頁).
- **Cards:** BookCard (書卡), DatabaseCard (資料庫卡), NewsCard (新聞列卡), CardRowBooks (Card Row 新到圖書), CardRowEResources (Card Row 新到電子資源), CardsRevealState.
- **Sections:** NewBooksSection (新到圖書內容區塊), NewEResourcesSection (新到電子資源內容區塊).
- **Filters:** FormatFilterBar (格式篩選列), FormatToggle (格式切換), SortDropdown (排序下拉), ResultViewSwitch (搜尋結果檢視區塊), FilterSyncOverlay (篩選同步覆蓋層), FilterCheckbox (篩選Checkbox), TopicItem (主題項目), TopicFilterList (主題篩選清單).
- **Collapse:** AvailableCollapse, ReaderCollapse, EbookCollapse, AudiobookCollapse, TopicCollapse (可用/讀者/電子書/有聲書/主題 _收合區塊).

Figma-materialized components are fixed-size, absolutely positioned reconstructions driven by a `state` prop (text via text1…text4). Prefer the spec-driven components for new layouts.

### Intentional additions

- **Icon** — wraps the repo's 12 SVGs (paths copied verbatim) so they recolor with currentColor.
- Header / BannerNav / Footer / EResourceCard / FieldDropdown / PillButton / CTAButton / NewPopularSection — requested by the owner from the repo spec; they are not Figma component sets.

## CONTENT FUNDAMENTALS

- **Language:** Traditional Chinese (zh-Hant, Taiwan). Latin only for proper names (TED, NBINet, La Vie) and a few UI labels inherited from the draft (Read More, DATABASE, New).
- **Voice:** friendly, direct, second person implied — 「你想找什麼？」, 「向下捲動，開始旅程 ↓」. Short labels, no exclamation marks.
- **Action verbs lead buttons:** 搜尋 / 瀏覽全部 / 更多 / 前往查詢 / 進入平台 / 前往資源. Category buttons follow 「瀏覽所有＿＿主題 ›」.
- News titles use 【】 tags: 【新書上架】【活動】. Dates YYYY/MM/DD.
- Book credits: 「作者　著」 with a full-width space; synopses indent paragraphs with two full-width spaces 「　　」.
- Full-width punctuation (，。：「」) throughout; › as breadcrumb separator and trailing chevron.
- No emoji. Unicode ✕ / ‹ › / ⌃ ⌄ appear as glyph icons inside filter chips, pagination and collapse headers.

## VISUAL FOUNDATIONS

- **Palette:** warm paper page #f7f4ed; white content panels; deep purple #3a2f5a for authority (hover nav, pills, primary buttons); mint #9ed9d3 for header-adjacent bars and footer; orange #fe8812 reserved for the search/CTA path; sunny #f4d070 for the active toggle. Link blue #174a8c. No gradients.
- **Type:** General Sans (Latin) + Noto Sans TC (Chinese). English weights by role: Light（標籤）/ Regular（內文）/ Medium（副標）/ Semibold·Bold（標題）. Scale 36/32/28/24/20/16/14/13/12/10. No Figma text styles exist; the scale is taken from usage.
- **Layout:** 1440 page, 48px gutters, 1344 content. Header 100 → nav 72 → sections with 32/48 padding → footer 72. Card rows: 5 × 249.6 e-resource cards or 161px book cards, gap 24.
- **Cards:** flat — no shadow. Database cards: white, 1px #e5e3de, radius 12, padding 16. Book cards have no chrome; the cover carries them. Panels radius 7.
- **Corners:** 4 chips/checkbox · 8 toggle segments/thumbs · 10 inputs, CTA, dropdown · 12 cards · 20–40 pills · 1000 search pills.
- **Shadows:** only dropdown `0 4px 12px rgba(0,0,0,.12)`, retro hard shadows on Home (`--shadow-hard-*`), and book-detail cover `drop-shadow(9px 0 4.3px rgba(0,0,0,.25))`.
- **Hover:** nav items flip to purple bg + white text; 瀏覽 chevron rotates 90°; book cards reveal a lavender glass overlay (rgba(237,233,244,.88), 1px #c2bad9) with 書籍簡介; dropdown options get #f7f5f0 bg + orange text. Buttons: slight opacity/brightness dip (not in Figma — kept subtle).
- **Press/active:** segmented toggle fills yellow with white text. No shrink effects designed.
- **Transparency/blur:** only the book-card overlay (88% lavender). No backdrop blur.
- **Imagery:** real book covers (object-fit: cover), resource logos shown uncropped, a mint starburst "New" badge. Playful accents belong on curation pages; utility pages stay calm.
- **Motion:** none specified beyond hover. Curation page implies sticky text + scattered, rotated book cards (±3–8°) that reveal on scroll; honor prefers-reduced-motion.
- **Borders:** 1px #d9d9d9 dividers between news rows; 1.5px orange border on search input and field selector; 1px black rule in book detail.

## ICONOGRAPHY

- 12 line icons in `assets/icons/*.svg` (rewritten in the repo as clean currentColor SVGs): share, quote, bookmark, external-link, chevron-down, chevron-right, chevron-left/right-large (mint), radio checked/unchecked, search, enter. ~1.5–2px strokes, rounded caps. Default color #737373; white on CTA/pills.
- Use via `<Icon name="share" size={16} />`. No icon font, no CDN set.
- Unicode glyphs ✕ ‹ › ⌃ ⌄ ﹀ are used inside Figma filter/pagination components. No emoji.

## Fonts

- **General Sans**（英文）— 字型檔位於 `assets/fonts/`，於 `tokens/fonts.css` 以 @font-face 載入。
- **Noto Sans TC**（中文）— Google Fonts，由 `tokens/fonts.css` @import 載入。
