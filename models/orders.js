export default (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
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

  Orders.associate = (models) => {
    Orders.belongsTo(models.Customer, {
      foreignKey: 'customerId',
      onDelete: 'CASCADE',
      as: 'customer'
    });
    Orders.belongsTo(models.Shipping, {
      foreignKey: 'shippingId',
      onDelete: 'CASCADE',
      as: 'shipping'
    });
    Orders.belongsTo(models.Tax, {
      foreignKey: 'taxId',
      onDelete: 'CASCADE',
      as: 'tax'
    });
  };
  return Orders;
};