import React, { RefObject, useCallback, useState } from 'react';
interface TValues {
  [index: string]: string;
}
interface TCheckboxValues {
  [index: string]: boolean;
}
//хук управления формой и валидации формы
const useFormWithValidation = (formRef: RefObject<HTMLFormElement>) => {
  const [values, setValues] = useState<TValues>({});
  const [checkboxValues, setCheckboxValues] = useState<TCheckboxValues>({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const type: string = target.type;
    const isCheckboxType = type === 'checkbox' || type === 'radio';
    const name: string = target.name;
    const value: string = target.value;
    const checked: boolean = isCheckboxType ? target.checked : false;
    const form = formRef.current;

    if (isCheckboxType) {
      setCheckboxValues({ ...checkboxValues, [name]: checked });
    } else {
      setValues({ ...values, [name]: value });
    }

    setErrors({ ...errors, [name]: target.validationMessage });

    if (form !== null) {
      setIsValid(form.checkValidity());
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newCheckBoxValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setCheckboxValues(newCheckBoxValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, checkboxValues, handleChange, errors, isValid, resetForm };
};

export default useFormWithValidation;
