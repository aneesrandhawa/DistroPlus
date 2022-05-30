const models = require('../models')
const User = models.Order

const config = require('../config/config')

const getAllOrder = async(req, res) => {
    const result = await Order.findAll()
    return { result }
}
const getOrderById = async(req, res) => {
    const result = await Order.findByPk(req.params.id)
    return { result }
}
const updateOrderById = async(req, res) => {
    const result = await Order.update({
        user_id: req.body.user,
        ord_address: req.body.address,
        ord_amount: req.body.amount,
        ord_date: req.body.date,
        ship_date: req.body.ship_date,
        ord_status: req.body.status,

    }, {
        where: {
            ord_id: req.params.id
        }
    })
    return { result }
}
const createOrder = async(req, res) => {
    const result = await Order.create({
        user_id: req.body.user,
        ord_address: req.body.address,
        ord_amount: req.body.amount,
        ord_date: req.body.date,
        ship_date: req.body.ship_date,
        ord_status: req.body.status,

    })
    return { result }
}

module.exports = { getAllOrder, getOrderById, createOrder, updateOrderById }