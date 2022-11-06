import React from 'react';
import './modal.css';
// eslint-disable-next-line import/named
import { ModalBackground } from './modal-background';
import Card from '../card/card';

export default function Modal({ children, onClickBackground, styleCard }) {
  return (
    <ModalBackground onClickBackground={onClickBackground}>
      <Card className="card bd-1_5em" style={styleCard}>
        {children}
      </Card>
    </ModalBackground>
  );
}
