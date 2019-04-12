
export default (sequelize, DataTypes) => {
  const Attribute_Value = sequelize.define('AttributeValue', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    attributeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Attribute_Value.associate = (models) => {
    Attribute_Value.belongsTo(models.Attribute, {
      foreignKey: 'attributeId',
      onDelete: 'CASCADE',
      as: 'attribute'
    });
    Attribute_Value.belongsToMany(models.Product, {
      through: 'ProductAttribute',
      foreignKey: 'attributeValueId',
      as: 'Products'})
  };
  return Attribute_Value;
};