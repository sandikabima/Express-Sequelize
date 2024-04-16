const {DataTypes, Model} = require('sequelize')
const sequelize = require('../utils/conn')


class User extends Model {}

User.init({
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    nama : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, {sequelize, tableName : 'users'})

sequelize.sync()

module.exports = User