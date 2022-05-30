// const { connection, DataTypes } = require("sequelize/types")

// const { connection, DataTypes } = require('./index');
module.exports = (connection, DataTypes) => {
    const Category = connection.define('category', {
        cat_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cat_name: {
            type: DataTypes.STRING
        },
        cat_img: {
            type: DataTypes.STRING
        },
    })
    return Category
}