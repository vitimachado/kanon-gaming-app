import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CountriesList from '../../components/ListCountriesComponents';
import QuestionsContainer from '../../components/QuestionsContainer';
import Button from '../../components/shared/button/button';
import getCountriesByNames from './actions';
import './question2.css';

export default function Question2() {
  const { countries } = useSelector((state) => state.countries);

  useEffect(() => {
    if (countries == null) {
      getCountriesByNames(['Malta', 'Brazil']);
    }
  }, []);

  const style = {
    width: '40%',
    marginTop: '30px',
  };

  return countries ? (
    <QuestionsContainer title="Question 2" style={style}>
      <div className="wrapper-list">
        <CountriesList countries={countries} />
      </div>
      <Button>Next</Button>
    </QuestionsContainer>
  ) : null;
}
