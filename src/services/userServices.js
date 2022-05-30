const model = require('../models')
const User = model.User
const config = require('../config/config')

const getAllUser = async(req, res) => {
    const result = await User.findAll()
    return { result }
}
const getUserById = async(req, res) => {
    const result = await User.findByPk(req.params.id)
    return { result }
}

const updateUserById = async(req, res) => {
    const result = await User.update({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_phone: req.body.user_phone,
        user_password: req.body.user_password,
        is_admin: req.body.is_admin,
    }, {
        where: {
            user_id: req.params.id
        }
    })
    return { result }
}
const createUser = async(req, res) => {
    const result = await User.create({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_phone: req.body.user_phone,
        user_password: req.body.user_password,
        is_admin: req.body.is_admin,
    })
    return { result }
}


module.exports = { getAllUser, getUserById, updateUserById, createUser }