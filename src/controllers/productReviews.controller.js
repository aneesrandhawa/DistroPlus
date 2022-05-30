const models = require('../models')
const Reviews = models.Reviews

const config = require('../config/config')

const getAllProductsReviews = async(req, res) => {
    const result = await Reviews.findAll()
    res.send(result)
}
const getProductReviewsById = async(req, res) => {
    const result = await Reviews.findByPk(req.params.id)
    res.send(result)
}

const updateProductReviewsById = async(req, res) => {
    const result = await Reviews.update({
        pro_id: req.body.pro_id,
        user_id: req.body.user_id,
        reviews: req.body.reviews
    }, {
        where: {
            id: req.params.id
        }
    })
    res.send(result)
}
const createProductReviews = async(req, res) => {
    const result = await Reviews.create({
        pro_id: req.body.pro_id,
        user_id: req.body.user_id,
        reviews: req.body.reviews
    })
    res.send(result)
}



module.exports = { getAllProductsReviews, getProductReviewsById, createProductReviews, updateProductReviewsById }