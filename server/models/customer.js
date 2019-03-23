export default module.exports = (sequelize, DataTypes) => {
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
      type: DataTypes.TEXT,
      allowNull: false
    },
    address1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    religion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false
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
   Customer.hasMany(models.Orders, {
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