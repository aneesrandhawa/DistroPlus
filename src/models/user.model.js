// const { db, DataTypes } = require('./index');
module.exports = (connection, DataTypes) => {

    const User = connection.define('users', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING
        },
        user_email: {
            type: DataTypes.STRING
        },
        user_phone: {
            type: DataTypes.STRING
        },
        user_password: {
            type: DataTypes.STRING
        },
        is_admin: {
            type: DataTypes.BOOLEAN
        },
    })
    return User
}