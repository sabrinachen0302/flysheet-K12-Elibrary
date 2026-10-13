import React from 'react';
import { Button } from '../core/Button.jsx';
// Legacy API → retro secondary Button (Mint fill, Primary stroke, hard shadow). `radius` is ignored (corners capped at 6px).
export function PillButton({ children = "瀏覽全部", chevron = false, radius, width, onClick, style, className }) {
  return <Button variant="secondary" tone="mint" size="sm" iconRight={chevron ? "chevron-right" : undefined} width={width} onClick={onClick} className={className} style={style}>{children}</Button>;
}
export default PillButton;
