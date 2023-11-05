const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./config.js');
// const s =require('./')
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});



module.exports = User;
