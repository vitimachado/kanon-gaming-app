import React from 'react';
import './card.css';

// eslint-disable-next-line object-curly-newline
export default function Card({
  children,
  className = 'card-0',
  onClick,
  style,
}) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={style}
      onKeyDown={onClick}
      role="presentation"
    >
      {children}
    </div>
  );
}
