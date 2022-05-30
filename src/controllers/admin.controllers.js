const categoryServices = require('../services/categoryServices')
const productServices = require('../services/productServices')
const imageServices = require('../services/imageServices')
const config = require('../config/config')

const homePage = (req, res) => {
    res.render('admin/homepage')
}
const createProducts = async(req, res) => {
    const result = await categoryServices.getAllCategory(req, res)
    res.render('admin/createProducts', { result })
}

const createCat = (req, res) => {
    res.render('admin/createCategory')
}
const updateCat = (req, res) => {
    res.render('admin/updateCategory')
}

const viewPro = async(req, res) => {
    const result = await productServices.getAllProducts(req, res)
    const cat_result = await categoryServices.getAllCategory(req, res)
    res.render('admin/viewProducts', { result, cat_result })
}
const viewCat = async(req, res) => {
    const result = await categoryServices.getAllCategory(req, res)
    res.render('admin/viewCategories', { result })
}
const getProductsById = async(req, res) => {
    const result = await productServices.getProductById(req, res)
    const cat_result = await categoryServices.getAllCategory(req, res)
    res.render('admin/updateProducts', { result, cat_result, status: true })
}
const updateProductsById = async(req, res) => {
    const result = await productServices.updateProductById(req, res)
        // console.log(result);
    if (result[0] == 1) { res.send({ result, qstatus: true }) } else { res.send({ result, qstatus: false }) }

}
const getCategoryById = async(req, res) => {
    const result = await categoryServices.getCategoryById(req, res)
    res.render('admin/updateCategory', { result })
}
const updateCategoryById = async(req, res) => {
    const result = await categoryServices.updateCategoryById(req, res)
    res.send({ result, status: true })
}
const delSingleProduct = async(req, res) => {
    const result = await productServices.delSingleProduct(req, res)
    const id = req.params.id
    res.render('admin/delSingleProduct', { result, id })
}

const viewSingleProduct = async(req, res) => {
    const result = await productServices.getProductById(req, res)
    res.render('admin/viewSingleProduct', { result })
}
const createCategory = async(req, res) => {
    const result = await categoryServices.createCategory(req, res)
    res.send({ result, status: true })
}




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
const delProductImageById = async(req, res) => {
    const result = await productServices.delProductImageById(req, res)
    res.send(result)
}

module.exports = {
    homePage,
    createCat,
    createCategory,
    createProducts,
    updateCat,
    viewPro,
    viewCat,
    getProductsById,
    updateProductsById,
    getCategoryById,
    updateCategoryById,
    delSingleProduct,
    viewSingleProduct,
    createProductImages,
    updateProductImagesById,
    getProductImagesById,
    getAllProductsImages,
    delProductImageById
}