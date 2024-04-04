'use client'
import React from 'react';
import './page.modules.css'

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="textbox">
            <input type="text" placeholder="Username/Email" />
          </div>

          <div className="textbox">
            <input type="password" placeholder="Password" />
          </div>

          <input type="submit" className="btn" value="Login" />
        </form>

        <div className="signup-link">
          <p>Don't have an account? <a href="/join">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
