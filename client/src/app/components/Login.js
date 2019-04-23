import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const LoginForm = (props) => {
  const { handleChange, handleSubmit, user } = props;
  const { email, password } = user;
  return (
    <div id="auth">
      <div>
        <h1 className="authheader"> Welcome Back!</h1>
      </div>
      <h6 className="authFormTitle"> Login </h6>
      <div className="authFormBody">
        <form className="authForm" onSubmit={handleSubmit} >
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
          <input
            type="submit"
            value="Submit"
            className="authSubmit"
          />
        </form>
      </div>
      <p className="authRedirect">
       Got no account ?  Signup 
       <Link to="/signup" className="white-text"> here</Link>
      </p>
    </div>
  )
}

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
export default LoginForm;