const productServices = require('../services/productServices')

const config = require('../config/config')

const getAllProducts = async(req, res) => {
    const result = await productServices.getAllProducts(req, res)
    res.json(result)
        // res.render('pages/home', { result })
}
const getProductById = async(req, res) => {
    const result = await productServices.getProductById(req, res)
        // res.send(result)
    res.render('pages/product', { result })
}

const updateProductById = async(req, res) => {
    const result = await productServices.updateProductById(req, res)
    res.send({ result, status: true })
}
const createProduct = async(req, res) => {
    console.log(req.body.pro_featured)
    const result = await productServices.createProduct(req, res)
    res.json({ result, status: true })
}


module.exports = { getAllProducts, getProductById, createProduct, updateProductById }