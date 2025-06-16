const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.config');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize,
    modelName: 'User',
    timestamps: true,
  }
);

module.exports = User;