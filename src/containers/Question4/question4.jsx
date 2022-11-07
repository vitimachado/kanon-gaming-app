/* eslint-disable function-paren-newline */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionsContainer from '../../components/QuestionsContainer';
import Button from '../../components/shared/button/button';
import Input from '../../components/shared/input/input';
import './question4.css';

export default function Question4() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const handleInputOnChange = (data) => {
    console.log('handleInputOnChange', data, inputValue);
    setInputValue(data);
  };

  const handleOnClick = () => {
    navigate('/q4');
  };

  const style = {
    width: '40%',
    marginTop: '30px',
  };

  return (
    <QuestionsContainer title="Question 4" style={style}>
      <div className="container-input-custom">
        <Input onChange={handleInputOnChange} placeholder="Name" />
      </div>
      <div className="container-input-custom">
        <Input onChange={handleInputOnChange} placeholder="Email" />
      </div>
      <div className="container-input-custom">
        <Input onChange={handleInputOnChange} placeholder="Password" />
      </div>
      <Button onClick={handleOnClick}>Register</Button>
    </QuestionsContainer>
  );
}
