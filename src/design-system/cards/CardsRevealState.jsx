import React from 'react';
// figma node: 2176:1651 CardsRevealState (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function CardsRevealState(_p = {}) {
  const props = { ..._p, state: _p.state ?? "before" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1440,
      height: 850,
      opacity: 0,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.995,0.105,-0.105,0.995,40,30)",
        transformOrigin: "0 0",
        width: 210,
        height: 362,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.996,-0.087,0.087,0.996,270,160)",
        transformOrigin: "0 0",
        width: 140,
        height: 242,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.995,-0.105,0.105,0.995,1190,20)",
        transformOrigin: "0 0",
        width: 190,
        height: 328,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.998,0.070,-0.070,0.998,970,190)",
        transformOrigin: "0 0",
        width: 150,
        height: 259,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.996,-0.087,0.087,0.996,70,460)",
        transformOrigin: "0 0",
        width: 180,
        height: 311,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.996,0.087,-0.087,0.996,1140,440)",
        transformOrigin: "0 0",
        width: 200,
        height: 345,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.999,-0.052,0.052,0.999,480,480)",
        transformOrigin: "0 0",
        width: 160,
        height: 276,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.990,0.139,-0.139,0.990,760,40)",
        transformOrigin: "0 0",
        width: 140,
        height: 242,
        backgroundColor: "rgb(217,217,217)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1440,
      height: 850,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.995,0.105,-0.105,0.995,40,30)",
        transformOrigin: "0 0",
        width: 210,
        height: 362,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.996,-0.087,0.087,0.996,270,160)",
        transformOrigin: "0 0",
        width: 140,
        height: 242,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.995,-0.105,0.105,0.995,1190,20)",
        transformOrigin: "0 0",
        width: 190,
        height: 328,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.998,0.070,-0.070,0.998,970,190)",
        transformOrigin: "0 0",
        width: 150,
        height: 259,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.996,-0.087,0.087,0.996,70,460)",
        transformOrigin: "0 0",
        width: 180,
        height: 311,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.996,0.087,-0.087,0.996,1140,440)",
        transformOrigin: "0 0",
        width: 200,
        height: 345,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.999,-0.052,0.052,0.999,480,480)",
        transformOrigin: "0 0",
        width: 160,
        height: 276,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0.990,0.139,-0.139,0.990,760,40)",
        transformOrigin: "0 0",
        width: 140,
        height: 242,
        backgroundColor: "rgb(217,217,217)",
      }} />
    </div>
  );
  const __impls = {
    // figma: State=Before
    "state=before": __body0,
    // figma: State=Revealed
    "state=revealed": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default CardsRevealState;
