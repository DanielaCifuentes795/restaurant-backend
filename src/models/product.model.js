const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('product', {
    productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: {
            msg: 'Product name already exists'
        },
        validate: {
            notEmpty: {
                msg: 'Product name can not be empty'
            },
            len:{
                args:[10, 100],
                msg: 'Product name must between 10 and 100 characters'
        },
    }
},
    description: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Product description can not be empty'
            },
            len:{
                args:[10, 200],
                msg: 'Product description must between 10 and 200 characters'
            }
        }
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Product price can not be empty'
            },
            isDecimal: {
                msg: 'Product price must be a decimal number'
            },
            min: {
                args: [1000.00],
                msg: 'Product price must be at least 1000.00'
            }
        }
    }
},{
    tableName: 'product',
    timestamps: true,
    paranoid: true,
})

module.exports = Product;