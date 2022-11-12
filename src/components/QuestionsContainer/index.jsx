import React from 'react';
import Card from '../common/card/card';
import './style.css';

export default function QuestionsContainer({ title, children, style }) {
  return (
    <div className="wrapper">
      <h1>{title}</h1>
      <div style={style}>
        <Card>
          <div className="card-main">{children}</div>
        </Card>
      </div>
    </div>
  );
}
