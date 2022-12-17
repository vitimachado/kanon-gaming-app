/* eslint-disable no-unreachable */
/* eslint-disable function-paren-newline */
import React, { useCallback, useState } from 'react';
import { INIT_METADATA_INPUTS_SIGNUP } from '../../constants/constants';
import { setSnackbar } from '../../store/reducers/loading_reducer';
import store from '../../store/store';
import { createDefaultObjectByKeys } from '../../utils/objects';
import {
  checkSignButtonValidation,
  emailValidationMsg,
  textLengthValidationMsg,
} from '../../utils/validations';
import Button from '../common/button/button';
import InputsFactory from '../common/inputsFactory/inputsFactory';
import postUserRegister from './actions';
import './signUp.css';

// eslint-disable-next-line no-unused-vars
export default function SignUp({ closeModal = () => null }) {
  const [buttonEnable, setButtonEnable] = useState(false);
  const [inputsValue, setInputsValue] = useState(
    createDefaultObjectByKeys(INIT_METADATA_INPUTS_SIGNUP, 'name', null),
  );

  /*
   *  Validate the inputs values
   */
  const validateInputs = useCallback((data) => {
    const name = textLengthValidationMsg(data.name, 'name', 3, 10);
    const email = emailValidationMsg(data.email);
    const password = textLengthValidationMsg(data.password, 'password', 3, 10);
    const newValidations = { name, email, password };
    setInputsValue(data);
    setButtonEnable(checkSignButtonValidation(data, newValidations));
    return newValidations;
  }, []);

  /*
   *  Handle the submit action
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    postUserRegister(inputsValue).then(async (response) => {
      const { user } = response.data.data;
      closeModal();
      store.dispatch(
        setSnackbar({
          statusCode: 200,
          msg: `User ${user.email} register.`,
          style: {
            backgroundColor: 'green',
          },
        }),
      );
    });
  };

  return (
    <div>
      <h3 className="title">Sign Up</h3>
      <div className="container-input-custom">
        <InputsFactory
          objectMetaData={INIT_METADATA_INPUTS_SIGNUP}
          validateInputs={validateInputs}
        />
      </div>
      <Button onClick={handleSubmit} disabled={!buttonEnable}>
        Register
      </Button>
    </div>
  );
}
