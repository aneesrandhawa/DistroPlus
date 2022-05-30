const models = require('../models')
const Images = models.Images

const config = require('../config/config')

const getAllProductsImages = async(req, res) => {
    const result = await Images.findAll({ include: models.Product })
    return result
}
const getProductImagesById = async(req, res) => {
    const result = await Images.findByPk(req.params.id)
    return result
}

const updateProductImagesById = async(req, res) => {
    const result = await Images.update({
        pro_id: req.body.pro_id,
        img_url: req.body.img_url,
        default_image: req.body.default_image
    }, {
        where: {
            id: req.params.id
        }
    })
    return result
}
const createProductImages = async(req, res) => {
    const result = await Images.create({
        pro_id: req.body.pro_id,
        img_url: req.body.img_url,
        default_image: req.body.default_image
    })
    return result
}

const delSingleImageById = async(req, res) => {
    const result = await Images.destroy({ where: { id: req.params.id } });
    return result
}

module.exports = {
    getAllProductsImages,
    getProductImagesById,
    createProductImages,
    updateProductImagesById,
    delSingleImageById
}