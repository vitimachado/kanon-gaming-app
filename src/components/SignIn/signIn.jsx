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
import authenticateUser from './actions';
import './signIn.css';

const INIT_METADATA_INPUTS = [
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

export default function SignIn({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [validations, setValidations] = useState({
    email: false,
    password: false,
  });
  // eslint-disable-next-line no-unused-vars
  const [inputsValue, setInputsValue] = useState({
    email: null,
    password: null,
  });

  /*
   *  Validate the inputs values
   */
  const validateInputs = (data) => {
    const email = emailValidationMsg(data.email);
    const password = textLengthValidationMsg(data.password, 'password', 3, 10);
    return { email, password };
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
  const handleSubmit = () => {
    authenticateUser(inputsValue);
  };

  const checkButtonValidation = () =>
    // eslint-disable-next-line operator-linebreak
    everyObjectValuesIsLike(validations, null) &&
    !someObjectValuesIsLike(inputsValue, null);

  const createInput = (type, name, placeholder) => (
    <div key={`signin-${type}`}>
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
    <div className="wrapper-form">
      <h3 className="title">Sign In</h3>
      <div className="container-input-custom">
        {INIT_METADATA_INPUTS.map((data) =>
          createInput(data.type, data.name, data.placeholder),
        )}
      </div>
      {children}
      <Button
        onClick={() => handleSubmit()}
        disabled={!checkButtonValidation()}
      >
        Login
      </Button>
    </div>
  );
}
