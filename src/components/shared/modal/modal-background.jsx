import React from 'react';
import './modal.css';

export default function ModalBackground({
  children,
  onClickBackground,
  style,
  on = true,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget && onClickBackground) onClickBackground();
  };

  return (
    <div
      className={on ? 'modal-background' : ''}
      onClick={handleClick}
      style={style}
      onKeyDown={handleClick}
      role="presentation"
    >
      {children}
    </div>
  );
}
