import React from 'react';
export function Footer({ children, style }) {
  return <footer style={{ height: 72, width: "100%", background: "var(--color-brand-mint)", ...style }}>{children}</footer>;
}
export default Footer;
