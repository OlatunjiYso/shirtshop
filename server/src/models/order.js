export default (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    customerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    shippingId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    taxId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    totalAmount: {
      type: DataTypes.DECIMAL,
      defaultValue: 0.00,
      allowNull: false,
    },
    shippedOn:{
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    comments: {
      type: DataTypes.STRING,
    },
    authCode: {
      type: DataTypes.STRING,
    },
    reference: {
      type: DataTypes.STRING,
    }
  }, {});

  Order.associate = (models) => {
    Order.belongsTo(models.Customer, {
      foreignKey: 'customerId',
      onDelete: 'CASCADE',
      as: 'customer'
    });
    Order.belongsTo(models.Shipping, {
      foreignKey: 'shippingId',
      onDelete: 'CASCADE',
      as: 'shipping'
    });
    Order.belongsTo(models.Tax, {
      foreignKey: 'taxId',
      onDelete: 'CASCADE',
      as: 'tax'
    });
  };
  return Order;
};