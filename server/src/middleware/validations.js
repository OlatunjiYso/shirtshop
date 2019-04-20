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
    req.checkBody('email', 'email is required').notEmpty();
    req.checkBody('email', 'Invalid email').isEmail();
    req.checkBody('password', 'Please input password').trim().notEmpty();
    req.checkBody('password', 'password must be a min length of 5').isLength({ min: 5 });

    const errors = req.validationErrors();
    if (errors) {
      const errorList = errors.map(error => error.msg);
      return res.status(400)
        .send({ errors: errorList });
    }
    return next();
  }

  /**
    * @description Ensures a user signin parameters are valid
    *
    * @param {object} req - api request
    * @param {object} res - api response
    * @param {function} next - calls on the next handler
    *
    * @return {undefined} api response
    */
  static validateLogin(req, res, next) {
    req.checkBody('email', 'Please input your email').trim().notEmpty();
    req.checkBody('email', 'Invalid email').isEmail();
    req.checkBody('password', 'Please input password').trim().notEmpty();
    const errors = req.validationErrors();
    if (errors) {
      const errorList = errors.map(error => error.msg);
      return res.status(400)
        .send({ errors: errorList });
    }
    return next();
  }


  /**
   * @description - validates cart new entry
   * @param {object} req 
   * @param {object} res 
   * @param {object} next 
   */
  static validateAddingcartItem(req, res, next) {
    req.checkBody('productId', 'Product id is required').trim().notEmpty();
    req.checkBody('attributes', 'Enter attributes').trim().notEmpty();
    req.checkBody('quantity', 'Enter quantity').trim().notEmpty();
    req.checkBody('buyNow', 'Enter buynow').trim().notEmpty();
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
    if(!req.body.creditCard) {
      return next();
    }
    Customer
      .findOne({
        where: {
          creditCard: req.body.creditCard
        }
      })
      .then((user) => {
        if (user) {
          if (user.id == req.user.id) {
            return next()
          }
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

  /**
   * 
   * @param { object } req -request object
   * @param { object } res -response object
   * @param { function } next -next method to be called.
   */
  static validateCartInputs(req, res, next) {
    req.checkBody('productId', 'Product Id  cannot be null').trim().notEmpty();
    req.checkBody('attributes', 'Product should have some attributes').trim().notEmpty();
    req.checkBody('quantity', 'quantity cannot be null').trim().notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      const errorList = errors.map(error => error.msg);
      return res.status(400)
        .send({ errors: errorList });
    }
    return next();
  }

  /**
   * @description - validates an order that is to be created
   * 
   * @param { object } req - request object
   * @param { object } res - response object
   * @param { funtion } next - next method to call on
   * 
   */
  static validateOrder(req, res, next) {
    req.checkBody('shippingId', 'shippingId cannot be null').trim().notEmpty();
    req.checkBody('totalAmount', 'totalAmount cannot be null').trim().notEmpty();
    req.checkBody('status', 'status cannot be null').trim().notEmpty();
    req.checkBody('comment', 'comment cannot be null').trim().notEmpty();
    req.checkBody('authCode', 'authCode cannot be null').trim().notEmpty();
    req.checkBody('reference', 'reference cannot be null').trim().notEmpty();
    req.checkBody('productId', 'productId cannot be null').trim().notEmpty();
    req.checkBody('attribute', 'attribute cannot be null').trim().notEmpty();
    req.checkBody('productName', 'productName cannot be null').trim().notEmpty();
    req.checkBody('unitCost', 'unitCost cannot be null').trim().notEmpty();
    req.checkBody('quantity', 'quantity cannot be null').trim().notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      const errorList = errors.map(error => error.msg);
      return res.status(400)
        .send({ errors: errorList });
    }
    return next();
  }


    /**
   * @description - validates requests for categories in  a department
   * 
   * @param { object } req - request object
   * @param { object } res - response object
   * @param { funtion } next - next method to call on
   * 
   */
  static validateFetchCategories(req, res, next) {
    let departmentId = parseInt(req.params.departmentId);
    if  (typeof departmentId != 'number') {
      return res.status(400)
      .json({
        message: 'please enter a valid departmentId'
      })
    }
    return next();
  }
}


export default Validations;