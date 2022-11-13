import React from 'react';
import './modal.css';
import Card from '../card/card';

export default function Modal({
  children,
  onClickBackground = () => null,
  styleBackground,
  styleCard,
  showCard = true,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget && onClickBackground) onClickBackground();
  };

  return (
    <div
      className="modal-background"
      onClick={handleClick}
      style={styleBackground}
      onKeyDown={() => null}
      role="presentation"
    >
      {showCard ? (
        <Card className="card " style={styleCard}>
          {children}
        </Card>
      ) : (
        children
      )}
    </div>
  );
}
