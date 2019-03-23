export default (sequelize, DataTypes) => {
  const  Tax = sequelize.define('Tax', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    taxType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    taxPercentage: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
  }, {});
  Tax.associate = (models) =>{
   
  };
  return Tax;
};