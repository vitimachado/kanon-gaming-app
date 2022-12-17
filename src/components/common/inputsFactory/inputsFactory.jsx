/* eslint-disable no-unreachable */
/* eslint-disable function-paren-newline */
import React, { useState } from 'react';
import { createDefaultObjectByKeys } from '../../../utils/objects';
import Input from '../input/input';
import './inputsFactory.css';

export default function InputsFactory({
  objectMetaData,
  validateInputs = () => null,
}) {
  const [validations, setValidations] = useState(
    createDefaultObjectByKeys(objectMetaData, 'name', false),
  );
  const [inputsValue, setInputsValue] = useState(
    createDefaultObjectByKeys(objectMetaData, 'name', null),
  );

  /*
   *  Get the changes of input and call the validation method
   */
  const handleInputOnChange = (e) => {
    const nameRef = e?.target?.name;
    const value = e?.target?.value;
    const newInputsValue = { ...inputsValue, [nameRef]: value };
    const newValidations = validateInputs(newInputsValue);
    setInputsValue(newInputsValue);
    setValidations(newValidations);
  };

  return objectMetaData.map((data) => (
    <div key={`signin-${data.type}`}>
      <Input
        type={data.type}
        name={data.name}
        placeholder={data.placeholder}
        onChange={(e) => handleInputOnChange(e)}
      />
      <div className="validation-error">
        {validations[data.name] ? validations[data.name] : null}
      </div>
    </div>
  ));
}
