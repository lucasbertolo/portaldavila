import React from 'react';

const Login = ({ handleLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin('a', 'b');
  };
  return (
    <main>
      <div id="container">
        <form>
          <img src="https://bit.ly/2tlJLoz" />
          <input type="text" value="@AmJustSam" />
          <input type="password" />
          <input type="submit" value="SIGN IN" />
          <span><a href="#">Forgot Password?</a></span>
          <button type="button" onClick={handleSubmit}> Entrar </button>
        </form>
      </div>
    </main>
  );
};


export default Login;
