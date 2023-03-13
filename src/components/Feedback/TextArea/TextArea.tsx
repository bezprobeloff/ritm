import React from 'react';

type PropTypes = {
  onChange: React.ChangeEventHandler;
};

const TextArea: React.FC<PropTypes> = ({ onChange }) => {
  return (
    <>
      <label className="input-container input-container_type_textarea feedback__form-textarea">
        <textarea
          name="textarea"
          className="input input_type_textarea"
          placeholder="Комментарий"
          onChange={onChange}
        />
        <span className="input-placeholder">Комментарий</span>
        <span className="input-error" aria-live="polite"></span>
      </label>
    </>
  );
};

export default TextArea;
