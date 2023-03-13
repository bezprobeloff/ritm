import React from 'react';

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
    <>
      <label className="input-container">
        <input
          className="input"
          name={name}
          type={typeInput}
          placeholder={placeholderText}
          onChange={onChange}
          {...validateAttributes}
          required
        />
        <span className="input-placeholder">{placeholderText}</span>
        <span className="input-error" aria-live="polite">
          {errors[name]}
        </span>
      </label>
    </>
  );
};

export default Input;
