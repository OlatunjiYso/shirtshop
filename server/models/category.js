export default (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    departmentId: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
  Category.associate = (models) =>{
    Category.belongsTo(models.Department, {
      foreignKey: 'departmentId',
      onDelete: 'CASCADE',
      as: 'department'
    });
  };
  return Category;
};