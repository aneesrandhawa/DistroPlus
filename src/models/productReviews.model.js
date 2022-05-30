// const { db, DataTypes } = require('./index');
module.exports = (connection, DataTypes) => {

    const Reviews = connection.define('product_reviews', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pro_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        reviews: {
            type: DataTypes.STRING
        }
    })
    return Reviews
}