import React from 'react';
import './button.css';

export default function Button({
  children,
  className = 'button',
  onClick,
  style,
}) {
  return (
    <button type="button" className={className} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
