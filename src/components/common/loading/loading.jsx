import React from 'react';
import './loading.css';
import { useSelector } from 'react-redux';
import Modal from '../modal/modal';
import { loadingEnum } from '../../../constants/actions';

export default function Loading() {
  const { loadingStatus } = useSelector((state) => state.loading);

  return loadingStatus === loadingEnum.running ? (
    <Modal showCard={false}>
      <div className="loader" />
    </Modal>
  ) : null;
}
