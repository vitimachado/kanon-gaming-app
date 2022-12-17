import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { clearSnackBar } from '../../../store/reducers/loading_reducer';
import store from '../../../store/store';
import './snackbar.css';

export default function Snackbar() {
  const { snackbar } = useSelector((state) => state.loading);

  useMemo(() => {
    if (snackbar.msg) {
      setTimeout(() => store.dispatch(clearSnackBar()), snackbar.duration);
    }
  }, [snackbar]);

  return (
    <div
      className={`snackbar ${snackbar.msg ? 'show' : ''}`}
      style={snackbar.style}
    >
      {snackbar.msg}
    </div>
  );
}
