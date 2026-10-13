import React from 'react';
// figma node: 2112:1472 篩選同步覆蓋層 (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function FilterSyncOverlay(_p = {}) {
  const props = { ..._p, state: _p.state ?? "0-0-0" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1440,
      height: 1198,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 360,
        top: 412,
        width: 126,
        height: 63,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "var(--color-background-white)",
        boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 23,
          width: 84,
          height: 18,
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
        }}>{props.text1 ?? "已套用篩選："}</span>
      </div>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 48,
        top: 329,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1.5 L 14 1.5 L 14 0 L 14 -1.5 L 4 -1.5 L 4 0 Z M 18 4 L 16.5 4 L 16.5 14 L 18 14 L 19.5 14 L 19.5 4 L 18 4 Z M 14 18 L 14 16.5 L 4 16.5 L 4 18 L 4 19.5 L 14 19.5 L 14 18 Z M 0 14 L 1.5 14 L 1.5 4 L 0 4 L -1.5 4 L -1.5 14 L 0 14 Z M 4 18 L 4 16.5 C 2.619 16.5 1.5 15.381 1.5 14 L 0 14 L -1.5 14 C -1.5 17.038 0.962 19.5 4 19.5 L 4 18 Z M 18 14 L 16.5 14 C 16.5 15.381 15.381 16.5 14 16.5 L 14 18 L 14 19.5 C 17.038 19.5 19.5 17.038 19.5 14 L 18 14 Z M 14 0 L 14 1.5 C 15.381 1.5 16.5 2.619 16.5 4 L 18 4 L 19.5 4 C 19.5 0.962 17.038 -1.5 14 -1.5 L 14 0 Z M 4 0 L 4 -1.5 C 0.962 -1.5 -1.5 0.962 -1.5 4 L 0 4 L 1.5 4 C 1.5 2.619 2.619 1.5 4 1.5 L 4 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 48,
        top: 549,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1.5 L 14 1.5 L 14 0 L 14 -1.5 L 4 -1.5 L 4 0 Z M 18 4 L 16.5 4 L 16.5 14 L 18 14 L 19.5 14 L 19.5 4 L 18 4 Z M 14 18 L 14 16.5 L 4 16.5 L 4 18 L 4 19.5 L 14 19.5 L 14 18 Z M 0 14 L 1.5 14 L 1.5 4 L 0 4 L -1.5 4 L -1.5 14 L 0 14 Z M 4 18 L 4 16.5 C 2.619 16.5 1.5 15.381 1.5 14 L 0 14 L -1.5 14 C -1.5 17.038 0.962 19.5 4 19.5 L 4 18 Z M 18 14 L 16.5 14 C 16.5 15.381 15.381 16.5 14 16.5 L 14 18 L 14 19.5 C 17.038 19.5 19.5 17.038 19.5 14 L 18 14 Z M 14 0 L 14 1.5 C 15.381 1.5 16.5 2.619 16.5 4 L 18 4 L 19.5 4 C 19.5 0.962 17.038 -1.5 14 -1.5 L 14 0 Z M 4 0 L 4 -1.5 C 0.962 -1.5 -1.5 0.962 -1.5 4 L 0 4 L 1.5 4 C 1.5 2.619 2.619 1.5 4 1.5 L 4 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 48,
        top: 467,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1.5 L 14 1.5 L 14 0 L 14 -1.5 L 4 -1.5 L 4 0 Z M 18 4 L 16.5 4 L 16.5 14 L 18 14 L 19.5 14 L 19.5 4 L 18 4 Z M 14 18 L 14 16.5 L 4 16.5 L 4 18 L 4 19.5 L 14 19.5 L 14 18 Z M 0 14 L 1.5 14 L 1.5 4 L 0 4 L -1.5 4 L -1.5 14 L 0 14 Z M 4 18 L 4 16.5 C 2.619 16.5 1.5 15.381 1.5 14 L 0 14 L -1.5 14 C -1.5 17.038 0.962 19.5 4 19.5 L 4 18 Z M 18 14 L 16.5 14 C 16.5 15.381 15.381 16.5 14 16.5 L 14 18 L 14 19.5 C 17.038 19.5 19.5 17.038 19.5 14 L 18 14 Z M 14 0 L 14 1.5 C 15.381 1.5 16.5 2.619 16.5 4 L 18 4 L 19.5 4 C 19.5 0.962 17.038 -1.5 14 -1.5 L 14 0 Z M 4 0 L 4 -1.5 C 0.962 -1.5 -1.5 0.962 -1.5 4 L 0 4 L 1.5 4 C 1.5 2.619 2.619 1.5 4 1.5 L 4 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1440,
      height: 1198,
      position: "relative",
      ...props.style,
    }}>
      <svg width={204} height={63} viewBox="0 0 204 63" fill="none" style={{
        position: "absolute",
        left: 360,
        top: 412,
        width: 204,
        height: 63,
        overflow: "hidden",
        borderRadius: 10,
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 10 C 0 4.477 4.477 0 10 0 L 194 0 C 199.523 0 204 4.477 204 10 L 204 53 C 204 58.523 199.523 63 194 63 L 10 63 C 4.477 63 0 58.523 0 53 L 0 10 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 10 0 L 10 1 L 194 1 L 194 0 L 194 -1 L 10 -1 L 10 0 Z M 204 10 L 203 10 L 203 53 L 204 53 L 205 53 L 205 10 L 204 10 Z M 194 63 L 194 62 L 10 62 L 10 63 L 10 64 L 194 64 L 194 63 Z M 0 53 L 1 53 L 1 10 L 0 10 L -1 10 L -1 53 L 0 53 Z M 10 63 L 10 62 C 5.029 62 1 57.971 1 53 L 0 53 L -1 53 C -1 59.075 3.925 64 10 64 L 10 63 Z M 204 53 L 203 53 C 203 57.971 198.971 62 194 62 L 194 63 L 194 64 C 200.075 64 205 59.075 205 53 L 204 53 Z M 194 0 L 194 1 C 198.971 1 203 5.029 203 10 L 204 10 L 205 10 C 205 3.925 200.075 -1 194 -1 L 194 0 Z M 10 0 L 10 -1 C 3.925 -1 -1 3.925 -1 10 L 0 10 L 1 10 C 1 5.029 5.029 1 10 1 L 10 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 48,
        top: 329,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1.5 L 14 1.5 L 14 0 L 14 -1.5 L 4 -1.5 L 4 0 Z M 18 4 L 16.5 4 L 16.5 14 L 18 14 L 19.5 14 L 19.5 4 L 18 4 Z M 14 18 L 14 16.5 L 4 16.5 L 4 18 L 4 19.5 L 14 19.5 L 14 18 Z M 0 14 L 1.5 14 L 1.5 4 L 0 4 L -1.5 4 L -1.5 14 L 0 14 Z M 4 18 L 4 16.5 C 2.619 16.5 1.5 15.381 1.5 14 L 0 14 L -1.5 14 C -1.5 17.038 0.962 19.5 4 19.5 L 4 18 Z M 18 14 L 16.5 14 C 16.5 15.381 15.381 16.5 14 16.5 L 14 18 L 14 19.5 C 17.038 19.5 19.5 17.038 19.5 14 L 18 14 Z M 14 0 L 14 1.5 C 15.381 1.5 16.5 2.619 16.5 4 L 18 4 L 19.5 4 C 19.5 0.962 17.038 -1.5 14 -1.5 L 14 0 Z M 4 0 L 4 -1.5 C 0.962 -1.5 -1.5 0.962 -1.5 4 L 0 4 L 1.5 4 C 1.5 2.619 2.619 1.5 4 1.5 L 4 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 48,
        top: 549,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1.5 L 14 1.5 L 14 0 L 14 -1.5 L 4 -1.5 L 4 0 Z M 18 4 L 16.5 4 L 16.5 14 L 18 14 L 19.5 14 L 19.5 4 L 18 4 Z M 14 18 L 14 16.5 L 4 16.5 L 4 18 L 4 19.5 L 14 19.5 L 14 18 Z M 0 14 L 1.5 14 L 1.5 4 L 0 4 L -1.5 4 L -1.5 14 L 0 14 Z M 4 18 L 4 16.5 C 2.619 16.5 1.5 15.381 1.5 14 L 0 14 L -1.5 14 C -1.5 17.038 0.962 19.5 4 19.5 L 4 18 Z M 18 14 L 16.5 14 C 16.5 15.381 15.381 16.5 14 16.5 L 14 18 L 14 19.5 C 17.038 19.5 19.5 17.038 19.5 14 L 18 14 Z M 14 0 L 14 1.5 C 15.381 1.5 16.5 2.619 16.5 4 L 18 4 L 19.5 4 C 19.5 0.962 17.038 -1.5 14 -1.5 L 14 0 Z M 4 0 L 4 -1.5 C 0.962 -1.5 -1.5 0.962 -1.5 4 L 0 4 L 1.5 4 C 1.5 2.619 2.619 1.5 4 1.5 L 4 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 48,
        top: 467,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-brand-primary)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-background-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "✓"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 477,
        top: 429,
        display: "flex",
        flexDirection: "row",
        gap: "var(--spacing-md)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          backgroundColor: "var(--color-background-page)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-xs)",
          padding: "6px 12px 6px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-md)",
          paddingRight: "var(--spacing-md)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.text2 ?? "青少年"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-brand-primary)",
            flexShrink: 0,
          }}>{props.text3 ?? "✕"}</span>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1440,
      height: 1198,
      position: "relative",
      ...props.style,
    }}>
      <svg width={204} height={63} viewBox="0 0 204 63" fill="none" style={{
        position: "absolute",
        left: 360,
        top: 412,
        width: 204,
        height: 63,
        overflow: "hidden",
        borderRadius: 10,
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 10 C 0 4.477 4.477 0 10 0 L 194 0 C 199.523 0 204 4.477 204 10 L 204 53 C 204 58.523 199.523 63 194 63 L 10 63 C 4.477 63 0 58.523 0 53 L 0 10 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 10 0 L 10 1 L 194 1 L 194 0 L 194 -1 L 10 -1 L 10 0 Z M 204 10 L 203 10 L 203 53 L 204 53 L 205 53 L 205 10 L 204 10 Z M 194 63 L 194 62 L 10 62 L 10 63 L 10 64 L 194 64 L 194 63 Z M 0 53 L 1 53 L 1 10 L 0 10 L -1 10 L -1 53 L 0 53 Z M 10 63 L 10 62 C 5.029 62 1 57.971 1 53 L 0 53 L -1 53 C -1 59.075 3.925 64 10 64 L 10 63 Z M 204 53 L 203 53 C 203 57.971 198.971 62 194 62 L 194 63 L 194 64 C 200.075 64 205 59.075 205 53 L 204 53 Z M 194 0 L 194 1 C 198.971 1 203 5.029 203 10 L 204 10 L 205 10 C 205 3.925 200.075 -1 194 -1 L 194 0 Z M 10 0 L 10 -1 C 3.925 -1 -1 3.925 -1 10 L 0 10 L 1 10 C 1 5.029 5.029 1 10 1 L 10 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 48,
        top: 329,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1.5 L 14 1.5 L 14 0 L 14 -1.5 L 4 -1.5 L 4 0 Z M 18 4 L 16.5 4 L 16.5 14 L 18 14 L 19.5 14 L 19.5 4 L 18 4 Z M 14 18 L 14 16.5 L 4 16.5 L 4 18 L 4 19.5 L 14 19.5 L 14 18 Z M 0 14 L 1.5 14 L 1.5 4 L 0 4 L -1.5 4 L -1.5 14 L 0 14 Z M 4 18 L 4 16.5 C 2.619 16.5 1.5 15.381 1.5 14 L 0 14 L -1.5 14 C -1.5 17.038 0.962 19.5 4 19.5 L 4 18 Z M 18 14 L 16.5 14 C 16.5 15.381 15.381 16.5 14 16.5 L 14 18 L 14 19.5 C 17.038 19.5 19.5 17.038 19.5 14 L 18 14 Z M 14 0 L 14 1.5 C 15.381 1.5 16.5 2.619 16.5 4 L 18 4 L 19.5 4 C 19.5 0.962 17.038 -1.5 14 -1.5 L 14 0 Z M 4 0 L 4 -1.5 C 0.962 -1.5 -1.5 0.962 -1.5 4 L 0 4 L 1.5 4 C 1.5 2.619 2.619 1.5 4 1.5 L 4 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 48,
        top: 549,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-brand-primary)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-background-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "✓"}</span>
      </div>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 48,
        top: 467,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1.5 L 14 1.5 L 14 0 L 14 -1.5 L 4 -1.5 L 4 0 Z M 18 4 L 16.5 4 L 16.5 14 L 18 14 L 19.5 14 L 19.5 4 L 18 4 Z M 14 18 L 14 16.5 L 4 16.5 L 4 18 L 4 19.5 L 14 19.5 L 14 18 Z M 0 14 L 1.5 14 L 1.5 4 L 0 4 L -1.5 4 L -1.5 14 L 0 14 Z M 4 18 L 4 16.5 C 2.619 16.5 1.5 15.381 1.5 14 L 0 14 L -1.5 14 C -1.5 17.038 0.962 19.5 4 19.5 L 4 18 Z M 18 14 L 16.5 14 C 16.5 15.381 15.381 16.5 14 16.5 L 14 18 L 14 19.5 C 17.038 19.5 19.5 17.038 19.5 14 L 18 14 Z M 14 0 L 14 1.5 C 15.381 1.5 16.5 2.619 16.5 4 L 18 4 L 19.5 4 C 19.5 0.962 17.038 -1.5 14 -1.5 L 14 0 Z M 4 0 L 4 -1.5 C 0.962 -1.5 -1.5 0.962 -1.5 4 L 0 4 L 1.5 4 C 1.5 2.619 2.619 1.5 4 1.5 L 4 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 477,
        top: 429,
        display: "flex",
        flexDirection: "row",
        gap: "var(--spacing-md)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          backgroundColor: "var(--color-background-page)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-xs)",
          padding: "6px 12px 6px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-md)",
          paddingRight: "var(--spacing-md)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.text2 ?? "EPUB"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-brand-primary)",
            flexShrink: 0,
          }}>{props.text3 ?? "✕"}</span>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 1440,
      height: 1198,
      position: "relative",
      ...props.style,
    }}>
      <svg width={282} height={63} viewBox="0 0 282 63" fill="none" style={{
        position: "absolute",
        left: 360,
        top: 412,
        width: 282,
        height: 63,
        overflow: "hidden",
        borderRadius: 10,
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 10 C 0 4.477 4.477 0 10 0 L 272 0 C 277.523 0 282 4.477 282 10 L 282 53 C 282 58.523 277.523 63 272 63 L 10 63 C 4.477 63 0 58.523 0 53 L 0 10 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 10 0 L 10 1 L 272 1 L 272 0 L 272 -1 L 10 -1 L 10 0 Z M 282 10 L 281 10 L 281 53 L 282 53 L 283 53 L 283 10 L 282 10 Z M 272 63 L 272 62 L 10 62 L 10 63 L 10 64 L 272 64 L 272 63 Z M 0 53 L 1 53 L 1 10 L 0 10 L -1 10 L -1 53 L 0 53 Z M 10 63 L 10 62 C 5.029 62 1 57.971 1 53 L 0 53 L -1 53 C -1 59.075 3.925 64 10 64 L 10 63 Z M 282 53 L 281 53 C 281 57.971 276.971 62 272 62 L 272 63 L 272 64 C 278.075 64 283 59.075 283 53 L 282 53 Z M 272 0 L 272 1 C 276.971 1 281 5.029 281 10 L 282 10 L 283 10 C 283 3.925 278.075 -1 272 -1 L 272 0 Z M 10 0 L 10 -1 C 3.925 -1 -1 3.925 -1 10 L 0 10 L 1 10 C 1 5.029 5.029 1 10 1 L 10 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 48,
        top: 329,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1.5 L 14 1.5 L 14 0 L 14 -1.5 L 4 -1.5 L 4 0 Z M 18 4 L 16.5 4 L 16.5 14 L 18 14 L 19.5 14 L 19.5 4 L 18 4 Z M 14 18 L 14 16.5 L 4 16.5 L 4 18 L 4 19.5 L 14 19.5 L 14 18 Z M 0 14 L 1.5 14 L 1.5 4 L 0 4 L -1.5 4 L -1.5 14 L 0 14 Z M 4 18 L 4 16.5 C 2.619 16.5 1.5 15.381 1.5 14 L 0 14 L -1.5 14 C -1.5 17.038 0.962 19.5 4 19.5 L 4 18 Z M 18 14 L 16.5 14 C 16.5 15.381 15.381 16.5 14 16.5 L 14 18 L 14 19.5 C 17.038 19.5 19.5 17.038 19.5 14 L 18 14 Z M 14 0 L 14 1.5 C 15.381 1.5 16.5 2.619 16.5 4 L 18 4 L 19.5 4 C 19.5 0.962 17.038 -1.5 14 -1.5 L 14 0 Z M 4 0 L 4 -1.5 C 0.962 -1.5 -1.5 0.962 -1.5 4 L 0 4 L 1.5 4 C 1.5 2.619 2.619 1.5 4 1.5 L 4 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 48,
        top: 549,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-brand-primary)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-background-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "✓"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 48,
        top: 467,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-brand-primary)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-background-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "✓"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 477,
        top: 429,
        display: "flex",
        flexDirection: "row",
        gap: "var(--spacing-md)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          backgroundColor: "var(--color-background-page)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-xs)",
          padding: "6px 12px 6px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-md)",
          paddingRight: "var(--spacing-md)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.text3 ?? "EPUB"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-brand-primary)",
            flexShrink: 0,
          }}>{props.text4 ?? "✕"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          backgroundColor: "var(--color-background-page)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-xs)",
          padding: "6px 12px 6px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-md)",
          paddingRight: "var(--spacing-md)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>青少年</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-brand-primary)",
            flexShrink: 0,
          }}>✕</span>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 1440,
      height: 1198,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 360,
        top: 412,
        width: 204,
        height: 63,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "var(--color-background-white)",
        boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 23,
          width: 84,
          height: 18,
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
        }}>{props.text1 ?? "已套用篩選："}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 48,
        top: 329,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-brand-primary)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-background-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "✓"}</span>
      </div>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 48,
        top: 549,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1.5 L 14 1.5 L 14 0 L 14 -1.5 L 4 -1.5 L 4 0 Z M 18 4 L 16.5 4 L 16.5 14 L 18 14 L 19.5 14 L 19.5 4 L 18 4 Z M 14 18 L 14 16.5 L 4 16.5 L 4 18 L 4 19.5 L 14 19.5 L 14 18 Z M 0 14 L 1.5 14 L 1.5 4 L 0 4 L -1.5 4 L -1.5 14 L 0 14 Z M 4 18 L 4 16.5 C 2.619 16.5 1.5 15.381 1.5 14 L 0 14 L -1.5 14 C -1.5 17.038 0.962 19.5 4 19.5 L 4 18 Z M 18 14 L 16.5 14 C 16.5 15.381 15.381 16.5 14 16.5 L 14 18 L 14 19.5 C 17.038 19.5 19.5 17.038 19.5 14 L 18 14 Z M 14 0 L 14 1.5 C 15.381 1.5 16.5 2.619 16.5 4 L 18 4 L 19.5 4 C 19.5 0.962 17.038 -1.5 14 -1.5 L 14 0 Z M 4 0 L 4 -1.5 C 0.962 -1.5 -1.5 0.962 -1.5 4 L 0 4 L 1.5 4 C 1.5 2.619 2.619 1.5 4 1.5 L 4 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 48,
        top: 467,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1.5 L 14 1.5 L 14 0 L 14 -1.5 L 4 -1.5 L 4 0 Z M 18 4 L 16.5 4 L 16.5 14 L 18 14 L 19.5 14 L 19.5 4 L 18 4 Z M 14 18 L 14 16.5 L 4 16.5 L 4 18 L 4 19.5 L 14 19.5 L 14 18 Z M 0 14 L 1.5 14 L 1.5 4 L 0 4 L -1.5 4 L -1.5 14 L 0 14 Z M 4 18 L 4 16.5 C 2.619 16.5 1.5 15.381 1.5 14 L 0 14 L -1.5 14 C -1.5 17.038 0.962 19.5 4 19.5 L 4 18 Z M 18 14 L 16.5 14 C 16.5 15.381 15.381 16.5 14 16.5 L 14 18 L 14 19.5 C 17.038 19.5 19.5 17.038 19.5 14 L 18 14 Z M 14 0 L 14 1.5 C 15.381 1.5 16.5 2.619 16.5 4 L 18 4 L 19.5 4 C 19.5 0.962 17.038 -1.5 14 -1.5 L 14 0 Z M 4 0 L 4 -1.5 C 0.962 -1.5 -1.5 0.962 -1.5 4 L 0 4 L 1.5 4 C 1.5 2.619 2.619 1.5 4 1.5 L 4 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 477,
        top: 429,
        display: "flex",
        flexDirection: "row",
        gap: "var(--spacing-md)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          backgroundColor: "var(--color-background-page)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-xs)",
          padding: "6px 12px 6px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-md)",
          paddingRight: "var(--spacing-md)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.text3 ?? "可用"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-brand-primary)",
            flexShrink: 0,
          }}>{props.text4 ?? "✕"}</span>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 1440,
      height: 1198,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 360,
        top: 412,
        width: 282,
        height: 63,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "var(--color-background-white)",
        boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 23,
          width: 84,
          height: 18,
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
        }}>{props.text1 ?? "已套用篩選："}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 48,
        top: 329,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-brand-primary)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-background-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "✓"}</span>
      </div>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 48,
        top: 549,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1.5 L 14 1.5 L 14 0 L 14 -1.5 L 4 -1.5 L 4 0 Z M 18 4 L 16.5 4 L 16.5 14 L 18 14 L 19.5 14 L 19.5 4 L 18 4 Z M 14 18 L 14 16.5 L 4 16.5 L 4 18 L 4 19.5 L 14 19.5 L 14 18 Z M 0 14 L 1.5 14 L 1.5 4 L 0 4 L -1.5 4 L -1.5 14 L 0 14 Z M 4 18 L 4 16.5 C 2.619 16.5 1.5 15.381 1.5 14 L 0 14 L -1.5 14 C -1.5 17.038 0.962 19.5 4 19.5 L 4 18 Z M 18 14 L 16.5 14 C 16.5 15.381 15.381 16.5 14 16.5 L 14 18 L 14 19.5 C 17.038 19.5 19.5 17.038 19.5 14 L 18 14 Z M 14 0 L 14 1.5 C 15.381 1.5 16.5 2.619 16.5 4 L 18 4 L 19.5 4 C 19.5 0.962 17.038 -1.5 14 -1.5 L 14 0 Z M 4 0 L 4 -1.5 C 0.962 -1.5 -1.5 0.962 -1.5 4 L 0 4 L 1.5 4 C 1.5 2.619 2.619 1.5 4 1.5 L 4 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 48,
        top: 467,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-brand-primary)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-background-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text3 ?? "✓"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 477,
        top: 429,
        display: "flex",
        flexDirection: "row",
        gap: "var(--spacing-md)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          backgroundColor: "var(--color-background-page)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-xs)",
          padding: "6px 12px 6px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-md)",
          paddingRight: "var(--spacing-md)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.text4 ?? "可用"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-brand-primary)",
            flexShrink: 0,
          }}>✕</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          backgroundColor: "var(--color-background-page)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-xs)",
          padding: "6px 12px 6px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-md)",
          paddingRight: "var(--spacing-md)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>青少年</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-brand-primary)",
            flexShrink: 0,
          }}>✕</span>
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 1440,
      height: 1198,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 360,
        top: 412,
        width: 282,
        height: 63,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "var(--color-background-white)",
        boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 23,
          width: 84,
          height: 18,
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
        }}>{props.text1 ?? "已套用篩選："}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 48,
        top: 329,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-brand-primary)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-background-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "✓"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 48,
        top: 549,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-brand-primary)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-background-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text3 ?? "✓"}</span>
      </div>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 48,
        top: 467,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        color: "var(--color-background-white)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 14 0 C 16.209 0 18 1.791 18 4 L 18 14 C 18 16.209 16.209 18 14 18 L 4 18 C 1.791 18 0 16.209 0 14 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1.5 L 14 1.5 L 14 0 L 14 -1.5 L 4 -1.5 L 4 0 Z M 18 4 L 16.5 4 L 16.5 14 L 18 14 L 19.5 14 L 19.5 4 L 18 4 Z M 14 18 L 14 16.5 L 4 16.5 L 4 18 L 4 19.5 L 14 19.5 L 14 18 Z M 0 14 L 1.5 14 L 1.5 4 L 0 4 L -1.5 4 L -1.5 14 L 0 14 Z M 4 18 L 4 16.5 C 2.619 16.5 1.5 15.381 1.5 14 L 0 14 L -1.5 14 C -1.5 17.038 0.962 19.5 4 19.5 L 4 18 Z M 18 14 L 16.5 14 C 16.5 15.381 15.381 16.5 14 16.5 L 14 18 L 14 19.5 C 17.038 19.5 19.5 17.038 19.5 14 L 18 14 Z M 14 0 L 14 1.5 C 15.381 1.5 16.5 2.619 16.5 4 L 18 4 L 19.5 4 C 19.5 0.962 17.038 -1.5 14 -1.5 L 14 0 Z M 4 0 L 4 -1.5 C 0.962 -1.5 -1.5 0.962 -1.5 4 L 0 4 L 1.5 4 C 1.5 2.619 2.619 1.5 4 1.5 L 4 0 Z"} fill="rgb(217,217,217)" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 477,
        top: 429,
        display: "flex",
        flexDirection: "row",
        gap: "var(--spacing-md)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          backgroundColor: "var(--color-background-page)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-xs)",
          padding: "6px 12px 6px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-md)",
          paddingRight: "var(--spacing-md)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.text4 ?? "可用"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-brand-primary)",
            flexShrink: 0,
          }}>✕</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          backgroundColor: "var(--color-background-page)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-xs)",
          padding: "6px 12px 6px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-md)",
          paddingRight: "var(--spacing-md)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>EPUB</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-brand-primary)",
            flexShrink: 0,
          }}>✕</span>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 1440,
      height: 1198,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 360,
        top: 412,
        width: 360,
        height: 63,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "var(--color-background-white)",
        boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 23,
          width: 84,
          height: 18,
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
        }}>{props.text1 ?? "已套用篩選："}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 48,
        top: 329,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-brand-primary)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-background-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "✓"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 48,
        top: 549,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-brand-primary)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-background-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text3 ?? "✓"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 48,
        top: 467,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-brand-primary)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-background-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text4 ?? "✓"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 477,
        top: 429,
        display: "flex",
        flexDirection: "row",
        gap: "var(--spacing-md)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          backgroundColor: "var(--color-background-page)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-xs)",
          padding: "6px 12px 6px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-md)",
          paddingRight: "var(--spacing-md)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>可用</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-brand-primary)",
            flexShrink: 0,
          }}>✕</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          backgroundColor: "var(--color-background-page)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-xs)",
          padding: "6px 12px 6px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-md)",
          paddingRight: "var(--spacing-md)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>EPUB</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-brand-primary)",
            flexShrink: 0,
          }}>✕</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          backgroundColor: "var(--color-background-page)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-xs)",
          padding: "6px 12px 6px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-md)",
          paddingRight: "var(--spacing-md)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>青少年</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-brand-primary)",
            flexShrink: 0,
          }}>✕</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=0-0-0
    "state=0-0-0": __body0,
    // figma: State=0-0-1
    "state=0-0-1": __body1,
    // figma: State=0-1-0
    "state=0-1-0": __body2,
    // figma: State=0-1-1
    "state=0-1-1": __body3,
    // figma: State=1-0-0
    "state=1-0-0": __body4,
    // figma: State=1-0-1
    "state=1-0-1": __body5,
    // figma: State=1-1-0
    "state=1-1-0": __body6,
    // figma: State=1-1-1
    "state=1-1-1": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default FilterSyncOverlay;
