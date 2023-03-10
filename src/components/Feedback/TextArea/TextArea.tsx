import React from "react";

const TextArea: React.FC = () => {
  return (
    <>
      <label className="input-container input-container_type_textarea feedback__form-textarea">
        <textarea
          className="input input_type_textarea"
          placeholder="Комментарий"
        />
        <span className="input-placeholder">Комментарий</span>
        <span className="input-error" aria-live="polite">
          The email is invalid
        </span>
      </label>
    </>
  );
};

export default TextArea;
