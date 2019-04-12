import db from '../models/';
import { error } from 'util';

const { Order, OrderDetail } = db;

/**
 * utility class that houses all order methods
 */
class OrderController {
  /**
   * @description - creates an order for a customer
   * @param { object } req - request object
   * @param { object } res - request object
   */
  static createOrder(req, res) {
    const customerId = req.user.id;
    const taxId = 1;
    const { shippingId, totalAmount, status, comments, authCode, reference } = req.body;
    
    Order
      .create({
        customerId,
        shippingId,
        taxId,
        totalAmount,
        shippedOn: new Date(),
        status,
        comments,
        authCode,
        reference,
      })
      .then((order) => {
        const orderId = order.id;
        const { productId, attribute, productName, unitCost, quantity } = req.body;
        OrderDetail
          .create({
            orderId,
            productId,
            attribute, 
            productName,
            unitCost,
            quantity
          })
          .then((orderDetail) => {
            res.status(200)
            .json({
              message: 'order successfully created',
              order,
              orderDetail
            })
          })
          .catch((err) => {
            res.status(501)
            .json({
              message: 'internal server error',
              error: err
            })
          });
      })
  }
}

export default OrderController;