import React from 'react';
import './loading.css';
import { useSelector } from 'react-redux';
import Modal from '../modal/modal';

export default function Loading() {
  const loading = useSelector((state) => {
    if (state && state.call && state.call.loading) return state.call.loading;
    return null;
  }, []);

  const loadingTemplate = loading ? (
    <Modal>
      <div className="loader" />
    </Modal>
  ) : null;

  return loadingTemplate;
}
