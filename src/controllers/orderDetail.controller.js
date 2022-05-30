const orderDetailServices = require('../services/orderDetailServices')

const config = require('../config/config')

const getAllOrderDetail = async(req, res) => {
    const result = await orderDetailServices.getAllOrderDetail(req, res)
    res.send(result)
}
const getOrderDetailById = async(req, res) => {
    const result = await orderDetailServices.getOrderDetailById(req, res)
    res.send(result)
}

const updateOrderDetailById = async(req, res) => {
    const result = await orderDetailServices.updateOrderDetailById
    res.send(result)
}
const createOrderDetail = async(req, res) => {
    const result = await orderDetailServices.createOrderDetail(req, res)
    res.send(result)
}



module.exports = {
    getAllOrderDetail,
    getOrderDetailById,
    createOrderDetail,
    updateOrderDetailById
}