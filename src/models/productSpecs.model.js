// const { db, DataTypes } = require('./index');
module.exports = (connection, DataTypes) => {

    const Specs = connection.define('product_specs', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pro_id: {
            type: DataTypes.INTEGER
        },
        memory: {
            type: DataTypes.STRING
        },
        ram: {
            type: DataTypes.STRING
        },
        color: {
            type: DataTypes.STRING
        },
        screen_size: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DATE
        },
    })
    return Specs
}