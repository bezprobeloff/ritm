import './Input.scss';

const Input = () => {
  return (
    <>
      <label className='custom-field1'>
        <input className='input1' type='email' placeholder='Enter Email' />
        <span className='placeholder1'>Enter Email</span>
        <span className='error-message' aria-live='polite'>
          The email is invalid
        </span>
      </label>
    </>
  );
};

export default Input;
