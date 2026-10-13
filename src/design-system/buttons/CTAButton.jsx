import React from 'react';
import { Button } from '../core/Button.jsx';
// Legacy API → retro primary Button (CTA orange, Primary stroke, hard shadow). Use once per section.
export function CTAButton({ children = "探索電子圖書館", bordered = false, icon = false, width, href, onClick, style, className }) {
  return <Button variant="primary" size="lg" iconRight={icon ? "enter" : undefined} width={width} href={href} onClick={onClick} className={className} style={style}>{children}</Button>;
}
export default CTAButton;
