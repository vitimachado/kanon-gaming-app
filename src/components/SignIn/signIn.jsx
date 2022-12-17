/* eslint-disable no-unreachable */
/* eslint-disable function-paren-newline */
import React, { useCallback, useState } from 'react';
import { INIT_METADATA_INPUTS_SIGNIN } from '../../constants/constants';
import { createDefaultObjectByKeys } from '../../utils/objects';
import {
  checkSignButtonValidation,
  emailValidationMsg,
  textLengthValidationMsg,
} from '../../utils/validations';
import Button from '../common/button/button';
import InputsFactory from '../common/inputsFactory/inputsFactory';
import authenticateUser from './actions';
import './signIn.css';

export default function SignIn({ children }) {
  const [buttonEnable, setButtonEnable] = useState(false);
  const [inputsValue, setInputsValue] = useState(
    createDefaultObjectByKeys(INIT_METADATA_INPUTS_SIGNIN, 'name', null),
  );

  /*
   *  Validate the inputs values
   */
  const validateInputs = useCallback((data) => {
    const email = emailValidationMsg(data.email);
    const password = textLengthValidationMsg(data.password, 'password', 3, 10);
    const newValidations = { email, password };
    setInputsValue(data);
    setButtonEnable(checkSignButtonValidation(data, newValidations));
    return newValidations;
  }, []);

  /*
   *  Handle the submit action
   */
  const handleSubmit = () => {
    authenticateUser(inputsValue);
  };

  return (
    <div className="wrapper-form">
      <h3 className="title">Sign In</h3>
      <div className="container-input-custom">
        <InputsFactory
          objectMetaData={INIT_METADATA_INPUTS_SIGNIN}
          validateInputs={validateInputs}
        />
      </div>
      {children}
      <Button onClick={() => handleSubmit()} disabled={!buttonEnable}>
        Login
      </Button>
    </div>
  );
}
