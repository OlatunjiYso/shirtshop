
export default module.exports = (sequelize, DataTypes) => {
  const  Audit = sequelize.define('Audit', {
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
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Audit.associate = (models) => {
    Audit.belongsTo(models.Order, {
      foreignKey: 'orderId',
      onDelete: 'CASCADE',
      as: 'order'
    })
  };
  return Audit;
};