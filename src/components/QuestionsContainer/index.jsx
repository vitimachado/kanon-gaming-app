import React from 'react';
import Card from '../common/card/card';
import './style.scss';

export default function QuestionsContainer({ title, children }) {
  return (
    <div className="wrapper">
      <h1>{title}</h1>
      <div className="card-wrapper">
        <Card>
          <div className="card-main">{children}</div>
        </Card>
      </div>
    </div>
  );
}
