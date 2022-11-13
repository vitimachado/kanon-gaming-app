/* eslint-disable function-paren-newline */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/button';
import Input from '../../components/common/input/input';
import CountriesList from '../../components/ListCountriesComponents';
import QuestionsContainer from '../../components/QuestionsContainer';
import { filterArrayObjByStartsWith } from '../../utils/strings';
import getAllCountries from './actions';
import './question3.css';

/**
 *  Component of the page that loads datas for a countries
 *  and has a search to filter the list.
 *
 * @export
 * @return {function}
 */
export default function Question3() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const { allCountries } = useSelector((state) => state.countries);

  /**
   *  Hook to get the initial life of cycle to call the handle
   *  to get the countries.
   */
  useEffect(() => {
    if (allCountries == null) {
      getAllCountries();
    }
  }, []);

  /**
   *  Method to handle the input value change.
   */
  const handleInputOnChange = (data) => {
    setInputValue(data.target.value);
  };

  /**
   *  Method to handle click to navigate to next page.
   */
  const handleOnClick = () => {
    navigate('/q4and5');
  };

  /**
   *  Method to handle click to navigate to previous page.
   */
  const handleBackButton = () => {
    navigate('/q2');
  };

  return allCountries ? (
    <QuestionsContainer title="Question 3">
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
      <Button className="button-fab" onClick={() => handleBackButton()}>
        Back
      </Button>
    </QuestionsContainer>
  ) : null;
}
