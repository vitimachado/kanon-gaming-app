import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Guard from './routes/guard';
import Routes from './routes/index.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Guard>
        <Routes />
      </Guard>
    </BrowserRouter>
  );
}
