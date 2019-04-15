import React from 'react';
// import propTypes from 'prop-types';

const signup = () => {
  return (
    <main id="auth">
      <div>
        <h3 className="authheader"> Create an Account and setup your preferences. . . !</h3>
      </div>
      <h6 className="authFormTitle"> Signup </h6>
      <div className="authFormBody">
        <form className="authForm">
          <label> First name </label>
          <input type="text" />
          <label> Last name </label>
          <input type="text" />
          <label> Email </label>
          <input type="email" />
          <label> Password </label>
          <input type="password" />
          <label> Confirm Password </label>
          <input type="password" />
          <input
            type="submit"
            value="Submit"
            className="authSubmit"
          />
        </form>
      </div>
      <p className="authRedirect"> Got an account ?  login 👉🏽here </p>
    </main>

  )
}

export default signup;