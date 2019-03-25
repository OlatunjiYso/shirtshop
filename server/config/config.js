const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: 'root', //process.env.LOCAL_DB_USERNAME,
    password: 'password', //process.env.LOCAL_DB_PASSWORD,
    database: 'shirtshop',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
