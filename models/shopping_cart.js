export default (sequelize, DataTypes) => {
  const ShoppingCart = sequelize.define('ShoppingCart', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    CustomerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    attributes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    buyNow: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {});
  ShoppingCart.associate = (models) => {
    ShoppingCart.belongsTo(models.Product, {
      foreignKey: 'productId',
      onDelete: 'CASCADE',
    });
    ShoppingCart.belongsTo(models.Customer, {
      foreignKey: 'CustomerId',
      onDelete: 'CASCADE',
    });
  };
  return ShoppingCart;
};