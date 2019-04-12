
export default (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('OrderDetail', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    orderId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    attribute: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unitCost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  OrderDetail.associate = function(models) {
   OrderDetail.belongsTo(models.Order, {
     foreignKey: 'orderId',
     onDelete: 'CASCADE',
     as: 'order'
   })
   OrderDetail.belongsTo(models.Product, {
    foreignKey: 'productId',
    onDelete: 'CASCADE',
    as: 'product'
  })
  };
  return OrderDetail;
};