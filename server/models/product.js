
export default (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
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
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    discountedPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
    },
    image: {
      type: DataTypes.STRING,
    },
    image2: {
      type: DataTypes.STRING,
    },
    thumbnail: {
      type: DataTypes.STRING,
    }, 
    display: {
      type: DataTypes.INTEGER,
    }
  }, {});
  Product.associate = (models) => {
    Product.belongsToMany(models.AttributeValue, {
      through: 'Product_Attribute',
      foreignKey: 'productId',
      as: 'attributes'
    });
    Product.belongsToMany(models.Customer, {
      through: 'Shopping_Cart',
      foreignKey: 'productId',
      as: 'products'
    });
    Product.hasMany(models.OrderDetail, {
      as: 'orders',
    });
    Product.hasMany(models.Review, {
      as: 'review',
    });
  };
  return Product;
};