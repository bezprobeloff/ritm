import React from 'react';
import '../Input.scss';

type PropTypes = {
  name: string;
  typeInput: string;
  placeholderText: string;
  errors: { [index: string]: string };
  validateAttributes: { [index: string]: string | boolean | number };
  onChange: React.ChangeEventHandler;
};

const Input: React.FC<PropTypes> = ({
  name,
  placeholderText,
  typeInput,
  errors,
  onChange,
  validateAttributes
}) => {
  return (
    <label className="input">
      <input
        className="input__element"
        name={name}
        type={typeInput}
        placeholder={placeholderText}
        onChange={onChange}
        {...validateAttributes}
      />
      <span className="input__placeholder">{placeholderText}</span>
      <span className="input__error" aria-live="polite">
        {errors[name]}
      </span>
    </label>
  );
};

export default Input;
