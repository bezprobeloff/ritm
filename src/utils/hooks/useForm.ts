import React, { RefObject, useCallback, useState } from 'react';

//хук управления формой и валидации формы
const useFormWithValidation = (formRef: RefObject<HTMLFormElement>) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name: string = target.name;
    const value: string = target.value;
    const form = formRef.current;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });

    if (form !== null) {
      setIsValid(form.checkValidity());
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
};

export default useFormWithValidation;
