import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/button';
import QuestionsContainer from '../../components/QuestionsContainer';
import {
  getCoinsApi,
  setCoinsApi,
  sortMachineApi,
} from '../../services/slotMachine';
import { clearUser } from '../../store/reducers/user_reducer';
import store from '../../store/store';
import './question6.css';

export default function Question6() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { coins, sortMachine } = useSelector((state) => state.slotMachine);

  useEffect(() => {
    console.log('Question6', user);
    getCoinsApi();
    sortMachineApi();
  }, []);

  useEffect(() => {
    console.log('coins, sortMachine', coins, sortMachine);
    setCoinsApi(21);
  }, [coins, sortMachine]);

  const styleQuestionsContainer = {
    width: '40%',
    marginTop: '30px',
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    store.dispatch(clearUser());
    navigate('/q4and5');
  };

  return coins ? (
    <QuestionsContainer title="Question 6" style={styleQuestionsContainer}>
      <div className="wrapper">
        {coins}
        {sortMachine ? sortMachine.map((item) => item) : null}
        <Button onClick={() => handleLogout()}>Next</Button>
      </div>
    </QuestionsContainer>
  ) : null;
}
