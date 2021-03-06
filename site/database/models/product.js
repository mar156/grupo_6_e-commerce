'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.brand);
      this.belongsTo(models.gender);
      this.belongsToMany(models.image, {through: 'image_product'});
      this.belongsToMany(models.category, { through: "category_product" });
      this.belongsToMany(models.user, {through: "product_user"});
      this.belongsToMany(models.size, {through: "product_size"});
      this.belongsToMany(models.color, {through: "color_product"});
    }
  };
  Product.init({
    brand_id: DataTypes.INTEGER,
    gender_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    on_sale: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
    paranoid: true
  });
  return Product;
};