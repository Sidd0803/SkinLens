'use client'
import React, { useEffect, useState } from 'react';
import Navigation from '../components/nav';
import './page.modules.css';

function CreateAccountPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Hook to dynamically load Font Awesome
  useEffect(() => {
    const fontAwesomeScript = document.createElement('link');
    fontAwesomeScript.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css';
    fontAwesomeScript.rel = 'stylesheet';
    document.head.appendChild(fontAwesomeScript);

    return () => {
      document.head.removeChild(fontAwesomeScript);
    };
  }, []);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="page-container">
      <Navigation />
      <div className="login-container">
        <div className="title-with-logo">
          <h2 className="login-title">Create an Account</h2>
          <img src="/SkinLensLogo.jpg" alt="SkinLensLogo" className="skinlens-logo" />
        </div>
        <form className="login-form">
          <div className="input-group">
            <i className="fa fa-user input-icon"></i>
            <input type="text" className="form-input" placeholder="Full Name" />
          </div>

          <div className="input-group">
            <i className="fa fa-envelope input-icon"></i>
            <input type="email" className="form-input" placeholder="Email" />
          </div>

          <div className="input-group password-group">
            <i className="fa fa-lock input-icon"></i>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              className="form-input"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="toggle-password-button"
            >
              <i className={`fa ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
          </div>

          <div className="input-group password-group">
            <i className="fa fa-lock input-icon"></i>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              className="form-input"
              placeholder="Confirm Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="toggle-password-button"
            >
              <i className={`fa ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
          </div>

          <button type="submit" className="login-button">CREATE ACCOUNT</button>
        </form>
        <div className="signup-link">
          Already have an account? <a href="/login" className="signup-button">Login</a>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountPage;