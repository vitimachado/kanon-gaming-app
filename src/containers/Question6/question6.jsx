import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../../store/reducers/user_reducer';
import store from '../../store/store';
import SlotMachine from '../../components/SlotMachine';
import { ButtonLogout, WraperContainer } from './styles.jsx';

/**
 *  Component of the page that render the Slot Machine.
 *
 * @export
 * @return {function}
 */
export default function Question6() {
  const navigate = useNavigate();

  /**
   *  Method to handle the logout action.
   */
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
