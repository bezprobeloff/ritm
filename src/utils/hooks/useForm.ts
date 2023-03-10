import React, { HTMLInputTypeAttribute, useCallback, useState } from "react";

//хук управления формой и валидации формы
const useFormWithValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const name: string = target.name as HTMLInputTypeAttribute;
    const value: string = target.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    // @ts-ignore
    setIsValid(target.closest("form").checkValidity());
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
