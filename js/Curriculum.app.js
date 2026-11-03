const { FormatToggle: CFormat, Icon: CIcon } = window.DesignSystem_65d3d1;
// 格式切換：全部格式＝不限，其餘只看該格式
const scopeOf = (fmt) => fmt === "全部格式" ? [] : [fmt];
function openSubject(go, subject, fmt) {
  localStorage.setItem("k12-search", JSON.stringify({ terms: [], applied: [subject], scope: scopeOf(fmt) }));
  go("search");
}
function SubjectLink({ label, count, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <a onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", color: "var(--color-text-primary)", textDecoration: h ? "underline" : "none", fontSize: 16 }}>
      <span style={{ minWidth: 30, height: 26, padding: "0 4px", flexShrink: 0, boxSizing: "border-box", border: "2px solid var(--color-border)", background: "var(--color-background-page)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--color-text-secondary)" }}>{count}</span>
      {label}
    </a>
  );
}
function DomainRow({ domain, subjects, open, onToggle, go, fmt, countOf, totalOf }) {
  const [h, setH] = React.useState(false);
  const total = totalOf(subjects);
  const single = subjects.length === 1;
  return (
    <section style={{ borderBottom: "1px solid var(--color-border-default)" }}>
      <button type="button" aria-expanded={single ? undefined : open} onClick={single ? () => openSubject(go, subjects[0], fmt) : onToggle} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ width: "100%", border: 0, background: h ? "var(--color-background-page)" : "transparent", cursor: "pointer", display: "flex", alignItems: "center", gap: 16, padding: "20px 16px", fontFamily: "inherit", color: "var(--color-text-primary)", textAlign: "left" }}>
        {single ? <span style={{ width: 16, flexShrink: 0 }} /> : <CIcon name="chevron-right" size={16} style={{ transform: open ? "rotate(90deg)" : "none", transition: "transform .2s ease", flexShrink: 0 }} />}
        <span style={{ fontSize: 24, fontWeight: 600, flex: 1, textDecoration: single && h ? "underline" : "none" }}>{domain}</span>
        <span style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>{single ? total + " 筆 ›" : subjects.length + " 科 · " + total + " 筆"}</span>
      </button>
      {open && !single && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", columnGap: 24, rowGap: 14, padding: "4px 16px 24px 48px" }}>
          {subjects.map(s => <SubjectLink key={s} label={s} count={countOf(s)} onClick={() => openSubject(go, s, fmt)} />)}
        </div>
      )}
    </section>
  );
}
function CurriculumScreen({ go }) {
  const C = window.K12_CURRICULUM;
  const [fmt, setFmt] = React.useState("全部格式");
  const multi = C.filter(([, ss]) => ss.length > 1).map(([d]) => d);
  const [open, setOpen] = React.useState(() => new Set([multi[0]]));
  const allOpen = multi.every(d => open.has(d));
  const toggle = (d) => setOpen(o => { const n = new Set(o); n.has(d) ? n.delete(d) : n.add(d); return n; });
  // 真實筆數：與點進搜尋結果頁看到的數字一致
  // 書籍看 curriculum 欄位；「全部格式」時另加同學科領域的電子資源（科目→領域，如歷史→社會）
  const res = window.useResources(window.RES_ALL).data || [];
  const domainOf = (s) => { const hit = C.find(([, ss]) => ss.includes(s)); return hit ? (hit[0] === "高中家政" ? "家政" : hit[0]) : s; };
  const itemsOf = (s) => [
    ...window.K12_BOOKS.filter(b => (fmt === "全部格式" || b.type === fmt) && (b.curriculum || []).includes(s)).map(b => b.id),
    ...(fmt === "全部格式" ? res.filter(x => window.subjMatch(x, s)).map(window.olrKey) : []),
  ];
  const countOf = (s) => itemsOf(s).length;
  const totalOf = (ss) => new Set(ss.flatMap(itemsOf)).size; // 同一筆資料只算一次
  const total = fmt === "全部格式" ? window.K12_BOOKS.length + window.K12_MAGAZINES.length + window.K12_NEWS.length + res.length : window.K12_BOOKS.filter(b => b.type === fmt).length;
  const linkBtn = { border: 0, background: "none", padding: 0, cursor: "pointer", fontFamily: "inherit", fontSize: 14, color: "var(--color-link)", textDecoration: "underline" };
  return (
    <div style={{ background: "var(--color-surface)", padding: "40px 48px 56px", display: "flex", flexDirection: "column", gap: 40 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 600 }}>依課綱探索</h1>
        <div onClick={(e) => { const t = e.target.textContent.trim(); if (["全部格式", "電子書", "有聲書"].includes(t)) setFmt(t); }} style={{ cursor: "pointer" }}><CFormat state={fmt} /></div>
        <a onClick={() => { localStorage.setItem("k12-search", JSON.stringify({ terms: [], applied: [], scope: scopeOf(fmt) })); go("search"); }} style={{ fontSize: 14, color: "var(--color-link)", cursor: "pointer" }}><span style={{ textDecoration: "underline" }}>查看全部</span> {total.toLocaleString()} <span style={{ textDecoration: "underline" }}>筆內容</span> ›</a>
      </div>
      <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600 }}>領域與必修科目</h2>
          <button type="button" onClick={() => setOpen(allOpen ? new Set() : new Set(multi))} style={linkBtn}>{allOpen ? "全部收合" : "全部展開"}</button>
        </div>
        <div style={{ borderTop: "1px solid var(--color-border-default)" }}>
          {C.map(([d, ss]) => <DomainRow key={d} domain={d} subjects={ss} open={open.has(d)} onToggle={() => toggle(d)} go={go} fmt={fmt} countOf={countOf} totalOf={totalOf} />)}
        </div>
      </section>
    </div>
  );
}
window.CurriculumScreen = CurriculumScreen;
