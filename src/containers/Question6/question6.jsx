/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../../store/reducers/user_reducer';
import store from '../../store/store';
import SlotMachine from '../../components/SlotMachine';
import { ButtonLogout, WraperContainer } from './styles.jsx';

export default function Question6() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    store.dispatch(clearUser());
    navigate('/q4and5');
  };

  return (
    <WraperContainer>
      <SlotMachine />
      <ButtonLogout onClick={() => handleLogout()}>Logout</ButtonLogout>
    </WraperContainer>
  );
}
