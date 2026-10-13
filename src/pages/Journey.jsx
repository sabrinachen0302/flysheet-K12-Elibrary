import React from 'react';
import * as DS from '../design-system/index.js';
import { SH } from './Shelf.jsx';
import { lnk } from './BookDetail.jsx';
// 旅程式策展（layout: "journey"）— 捲動即前進：沿著一條道路經過各個閱讀站，書與資源以路牌形式逐一升起。
// 內容來自 data/curations.json 的 scenes；項目參照既有 books.json / resources.json。
const J_H = 900; // 場景設計高度；實際舞台高度 = 視窗高度 − 固定頁首，場景置中並依需要縮放
const J_NAV = 132; // 固定的 Header + Banner 高度
const jStageH = () => { const z = Math.min(1, window.innerWidth / 1440); return Math.max(560, Math.round(window.innerHeight / z) - J_NAV); };
const J_PER_SCENE = 3.6;
const J_SCREENS_EXTRA = 3;
const jClamp = (v) => Math.max(0, Math.min(1, v));
const jSeg = (p, a, b) => jClamp((p - a) / (b - a));
const jEase = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const jTrap = (t, a, b, r = 0.04) => Math.min(jSeg(t, a, a + r), 1 - jSeg(t, b - r, b));
// 道路：左下 → 右上
const RA = [-120, 980], RB = [1560, 360];
const jAt = (s) => [RA[0] + (RB[0] - RA[0]) * s, RA[1] + (RB[1] - RA[1]) * s];
const J_ANGLE = Math.atan2(RB[1] - RA[1], RB[0] - RA[0]) * 180 / Math.PI;
const J_SKY = ["var(--color-brand-accent)", "var(--color-brand-cta)", "var(--color-brand-mint)", "var(--color-brand-accent)", "var(--color-brand-mint)"];
const J_TREES = Array.from({ length: 22 }, (_, i) => ({ u: (i * 0.137) % 1, side: i % 2 ? 1 : -1, k: 0.75 + ((i * 7) % 5) / 10, tone: i % 3 }));
const J_POST_S = [0.47, 0.63, 0.79];

function JTree({ x, y, k, tone, o }) {
  const c = ["var(--color-brand-mint)", "color-mix(in srgb, var(--color-brand-mint) 70%, var(--color-text) 12%)", "color-mix(in srgb, var(--color-brand-mint) 60%, var(--color-surface))"][tone];
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: x, top: y, width: 0, height: 0, opacity: o }}>
      <div style={{ position: "absolute", left: -5 * k, top: -34 * k, width: 10 * k, height: 34 * k, background: "var(--color-text)", borderRadius: 3 }} />
      <div style={{ position: "absolute", left: -38 * k, top: -118 * k, width: 76 * k, height: 92 * k, borderRadius: "50%", background: c, border: "var(--border-default)", boxSizing: "border-box" }} />
    </div>
  );
}
function JPost({ it, n, x, y, scale, o, rise, focus, onClick }) {
  if (!it) return null;
  const f = focus;
  return (
    <div onClick={onClick} style={{ position: "absolute", left: x, top: y, width: 0, height: 0, opacity: o, pointerEvents: o > 0.6 ? "auto" : "none", cursor: "pointer", zIndex: Math.round(1000 - y) + (f > 0.5 ? 500 : 0) }}>
      <div style={{ position: "absolute", left: 0, bottom: 0, transformOrigin: "50% 100%", transform: `translateX(-50%) scale(${scale * (0.2 + 0.8 * rise) * (1 + 0.14 * f)}) translateY(${(1 - rise) * 40 - f * 10}px)`, display: "flex", flexDirection: "column", alignItems: "center", filter: f > 0.05 || o < 1 ? "none" : "saturate(.92)" }}>
        <div style={{ position: "relative", width: 200, height: 264, boxSizing: "border-box", padding: "38px 22px 26px", borderRadius: 100, background: "var(--color-surface)", border: "var(--border-default)", boxShadow: f > 0.5 ? "var(--shadow-hard-md)" : "var(--shadow-hard-sm)", outline: f > 0.5 ? "3px solid var(--color-brand-cta)" : "none", outlineOffset: 4, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <span style={{ position: "absolute", top: 14, left: 26, width: 34, height: 34, borderRadius: "50%", border: "var(--border-thin)", background: "var(--color-brand-cta)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{n}</span>
          <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {it.kind === "book" ? <div style={{ lineHeight: 0, border: "var(--border-thin)" }}><window.BookCover book={it.b} width={96} /></div> : <window.ResLogo r={it.x} w={150} h={96} pad={6} />}
          </div>
          <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.35, textAlign: "center", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{it.kind === "book" ? it.b.title : it.x.title}</span>
        </div>
        <div style={{ width: 16, height: 96, boxSizing: "border-box", marginTop: -2, background: "var(--color-surface)", borderLeft: "var(--border-default)", borderRight: "var(--border-default)" }} />
        <div style={{ width: 84, height: 22, marginTop: -11, boxSizing: "border-box", borderRadius: "50%", background: "color-mix(in srgb, var(--color-brand-mint) 60%, var(--color-surface))", border: "var(--border-default)" }} />
      </div>
    </div>
  );
}
function JInfo({ entry, o, go }) {
  if (!entry) return null;
  const { it, note, tags, n, scene } = entry;
  const book = it.kind === "book";
  const title = book ? it.b.title : it.x.title;
  const by = book ? it.b.author : it.x.publisher;
  const kind = book ? it.b.type : "電子資源";
  return (
    <div style={{ position: "absolute", left: 72, top: 150, width: 440, zIndex: 3000, opacity: o, transform: `translateY(${(1 - o) * 16}px)`, pointerEvents: o > 0.6 ? "auto" : "none", boxSizing: "border-box", padding: "28px 32px", background: "color-mix(in srgb, var(--color-bg) 88%, transparent)", backdropFilter: "blur(6px)", border: "var(--border-default)", display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 700, letterSpacing: ".08em", color: "var(--color-text-muted)" }}>
        <span style={{ fontVariantNumeric: "tabular-nums" }}>STOP {String(scene + 1).padStart(2, "0")} · {n}</span>
        <span style={{ padding: "2px 10px", borderRadius: 999, border: "var(--border-thin)", background: "var(--color-surface)", color: "var(--color-text)", letterSpacing: 0, fontWeight: 400 }}>{kind}</span>
      </div>
      <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 700, lineHeight: 1.3, textWrap: "pretty" }}>{title}</h3>
      <span style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>{by || "-"}</span>
      <p style={{ margin: 0, fontSize: 16, lineHeight: 1.8, textWrap: "pretty" }}>{note}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{tags.map(t => <span key={t} style={{ whiteSpace: "nowrap", padding: "4px 12px", borderRadius: 999, fontSize: 13, background: "var(--color-accent-tint)", border: "var(--border-thin)" }}>#{t}</span>)}</div>
      <div style={{ display: "flex", paddingTop: 4 }}><DS.Button variant="primary" size="sm" iconRight={book ? "chevron-right" : "external-link"} onClick={() => window.openCurItem(go, it)}>{book ? "查看書籍" : "開啟資源"}</DS.Button></div>
    </div>
  );
}
function JourneyCuration({ cur, go }) {
  const scenes = (cur.scenes || []).map(s => ({ ...s, items: s.items.map(e => ({ ...e, it: window.resolveCurItem(e.ref) })) }));
  const N = scenes.length;
  const SCREENS = N * J_PER_SCENE + J_SCREENS_EXTRA;
  const ref = React.useRef(null);
  const [p, setP] = React.useState(0);
  const [SH, setSH] = React.useState(jStageH);
  const geo = () => { const el = ref.current; if (!el) return null; const r = el.getBoundingClientRect(); const scale = r.height / (SH * SCREENS); return { r, scale, maxY: SH * (SCREENS - 1) }; };
  React.useEffect(() => {
    const update = () => { setSH(jStageH()); const g = geo(); if (!g) return; setP(jClamp(-(g.r.top - J_NAV * g.scale) / g.scale / g.maxY)); };
    update();
    window.addEventListener("scroll", update, { passive: true }); window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [SCREENS, SH]);
  // 不縮放（避免左右露出邊界）；舞台較高時置中，較矮時多裁切下方道路
  const offY = SH >= J_H ? (SH - J_H) / 2 : (SH - J_H) * 0.35;
  // 時間軸：起點 [0, H0]、各站平均分配、終點 [E0, 1]
  const H0 = 0.07, E0 = 0.93, span = (E0 - H0 - 0.01) / N;
  const sceneStart = (k) => H0 + 0.01 + k * span;
  const local = (k) => (p - sceneStart(k)) / span;
  const jumpTo = (target) => { const g = geo(); if (!g) return; window.scrollTo({ top: g.r.top + window.scrollY - J_NAV * g.scale + target * g.maxY * g.scale + 2, behavior: "smooth" }); };
  const hero = 1 - jSeg(p, 0.025, 0.07);
  const end = jSeg(p, E0, 0.975);
  // 路面與樹的位移（只往前，不回頭）
  const travel = p * 6;
  let focusEntry = null, focusO = 0, current = -1;
  scenes.forEach((s, k) => { const t = local(k); if (t >= 0 && t < 1) current = k; s.items.forEach((e, i) => { const a = 0.28 + i * 0.22, f = jTrap(t, a, a + 0.2); if (f > focusO) { focusO = f; focusEntry = { ...e, n: String(i + 1).padStart(2, "0"), scene: k }; } }); });
  const sky = scenes.map((_, k) => jClamp(Math.min(jSeg(p, sceneStart(k) - span * 0.1, sceneStart(k) + span * 0.1), 1 - jSeg(p, sceneStart(k + 1) - span * 0.1, sceneStart(k + 1) + span * 0.1))));
  const lnk = { color: "inherit", textDecoration: "underline", cursor: "pointer" };
  const nodes = [{ label: "起點", at: 0 }, ...scenes.map((s, k) => ({ label: String(k + 1).padStart(2, "0") + " " + s.title, at: sceneStart(k) + span * 0.18 })), { label: "終點", at: 0.985 }];
  const activeNode = p >= E0 ? nodes.length - 1 : current + 1;
  return (
    <div ref={ref} style={{ height: SH * SCREENS, position: "relative" }}>
      <div style={{ position: "sticky", top: J_NAV, height: SH, overflow: "hidden", background: "var(--color-bg)", fontFamily: "var(--font-base)", color: "var(--color-text)" }}>
      <div style={{ position: "absolute", left: 0, top: offY, width: 1440, height: J_H }}>
        {/* 天空：依所在站別漸變 */}
        <div aria-hidden="true" style={{ position: "absolute", inset: "-600px 0", background: "linear-gradient(180deg, color-mix(in srgb, var(--color-brand-accent) 38%, var(--color-bg)) 0%, var(--color-bg) 70%)" }} />
        {scenes.map((_, k) => <div key={k} aria-hidden="true" style={{ position: "absolute", inset: "-600px 0", opacity: sky[k], background: `linear-gradient(180deg, color-mix(in srgb, ${J_SKY[k % J_SKY.length]} 42%, var(--color-bg)) 0%, var(--color-bg) 72%)` }} />)}
        {/* 遠景山丘（慢速視差） */}
        {[0, 1, 2, 3].map(i => { const x = ((i * 520 - travel * 90) % 2080 + 2080) % 2080 - 400; return <div key={i} aria-hidden="true" style={{ position: "absolute", left: x, top: 250 + (i % 2) * 40, width: 560, height: 300, borderRadius: "50%", background: "color-mix(in srgb, var(--color-brand-mint) 45%, var(--color-bg))", opacity: 0.7 }} />; })}
        {/* 道路 */}
        <div aria-hidden="true" style={{ position: "absolute", left: (RA[0] + RB[0]) / 2 - 1400, top: (RA[1] + RB[1]) / 2 - 110, width: 2800, height: 220, transform: `rotate(${J_ANGLE}deg)`, transformOrigin: "50% 50%", boxSizing: "border-box", background: "color-mix(in srgb, var(--color-surface) 80%, var(--color-bg))", borderTop: "var(--border-default)", borderBottom: "var(--border-default)" }}>
          <div style={{ position: "absolute", left: 0, right: 0, top: 104, height: 8, backgroundImage: "repeating-linear-gradient(90deg, var(--color-brand-accent) 0 60px, transparent 60px 120px)", backgroundPositionX: -travel * 420 }} />
        </div>
        {/* 路邊的樹（近景視差，往左下流動） */}
        {J_TREES.map((t, i) => { const u = ((t.u - travel * 0.18 * (t.side > 0 ? 1.25 : 0.85)) % 1 + 1) % 1; const [x, y] = jAt(u); const off = t.side > 0 ? 150 : -140; const k = (1.25 - u * 0.6) * t.k * (t.side > 0 ? 1.15 : 0.9); const fade = Math.min(jSeg(u, 0, 0.06), 1 - jSeg(u, 0.94, 1)); const busy = t.side < 0 && u > 0.38 && u < 0.9; return <JTree key={i} x={x} y={y + off * Math.cos(J_ANGLE * Math.PI / 180)} k={k} tone={t.tone} o={busy ? fade * 0.35 : fade} />; })}
        {/* 起點：主題、介紹與起點路牌 */}
        <div style={{ position: "absolute", left: 96, top: 120, width: 640, zIndex: 3100, opacity: hero, transform: `translateY(${-(1 - hero) * 40}px)`, pointerEvents: hero > 0.5 ? "auto" : "none", display: "flex", flexDirection: "column", gap: 22 }}>
          <span style={{ alignSelf: "flex-start", fontSize: 13, fontWeight: 700, letterSpacing: ".14em", padding: "4px 12px", borderRadius: 999, border: "var(--border-thin)", background: "var(--color-surface)" }}>閱讀旅程 · {N} 站</span>
          <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 76, fontWeight: 700, letterSpacing: ".06em", lineHeight: 1.1 }}>{cur.title}</h1>
          <p style={{ margin: 0, fontSize: 20, lineHeight: 1.8, color: "var(--color-text-secondary)", textWrap: "pretty", maxWidth: 560 }}>{cur.lede}</p>
          <div style={{ display: "flex" }}><window.CurMeta c={cur} size={15} inline /></div>
          <span style={{ fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>向下捲動，開始旅程 <span style={{ display: "inline-block", transform: `translateY(${Math.sin(Date.now() / 300) * 0}px)` }}>↓</span></span>
        </div>
        {(() => { const [x, y] = jAt(0.66); const o = hero; return (
          <div aria-hidden="true" style={{ position: "absolute", left: x, top: y - 100, width: 0, height: 0, opacity: o, zIndex: 900 }}>
            <div style={{ position: "absolute", left: 0, bottom: 0, transform: `translateX(-50%) translate(${-(1 - o) * 260}px, ${(1 - o) * 90}px) scale(${1 + (1 - o) * 0.3})`, transformOrigin: "50% 100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 240, boxSizing: "border-box", padding: "22px 24px", borderRadius: 120, background: "var(--color-brand-cta)", border: "var(--border-default)", boxShadow: "var(--shadow-hard-md)", textAlign: "center", display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 700 }}>起點</span>
              </div>
              <div style={{ width: 16, height: 120, boxSizing: "border-box", marginTop: -2, background: "var(--color-surface)", borderLeft: "var(--border-default)", borderRight: "var(--border-default)" }} />
            </div>
          </div>); })()}
        {/* 各站：站名看板 + 三支路牌 */}
        {scenes.map((s, k) => {
          const t = local(k);
          if (t < -0.15 || t > 1.15) return null;
          const card = Math.min(jSeg(t, -0.02, 0.07), 1 - jSeg(t, 0.21, 0.27));
          const leave = jEase(jSeg(t, 0.9, 1.04));
          return (
            <React.Fragment key={k}>
              <div style={{ position: "absolute", left: 96, top: 170, width: 560, zIndex: 3050, opacity: card, transform: `translateX(${(1 - card) * (t < 0.12 ? 40 : -40)}px)`, background: card > 0.98 ? "transparent" : "transparent", pointerEvents: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: ".18em", color: "var(--color-text-secondary)" }}>STOP {String(k + 1).padStart(2, "0")} — {s.kicker}</span>
                <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 60, fontWeight: 700, letterSpacing: ".06em", lineHeight: 1.15 }}>{s.title}</h2>
                <p style={{ margin: 0, fontSize: 19, lineHeight: 1.8, textWrap: "pretty", maxWidth: 500 }}>{s.desc}</p>
              </div>
              {s.items.map((e, i) => {
                const rise = jEase(jSeg(t, 0.03 + i * 0.04, 0.11 + i * 0.04));
                const a = 0.28 + i * 0.22, f = jEase(jTrap(t, a, a + 0.2));
                const ps = J_POST_S[i] - leave * 0.5;
                const [x, y] = jAt(ps);
                const o = Math.min(jSeg(t, 0.02 + i * 0.04, 0.08 + i * 0.04), 1 - jSeg(leave, 0.4, 1));
                const dim = focusO > 0.3 && f < 0.3 ? 0.55 : 1;
                return <JPost key={i} it={e.it} n={String(i + 1).padStart(2, "0")} x={x} y={y - 96} scale={(1.08 - ps * 0.45) * (1 + leave * 0.35)} o={o * dim} rise={rise} focus={f} onClick={() => e.it && window.openCurItem(go, e.it)} />;
              })}
            </React.Fragment>
          );
        })}
        <JInfo entry={focusEntry} o={jEase(focusO)} go={go} />
        {/* 終點 */}
        <div style={{ position: "absolute", left: 96, top: 170, width: 600, zIndex: 3100, opacity: end, transform: `translateY(${(1 - end) * 30}px)`, pointerEvents: end > 0.5 ? "auto" : "none", display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: ".18em", color: "var(--color-text-secondary)" }}>GOAL — 旅程終點</span>
          <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 60, fontWeight: 700, letterSpacing: ".06em", lineHeight: 1.15 }}>換你出發了</h2>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.8, maxWidth: 520, textWrap: "pretty" }}>走完 {N} 個閱讀站，你已經有了方向、計畫與資源。挑一個主題，開始你的自主學習吧。</p>
          <div style={{ display: "flex", gap: 12 }}>
            <DS.Button variant="primary" size="md" iconRight="chevron-right" onClick={() => { localStorage.setItem("k12-res-type", "自主學習"); go("resources"); }}>瀏覽所有自主學習資源</DS.Button>
            <DS.Button size="md" tone="paper" onClick={() => go("curations")}>回到主題書單</DS.Button>
          </div>
        </div>
        {(() => { const [x, y] = jAt(0.72 - (1 - end) * 0.2); return (
          <div aria-hidden="true" style={{ position: "absolute", left: x, top: y - 100, width: 0, height: 0, opacity: end, zIndex: 900 }}>
            <div style={{ position: "absolute", left: 0, bottom: 0, transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 240, boxSizing: "border-box", padding: "22px 24px", borderRadius: 120, background: "var(--color-brand-accent)", border: "var(--border-default)", boxShadow: "var(--shadow-hard-md)", textAlign: "center", display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".2em" }}>GOAL</span>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 700 }}>終點</span>
              </div>
              <div style={{ width: 16, height: 120, boxSizing: "border-box", marginTop: -2, background: "var(--color-surface)", borderLeft: "var(--border-default)", borderRight: "var(--border-default)" }} />
            </div>
          </div>); })()}
      </div>
        {/* 固定的精簡頁首 */}
        <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 52, zIndex: 4000, boxSizing: "border-box", padding: "0 48px", display: "flex", alignItems: "center", gap: 12, fontSize: 14, background: "color-mix(in srgb, var(--color-bg) 70%, transparent)", backdropFilter: "blur(6px)", borderBottom: "1px solid color-mix(in srgb, var(--color-text) 15%, transparent)" }}>
          <a onClick={() => go("curations")} style={lnk}>‹ 主題書單</a>
          <span style={{ color: "var(--color-text-muted)" }}>/</span>
          <b>{cur.title}</b>
          <span style={{ marginLeft: "auto", color: "var(--color-text-secondary)", opacity: current >= 0 ? 1 : 0, transition: "opacity .3s" }}>{current >= 0 ? `第 ${current + 1} 站 / 共 ${N} 站 · ${scenes[current].title}` : ""}</span>
        </div>
        {/* 右側旅程進度 */}
        <nav aria-label="旅程進度" style={{ position: "absolute", right: 36, top: "50%", transform: "translateY(-50%)", zIndex: 4000, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 0 }}>
          <div aria-hidden="true" style={{ position: "absolute", right: 7, top: 8, bottom: 8, width: 2, background: "color-mix(in srgb, var(--color-text) 20%, transparent)" }}>
            <div style={{ width: 2, height: `${p * 100}%`, background: "var(--color-text)" }} />
          </div>
          {nodes.map((nd, i) => { const on = i === activeNode, done = i < activeNode; return (
            <button key={i} type="button" onClick={() => jumpTo(nd.at)} aria-current={on ? "step" : undefined} style={{ position: "relative", height: 44, display: "flex", alignItems: "center", gap: 12, border: 0, background: "none", padding: 0, cursor: "pointer", fontFamily: "inherit", color: "var(--color-text)" }}>
              <span style={{ fontSize: 13, fontWeight: on ? 700 : 400, whiteSpace: "nowrap", opacity: on ? 1 : 0.55, padding: on ? "3px 10px" : 0, borderRadius: 999, background: on ? "var(--color-surface)" : "none", border: on ? "var(--border-thin)" : "0" }}>{nd.label}</span>
              <span style={{ width: on ? 16 : 12, height: on ? 16 : 12, marginRight: on ? 0 : 2, boxSizing: "border-box", borderRadius: "50%", border: "var(--border-thin)", background: on ? "var(--color-brand-cta)" : done ? "var(--color-text)" : "var(--color-surface)", transition: "all .2s" }} />
            </button>); })}
        </nav>
      </div>
    </div>
  );
}
window.JourneyCuration = JourneyCuration;

export { J_H, J_NAV, jStageH, J_PER_SCENE, J_SCREENS_EXTRA, jClamp, jSeg, jEase, jTrap, RA, RB, jAt, J_ANGLE, J_SKY, J_TREES, J_POST_S, JTree, JPost, JInfo, JourneyCuration };
