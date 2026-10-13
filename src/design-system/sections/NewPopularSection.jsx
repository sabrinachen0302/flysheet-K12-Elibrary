import React from 'react';
import { Button } from '../core/Button.jsx';
import { Tabs } from '../core/Tabs.jsx';
// 新到／熱門 section — retro: folder tabs sitting on a paper panel. `filledTrack` kept for API compatibility.
export function NewPopularSection({ title = "電子書", value, defaultValue = "新到", onChange, onBrowseAll, filledTrack = false, renderNew, renderPopular, style }) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value !== undefined ? value : inner;
  const set = (v) => { setInner(v); onChange && onChange(v); };
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 16, fontFamily: "var(--font-base)", ...style }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 700, lineHeight: 1.2, color: "var(--color-text)" }}>{title}</h2>
        <Button size="sm" tone="paper" iconRight="chevron-right" onClick={onBrowseAll}>瀏覽全部</Button>
      </div>
      <div>
        <Tabs items={["新到", "熱門"]} value={cur} onChange={set} baseline={false} ariaLabel={title + "排序"} style={{ paddingLeft: 20 }} />
        <div style={{ boxSizing: "border-box", padding: 24, background: "var(--color-bg)", border: "2px solid var(--color-border)", borderRadius: 8, boxShadow: "3px 3px 0 0 var(--color-border)" }}>
          {cur === "新到" ? (renderNew ? renderNew() : null) : (renderPopular ? renderPopular() : null)}
        </div>
      </div>
    </section>
  );
}
export default NewPopularSection;
