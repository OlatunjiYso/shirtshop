import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const signup = (props) => {
  const { handleChange, handleSubmit, user, passwordCheck } = props;
  const { email, password, confirmPassword, name} = user;
  const passwordMismatch = passwordCheck ? 
  <span className="white-text"> No match ❌</span> :
  null;
  return (
    <main id="auth">
      <div>
        <h3 className="authheader"> Create an Account and setup your preferences. . . !</h3>
      </div>
      <h6 className="authFormTitle"> Signup </h6>
      <div className="authFormBody">
        <form className="authForm" onSubmit={handleSubmit} >
          <label> Full name </label>
          <input
           type="text" 
           name="name"
           value={name}
           onChange={handleChange}
           required 
           />
          
          <label> Email </label>
          <input 
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required 
          />
          <label> Password </label>
          <input
           type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            />
          <label> Confirm Password {passwordMismatch}</label>
          <input
           type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
            />
          <input
            type="submit"
            value="Submit"
            disabled={passwordCheck}
            className="authSubmit"
          />
        </form>
      </div>
      <p className="authRedirect"> Got an account ?  login 👉🏽<Link to="/login" className="white-text" > here </Link> </p>
    </main>
  )
}

signup.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  checkPassword: PropTypes.bool.isRequired
};

export default signup;