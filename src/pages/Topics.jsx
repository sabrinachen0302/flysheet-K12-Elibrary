import React from 'react';
import * as DS from '../design-system/index.js';
const { FormatToggle: TFormat } = DS;
const FICTION = ["動作冒險","另類歷史","經典文學","成長","反烏托邦","書信體","童話與民間故事","奇幻","鬼故事","哥德式","歷史小說","恐怖","互動冒險","文學性","魔幻寫實","美人魚／人魚","怪物","推理與偵探","超自然／靈異","詩歌","浪漫","科幻","短篇小說與選集","蒸汽龐克","超級英雄","驚悚與懸疑","都市文學／街頭文學","吸血鬼","虛擬世界","西部小說","動物","戰爭與軍事","多族裔／跨族裔","男孩／男性","身心障礙","多元文化","家庭","原住民族題材","女孩／女性","西語裔與拉丁裔","節慶與慶典","幽默","法律與犯罪","神話與傳說","LGBTQ+","學校與教育","社會議題","漫畫與圖像小說"];
const NONFICTION = ["藝術","傳記","職業與實習","電腦與數位媒體","烹飪與食物","健康與生活","時尚與美妝","政治與政府","環保與綠色生活","科學與自然","科技","旅行與交通","動物","運動與休閒","戰爭與軍事","男孩／男性","身心障礙","多元文化","家庭","原住民族題材","宗教","女孩／女性","西語裔與拉丁裔","節慶與慶典","法律與犯罪","LGBTQ+","學校與教育","社會議題"];
const MAGAZINE = ["健康和健身","兒童和青少年","動物和寵物","商業與金融","娛樂和電視","宗教和靈性","家居與園藝","戶外休閒","手工藝和愛好","攝影","新聞","旅遊指南","旅遊與文化","時尚","歷史與科學","汽車","烹飪和飲料","當地生活","科學和技術","育兒與家庭","航空","船舶","藝術","設計","遊戲","音樂","體育"];
const NEWS_GROUPS = [
  ["新聞", ["國際","美國","政治","紐約","商業","科技","科學","健康","教育","氣候","體育","訃聞","數據解讀","今日報紙"]],
  ["國際區域", ["非洲","美洲","亞洲","澳洲","加拿大","歐洲","中東"]],
  ["商業財經", ["經濟","併購交易","金融市場","媒體產業","能源轉型","個人科技","理財"]],
  ["藝文", ["藝文總覽","書評","電影","音樂","電視","劇場","舞蹈","視覺藝術","T 雜誌","時報雜誌"]],
  ["生活", ["健康生活","飲食","旅遊","時尚","房地產","婚戀"]],
  ["評論", ["今日評論","客座專文","社論","讀者投書","政治評論","國際評論","商業評論","科技評論","氣候評論","健康評論","文化評論"]],
];
// 格式 → 分類架構
const FORMATS = ["全部格式", "電子書", "有聲書", "電子雜誌", "新聞"];
const FICTION_SHOWN = ["動作冒險","超級英雄","科幻","幽默","推理與偵探","經典文學","歷史小說","成長","奇幻","神話與傳說","漫畫與圖像小說","恐怖"];
const BOOK_CFG = { total: "3,150", groups: [["文學小說主題", FICTION_SHOWN], ["非小說作品主題", NONFICTION]] };
const TOPIC_BY_FMT = {
  "全部格式": BOOK_CFG, "電子書": { ...BOOK_CFG, total: "2,400" }, "有聲書": { ...BOOK_CFG, total: "1,005" },
  "電子雜誌": { total: "1,280", groups: [["電子雜誌分類", MAGAZINE]], scope: "雜誌" },
  "新聞": { total: "8,640", groups: NEWS_GROUPS, scope: "新聞" },
};
window.K12_TOPICS = { fiction: FICTION_SHOWN, nonfiction: NONFICTION, magazine: MAGAZINE, news: NEWS_GROUPS.flatMap(([, it]) => it) };
function openTopic(go, topic, group, fmt) {
  const cfg = TOPIC_BY_FMT[fmt];
  const applied = cfg.scope ? [topic] : [topic, group === "文學小說主題" ? "文學小說類" : "非小說類"];
  const scope = cfg.scope || (fmt === "全部格式" ? "全部" : fmt);
  localStorage.setItem("k12-search", JSON.stringify({ terms: [], applied, scope }));
  go("search");
}
function TopicLink({ label, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <a onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", color: "var(--color-text-primary)", textDecoration: h ? "underline" : "none", fontSize: 16 }}>
      <span style={{ width: 30, height: 26, flexShrink: 0, boxSizing: "border-box", border: "2px solid var(--color-border)", background: "var(--color-background-page)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--color-text-secondary)" }}>50</span>
      {label}
    </a>
  );
}
function TopicsScreen({ go, initialFmt = "全部格式", jumpTo }) {
  const [fmt, setFmt] = React.useState(initialFmt);
  const secs = window.K12_NEWS_SECTIONS || [];
  const cfg = fmt === "新聞" && secs.length ? { ...TOPIC_BY_FMT[fmt], groups: secs.map(g => [g.zh, g.items.map(i => i.zh)]) } : TOPIC_BY_FMT[fmt];
  const jumpRef = React.useRef(null);
  React.useEffect(() => { if (jumpRef.current) window.scrollTo({ top: jumpRef.current.getBoundingClientRect().top + window.scrollY - 16, behavior: "smooth" }); }, []);
  const seeAll = () => { localStorage.setItem("k12-search", JSON.stringify({ terms: [], applied: [], scope: cfg.scope || (fmt === "全部格式" ? "全部" : fmt) })); go("search"); };
  return (
    <div style={{ background: "var(--color-surface)", padding: "40px 48px 56px", display: "flex", flexDirection: "column", gap: 40 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 600 }}>瀏覽所有主題</h1>
        <TFormat options={FORMATS} state={fmt} onChange={setFmt} />
        <a onClick={seeAll} style={{ fontSize: 14, color: "var(--color-link)", cursor: "pointer" }}><span style={{ textDecoration: "underline" }}>查看全部</span> {cfg.total} <span style={{ textDecoration: "underline" }}>筆{fmt === "全部格式" ? "" : fmt}內容</span> ›</a>
      </div>
      {cfg.groups.map(([title, items]) => (
        <section key={fmt + title} ref={title === jumpTo ? jumpRef : undefined} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600 }}>{title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", columnGap: 24, rowGap: 14 }}>
            {items.map((it, i) => <TopicLink key={title + i} label={it} onClick={() => openTopic(go, it, title, fmt)} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
window.TopicsScreen = TopicsScreen;

export { TFormat, FICTION, NONFICTION, MAGAZINE, NEWS_GROUPS, FORMATS, FICTION_SHOWN, BOOK_CFG, TOPIC_BY_FMT, openTopic, TopicLink, TopicsScreen };
