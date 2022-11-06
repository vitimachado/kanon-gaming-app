import React, { useState, useEffect } from 'react';
import './error.css';
import { useSelector } from 'react-redux';
import Card from '../card/card';

export default function Error() {
  const [error, setError] = useState(false);
  const msg = useSelector((state) => {
    if (state && state.call && state.call.error) return state.call.error;
    return null;
  });

  useEffect(() => {
    if (msg) {
      setError(true);
      const timer = setTimeout(() => {
        setError(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
    return null;
  }, [msg]);

  const errorTemplate = error ? (
    <div className="container-error fadeout">
      <Card className="card card-1 card-error">
        <div>{msg}</div>
      </Card>
    </div>
  ) : null;

  return errorTemplate;
}
