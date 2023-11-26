import React, { useState, useEffect } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: localStorage.getItem('Name') || '',
    email: localStorage.getItem('Email') || '',
    password: localStorage.getItem('Password') || '',
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
    console.log(formData.name);
    console.log(formData.email);
    console.log(formData.password);
    localStorage.setItem('Name', formData.name);
    localStorage.setItem('Email', formData.email);
    localStorage.setItem('Password', formData.password);
  };

  return (
    <div className='form-parent'>
      <form>
        <h1>Sign In Form</h1>
        <label>
          Name:
          <input
            type="text"
            name='name'
            placeholder='Enter Your Name'
            className='input-field'
            onChange={handleInputChange}
            value={formData.name}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name='email'
            placeholder='Enter Your Email'
            className='input-field'
            onChange={handleInputChange}
            value={formData.email}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name='password'
            placeholder='Enter Your password'
            className='input-field'
            onChange={handleInputChange}
            value={formData.password}
          />
        </label>
        <button type='button' onClick={handleSignInClick}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
