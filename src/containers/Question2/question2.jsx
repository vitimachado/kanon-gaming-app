import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/button';
import CountriesList from '../../components/ListCountriesComponents';
import QuestionsContainer from '../../components/QuestionsContainer';
import getCountriesByNames from './actions';
import './question2.css';

export default function Question2() {
  const navigate = useNavigate();
  const { countries } = useSelector((state) => state.countries);

  useEffect(() => {
    if (countries == null) {
      getCountriesByNames(['Malta', 'Brazil', 'Hungary', 'Belgium', 'Croatia']);
    }
  }, []);

  const handleOnClick = () => {
    navigate('/q3');
  };

  const handleBackButton = () => {
    navigate('/q1');
  };

  return countries ? (
    <QuestionsContainer title="Question 2">
      <div className="container-list">
        <CountriesList countries={countries} />
      </div>
      <Button onClick={handleOnClick}>Next</Button>
      <Button className="button-fab" onClick={() => handleBackButton()}>
        Back
      </Button>
    </QuestionsContainer>
  ) : null;
}
