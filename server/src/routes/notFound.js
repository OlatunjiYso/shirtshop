import express from 'express';

const notFoundHandler = express.Router();

notFoundHandler.all(
  '/',
  (req, res) => {
    res.status(404)
      .json({
          message: 'route not found'
        })
  }
);


export default notFoundHandler;