import React from 'react';
import { DatabaseCard } from './DatabaseCard.jsx';

// figma node: 2068:223 Card Row (新到電子資源) (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function CardRowEResources(_p = {}) {
  const props = { ..._p, state: _p.state ?? "新到" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1344,
      height: 277,
      backgroundColor: "var(--color-background-white)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 249.6,
        overflow: "hidden",
        backgroundColor: "var(--color-background-white)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-sm)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 225,
          backgroundColor: "rgb(224,229,229)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "大英百科線上版"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "百科資料庫"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 273.6,
        top: 0,
        width: 249.6,
        overflow: "hidden",
        backgroundColor: "var(--color-background-white)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-sm)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 225,
          backgroundColor: "rgb(224,229,229)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "康軒學習雲"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "學習平台"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 547.2,
        top: 0,
        width: 249.6,
        overflow: "hidden",
        backgroundColor: "var(--color-background-white)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-sm)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 225,
          backgroundColor: "rgb(224,229,229)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>國家地理雜誌</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>電子期刊</span>
      </div>
      <div style={{
        position: "absolute",
        left: 820.8,
        top: 0,
        width: 249.6,
        overflow: "hidden",
        backgroundColor: "var(--color-background-white)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-sm)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 225,
          backgroundColor: "rgb(224,229,229)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>TED 影音資源</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>影音平台</span>
      </div>
      <div style={{
        position: "absolute",
        left: 1094.4,
        top: 0,
        width: 249.6,
        overflow: "hidden",
        backgroundColor: "var(--color-background-white)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-sm)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 225,
          backgroundColor: "rgb(224,229,229)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>未來少年雜誌</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>電子期刊</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1349,
      height: 269,
      display: "grid",
      gridTemplateRows: "1px 1px",
      gridTemplateColumns: "1px 1px",
      gap: "15px 15px",
      position: "relative",
      ...props.style,
    }}>
      <DatabaseCard
        style={{
          position: "relative",
          width: 667,
          gridRow: "1",
          gridColumn: "1",
        }}
        text1={"百科資料庫"}
        text2={"大英百科線上版"}
        text3={"查詢各領域百科全書條目，資料來源可靠。"}
      />
      <DatabaseCard
        style={{
          position: "relative",
          width: 667,
          gridRow: "1",
          gridColumn: "2",
        }}
        text1={"學習平台"}
        text2={"康軒學習雲"}
        text3={"銜接各版本教材的數位學習資源。"}
      />
      <DatabaseCard
        style={{ position: "relative", width: 667, gridRow: "1" }}
        text1={"百科資料庫"}
        text2={"資源名稱"}
        text3={"這裡放一句簡短的資源說明文字。"}
      />
      <DatabaseCard
        style={{ position: "relative", width: 667, gridRow: "1" }}
        text1={"學習平台"}
        text2={"資源名稱"}
        text3={"這裡放一句簡短的資源說明文字。"}
      />
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
export default CardRowEResources;
