import axios from 'axios';

const rootUrl = 'http://localhost:5000/api/v1/customers';

class AuthService {

  /**
   * @description makes a post request for login.
   * @param { object } user - user details
   */
  static login(user) {
    const url = `${rootUrl}/login`;
    return axios.post(url, user)
  }

  /**
   * @description makes a post request for signup.
   * 
   * @param {object} user  - user information from form.
   */
  static signup(user) {
   return axios.post(`${rootUrl}/signup`, (user))
  }
}

export default AuthService;