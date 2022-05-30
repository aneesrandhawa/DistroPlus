// const { connection, DataTypes } = require('./index');
module.exports = (connection, DataTypes) => {

    const OrderDetail = connection.define('order_detail', {
        ord_dtl_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ord_id: {
            type: DataTypes.INTEGER
        },
        pro_id: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.DECIMAL
        }
    })
    return OrderDetail

}