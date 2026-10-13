# 高中電子圖書館

由 Claude Design 原型改寫的 React 專案（Vite 建置）。畫面與原型逐頁比對一致。

## 資料夾結構

```
index.html            網頁外框（字型在這裡載入）
src/
  main.jsx            進入點：導覽列＋目前頁面＋頁尾，以及頁面代號對照表
  settings.js         網站設定（原本 Claude Design 的 Tweaks 面板選項）
  pages/              各頁面：首頁、搜尋結果、書籍詳細頁、收藏⋯⋯
  design-system/      共用元件：按鈕、書卡、導覽列、篩選器⋯⋯
  tokens/             顏色、間距、字級等樣式變數
public/
  data/               所有內容資料（JSON）
  assets/covers/      電子書、有聲書、雜誌、新聞封面
  covers/resources/   線上學習資源的標誌圖
  images/             首頁插圖與分類圖示
```

## 改內容

內容全部在 `public/data/`，改 JSON 就好，不必動程式：

| 檔案 | 內容 |
|---|---|
| `books.json` | 電子書、有聲書 |
| `magazines.json` | 電子雜誌 |
| `news.json`、`news-sections.json` | 新聞與新聞分類 |
| `resources.json` | 線上學習資源 |
| `curations.json` | 主題書單 |
| `platforms.json` | 有聲書平台連結 |

新增一本書：複製 `books.json` 裡現有的一筆，改掉 `id`（不能重複）、書名、作者等欄位；封面圖放進 `public/assets/covers/` 對應的資料夾，`cover` 欄位填路徑。

JSON 格式很嚴格：每筆之間要有逗號，最後一筆後面不能有逗號，字串要用半形雙引號。改完可以貼到 jsonlint.com 檢查。

## 部署到 Vercel

1. 把整個資料夾上傳到一個 GitHub repository。檔案約 500 個，GitHub 網頁版一次最多上傳 100 個，建議用 GitHub Desktop，或分批上傳。
2. 到 vercel.com 用 GitHub 帳號登入，選 Add New → Project，匯入這個 repo。
3. Framework 會自動偵測為 Vite，設定都不用改，按 Deploy。

之後每次更新 GitHub 上的檔案，Vercel 會自動重新建置並上線。

## 在自己電腦上預覽（選用）

需要先安裝 Node.js（nodejs.org，選 LTS 版）。在這個資料夾開終端機：

```
npm install
npm run dev
```

瀏覽器打開畫面上顯示的網址（通常是 http://localhost:5173）。

## 之後接後端

資料目前由下面幾個檔案用 `fetch("data/xxx.json")` 讀取：

- `src/pages/Books.jsx`：books、magazines、platforms
- `src/pages/News.jsx`：news、news-sections
- `src/pages/Resources.jsx`：resources
- `src/pages/CurationList.jsx`：curations

有了後端 API，把這些路徑換成 API 網址即可，只要回傳的 JSON 格式相同，畫面不用改。

## 已知限制

- 版面以 1440px 寬的桌機設計，視窗較窄時整頁等比例縮小，還沒有手機版排版。
- 「我的收藏」與目前所在頁面存在瀏覽器的 localStorage，換裝置或清除瀏覽資料就會消失。登入與跨裝置同步需要後端。
- 「登入 / 註冊」、「關於電子圖書館」、「聯絡我們」目前沒有對應頁面。
