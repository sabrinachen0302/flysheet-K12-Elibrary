import React from 'react';
import { CardRowEResources } from '../cards/CardRowEResources.jsx';

// figma node: 2075:418 新到電子資源內容區塊 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function NewEResourcesSection(_p = {}) {
  const props = { ..._p, state: _p.state ?? "新到" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1344,
      height: 336,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 1,
        width: 112,
        height: 36,
        fontFamily: "var(--font-base)",
        fontWeight: 600,
        fontSize: 28,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "電子資源"}</span>
      <div style={{
        position: "absolute",
        left: 1100,
        top: 0,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "rgb(235,235,235)",
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
          }}>{props.text2 ?? "新到"}</span>
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
          }}>{props.text3 ?? "熱門"}</span>
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
        }}>{props.text4 ?? "瀏覽全部"}</span>
      </div>
      <CardRowEResources
        style={{
          position: "absolute",
          left: 0,
          top: 58,
          width: 1344,
          height: 277,
        }}
        state={"新到"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1344,
      height: 336,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 1,
        width: 112,
        height: 36,
        fontFamily: "var(--font-base)",
        fontWeight: 600,
        fontSize: 28,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "電子資源"}</span>
      <div style={{
        position: "absolute",
        left: 1100,
        top: 0,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "rgb(235,235,235)",
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
          }}>{props.text2 ?? "新到"}</span>
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
          }}>{props.text3 ?? "熱門"}</span>
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
        }}>{props.text4 ?? "瀏覽全部"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 58,
        width: 1349,
        height: 269,
        display: "grid",
        gridTemplateRows: "1px 1px",
        gridTemplateColumns: "1px 1px",
        gap: "15px 15px",
      }}>
        <div style={{
          position: "relative",
          width: 667,
          height: 127,
          borderRadius: 12,
          backgroundColor: "var(--color-background-white)",
          boxShadow: "inset 0 0 0 1px var(--color-border-card)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-lg)",
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-lg)",
          paddingTop: "var(--spacing-lg)",
          paddingRight: "var(--spacing-lg)",
          paddingBottom: "var(--spacing-lg)",
        }}>
          <div style={{
            position: "relative",
            width: 18,
            height: 18,
            borderRadius: 4,
            boxShadow: "inset 0 0 0 1.500px rgb(153,153,153)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            width: 64,
            height: 64,
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "rgb(235,229,245)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 18,
              top: 18,
              width: 28,
              height: 28,
              borderRadius: 4,
              backgroundColor: "var(--color-brand-primary)",
            }} />
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                backgroundColor: "rgb(237,235,229)",
                display: "flex",
                flexDirection: "row",
                padding: "3px 8px 3px 8px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingLeft: "var(--spacing-sm)",
                paddingRight: "var(--spacing-sm)",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-base)",
                  fontWeight: 700,
                  fontSize: 10,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  letterSpacing: "0.050em",
                  color: "rgb(115,110,102)",
                  flexShrink: 0,
                }}>百科資料庫</span>
              </div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-base)",
              fontWeight: 700,
              fontSize: 17,
              lineHeight: "100%",
              color: "var(--color-link)",
              textDecoration: "underline",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>大英百科線上版</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-base)",
              fontWeight: 400,
              fontSize: 13,
              lineHeight: 1.399999976158142,
              color: "var(--color-text-secondary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>查詢各領域百科全書條目，資料來源可靠。</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-base)",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--color-link)",
              textDecoration: "underline",
              flexShrink: 0,
            }}>Read More</span>
          </div>
          <div style={{
            position: "relative",
            width: 160,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-md)",
            alignItems: "flex-end",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 10,
                  top: 1.333,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 4 2 L 3 2 C 3 2.552 2.552 3 2 3 L 2 4 L 2 5 C 3.657 5 5 3.657 5 2 L 4 2 Z M 2 4 L 2 3 C 1.448 3 1 2.552 1 2 L 0 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 4 Z M 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 Z M 2 0 L 2 1 C 2.552 1 3 1.448 3 2 L 4 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 2,
                  top: 6,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 4 2 L 3 2 C 3 2.552 2.552 3 2 3 L 2 4 L 2 5 C 3.657 5 5 3.657 5 2 L 4 2 Z M 2 4 L 2 3 C 1.448 3 1 2.552 1 2 L 0 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 4 Z M 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 Z M 2 0 L 2 1 C 2.552 1 3 1.448 3 2 L 4 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 10,
                  top: 10.667,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 4 2 L 3 2 C 3 2.552 2.552 3 2 3 L 2 4 L 2 5 C 3.657 5 5 3.657 5 2 L 4 2 Z M 2 4 L 2 3 C 1.448 3 1 2.552 1 2 L 0 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 4 Z M 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 Z M 2 0 L 2 1 C 2.552 1 3 1.448 3 2 L 4 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4.533} height={2.667} viewBox="0 0 4.533 2.667" fill="none" style={{
                  position: "absolute",
                  left: 5.733,
                  top: 4.333,
                  width: 4.533,
                  height: 2.667,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 2.667 L 0.507 3.529 L 5.04 0.862 L 4.533 0 L 4.026 -0.862 L -0.507 1.805 L 0 2.667 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4.533} height={2.667} viewBox="0 0 4.533 2.667" fill="none" style={{
                  position: "absolute",
                  left: 5.733,
                  top: 9,
                  width: 4.533,
                  height: 2.667,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 0 L -0.507 0.862 L 4.026 3.529 L 4.533 2.667 L 5.04 1.805 L 0.507 -0.862 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={9} height={6} viewBox="0 0 9 6" fill="none" style={{
                  position: "absolute",
                  left: 3,
                  top: 6,
                  width: 9,
                  height: 6,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 1.667 0 C 0.667 0 0 0.667 0 1.667 C 0 2.667 0.667 3.333 1.667 3.333 C 1.667 4.333 1 5 0 5 L 0 6 C 1.667 6 3 4.667 3 2.667 L 3 0 L 1.667 0 Z M 7.667 0 C 6.667 0 6 0.667 6 1.667 C 6 2.667 6.667 3.333 7.667 3.333 C 7.667 4.333 7 5 6 5 L 6 6 C 7.667 6 9 4.667 9 3 L 9 0 L 7.667 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 9.333,
                  top: 2.667,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 4 0 L 5 0 C 5 -0.552 4.552 -1 4 -1 L 4 0 Z M 3 4 C 3 4.552 3.448 5 4 5 C 4.552 5 5 4.552 5 4 L 4 4 L 3 4 Z M 0 0 L 0 1 L 4 1 L 4 0 L 4 -1 L 0 -1 L 0 0 Z M 4 0 L 3 0 L 3 4 L 4 4 L 5 4 L 5 0 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={6.667} height={6.667} viewBox="0 0 6.667 6.667" fill="none" style={{
                  position: "absolute",
                  left: 6.667,
                  top: 2.667,
                  width: 6.667,
                  height: 6.667,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 7.374 0.707 C 7.764 0.317 7.764 -0.317 7.374 -0.707 C 6.983 -1.098 6.35 -1.098 5.96 -0.707 L 6.667 0 L 7.374 0.707 Z M -0.707 5.96 C -1.098 6.35 -1.098 6.983 -0.707 7.374 C -0.317 7.764 0.317 7.764 0.707 7.374 L 0 6.667 L -0.707 5.96 Z M 6.667 0 L 5.96 -0.707 L -0.707 5.96 L 0 6.667 L 0.707 7.374 L 7.374 0.707 L 6.667 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={9.333} height={9.333} viewBox="0 0 9.333 9.333" fill="none" style={{
                  position: "absolute",
                  left: 2.667,
                  top: 4,
                  width: 9.333,
                  height: 9.333,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 10.333 5.333 C 10.333 4.781 9.886 4.333 9.333 4.333 C 8.781 4.333 8.333 4.781 8.333 5.333 L 9.333 5.333 L 10.333 5.333 Z M 9.333 9.333 L 9.333 10.333 C 9.886 10.333 10.333 9.886 10.333 9.333 L 9.333 9.333 Z M 0 9.333 L -1 9.333 C -1 9.886 -0.552 10.333 0 10.333 L 0 9.333 Z M 0 0 L 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 Z M 4 1 C 4.552 1 5 0.552 5 0 C 5 -0.552 4.552 -1 4 -1 L 4 0 L 4 1 Z M 9.333 5.333 L 8.333 5.333 L 8.333 9.333 L 9.333 9.333 L 10.333 9.333 L 10.333 5.333 L 9.333 5.333 Z M 9.333 9.333 L 9.333 8.333 L 0 8.333 L 0 9.333 L 0 10.333 L 9.333 10.333 L 9.333 9.333 Z M 0 9.333 L 1 9.333 L 1 0 L 0 0 L -1 0 L -1 9.333 L 0 9.333 Z M 0 0 L 0 1 L 4 1 L 4 0 L 4 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={8} height={12} viewBox="0 0 8 12" fill="none" style={{
                  position: "absolute",
                  left: 4,
                  top: 2,
                  width: 8,
                  height: 12,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 0 L 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 Z M 8 0 L 9 0 C 9 -0.552 8.552 -1 8 -1 L 8 0 Z M 8 12 L 7.445 12.832 C 7.752 13.037 8.147 13.056 8.472 12.882 C 8.797 12.708 9 12.369 9 12 L 8 12 Z M 4 9.333 L 4.555 8.501 C 4.219 8.277 3.781 8.277 3.445 8.501 L 4 9.333 Z M 0 12 L -1 12 C -1 12.369 -0.797 12.708 -0.472 12.882 C -0.147 13.056 0.248 13.037 0.555 12.832 L 0 12 Z M 0 0 L 0 1 L 8 1 L 8 0 L 8 -1 L 0 -1 L 0 0 Z M 8 0 L 7 0 L 7 12 L 8 12 L 9 12 L 9 0 L 8 0 Z M 8 12 L 8.555 11.168 L 4.555 8.501 L 4 9.333 L 3.445 10.165 L 7.445 12.832 L 8 12 Z M 4 9.333 L 3.445 8.501 L -0.555 11.168 L 0 12 L 0.555 12.832 L 4.555 10.165 L 4 9.333 Z M 0 12 L 1 12 L 1 0 L 0 0 L -1 0 L -1 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 20,
              backgroundColor: "var(--color-brand-primary)",
              display: "flex",
              flexDirection: "row",
              padding: "10px 20px 10px 20px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              paddingLeft: "var(--spacing-xl)",
              paddingRight: "var(--spacing-xl)",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-base)",
                fontWeight: 700,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--color-background-white)",
                flexShrink: 0,
              }}>前往查詢</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 667,
          height: 127,
          borderRadius: 12,
          backgroundColor: "var(--color-background-white)",
          boxShadow: "inset 0 0 0 1px var(--color-border-card)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-lg)",
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-lg)",
          paddingTop: "var(--spacing-lg)",
          paddingRight: "var(--spacing-lg)",
          paddingBottom: "var(--spacing-lg)",
        }}>
          <div style={{
            position: "relative",
            width: 18,
            height: 18,
            borderRadius: 4,
            boxShadow: "inset 0 0 0 1.500px rgb(153,153,153)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            width: 64,
            height: 64,
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "rgb(235,229,245)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 18,
              top: 18,
              width: 28,
              height: 28,
              borderRadius: 4,
              backgroundColor: "var(--color-brand-primary)",
            }} />
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                backgroundColor: "rgb(237,235,229)",
                display: "flex",
                flexDirection: "row",
                padding: "3px 8px 3px 8px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingLeft: "var(--spacing-sm)",
                paddingRight: "var(--spacing-sm)",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-base)",
                  fontWeight: 700,
                  fontSize: 10,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  letterSpacing: "0.050em",
                  color: "rgb(115,110,102)",
                  flexShrink: 0,
                }}>學習平台</span>
              </div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-base)",
              fontWeight: 700,
              fontSize: 17,
              lineHeight: "100%",
              color: "var(--color-link)",
              textDecoration: "underline",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>康軒學習雲</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-base)",
              fontWeight: 400,
              fontSize: 13,
              lineHeight: 1.399999976158142,
              color: "var(--color-text-secondary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>銜接各版本教材的數位學習資源。</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-base)",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--color-link)",
              textDecoration: "underline",
              flexShrink: 0,
            }}>Read More</span>
          </div>
          <div style={{
            position: "relative",
            width: 160,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-md)",
            alignItems: "flex-end",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 10,
                  top: 1.333,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 4 2 L 3 2 C 3 2.552 2.552 3 2 3 L 2 4 L 2 5 C 3.657 5 5 3.657 5 2 L 4 2 Z M 2 4 L 2 3 C 1.448 3 1 2.552 1 2 L 0 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 4 Z M 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 Z M 2 0 L 2 1 C 2.552 1 3 1.448 3 2 L 4 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 2,
                  top: 6,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 4 2 L 3 2 C 3 2.552 2.552 3 2 3 L 2 4 L 2 5 C 3.657 5 5 3.657 5 2 L 4 2 Z M 2 4 L 2 3 C 1.448 3 1 2.552 1 2 L 0 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 4 Z M 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 Z M 2 0 L 2 1 C 2.552 1 3 1.448 3 2 L 4 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 10,
                  top: 10.667,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 4 2 L 3 2 C 3 2.552 2.552 3 2 3 L 2 4 L 2 5 C 3.657 5 5 3.657 5 2 L 4 2 Z M 2 4 L 2 3 C 1.448 3 1 2.552 1 2 L 0 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 4 Z M 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 Z M 2 0 L 2 1 C 2.552 1 3 1.448 3 2 L 4 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4.533} height={2.667} viewBox="0 0 4.533 2.667" fill="none" style={{
                  position: "absolute",
                  left: 5.733,
                  top: 4.333,
                  width: 4.533,
                  height: 2.667,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 2.667 L 0.507 3.529 L 5.04 0.862 L 4.533 0 L 4.026 -0.862 L -0.507 1.805 L 0 2.667 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4.533} height={2.667} viewBox="0 0 4.533 2.667" fill="none" style={{
                  position: "absolute",
                  left: 5.733,
                  top: 9,
                  width: 4.533,
                  height: 2.667,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 0 L -0.507 0.862 L 4.026 3.529 L 4.533 2.667 L 5.04 1.805 L 0.507 -0.862 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={9} height={6} viewBox="0 0 9 6" fill="none" style={{
                  position: "absolute",
                  left: 3,
                  top: 6,
                  width: 9,
                  height: 6,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 1.667 0 C 0.667 0 0 0.667 0 1.667 C 0 2.667 0.667 3.333 1.667 3.333 C 1.667 4.333 1 5 0 5 L 0 6 C 1.667 6 3 4.667 3 2.667 L 3 0 L 1.667 0 Z M 7.667 0 C 6.667 0 6 0.667 6 1.667 C 6 2.667 6.667 3.333 7.667 3.333 C 7.667 4.333 7 5 6 5 L 6 6 C 7.667 6 9 4.667 9 3 L 9 0 L 7.667 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 9.333,
                  top: 2.667,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 4 0 L 5 0 C 5 -0.552 4.552 -1 4 -1 L 4 0 Z M 3 4 C 3 4.552 3.448 5 4 5 C 4.552 5 5 4.552 5 4 L 4 4 L 3 4 Z M 0 0 L 0 1 L 4 1 L 4 0 L 4 -1 L 0 -1 L 0 0 Z M 4 0 L 3 0 L 3 4 L 4 4 L 5 4 L 5 0 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={6.667} height={6.667} viewBox="0 0 6.667 6.667" fill="none" style={{
                  position: "absolute",
                  left: 6.667,
                  top: 2.667,
                  width: 6.667,
                  height: 6.667,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 7.374 0.707 C 7.764 0.317 7.764 -0.317 7.374 -0.707 C 6.983 -1.098 6.35 -1.098 5.96 -0.707 L 6.667 0 L 7.374 0.707 Z M -0.707 5.96 C -1.098 6.35 -1.098 6.983 -0.707 7.374 C -0.317 7.764 0.317 7.764 0.707 7.374 L 0 6.667 L -0.707 5.96 Z M 6.667 0 L 5.96 -0.707 L -0.707 5.96 L 0 6.667 L 0.707 7.374 L 7.374 0.707 L 6.667 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={9.333} height={9.333} viewBox="0 0 9.333 9.333" fill="none" style={{
                  position: "absolute",
                  left: 2.667,
                  top: 4,
                  width: 9.333,
                  height: 9.333,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 10.333 5.333 C 10.333 4.781 9.886 4.333 9.333 4.333 C 8.781 4.333 8.333 4.781 8.333 5.333 L 9.333 5.333 L 10.333 5.333 Z M 9.333 9.333 L 9.333 10.333 C 9.886 10.333 10.333 9.886 10.333 9.333 L 9.333 9.333 Z M 0 9.333 L -1 9.333 C -1 9.886 -0.552 10.333 0 10.333 L 0 9.333 Z M 0 0 L 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 Z M 4 1 C 4.552 1 5 0.552 5 0 C 5 -0.552 4.552 -1 4 -1 L 4 0 L 4 1 Z M 9.333 5.333 L 8.333 5.333 L 8.333 9.333 L 9.333 9.333 L 10.333 9.333 L 10.333 5.333 L 9.333 5.333 Z M 9.333 9.333 L 9.333 8.333 L 0 8.333 L 0 9.333 L 0 10.333 L 9.333 10.333 L 9.333 9.333 Z M 0 9.333 L 1 9.333 L 1 0 L 0 0 L -1 0 L -1 9.333 L 0 9.333 Z M 0 0 L 0 1 L 4 1 L 4 0 L 4 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={8} height={12} viewBox="0 0 8 12" fill="none" style={{
                  position: "absolute",
                  left: 4,
                  top: 2,
                  width: 8,
                  height: 12,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 0 L 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 Z M 8 0 L 9 0 C 9 -0.552 8.552 -1 8 -1 L 8 0 Z M 8 12 L 7.445 12.832 C 7.752 13.037 8.147 13.056 8.472 12.882 C 8.797 12.708 9 12.369 9 12 L 8 12 Z M 4 9.333 L 4.555 8.501 C 4.219 8.277 3.781 8.277 3.445 8.501 L 4 9.333 Z M 0 12 L -1 12 C -1 12.369 -0.797 12.708 -0.472 12.882 C -0.147 13.056 0.248 13.037 0.555 12.832 L 0 12 Z M 0 0 L 0 1 L 8 1 L 8 0 L 8 -1 L 0 -1 L 0 0 Z M 8 0 L 7 0 L 7 12 L 8 12 L 9 12 L 9 0 L 8 0 Z M 8 12 L 8.555 11.168 L 4.555 8.501 L 4 9.333 L 3.445 10.165 L 7.445 12.832 L 8 12 Z M 4 9.333 L 3.445 8.501 L -0.555 11.168 L 0 12 L 0.555 12.832 L 4.555 10.165 L 4 9.333 Z M 0 12 L 1 12 L 1 0 L 0 0 L -1 0 L -1 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 20,
              backgroundColor: "var(--color-brand-primary)",
              display: "flex",
              flexDirection: "row",
              padding: "10px 20px 10px 20px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              paddingLeft: "var(--spacing-xl)",
              paddingRight: "var(--spacing-xl)",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-base)",
                fontWeight: 700,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--color-background-white)",
                flexShrink: 0,
              }}>前往查詢</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 667,
          height: 127,
          borderRadius: 12,
          backgroundColor: "var(--color-background-white)",
          boxShadow: "inset 0 0 0 1px var(--color-border-card)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-lg)",
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-lg)",
          paddingTop: "var(--spacing-lg)",
          paddingRight: "var(--spacing-lg)",
          paddingBottom: "var(--spacing-lg)",
        }}>
          <div style={{
            position: "relative",
            width: 18,
            height: 18,
            borderRadius: 4,
            boxShadow: "inset 0 0 0 1.500px rgb(153,153,153)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            width: 64,
            height: 64,
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "rgb(235,229,245)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 18,
              top: 18,
              width: 28,
              height: 28,
              borderRadius: 4,
              backgroundColor: "var(--color-brand-primary)",
            }} />
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                backgroundColor: "rgb(237,235,229)",
                display: "flex",
                flexDirection: "row",
                padding: "3px 8px 3px 8px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingLeft: "var(--spacing-sm)",
                paddingRight: "var(--spacing-sm)",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-base)",
                  fontWeight: 700,
                  fontSize: 10,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  letterSpacing: "0.050em",
                  color: "rgb(115,110,102)",
                  flexShrink: 0,
                }}>百科資料庫</span>
              </div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-base)",
              fontWeight: 700,
              fontSize: 17,
              lineHeight: "100%",
              color: "var(--color-link)",
              textDecoration: "underline",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>資源名稱</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-base)",
              fontWeight: 400,
              fontSize: 13,
              lineHeight: 1.399999976158142,
              color: "var(--color-text-secondary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>這裡放一句簡短的資源說明文字。</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-base)",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--color-link)",
              textDecoration: "underline",
              flexShrink: 0,
            }}>Read More</span>
          </div>
          <div style={{
            position: "relative",
            width: 160,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-md)",
            alignItems: "flex-end",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 10,
                  top: 1.333,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 4 2 L 3 2 C 3 2.552 2.552 3 2 3 L 2 4 L 2 5 C 3.657 5 5 3.657 5 2 L 4 2 Z M 2 4 L 2 3 C 1.448 3 1 2.552 1 2 L 0 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 4 Z M 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 Z M 2 0 L 2 1 C 2.552 1 3 1.448 3 2 L 4 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 2,
                  top: 6,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 4 2 L 3 2 C 3 2.552 2.552 3 2 3 L 2 4 L 2 5 C 3.657 5 5 3.657 5 2 L 4 2 Z M 2 4 L 2 3 C 1.448 3 1 2.552 1 2 L 0 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 4 Z M 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 Z M 2 0 L 2 1 C 2.552 1 3 1.448 3 2 L 4 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 10,
                  top: 10.667,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 4 2 L 3 2 C 3 2.552 2.552 3 2 3 L 2 4 L 2 5 C 3.657 5 5 3.657 5 2 L 4 2 Z M 2 4 L 2 3 C 1.448 3 1 2.552 1 2 L 0 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 4 Z M 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 Z M 2 0 L 2 1 C 2.552 1 3 1.448 3 2 L 4 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4.533} height={2.667} viewBox="0 0 4.533 2.667" fill="none" style={{
                  position: "absolute",
                  left: 5.733,
                  top: 4.333,
                  width: 4.533,
                  height: 2.667,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 2.667 L 0.507 3.529 L 5.04 0.862 L 4.533 0 L 4.026 -0.862 L -0.507 1.805 L 0 2.667 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4.533} height={2.667} viewBox="0 0 4.533 2.667" fill="none" style={{
                  position: "absolute",
                  left: 5.733,
                  top: 9,
                  width: 4.533,
                  height: 2.667,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 0 L -0.507 0.862 L 4.026 3.529 L 4.533 2.667 L 5.04 1.805 L 0.507 -0.862 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={9} height={6} viewBox="0 0 9 6" fill="none" style={{
                  position: "absolute",
                  left: 3,
                  top: 6,
                  width: 9,
                  height: 6,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 1.667 0 C 0.667 0 0 0.667 0 1.667 C 0 2.667 0.667 3.333 1.667 3.333 C 1.667 4.333 1 5 0 5 L 0 6 C 1.667 6 3 4.667 3 2.667 L 3 0 L 1.667 0 Z M 7.667 0 C 6.667 0 6 0.667 6 1.667 C 6 2.667 6.667 3.333 7.667 3.333 C 7.667 4.333 7 5 6 5 L 6 6 C 7.667 6 9 4.667 9 3 L 9 0 L 7.667 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 9.333,
                  top: 2.667,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 4 0 L 5 0 C 5 -0.552 4.552 -1 4 -1 L 4 0 Z M 3 4 C 3 4.552 3.448 5 4 5 C 4.552 5 5 4.552 5 4 L 4 4 L 3 4 Z M 0 0 L 0 1 L 4 1 L 4 0 L 4 -1 L 0 -1 L 0 0 Z M 4 0 L 3 0 L 3 4 L 4 4 L 5 4 L 5 0 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={6.667} height={6.667} viewBox="0 0 6.667 6.667" fill="none" style={{
                  position: "absolute",
                  left: 6.667,
                  top: 2.667,
                  width: 6.667,
                  height: 6.667,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 7.374 0.707 C 7.764 0.317 7.764 -0.317 7.374 -0.707 C 6.983 -1.098 6.35 -1.098 5.96 -0.707 L 6.667 0 L 7.374 0.707 Z M -0.707 5.96 C -1.098 6.35 -1.098 6.983 -0.707 7.374 C -0.317 7.764 0.317 7.764 0.707 7.374 L 0 6.667 L -0.707 5.96 Z M 6.667 0 L 5.96 -0.707 L -0.707 5.96 L 0 6.667 L 0.707 7.374 L 7.374 0.707 L 6.667 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={9.333} height={9.333} viewBox="0 0 9.333 9.333" fill="none" style={{
                  position: "absolute",
                  left: 2.667,
                  top: 4,
                  width: 9.333,
                  height: 9.333,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 10.333 5.333 C 10.333 4.781 9.886 4.333 9.333 4.333 C 8.781 4.333 8.333 4.781 8.333 5.333 L 9.333 5.333 L 10.333 5.333 Z M 9.333 9.333 L 9.333 10.333 C 9.886 10.333 10.333 9.886 10.333 9.333 L 9.333 9.333 Z M 0 9.333 L -1 9.333 C -1 9.886 -0.552 10.333 0 10.333 L 0 9.333 Z M 0 0 L 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 Z M 4 1 C 4.552 1 5 0.552 5 0 C 5 -0.552 4.552 -1 4 -1 L 4 0 L 4 1 Z M 9.333 5.333 L 8.333 5.333 L 8.333 9.333 L 9.333 9.333 L 10.333 9.333 L 10.333 5.333 L 9.333 5.333 Z M 9.333 9.333 L 9.333 8.333 L 0 8.333 L 0 9.333 L 0 10.333 L 9.333 10.333 L 9.333 9.333 Z M 0 9.333 L 1 9.333 L 1 0 L 0 0 L -1 0 L -1 9.333 L 0 9.333 Z M 0 0 L 0 1 L 4 1 L 4 0 L 4 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={8} height={12} viewBox="0 0 8 12" fill="none" style={{
                  position: "absolute",
                  left: 4,
                  top: 2,
                  width: 8,
                  height: 12,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 0 L 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 Z M 8 0 L 9 0 C 9 -0.552 8.552 -1 8 -1 L 8 0 Z M 8 12 L 7.445 12.832 C 7.752 13.037 8.147 13.056 8.472 12.882 C 8.797 12.708 9 12.369 9 12 L 8 12 Z M 4 9.333 L 4.555 8.501 C 4.219 8.277 3.781 8.277 3.445 8.501 L 4 9.333 Z M 0 12 L -1 12 C -1 12.369 -0.797 12.708 -0.472 12.882 C -0.147 13.056 0.248 13.037 0.555 12.832 L 0 12 Z M 0 0 L 0 1 L 8 1 L 8 0 L 8 -1 L 0 -1 L 0 0 Z M 8 0 L 7 0 L 7 12 L 8 12 L 9 12 L 9 0 L 8 0 Z M 8 12 L 8.555 11.168 L 4.555 8.501 L 4 9.333 L 3.445 10.165 L 7.445 12.832 L 8 12 Z M 4 9.333 L 3.445 8.501 L -0.555 11.168 L 0 12 L 0.555 12.832 L 4.555 10.165 L 4 9.333 Z M 0 12 L 1 12 L 1 0 L 0 0 L -1 0 L -1 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 20,
              backgroundColor: "var(--color-brand-primary)",
              display: "flex",
              flexDirection: "row",
              padding: "10px 20px 10px 20px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              paddingLeft: "var(--spacing-xl)",
              paddingRight: "var(--spacing-xl)",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-base)",
                fontWeight: 700,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--color-background-white)",
                flexShrink: 0,
              }}>前往查詢</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 667,
          height: 127,
          borderRadius: 12,
          backgroundColor: "var(--color-background-white)",
          boxShadow: "inset 0 0 0 1px var(--color-border-card)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--spacing-lg)",
          padding: "16px 16px 16px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "var(--spacing-lg)",
          paddingTop: "var(--spacing-lg)",
          paddingRight: "var(--spacing-lg)",
          paddingBottom: "var(--spacing-lg)",
        }}>
          <div style={{
            position: "relative",
            width: 18,
            height: 18,
            borderRadius: 4,
            boxShadow: "inset 0 0 0 1.500px rgb(153,153,153)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            width: 64,
            height: 64,
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "rgb(235,229,245)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 18,
              top: 18,
              width: 28,
              height: 28,
              borderRadius: 4,
              backgroundColor: "var(--color-brand-primary)",
            }} />
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                backgroundColor: "rgb(237,235,229)",
                display: "flex",
                flexDirection: "row",
                padding: "3px 8px 3px 8px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                paddingLeft: "var(--spacing-sm)",
                paddingRight: "var(--spacing-sm)",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-base)",
                  fontWeight: 700,
                  fontSize: 10,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  letterSpacing: "0.050em",
                  color: "rgb(115,110,102)",
                  flexShrink: 0,
                }}>學習平台</span>
              </div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-base)",
              fontWeight: 700,
              fontSize: 17,
              lineHeight: "100%",
              color: "var(--color-link)",
              textDecoration: "underline",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>資源名稱</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-base)",
              fontWeight: 400,
              fontSize: 13,
              lineHeight: 1.399999976158142,
              color: "var(--color-text-secondary)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>這裡放一句簡短的資源說明文字。</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-base)",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--color-link)",
              textDecoration: "underline",
              flexShrink: 0,
            }}>Read More</span>
          </div>
          <div style={{
            position: "relative",
            width: 160,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-md)",
            alignItems: "flex-end",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 10,
                  top: 1.333,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 4 2 L 3 2 C 3 2.552 2.552 3 2 3 L 2 4 L 2 5 C 3.657 5 5 3.657 5 2 L 4 2 Z M 2 4 L 2 3 C 1.448 3 1 2.552 1 2 L 0 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 4 Z M 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 Z M 2 0 L 2 1 C 2.552 1 3 1.448 3 2 L 4 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 2,
                  top: 6,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 4 2 L 3 2 C 3 2.552 2.552 3 2 3 L 2 4 L 2 5 C 3.657 5 5 3.657 5 2 L 4 2 Z M 2 4 L 2 3 C 1.448 3 1 2.552 1 2 L 0 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 4 Z M 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 Z M 2 0 L 2 1 C 2.552 1 3 1.448 3 2 L 4 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 10,
                  top: 10.667,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 4 2 L 3 2 C 3 2.552 2.552 3 2 3 L 2 4 L 2 5 C 3.657 5 5 3.657 5 2 L 4 2 Z M 2 4 L 2 3 C 1.448 3 1 2.552 1 2 L 0 2 L -1 2 C -1 3.657 0.343 5 2 5 L 2 4 Z M 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 Z M 2 0 L 2 1 C 2.552 1 3 1.448 3 2 L 4 2 L 5 2 C 5 0.343 3.657 -1 2 -1 L 2 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4.533} height={2.667} viewBox="0 0 4.533 2.667" fill="none" style={{
                  position: "absolute",
                  left: 5.733,
                  top: 4.333,
                  width: 4.533,
                  height: 2.667,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 2.667 L 0.507 3.529 L 5.04 0.862 L 4.533 0 L 4.026 -0.862 L -0.507 1.805 L 0 2.667 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={4.533} height={2.667} viewBox="0 0 4.533 2.667" fill="none" style={{
                  position: "absolute",
                  left: 5.733,
                  top: 9,
                  width: 4.533,
                  height: 2.667,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 0 L -0.507 0.862 L 4.026 3.529 L 4.533 2.667 L 5.04 1.805 L 0.507 -0.862 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={9} height={6} viewBox="0 0 9 6" fill="none" style={{
                  position: "absolute",
                  left: 3,
                  top: 6,
                  width: 9,
                  height: 6,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 1.667 0 C 0.667 0 0 0.667 0 1.667 C 0 2.667 0.667 3.333 1.667 3.333 C 1.667 4.333 1 5 0 5 L 0 6 C 1.667 6 3 4.667 3 2.667 L 3 0 L 1.667 0 Z M 7.667 0 C 6.667 0 6 0.667 6 1.667 C 6 2.667 6.667 3.333 7.667 3.333 C 7.667 4.333 7 5 6 5 L 6 6 C 7.667 6 9 4.667 9 3 L 9 0 L 7.667 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={4} height={4} viewBox="0 0 4 4" fill="none" style={{
                  position: "absolute",
                  left: 9.333,
                  top: 2.667,
                  width: 4,
                  height: 4,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 4 0 L 5 0 C 5 -0.552 4.552 -1 4 -1 L 4 0 Z M 3 4 C 3 4.552 3.448 5 4 5 C 4.552 5 5 4.552 5 4 L 4 4 L 3 4 Z M 0 0 L 0 1 L 4 1 L 4 0 L 4 -1 L 0 -1 L 0 0 Z M 4 0 L 3 0 L 3 4 L 4 4 L 5 4 L 5 0 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={6.667} height={6.667} viewBox="0 0 6.667 6.667" fill="none" style={{
                  position: "absolute",
                  left: 6.667,
                  top: 2.667,
                  width: 6.667,
                  height: 6.667,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 7.374 0.707 C 7.764 0.317 7.764 -0.317 7.374 -0.707 C 6.983 -1.098 6.35 -1.098 5.96 -0.707 L 6.667 0 L 7.374 0.707 Z M -0.707 5.96 C -1.098 6.35 -1.098 6.983 -0.707 7.374 C -0.317 7.764 0.317 7.764 0.707 7.374 L 0 6.667 L -0.707 5.96 Z M 6.667 0 L 5.96 -0.707 L -0.707 5.96 L 0 6.667 L 0.707 7.374 L 7.374 0.707 L 6.667 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={9.333} height={9.333} viewBox="0 0 9.333 9.333" fill="none" style={{
                  position: "absolute",
                  left: 2.667,
                  top: 4,
                  width: 9.333,
                  height: 9.333,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 10.333 5.333 C 10.333 4.781 9.886 4.333 9.333 4.333 C 8.781 4.333 8.333 4.781 8.333 5.333 L 9.333 5.333 L 10.333 5.333 Z M 9.333 9.333 L 9.333 10.333 C 9.886 10.333 10.333 9.886 10.333 9.333 L 9.333 9.333 Z M 0 9.333 L -1 9.333 C -1 9.886 -0.552 10.333 0 10.333 L 0 9.333 Z M 0 0 L 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 Z M 4 1 C 4.552 1 5 0.552 5 0 C 5 -0.552 4.552 -1 4 -1 L 4 0 L 4 1 Z M 9.333 5.333 L 8.333 5.333 L 8.333 9.333 L 9.333 9.333 L 10.333 9.333 L 10.333 5.333 L 9.333 5.333 Z M 9.333 9.333 L 9.333 8.333 L 0 8.333 L 0 9.333 L 0 10.333 L 9.333 10.333 L 9.333 9.333 Z M 0 9.333 L 1 9.333 L 1 0 L 0 0 L -1 0 L -1 9.333 L 0 9.333 Z M 0 0 L 0 1 L 4 1 L 4 0 L 4 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={8} height={12} viewBox="0 0 8 12" fill="none" style={{
                  position: "absolute",
                  left: 4,
                  top: 2,
                  width: 8,
                  height: 12,
                  color: "rgb(115,115,115)",
                }}>
                  <path d={"M 0 0 L 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 Z M 8 0 L 9 0 C 9 -0.552 8.552 -1 8 -1 L 8 0 Z M 8 12 L 7.445 12.832 C 7.752 13.037 8.147 13.056 8.472 12.882 C 8.797 12.708 9 12.369 9 12 L 8 12 Z M 4 9.333 L 4.555 8.501 C 4.219 8.277 3.781 8.277 3.445 8.501 L 4 9.333 Z M 0 12 L -1 12 C -1 12.369 -0.797 12.708 -0.472 12.882 C -0.147 13.056 0.248 13.037 0.555 12.832 L 0 12 Z M 0 0 L 0 1 L 8 1 L 8 0 L 8 -1 L 0 -1 L 0 0 Z M 8 0 L 7 0 L 7 12 L 8 12 L 9 12 L 9 0 L 8 0 Z M 8 12 L 8.555 11.168 L 4.555 8.501 L 4 9.333 L 3.445 10.165 L 7.445 12.832 L 8 12 Z M 4 9.333 L 3.445 8.501 L -0.555 11.168 L 0 12 L 0.555 12.832 L 4.555 10.165 L 4 9.333 Z M 0 12 L 1 12 L 1 0 L 0 0 L -1 0 L -1 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 20,
              backgroundColor: "var(--color-brand-primary)",
              display: "flex",
              flexDirection: "row",
              padding: "10px 20px 10px 20px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              paddingLeft: "var(--spacing-xl)",
              paddingRight: "var(--spacing-xl)",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-base)",
                fontWeight: 700,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--color-background-white)",
                flexShrink: 0,
              }}>前往查詢</span>
            </div>
          </div>
        </div>
      </div>
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
export default NewEResourcesSection;
