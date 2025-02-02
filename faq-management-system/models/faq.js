"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FAQ extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FAQ.init(
    {
      question: DataTypes.TEXT,
      answer: DataTypes.TEXT,
      question_hi: DataTypes.TEXT,
      question_bn: DataTypes.TEXT,
      answer_hi: DataTypes.TEXT,
      answer_bn: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "FAQ",
    }
  );
  return FAQ;
};
