// const { db, DataTypes } = require('./index');
module.exports = (connection, DataTypes) => {

    const ProductImage = connection.define('product_images', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pro_id: {
            type: DataTypes.INTEGER
        },
        img_url: {
            type: DataTypes.STRING
        },
        default_image: {
            type: DataTypes.BOOLEAN
        }
    })
    return ProductImage
}