/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/button';
import { clearUser } from '../../store/reducers/user_reducer';
import store from '../../store/store';
import SlotMachine from '../../components/SlotMachine';
import './question6.css';

export default function Question6() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    console.log(user);
    localStorage.removeItem('token');
    store.dispatch(clearUser());
    navigate('/q4and5');
  };

  return (
    <div className="wrapper">
      <SlotMachine />
      <Button onClick={() => handleLogout()}>Logout</Button>
    </div>
  );
}
