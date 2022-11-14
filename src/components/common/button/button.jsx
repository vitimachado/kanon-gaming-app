import React from 'react';
import './button.scss';

export default function Button({
  children,
  className = 'button',
  onClick,
  style,
  disabled = false,
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
