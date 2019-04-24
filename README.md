# Shirtshop 👚 👕 

##### Live app
Visit this [link](https://shirtshopz.herokuapp.com)

### Shirtshop is an e-commerce site that allows users to do the following :
- view shirts by categories.
- search for shirts.
- view the details of a particular shirt.
- signup and login.
- add shirts to shopping cart.
- checkout and make payments.
- receive confirmation mail after a successful order.

### Getting Started
##### Fork/Clone the Repo
`change directory to the git repository by doing cd shirtshop`

##### Install dependencies
`npm install`

##### Setup Database Client
`Download Mysql database client`
`Create a database`

##### Setting up environmental variables
Create a .env file in the root directory of the repo

Add the following environmental variables:

DB_USERNAME =  Your local database username

DB_PASSWORD = Your database password

DB_DATABASE_TEST = Name of the database you want to use for the tests

DB_DATABASE_DEV = Name of the database you want to use for development

JWT_KEY = Your JSON web token secret key 

##### Populate local database with necessary tables and columns
In your command line type :

`npm install -g sequelize-cli`

`sequelize db:migrate`

`sequelize db:seed:all`

##### Run the application
`npm start`

#### Technology Stack
- Node
- Express
- Mysql
- React.js
- HTML5 
- CSS
- Redis
- Heroku
