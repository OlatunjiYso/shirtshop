import nodemailer from 'nodemailer';

/**
 * controller to fetch all departments 
 */
class MailController {
  /**
   * @description sends mail
   * 
   * @param { object } req -request object
   * @param { object } res -response object
   * 
   * @return { json }  message
   */
  static sendMail(req, res) {

    const { from, subject, text } = req.body;
    const to = req.user.email;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'fineshirtshopz@gmail.com',
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from,
      to,
      subject,
      text
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
       return res.status(500)
        .json({
          message: 'An error occured!',
          error
        })
      } else {
        return res.status(200)
        .json({
          message: 'A confirmation mail has been sent',
          info
        })
      }
    });
  }
}


export default MailController;
