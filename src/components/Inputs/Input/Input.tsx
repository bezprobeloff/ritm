import React from 'react';
import '../Input.scss';

type PropTypes = {
  name: string;
  typeInput: string;
  placeholderText: string;
  value: string;
  errors: { [index: string]: string };
  validateAttributes: { [index: string]: string | boolean | number };
  onChange: React.ChangeEventHandler;
};

const Input: React.FC<PropTypes> = ({
  name,
  placeholderText,
  typeInput,
  value,
  errors,
  onChange,
  validateAttributes
}) => {
  return (
    <label className="input">
      <input
        className="input__element"
        value={value}
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
