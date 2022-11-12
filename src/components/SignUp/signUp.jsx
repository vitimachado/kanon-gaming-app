/* eslint-disable no-unreachable */
/* eslint-disable function-paren-newline */
import React, { useState } from 'react';
import {
  everyObjectValuesIsLike,
  someObjectValuesIsLike,
} from '../../utils/objects';
import {
  emailValidationMsg,
  textLengthValidationMsg,
} from '../../utils/validations';
import Button from '../common/button/button';
import Input from '../common/input/input';
import postUserRegister from './actions';
import './signUp.css';

const INIT_METADATA_INPUTS = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Name',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Email',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password',
  },
];

// eslint-disable-next-line no-unused-vars
export default function SignUp({ closeModal = () => null }) {
  // eslint-disable-next-line no-unused-vars
  const [validations, setValidations] = useState({
    name: false,
    email: false,
    password: false,
  });
  // eslint-disable-next-line no-unused-vars
  const [inputsValue, setInputsValue] = useState({
    name: null,
    email: null,
    password: null,
  });

  /*
   *  Validate the inputs values
   */
  const validateInputs = (data) => {
    const name = textLengthValidationMsg(data.name, 'name', 3, 10);
    const email = emailValidationMsg(data.email);
    const password = textLengthValidationMsg(data.password, 'password', 3, 10);
    return { name, email, password };
  };

  /*
   *  Get the changes of input and call the validation method
   */
  const handleInputOnChange = (e) => {
    const name = e?.target?.name;
    const value = e?.target?.value;
    const data = { ...inputsValue, [name]: value };
    setInputsValue({ ...inputsValue, [name]: value });
    setValidations(validateInputs(data));
  };

  /*
   *  Handle the submit action
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    postUserRegister(inputsValue);
  };

  const checkButtonValidation = () =>
    // eslint-disable-next-line operator-linebreak
    everyObjectValuesIsLike(validations, null) &&
    !someObjectValuesIsLike(inputsValue, null);

  const createInput = (type, name, placeholder) => (
    <div key={`signup-${type}`}>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleInputOnChange(e)}
      />
      <div className="validation-error">
        {validations[name] ? validations[name] : null}
      </div>
    </div>
  );

  return (
    <div>
      <h3 className="title">Sign Up</h3>
      <div className="container-input-custom">
        {INIT_METADATA_INPUTS.map((data) =>
          createInput(data.type, data.name, data.placeholder),
        )}
      </div>
      <Button onClick={handleSubmit} disabled={!checkButtonValidation()}>
        Register
      </Button>
    </div>
  );
}
