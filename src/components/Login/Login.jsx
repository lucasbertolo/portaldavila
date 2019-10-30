/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Login = ({ handleLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin('a', 'b');
  };
  return (
    <div className="login-container">
      <header>
        {/*logo */}
      </header>
      <h1 className="text-center">Register</h1>
      <form className="registration-form">
        <label className="col-one-half login-label">
          <span className="label-text">First Name</span>
          <input type="text" name="firstName" className="login-input" />
        </label>
        <label className="col-one-half login-label">
          <span className="label-text">Last Name</span>
          <input type="text" name="lastName" className="login-input" />
        </label>
        <label className="login-label">
          <span className="label-text">Email</span>
          <input type="text" name="email" className="login-input" />
        </label>
        <label className="password login-label">
          <span className="label-text">Password</span>
          <button type="text" className="toggle-visibility login-button" title="toggle password visibility" tabIndex="-1">
            <span className="glyphicon glyphicon-eye-close" />
          </button>
          <input type="password" name="password" className="login-input" />
        </label>
        <label className="checkbox login-label">
          <input type="checkbox" name="newsletter" className="login-input" />
          <span>Sign me up for the weekly newsletter.</span>
        </label>
        <div className="text-center">
          <button className="form-btn submit login-button" name="register">Sign Me Up</button>
        </div>
      </form>
    </div>
  );
};


export default Login;
