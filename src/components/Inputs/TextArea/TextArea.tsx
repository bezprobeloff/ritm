import React from 'react';
import '../Input.scss';

type PropTypes = {
  name: string;
  placeholderText: string;
  errors: { [index: string]: string };
  validateAttributes?: { [index: string]: string | boolean | number };
  onChange: React.ChangeEventHandler;
};

const TextArea: React.FC<PropTypes> = ({
  name,
  placeholderText,
  errors,
  validateAttributes,
  onChange
}) => {
  return (
    <label className="input input_type_textarea feedback__form-textarea">
      <textarea
        name="textarea"
        className="input__element input__element_type_textarea"
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

export default TextArea;
