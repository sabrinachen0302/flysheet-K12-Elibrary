import React from 'react';
// figma node: 62:49 Close Button (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function CloseButton(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(229,229,229)",
      position: "relative",
      color: "var(--color-text-primary)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 5,
        top: 4,
        width: 22,
        height: 24,
        overflow: "hidden",
      }}>
        <svg width={31.113} height={2} viewBox="0 -1 31.113 2" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,0,2)",
          transformOrigin: "0 0",
          width: 31.113,
          height: 2,
        }}>
          <path d={"M 1 -2 C 0.448 -2 0 -1.552 0 -1 C 0 -0.448 0.448 0 1 0 L 1 -1 L 1 -2 Z M 30.113 0 C 30.665 0 31.113 -0.448 31.113 -1 C 31.113 -1.552 30.665 -2 30.113 -2 L 30.113 -1 L 30.113 0 Z M 1 -1 L 1 0 L 30.113 0 L 30.113 -1 L 30.113 -2 L 1 -2 L 1 -1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={31.113} height={2} viewBox="0 -1 31.113 2" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,-0.707,-0.707,-0.707,0,22)",
          transformOrigin: "0 0",
          width: 31.113,
          height: 2,
        }}>
          <path d={"M 1 -2 C 0.448 -2 0 -1.552 0 -1 C 0 -0.448 0.448 0 1 0 L 1 -1 L 1 -2 Z M 30.113 0 C 30.665 0 31.113 -0.448 31.113 -1 C 31.113 -1.552 30.665 -2 30.113 -2 L 30.113 -1 L 30.113 0 Z M 1 -1 L 1 0 L 30.113 0 L 30.113 -1 L 30.113 -2 L 1 -2 L 1 -1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-background-white)",
      position: "relative",
      color: "rgb(17,17,17)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 5,
        top: 4,
        width: 22,
        height: 24,
        overflow: "hidden",
      }}>
        <svg width={31.113} height={2} viewBox="0 -1 31.113 2" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,0,2)",
          transformOrigin: "0 0",
          width: 31.113,
          height: 2,
        }}>
          <path d={"M 1 -2 C 0.448 -2 0 -1.552 0 -1 C 0 -0.448 0.448 0 1 0 L 1 -1 L 1 -2 Z M 30.113 0 C 30.665 0 31.113 -0.448 31.113 -1 C 31.113 -1.552 30.665 -2 30.113 -2 L 30.113 -1 L 30.113 0 Z M 1 -1 L 1 0 L 30.113 0 L 30.113 -1 L 30.113 -2 L 1 -2 L 1 -1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={31.113} height={2} viewBox="0 -1 31.113 2" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,-0.707,-0.707,-0.707,0,22)",
          transformOrigin: "0 0",
          width: 31.113,
          height: 2,
        }}>
          <path d={"M 1 -2 C 0.448 -2 0 -1.552 0 -1 C 0 -0.448 0.448 0 1 0 L 1 -1 L 1 -2 Z M 30.113 0 C 30.665 0 31.113 -0.448 31.113 -1 C 31.113 -1.552 30.665 -2 30.113 -2 L 30.113 -1 L 30.113 0 Z M 1 -1 L 1 0 L 30.113 0 L 30.113 -1 L 30.113 -2 L 1 -2 L 1 -1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-background-white)",
      boxShadow: "inset 0 0 0 1px var(--color-text-primary)",
      position: "relative",
      color: "var(--color-text-secondary)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 5,
        top: 4,
        width: 22,
        height: 24,
        overflow: "hidden",
      }}>
        <svg width={31.113} height={2} viewBox="0 -1 31.113 2" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,0,2)",
          transformOrigin: "0 0",
          width: 31.113,
          height: 2,
        }}>
          <path d={"M 1 -2 C 0.448 -2 0 -1.552 0 -1 C 0 -0.448 0.448 0 1 0 L 1 -1 L 1 -2 Z M 30.113 0 C 30.665 0 31.113 -0.448 31.113 -1 C 31.113 -1.552 30.665 -2 30.113 -2 L 30.113 -1 L 30.113 0 Z M 1 -1 L 1 0 L 30.113 0 L 30.113 -1 L 30.113 -2 L 1 -2 L 1 -1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={31.113} height={2} viewBox="0 -1 31.113 2" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,-0.707,-0.707,-0.707,0,22)",
          transformOrigin: "0 0",
          width: 31.113,
          height: 2,
        }}>
          <path d={"M 1 -2 C 0.448 -2 0 -1.552 0 -1 C 0 -0.448 0.448 0 1 0 L 1 -1 L 1 -2 Z M 30.113 0 C 30.665 0 31.113 -0.448 31.113 -1 C 31.113 -1.552 30.665 -2 30.113 -2 L 30.113 -1 L 30.113 0 Z M 1 -1 L 1 0 L 30.113 0 L 30.113 -1 L 30.113 -2 L 1 -2 L 1 -1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Press
    "state=press": __body0,
    // figma: State=Hover
    "state=hover": __body1,
    // figma: State=Default
    "state=default": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default CloseButton;
