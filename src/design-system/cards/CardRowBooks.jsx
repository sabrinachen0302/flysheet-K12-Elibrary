import React from 'react';
import { BookCard } from './BookCard.jsx';
import { DatabaseCard } from './DatabaseCard.jsx';

// figma node: 2068:199 Card Row (新到圖書) (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function CardRowBooks(_p = {}) {
  const props = { ..._p, state: _p.state ?? "新到" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1344,
      height: 278,
      backgroundColor: "var(--color-background-white)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 161,
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-sm)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div className="fig-asset-733f415175e96b96" style={{
          position: "relative",
          height: 226,
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
        }}>霍爾的移動城堡</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>黛安娜.韋恩.瓊斯</span>
      </div>
      <div style={{
        position: "absolute",
        left: 185,
        top: 0,
        width: 161,
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-sm)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div className="fig-asset-aa95cef3cc303cf3" style={{
          position: "relative",
          height: 226,
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
        }}>書名</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>作者</span>
      </div>
      <BookCard
        style={{
          position: "absolute",
          left: 370,
          top: 0,
          width: 161,
        }}
        title={"書名"}
        author={"作者"}
        synopsis={"這裡是這本書的簡介預留文字，滑鼠移到卡片上方即可顯示完整內容。"}
        state={"default"}
      />
      <BookCard
        style={{
          position: "absolute",
          left: 555,
          top: 0,
          width: 161,
        }}
        title={"書名"}
        author={"作者"}
        synopsis={"這裡是這本書的簡介預留文字，滑鼠移到卡片上方即可顯示完整內容。"}
        state={"default"}
      />
      <BookCard
        style={{
          position: "absolute",
          left: 740,
          top: 0,
          width: 161,
        }}
        title={"書名"}
        author={"作者"}
        synopsis={"這裡是這本書的簡介預留文字，滑鼠移到卡片上方即可顯示完整內容。"}
        state={"default"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1344,
      height: 264,
      display: "grid",
      gridTemplateRows: "1px 1px",
      gridTemplateColumns: "1px 1px",
      gap: "10px 10px",
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
        text1={"電子書"}
        text2={"霍爾的移動城堡"}
        text3={"黛安娜．韋恩．瓊斯　著　詛咒與魔法交織的成長冒險故事。"}
      />
      <DatabaseCard
        style={{
          position: "relative",
          width: 667,
          gridRow: "1",
          gridColumn: "2",
        }}
        text1={"電子書"}
        text2={"聰明管理金錢的8項任務"}
        text3={"八木陽子　著　用淺顯例子教青少年建立正確金錢觀。"}
      />
      <DatabaseCard
        style={{ position: "relative", width: 667, gridRow: "1" }}
        text1={"電子書"}
        text2={"資源名稱"}
        text3={"這裡放一句簡短的資源說明文字。"}
      />
      <DatabaseCard
        style={{ position: "relative", width: 667, gridRow: "1" }}
        text1={"電子書"}
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
export default CardRowBooks;
