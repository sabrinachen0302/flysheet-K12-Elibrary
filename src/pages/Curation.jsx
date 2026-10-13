import React from 'react';
import * as DS from '../design-system/index.js';
const { BookCard: KBook } = DS;
const KI = "images/";
const STAGE_H = 1029;
const SCROLL_SCREENS = 9;
const SCATTER = [[2,30,210,6],[270,148,140,-5],[1190,0,190,-6],[952,190,150,4],[70,444,180,-5],[1110,440,200,5],[480,472,160,-3],[726,40,140,8]];
const SETS_RAW = [
  { title: "主題策展", desc: "相關說明文字", books: ["little-prince", "old-man-sea", "animal-farm", "1984", "pride-prejudice", "lord-flies", "namiya", "red-chamber"] },
  { title: "主題策展", desc: "相關說明文字", books: ["taipei-people", "sapiens", "old-peking", "courage-disliked", "take-your-time", "red-chamber", "little-prince", "1984"] },
];
const REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (v) => Math.max(0, Math.min(1, v));
const seg = (p, a, b) => clamp((p - a) / (b - a));
const vis = (o, dy = 40) => ({ opacity: o, transform: `translateY(${(1 - o) * dy}px)`, pointerEvents: o > 0.5 ? "auto" : "none" });
// Timeline (fraction of the pinned scroll): hero → part1 text → part1 covers → part1 out → part2 text → part2 covers
const PHASES = [
  { textIn: [0.13, 0.19], cardsIn: 0.24, out: [0.5, 0.56] },
  { textIn: [0.62, 0.68], cardsIn: 0.73, out: null },
];
function ScatterCard({ x, y, w, r, book, it, o, onClick }) {
  const s = w / 161;
  if (!it && !book) return null;
  return (
    <div onClick={onClick} style={{ position: "absolute", left: x, top: y, width: w, cursor: "pointer", opacity: o, transform: `rotate(${r}deg) translateY(${(1 - o) * 60}px)`, pointerEvents: o > 0.5 ? "auto" : "none" }}>
      {it && it.kind === "res" ? <window.CurThumb it={it} w={w} /> : <div style={{ width: w, height: 278 * s }}><div style={{ transform: `scale(${s})`, transformOrigin: "0 0", width: 161 }}><KBook {...window.bookCardProps(it ? it.b : book)} /></div></div>}
    </div>
  );
}
function CurationScreen({ go }) {
  // 主題來自 data/curations.json（由「主題書單」選擇，存於 localStorage k12-curation）；未選時取第一個主題
  const list = window.useCurations();
  window.useResources();
  const cur = list && (list.find(c => c.id === localStorage.getItem("k12-curation")) || list[0]);
  const SETS = cur ? cur.sets.map(s => ({ ...s, items: s.items.map(window.resolveCurItem) })) : [];
  const ref = React.useRef(null);
  const [p, setP] = React.useState(REDUCED ? 0.2 : 0);
  React.useEffect(() => {
    const update = () => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const scale = r.height / (STAGE_H * SCROLL_SCREENS);
      const maxY = STAGE_H * (SCROLL_SCREENS - 1);
      const yy = Math.max(0, Math.min(maxY, -r.top / scale));
      setP(yy / maxY);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  const hero = 1 - seg(p, 0.05, 0.11);
  const texts = PHASES.map(ph => Math.min(seg(p, ...ph.textIn), ph.out ? 1 - seg(p, ...ph.out) : 1));
  const cards = PHASES.map(ph => SCATTER.map((_, i) => Math.min(seg(p, ph.cardsIn + i * 0.014, ph.cardsIn + 0.06 + i * 0.014), ph.out ? 1 - seg(p, ...ph.out) : 1)));
  const hint = Math.max(hero, ...texts);
  if (cur && cur.layout === "journey") return <window.JourneyCuration key={cur.id} cur={cur} go={go} />;
  return (
    <div ref={ref} style={{ height: STAGE_H * SCROLL_SCREENS, position: "relative" }}>
      <div style={{ position: "sticky", top: 132, height: STAGE_H, overflow: "hidden", background: "var(--color-background-page)" }}>
        {cur && <div style={{ ...vis(hero), position: "absolute", inset: 0, zIndex: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, maxWidth: 760, textAlign: "center" }}>
            <a href="#curations" onClick={(e) => { e.preventDefault(); go("curations"); }} style={{ fontSize: 14, color: "var(--color-text-secondary)", textDecoration: "underline", cursor: "pointer" }}>‹ 主題書單</a>
            <span aria-hidden="true" style={{ width: 64, height: 10, borderRadius: 5, border: "var(--border-thin)", background: window.CUR_TINT[cur.tint] || window.CUR_TINT.mint }} />
            <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 64, fontWeight: 700, letterSpacing: ".08em", lineHeight: 1.15 }}>{cur.title}</h1>
            <window.CurMeta c={cur} size={15} inline />
            <p style={{ margin: 0, fontSize: 20, lineHeight: 1.8, color: "var(--color-text-secondary)", textWrap: "pretty" }}>{cur.lede}</p>
          </div>
        </div>}
        {SETS.map((set, k) => (
          <div key={k} style={{ position: "absolute", left: 29, top: (STAGE_H - 748) / 2, width: 1382, height: 748 }}>
            {SCATTER.map(([x, y, w, r], i) => <ScatterCard key={i} x={x} y={y} w={w} r={r} it={set.items[i]} o={cards[k][i]} onClick={() => set.items[i] && window.openCurItem(go, set.items[i])} />)}
          </div>
        ))}
        {SETS.map((set, k) => (
          <div key={"t" + k} style={{ ...vis(texts[k]), position: "absolute", left: "50%", top: "50%", translate: "-50% -50%", width: "fit-content", maxWidth: 560, padding: "28px 44px", boxSizing: "border-box", borderRadius: 0, background: "color-mix(in srgb, var(--color-bg) 72%, transparent)", backdropFilter: "blur(6px)", display: "flex", flexDirection: "column", gap: 20, textAlign: "center", zIndex: 2 }}>
            <h2 style={{ margin: 0, fontSize: 28, fontWeight: 400 }}>{set.title}</h2>
            <p style={{ margin: 0, fontSize: 16, color: "var(--color-text-secondary)" }}>{set.desc}</p>
          </div>
        ))}
        <span style={{ position: "absolute", left: 0, right: 0, bottom: 48, textAlign: "center", fontSize: 14, color: "var(--color-text-secondary)", opacity: hint, zIndex: 3 }}>向下滾動探索 ↓</span>
      </div>
    </div>
  );
}
window.CurationScreen = CurationScreen;

export { KBook, KI, STAGE_H, SCROLL_SCREENS, SCATTER, SETS_RAW, REDUCED, clamp, seg, vis, PHASES, ScatterCard, CurationScreen };
