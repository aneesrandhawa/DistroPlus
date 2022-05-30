// const { db, DataTypes } = require('./index');
module.exports = (connection, DataTypes) => {

    const Product = connection.define('products', {
        pro_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cat_id: {
            type: DataTypes.INTEGER
        },
        pro_name: {
            type: DataTypes.STRING
        },
        pro_featured: {
            type: DataTypes.BOOLEAN
        },
        pro_desc: {
            type: DataTypes.STRING
        },
        pro_price: {
            type: DataTypes.DECIMAL
        },
        pro_img: {
            type: DataTypes.STRING
        }
    })
    return Product
}