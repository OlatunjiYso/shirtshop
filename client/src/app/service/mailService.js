import axios from 'axios';
import alertify from 'alertifyjs';
const rootUrl = '/api/v1/mails';

class MailService {

  /**
   * @description sends email
   * @param { object } details - mail details
   */
  static sendMail(details) {
    const url = `${rootUrl}/`;
    axios.post(url, details)
    .then((res) => {
      alertify.set('notifier', 'position', 'top-center');
      alertify.success(res.data.message);
      
    })
    .catch((err) => {
      alertify.set('notifier', 'position', 'top-center');
      alertify.error(err.response.data.message);
    })

  }
}

export default MailService;