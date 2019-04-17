import axios from 'axios';
import alertify from 'alertifyjs';
const rootUrl = 'http://localhost:5000/api/v1/customers';

class AuthService {

  /**
   * @description makes a post request for login.
   * @param { object } user - user details
   */
  static login(user) {
    const url = `${rootUrl}/login`;
    axios.post(url, user)
    .then((res) => {
      alertify.set('notifier', 'position', 'top-center');
      alertify.success(res.data.message);
      
    })
    .catch((err) => {
      alertify.set('notifier', 'position', 'top-center');
      alertify.error(err.response.data.message);
    })

  }

  /**
   * @description makes a post request for signup.
   * 
   * @param {object} user  - user information from form.
   */
  static signup(user) {
    const { password, confirmPassword } = user;
   axios.post(`${rootUrl}/signup`, (user))
   .then((res) => {
     alertify.set('notifier', 'position', 'top-center');
     alertify.success(res.data.message);
   })
   .catch((err) => {
    alertify.set('notifier', 'position', 'top-center');
    alertify.error(err.response.data.message || err.response.data.errors[0]);
  })
  }
}

export default AuthService;