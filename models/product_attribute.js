
export default (sequelize, DataTypes) => {
  const ProductAttribute = sequelize.define('ProductAttribute', {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    attributeValueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    }
  }, {});
  ProductAttribute.associate = (models) => {
    ProductAttribute.belongsTo(models.Product, {
      foreignKey: 'productId',
      onDelete: 'CASCADE',
    });
    ProductAttribute.belongsTo(models.AttributeValue, {
      foreignKey: 'attributeValueId',
      onDelete: 'CASCADE',
    });
  };
  return ProductAttribute;
};