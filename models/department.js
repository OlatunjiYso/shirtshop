export default(sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {});
  Department.associate = (models)=> {
    Department.hasMany(models.Category, {
      as: 'categories',
    });
  };
  return Department;
};
