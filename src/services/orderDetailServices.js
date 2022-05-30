const models = require('../models')
const OrderDetail = models.OrderDetail

const config = require('../config/config')

const getAllOrderDetail = async(req, res) => {
    const result = await OrderDetail.findAll()
    return { result }
}
const getOrderDetailById = async(req, res) => {
    const result = await OrderDetail.findByPk(req.params.id)
    return { result }
}

const updateOrderDetailById = async(req, res) => {
    const result = await OrderDetail.update({
        ord_id: req.body.ord_id,
        pro_id: req.body.pro_id,
        quantity: req.body.quantity,
        price: req.body.price,

    }, {
        where: {
            ord_dtl_id: req.params.id
        }
    })
    return { result }
}
const createOrderDetail = async(req, res) => {
    const result = await OrderDetail.create({
        ord_id: req.body.order_id,
        pro_id: req.body.product_id,
        quantity: req.body.quantity,
        price: req.body.price,

    })
    return { result }
}



module.exports = {
    getAllOrderDetail,
    getOrderDetailById,
    createOrderDetail,
    updateOrderDetailById
}