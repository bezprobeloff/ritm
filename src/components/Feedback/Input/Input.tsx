import React from "react";

type PropTypes = {
  name: string;
  typeInput: string;
  placeholderText: string;
};

const Input: React.FC<PropTypes> = ({ name, placeholderText, typeInput }) => {
  return (
    <>
      <label className="input-container">
        <input
          className="input"
          name={name}
          type={typeInput}
          placeholder={placeholderText}
          required
        />
        <span className="input-placeholder">{placeholderText}</span>
        <span className="input-error" aria-live="polite">
          The email is invalid
        </span>
      </label>
    </>
  );
};

export default Input;
