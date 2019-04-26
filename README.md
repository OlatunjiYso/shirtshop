# Shirtshop 👚 👕 📦 👖👗

### Live app  [here](https://shirtshopz.herokuapp.com)



## Shirtshop is an e-commerce site that allows users to do the following :
- view shirts by categories.
- search for shirts.
- view the details of a particular shirt.
- signup and login.
- add shirts to shopping cart.
- checkout and make payments.
- receive confirmation mail after a successful order.



## Getting Started 🤓
#### Fork/Clone the Repo
`change directory to the git repository by doing cd shirtshop`

### Install dependencies
`npm install`

### Setup Database Client
`Download Mysql database client`

`Create a database`

### Setting up environmental variables
Create a .env file in the root directory of the repo

Add the following environmental variables:

`LOCAL_DB_USERNAME` =  Your local database username

`LOCAL_TEST_DB_USERNAME` =  Your test database username

`LOCAL_DB_PASSWORD` = Your local database password

`LOCAL_TEST_DB_PASSWORD` = Your test database password

`LOCAL_DB` = Name of the database you want to use for development

`LOCAL_TEST_DB` = Name of the database you want to use for test.

`SECRET_KEY` = Your JSON web token secret key 

`EMAIL_PASS` = password of the google mail account used for nodemailer

`NODE_ENV` = node environment, could be test | development | production

`PORT` = Port the express server listens to


### Populate local database with necessary tables and columns
In your command line type :

`npm install -g sequelize-cli`

`sequelize db:migrate`

`sequelize db:seed:all`

### Run the application
`npm start`




## API Endpoints

|        ENDPOINT / PATH                     |    HTTP VERB      |                 Purpose                  |
|--------------------------------------------|:-----------------:|:----------------------------------------:|
|  api/v1/customers/signup                   |     POST          | signup a new user                        |
|  api/v1/customers/login                    |     POST          | Logs in a new user                       |
|  api/v1/customers/details                  |     PUT           | Updates customer details                 |
|  api/v1/departments/                       |     GET           | Gets all departments                     |
|  api/v1/categories/:departmentId           |     GET           | Gets all categories in a department      |
|  api/v1/categories/products/?category_id   |     GET           | Gets all products in a specified category|
|  api/v1/products                           |     GET           | Gets all products                        |
|  api/v1/products/:productId                |     POST          | Gets a product specified by id           |
|  api/v1/search/products?searchItem         |     GET           | Search for products                      |
|  api/v1/mails                              |     POST          | Sends mail to users after checkout       |
|  api/v1/carts                              |     POST          | Creates a cart item                      |
|  api/v1/carts/cartId                       |     GET           | Gets a cart Item by id                   |
|  api/v1/carts/cartId                       |     DELETE        | Deletes a cart item by id                |
|  api/v1/orders                             |     POST          | Creates an order item                    |
|  api/v1/orders                             |     GET           | `(To be implemented )` Gets users order  |




## Technology Stack
- Node
- Express
- Mysql
- React.js
- HTML5 
- CSS
- Redis
- Heroku
