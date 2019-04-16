import axios from 'axios';
import alertify from 'alertifyjs';
const rootUrl = 'http://localhost:5000/api/v1/customers';

class AuthService {

  /**
   * 
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

  static signup(user) {
   axios.post(`${rootUrl}/signup`, (user));
  }
}

export default AuthService;