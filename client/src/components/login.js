import React from 'react';
// import propTypes from 'prop-types';

const login = () => {
  return (
    <main id="auth">
      <div>
        <h1 className="authheader"> Welcome Back!</h1>
      </div>
      <h6 className="authFormTitle"> Login </h6>
      <div className="authFormBody">
        <form className="authForm">
          <label> Email </label>
          <input type="email" />
          <label> Password </label>
          <input type="password" />
          <input
            type="submit"
            value="Submit"
            className="authSubmit"
          />
        </form>
      </div>
      <p className="authRedirect"> Got no account ? Signup here </p>
    </main>
  )
}

export default login;