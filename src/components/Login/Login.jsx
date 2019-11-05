/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import './Login.scss';

const Login = ({ handleLogin }) => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleLogin('a', 'b');
  };

  const handleContainer = () => {
    setLogin(!login);
    setRegister(!register);
  };

  return (
    <div className="login-container">
      <div className="form-structor">
        <div className={register ? 'signup' : 'signup slide-up'}>
          <h2
            className="form-title"
            id="signup"
            onClick={handleContainer}
            onKeyPress={handleContainer}
            role="presentation"
          >
            <span>or</span>
Sign up
          </h2>
          <div className="form-holder">
            <input type="text" className="input" placeholder="Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button type="button" className="submit-btn">Sign up</button>
        </div>
        <div className={login ? 'login' : 'login slide-up'}>
          <div className="center">
            <h2
              className="form-title"
              id="login"
              onClick={handleContainer}
              onKeyPress={handleContainer}
              role="presentation"
            >
              <span>or</span>
Log in
            </h2>
            <div className="form-holder">
              <input type="email" className="input" placeholder="Email" />
              <input type="password" className="input" placeholder="Password" />
            </div>
            <button type="button" className="submit-btn">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
