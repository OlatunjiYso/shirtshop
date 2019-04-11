export default (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    shippingRegionId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: 'ShippingRegions',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creditCard: {
      type: DataTypes.TEXT
    },
    address1: {
      type: DataTypes.TEXT
    },
    address2: {
      type: DataTypes.TEXT
    },
    city: {
      type: DataTypes.STRING
    },
    religion: {
      type: DataTypes.STRING
    },
    postalCode: {
      type: DataTypes.STRING
    },
    dayPhone: {
      type: DataTypes.STRING,
    },
    evePhone: {
      type: DataTypes.STRING,
    },
    mobPhone: {
      type: DataTypes.STRING,
    },
  
  }, {});
  Customer.associate = (models) => {
   Customer.belongsTo(models.ShippingRegion, {
     foreignKey: 'shippingRegionId',
     onDelete: 'CASCADE',
     as: 'shippingRegion'
   });
   Customer.hasMany(models.Order, {
    as: 'orders'
  });
  Customer.hasMany(models.Review, {
    as: 'reviews'
  });
  Customer.belongsToMany(models.Product, {
    through: 'ShoppingCart',
    foreignKey: 'customerId',
    as: 'customer'
  });
  };
  return Customer;
};