import React from 'react';
import Card from '../shared/card/card';
import './style.css';

export default function QuestionsContainer({ title, children, style }) {
  return (
    <div className="wrapper">
      <h1>{title}</h1>
      <Card style={style}>
        <div className="wrapper card-main">{children}</div>
      </Card>
    </div>
  );
}
