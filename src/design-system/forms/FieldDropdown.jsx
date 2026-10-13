import React from 'react';
import { Select } from '../core/Input.jsx';
// Legacy API → retro Select. Uncontrolled when `value` is undefined.
export function FieldDropdown({ options = ["所有欄位", "名稱", "作者", "平台", "主題"], value, placeholder = "所有欄位", onChange, defaultOpen = false, style }) {
  const [inner, setInner] = React.useState(value);
  const cur = value !== undefined ? value : inner;
  const { height, ...rest } = style || {};
  return <Select options={options} value={cur} placeholder={placeholder} defaultOpen={defaultOpen} width={150} height={typeof height === "number" ? height : 52} ariaLabel="搜尋欄位" onChange={(o) => { setInner(o); onChange && onChange(o); }} style={rest} />;
}
export default FieldDropdown;
