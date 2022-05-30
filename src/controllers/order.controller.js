const orderServices = require('../services/orderServices')
const config = require('../config/config')

const getAllOrder = async(req, res) => {
    const result = await orderServices.getAllOrder(req, res)
    res.send(result)
}
const getOrderById = async(req, res) => {
    const result = await orderServices.getOrderById(req, res)
    res.send(result)
}
const updateOrderById = async(req, res) => {
    const result = await orderServices.updateOrderById(req, res)
    res.send(result)
}
const createOrder = async(req, res) => {
    const result = await orderServices.createOrder(req, res)
    res.send(result)
}

module.exports = { getAllOrder, getOrderById, createOrder, updateOrderById }