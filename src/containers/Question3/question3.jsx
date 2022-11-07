/* eslint-disable function-paren-newline */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CountriesList from '../../components/ListCountriesComponents';
import QuestionsContainer from '../../components/QuestionsContainer';
import Button from '../../components/shared/button/button';
import Input from '../../components/shared/input/input';
import { filterArrayObjByStartsWith } from '../../utils/strings';
import getAllCountries from './actions';
import './question3.css';

export default function Question3() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const { allCountries } = useSelector((state) => state.countries);

  useEffect(() => {
    if (allCountries == null) {
      getAllCountries();
    }
  }, []);

  const handleInputOnChange = (data) => {
    console.log('handleInputOnChange', data);
    setInputValue(data);
  };

  const handleOnClick = () => {
    navigate('/q4');
  };

  const style = {
    width: '40%',
    marginTop: '30px',
  };

  return allCountries ? (
    <QuestionsContainer title="Question 3" style={style}>
      <div className="container-input-custom">
        <Input onChange={handleInputOnChange} placeholder="Filter Countries" />
      </div>
      <div className="container-list">
        <CountriesList
          countries={filterArrayObjByStartsWith(
            allCountries,
            'name',
            inputValue,
          )}
          showTitle={false}
        />
      </div>
      <Button onClick={handleOnClick}>Next</Button>
    </QuestionsContainer>
  ) : null;
}
