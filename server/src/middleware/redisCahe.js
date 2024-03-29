/* eslint-disable no-constant-condition */
import redis from 'redis';

// Define redis client as per environmemnt
let client;
 if (process.env.NODE_ENV == 'production') {
   client = redis.createClient(process.env.REDIS_URL)
 } else {
  client = redis.createClient()
 }
let redisMiddleware = (req, res, next) => {
  let key = "__expres__" + req.originalUrl || req.url;
  client.get(key, function (err, reply) {
    if (reply) {
      let jsonReply= JSON.parse(reply)
      res.send(jsonReply);
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        client.set(key, JSON.stringify(body),'EX', 1200);
        res.sendResponse(body);
      }
      next();
    }
  });
};

export default redisMiddleware;