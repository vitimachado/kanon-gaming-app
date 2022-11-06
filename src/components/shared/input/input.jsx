import React, { useState } from 'react';
import './input.css';

export default function Input({
  icon,
  type = 'text',
  placeholder,
  style,
  value = '',
  getRef,
  onChange,
  onClick,
  onKeyPress,
}) {
  const [valueHandle, setValueHandle] = useState(value);

  return (
    <div className="container-input" style={style}>
      {icon ? <i className="material-icons">{icon}</i> : null}
      <input
        type={type}
        value={valueHandle}
        className="input"
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e);
          setValueHandle(e.target.value);
        }}
        onClick={onClick}
        onKeyPress={onKeyPress}
        ref={getRef}
      />
    </div>
  );
}