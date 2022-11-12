import React, { useState } from 'react';
import './input.css';

export default function Input({
  icon,
  name = '',
  type = 'text',
  placeholder,
  style,
  value = '',
  getRef,
  onChange = () => null,
  onClick = () => null,
  onKeyPress = () => null,
  onBlur = () => null,
}) {
  const [valueHandle, setValueHandle] = useState(value);

  return (
    <div className="container-input" style={style}>
      {icon ? <i className="material-icons">{icon}</i> : null}
      <input
        name={name}
        type={type}
        value={valueHandle}
        className="input"
        placeholder={placeholder}
        onChange={(e) => {
          setValueHandle(e.target.value);
          onChange(e);
        }}
        onClick={onClick}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        ref={getRef}
      />
    </div>
  );
}
