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
    use_env_variable: 'PROD_DATABASE_URL',
    dialect: 'postgres',
    logging: false
  }

}
