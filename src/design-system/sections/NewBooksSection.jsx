import React from 'react';
import { CardRowBooks } from '../cards/CardRowBooks.jsx';

// figma node: 2071:333 新到圖書內容區塊 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function NewBooksSection(_p = {}) {
  const props = { ..._p, state: _p.state ?? "新到" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1344,
      height: 336,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1100,
        top: 0,
        overflow: "hidden",
        borderRadius: 10,
        boxShadow: "inset 0 0 0 1px rgb(235,235,235)",
        display: "flex",
        flexDirection: "row",
        gap: "var(--spacing-xs)",
        padding: "4px 4px 4px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "var(--spacing-xs)",
        paddingTop: "var(--spacing-xs)",
        paddingRight: "var(--spacing-xs)",
        paddingBottom: "var(--spacing-xs)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-brand-accent)",
          display: "flex",
          flexDirection: "row",
          padding: "6px 16px 6px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-lg)",
          paddingRight: "var(--spacing-lg)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-background-white)",
            flexShrink: 0,
          }}>{props.text1 ?? "新到"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          display: "flex",
          flexDirection: "row",
          padding: "6px 16px 6px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-lg)",
          paddingRight: "var(--spacing-lg)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.text2 ?? "熱門"}</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 1248,
        top: 2,
        overflow: "hidden",
        borderRadius: 20,
        backgroundColor: "var(--color-brand-primary)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 20px 8px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "var(--spacing-xl)",
        paddingTop: "var(--spacing-sm)",
        paddingRight: "var(--spacing-xl)",
        paddingBottom: "var(--spacing-sm)",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-background-white)",
          flexShrink: 0,
        }}>{props.text3 ?? "瀏覽全部"}</span>
      </div>
      <CardRowBooks
        style={{
          position: "absolute",
          left: 0,
          top: 58,
          width: 1344,
          height: 278,
        }}
        state={"新到"}
      />
      <span style={{
        position: "absolute",
        left: 0,
        top: 1,
        width: 84,
        height: 36,
        fontFamily: "var(--font-base)",
        fontWeight: 600,
        fontSize: 28,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>{props.text4 ?? "電子書"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1344,
      height: 336,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1100,
        top: 0,
        overflow: "hidden",
        borderRadius: 10,
        boxShadow: "inset 0 0 0 1px rgb(235,235,235)",
        display: "flex",
        flexDirection: "row",
        gap: "var(--spacing-xs)",
        padding: "4px 4px 4px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "var(--spacing-xs)",
        paddingTop: "var(--spacing-xs)",
        paddingRight: "var(--spacing-xs)",
        paddingBottom: "var(--spacing-xs)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          display: "flex",
          flexDirection: "row",
          padding: "6px 16px 6px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-lg)",
          paddingRight: "var(--spacing-lg)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.text1 ?? "新到"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-brand-accent)",
          display: "flex",
          flexDirection: "row",
          padding: "6px 16px 6px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-lg)",
          paddingRight: "var(--spacing-lg)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-background-white)",
            flexShrink: 0,
          }}>{props.text2 ?? "熱門"}</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 1248,
        top: 2,
        overflow: "hidden",
        borderRadius: 20,
        backgroundColor: "var(--color-brand-primary)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 20px 8px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "var(--spacing-xl)",
        paddingTop: "var(--spacing-sm)",
        paddingRight: "var(--spacing-xl)",
        paddingBottom: "var(--spacing-sm)",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-background-white)",
          flexShrink: 0,
        }}>{props.text3 ?? "瀏覽全部"}</span>
      </div>
      <CardRowBooks
        style={{
          position: "absolute",
          left: 0,
          top: 58,
          width: 1344,
          height: 264,
        }}
        state={"熱門"}
      />
      <span style={{
        position: "absolute",
        left: 0,
        top: 1,
        width: 84,
        height: 36,
        fontFamily: "var(--font-base)",
        fontWeight: 600,
        fontSize: 28,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>{props.text4 ?? "電子書"}</span>
    </div>
  );
  const __impls = {
    // figma: State=新到
    "state=新到": __body0,
    // figma: State=熱門
    "state=熱門": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default NewBooksSection;
