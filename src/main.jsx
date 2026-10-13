// 網站進入點：組合導覽列、目前頁面與頁尾。
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { Footer as AppFooter, Navigation as RetroNav } from './design-system/index.js';
import { SITE_SETTINGS } from './settings.js';

// 各頁面檔（載入時會把自己登記到 window，供彼此呼叫）
import './pages/Books.jsx';
import './pages/News.jsx';
import './pages/Favorites.jsx';
import './pages/Preview.jsx';
import './pages/Shelf.jsx';
import './pages/Home.jsx';
import './pages/BookDetail.jsx';
import './pages/Categories.jsx';
import './pages/Landing.jsx';
import './pages/CurationList.jsx';
import './pages/Journey.jsx';
import './pages/Curation.jsx';
import './pages/SearchResults.jsx';
import './pages/Topics.jsx';
import './pages/Curriculum.jsx';
import './pages/Resources.jsx';

function App() {
  const t = SITE_SETTINGS;
  const favs = window.useFavs();
  const [newsOpen, setNewsOpen] = React.useState(false);
  const favCount = new Set(favs.folders.flatMap(f => f.items)).size;
  const [page, setPage] = React.useState(localStorage.getItem("k12-page") || "home");
  const [, tick] = React.useReducer(x => x + 1, 0);
  const go = (p) => { setPage(p); tick(); localStorage.setItem("k12-page", p); window.scrollTo(0, 0); };

  // 頁面代號 → 頁面元件
  const Screen = {
    landing: window.LandingScreen,
    home: window.HomeScreen,
    detail: window.BookDetailScreen,
    categories: window.CategoriesScreen,
    "categories-nonfiction": (p) => <window.CategoriesScreen {...p} initialType="nonfiction" />,
    "categories-audio": (p) => <window.CategoriesScreen {...p} initialType="audio" />,
    "categories-magazine": (p) => <window.CategoriesScreen {...p} initialType="magazine" />,
    "categories-news": (p) => <window.CategoriesScreen {...p} initialType="news" />,
    search: window.SearchResultsScreen,
    curation: window.CurationScreen,
    curations: window.CurationListScreen,
    "topics-fiction": (p) => <window.TopicsScreen {...p} />,
    "topics-magazine": (p) => <window.TopicsScreen {...p} initialFmt="電子雜誌" />,
    "topics-news": (p) => <window.TopicsScreen {...p} initialFmt="新聞" />,
    "topics-audio": (p) => <window.TopicsScreen {...p} initialFmt="有聲書" />,
    "topics-nonfiction": (p) => <window.TopicsScreen {...p} jumpTo="非小說作品主題" />,
    curriculum: window.CurriculumScreen,
    favorites: window.FavoritesScreen,
    resources: window.ResourcesScreen,
  }[page] || window.HomeScreen;

  const onNavigate = (l) => go(l === "我的收藏" ? "favorites" : "home");
  const onBrowse = (l) => l === "自主學習"
    ? (localStorage.setItem("k12-res-type", "自主學習"), window.dispatchEvent(new Event("k12-res-type")), go("resources"))
    : go(l === "依課綱探索" ? "curriculum" : l === "文學小說類" ? "topics-fiction" : l === "電子雜誌" ? "topics-magazine" : l === "新聞" ? "topics-news" : l === "線上資源" ? "resources" : l === "主題書單" ? "curations" : l === "非小說類" ? "categories-nonfiction" : "categories");

  return (
    <div style={{ position: "relative", background: "var(--color-bg)" }}>
      <RetroNav
        style={page === "curation" ? { position: "sticky", top: 0, zIndex: 5000 } : undefined}
        links={["最新消息", "登入 / 註冊", "關於電子圖書館", "聯絡我們"]}
        onLinkClick={(l) => l === "最新消息" && setNewsOpen(o => !o)}
        search={!["landing", "home", "search"].includes(page)}
        centered={["home", "search"].includes(page)}
        bar={page !== "landing"}
        onTitleClick={() => go("landing")}
        active={page === "home" ? "電子圖書館首頁" : page === "favorites" ? "我的收藏" : undefined}
        onNavigate={onNavigate} onBrowse={onBrowse} onSearch={() => go("search")}
        items={[{ label: "電子圖書館首頁" }, { label: "瀏覽", chevron: true }, { label: "我的收藏", count: favCount }]}
      />
      <main><Screen key={page === "detail" ? "detail-" + localStorage.getItem("k12-book") : page} go={go} tweaks={t} /></main>
      {page !== "landing" && <AppFooter style={{ background: "var(--color-brand-mint)", borderTop: "var(--border-default)" }} />}
      {newsOpen && <window.NewsPopover onClose={() => setNewsOpen(false)} />}
      <window.FavToast />
      <window.PreviewHost go={go} />
    </div>
  );
}

// 版面以 1440px 寬設計；視窗較窄時等比例縮小。
function fit() { const r = document.getElementById('root'); r.style.zoom = Math.min(1, window.innerWidth / 1440); }
window.addEventListener('resize', fit); fit();

// 先載入 public/data/ 裡的 JSON 資料，再畫出網站。
Promise.all((window.K12_LOADERS || []).map(f => f()))
  .catch(e => console.error("資料載入失敗", e))
  .then(() => ReactDOM.createRoot(document.getElementById('root')).render(<App />));
