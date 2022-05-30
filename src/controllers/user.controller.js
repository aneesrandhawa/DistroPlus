const model = require('../models')
const userServices = require('../services/userServices')
const config = require('../config/config')

const getAllUser = async(req, res) => {
    const { result } = await userServices.getAllUser(req, res)
    res.send(result)
}
const getUserById = async(req, res) => {
    const { result } = await userServices.getUserById(req, res)
    res.send(result)
}

const updateUserById = async(req, res) => {
    const { result } = await userServices.updateUserById(req, res)
    res.send(result)
}
const createUser = async(req, res) => {
    const { result } = await userServices.createUser(req, res)
    res.send(result)
}


module.exports = { getAllUser, getUserById, updateUserById, createUser }