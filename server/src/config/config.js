const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: process.env.LOCAL_DB_USERNAME,
    password: process.env.LOCAL_DB_PASSWORD,
    database: process.env.LOCAL_DB,
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false
  },

  test: {
    username: process.env.LOCAL_TEST_DB_USERNAME,
    password: process.env.LOCAL_TEST_DB_PASSWORD,
    database: process.env.LOCAL_TEST_DB,
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false
  },
  
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
  },

}
