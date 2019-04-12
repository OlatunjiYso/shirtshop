
export default (sequelize, DataTypes) => {
  const Attribute = sequelize.define('Attribute', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Attribute.associate = (models) => {
    Attribute.hasMany(models.AttributeValue, {
      as: 'values'
    });
  };
  return Attribute;
};