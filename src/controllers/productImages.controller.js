const imageServices = require('../services/imageServices')
const config = require('../config/config')

const getAllProductsImages = async(req, res) => {
    const result = await imageServices.getAllProductsImages(req, res)
    res.send(result)
}
const getProductImagesById = async(req, res) => {
    const result = await imageServices.getProductImagesById(req, res)
    res.send(result)
}

const updateProductImagesById = async(req, res) => {
    const result = await imageServices.updateProductImagesById(req, res)
    res.send(result)
}
const createProductImages = async(req, res) => {
    const result = await imageServices.createProductImages(req, res)
    res.send(result)
}



module.exports = {
    getAllProductsImages,
    getProductImagesById,
    createProductImages,
    updateProductImagesById
}