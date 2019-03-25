import db from '../models';

const { Customer } = db;

/**
 * Validations class
 * This class handles the following validations:
 * ---- Ensuring that Signup details are valid
 */
class Validations {
  /** 
    * @description Ensures a valid customer information is added
    *
    * @param {object} req - request object
    * @param {object} res - response object
    * @param {function} next - calls on the next handler
    *
    * @return {undefined} api response
    */
  static validateSignup(req, res, next) {
    req.checkBody('name', 'Please input your name').trim().notEmpty();
    req.checkBody('shippingRegionId', 'Please input shippingRegionId').trim().notEmpty();
    req.checkBody('email', 'email is required').notEmpty();
    req.checkBody('email', 'Invalid email').isEmail();
    req.checkBody('password', 'Please input password').trim().notEmpty();
    req.checkBody('password', 'password must be a min length of 5').isLength({ min: 5 });
    req.checkBody('creditCard', 'Please the creditcard details').trim().notEmpty();
    req.checkBody('address1', 'Please input the first address').trim().notEmpty();
    req.checkBody('address2', 'Please input the second address').trim().notEmpty();
    req.checkBody('city', 'Please input your city').trim().notEmpty();
    req.checkBody('religion', 'Please input your religion').trim().notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      const errorList = errors.map(error => error.msg);
      return res.status(400)
        .send({ errors: errorList });
    }
    return next();
  }


  /**
     * Checks if creditcard of customer already exists.
     * @param { Object } req -request body
     * @param { Object } res -response body
     * @param {Function} next -calls on the next handler
     * @return { undefined }
     */
  static checkCreditCardExistence(req, res, next) {
    Customer
      .findOne({
        where: {
          creditCard: req.body.creditCard
        }
      })
      .then((user) => {
          if (user) {
            return res.status(409)
              .json({
                message: 'This credit card exist already'
              });
          }
        return next();
      })
      .catch(err => res.status(500)
        .json({
          message: err.message
        }));
  }


    /**
     * Checks if email of customer already exists.
     * @param { Object } req -request body
     * @param { Object } res -response body
     * @param {Function} next -calls on the next handler
     * @return { undefined }
     */
    static checkEmailExistence(req, res, next) {
      Customer
        .findOne({
          where: {
            email: req.body.email
          }
        })
        .then((user) => {
            if (user) {
              return res.status(409)
                .json({
                  message: 'This email exist already'
                });
            }
          return next();
        })
        .catch(err => res.status(500)
          .json({
            message: err
          }));
    }
}


export default Validations;