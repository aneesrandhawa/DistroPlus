// const { connection, DataTypes } = require('./index');
module.exports = (connection, DataTypes) => {

    const Order = connection.define('orders', {
        ord_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        ord_address: {
            type: DataTypes.STRING
        },
        ord_amount: {
            type: DataTypes.DECIMAL
        },
        ord_date: {
            type: DataTypes.DATE
        },
        ship_date: {
            type: DataTypes.DATE
        },
        ord_status: {
            type: DataTypes.DATE
        },
    })
    return Order
}