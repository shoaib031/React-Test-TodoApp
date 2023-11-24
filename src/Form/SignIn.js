
import React, { useState } from 'react'

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignInClick = () => {
    console.log('Sign In button clicked');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
  };
  return (
    <div className='form-parent'>
      <form>
        <h1>Sign In Form</h1>
        <label>
          Name:
          <input type="name" name='name' placeholder='Enter Your name' className='input-field' onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name='email' placeholder='Enter Your Email' className='input-field' onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name='password' placeholder='Enter Your password' className='input-field' onChange={handleInputChange} />
        </label>
        <button type='submit' onClick={handleSignInClick}>Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
