
export default (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
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
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Review.associate = (models) => {
    Review.belongsTo(models.Customer, {
      foreignKey: 'customerId',
      onDelete: 'CASCADE',
      as: 'customer'
    });
    Review.belongsTo(models.Product, {
      foreignKey: 'productId',
      onDelete: 'CASCADE',
      as: 'product'
    });
  };
  return Review;
};