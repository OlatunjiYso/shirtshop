
export default (sequelize, DataTypes) => {
  const Shipping = sequelize.define('Shipping', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    shippingRegionId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    shippingType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shippingCost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  }, {});
  Shipping.associate = (models) => {
    Shipping.belongsTo(models.ShippingRegion, {
      foreignKey: 'shippingRegionId',
      onDelete: 'CASCADE',
      as: 'shippingRegion'
    })
  };
  return Shipping;
};