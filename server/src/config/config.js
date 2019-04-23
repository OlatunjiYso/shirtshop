const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username:  'root' ||  process.env.LOCAL_DB_USERNAME,
    password: 'password'||  process.env.LOCAL_DB_PASSWORD,
    database: 'shirtshoptest' || process.env.LOCAL_DB,
    host: '127.0.0.1',
    dialect: 'mysql',
  },

  test: {
    username: 'root' || process.env.LOCAL_TEST_DB_USERNAME,
    password: 'password'|| process.env.LOCAL_TEST_DB_PASSWORD,
    database: 'shirtshoptest' || process.env.LOCAL_TEST_DB,
    host: '127.0.0.1',
    dialect: 'mysql'
  },

  production: {
    use_env_variable: 'CLEARDB_DATABASE_URL',
    dialect: 'mysql',
    logging: false
  }

}
