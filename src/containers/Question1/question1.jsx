import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/button';
import QuestionsContainer from '../../components/QuestionsContainer';
import getCountryByName from './actions';
import './question1.css';

export default function Question1() {
  const navigate = useNavigate();
  const { country } = useSelector((state) => state.countries);

  useEffect(() => {
    getCountryByName('Malta');
  }, []);

  const styleQuestionsContainer = {
    width: '40%',
    marginTop: '30px',
  };

  const handleOnClick = () => {
    navigate('/q2');
  };

  return country ? (
    <QuestionsContainer title="Question 1" style={styleQuestionsContainer}>
      <div className="wrapper">
        <h5>This application was made in {country?.name}</h5>
        <img src={country?.flag} alt="Flag" width="30%" />
        <Button onClick={handleOnClick}>Next</Button>
      </div>
    </QuestionsContainer>
  ) : null;
}
