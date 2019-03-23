
export default (sequelize, DataTypes) => {
  const ShippingRegion = sequelize.define('ShippingRegion', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    shippingRegion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  ShippingRegion.associate = (models) => {
    ShippingRegion.hasMany(models.Shipping, {
      as: 'shipping'
    })
    ShippingRegion.hasMany(models.Customer, {
      as: 'customer'
    })
  };
  return ShippingRegion;
};