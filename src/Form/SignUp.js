import React from 'react';

const SignUp = () => {
  const handleSignUpClick = () => {
    console.log('Sign Up button clicked');
  };

  return (
    <div className='form-parent'>
      <form>
        <h1>Sign Up Form</h1>
        <label>
          Email:
          <input type="email" name='email' placeholder='Enter Your Email' className='input-field' />
        </label>
        <label>
          Password:
          <input type="password" name='password' placeholder='Enter Your password' className='input-field' />
        </label>
        <button type='button' onClick={handleSignUpClick}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
