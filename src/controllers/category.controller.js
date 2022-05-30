const categoryServices = require('../services/categoryServices')
const config = require('../config/config')


const getAllCategory = async(req, res) => {
        const result = await categoryServices.getAllCategory(req, res)
        res.render('pages/home', { result })
    }
    //for special route
const allcategoryp = async(req, res) => {
    const result = await categoryServices.allcategoryp(req, res)
    const user_detail = null
    res.render('pages/home', { result, user_detail })

}

const getCategoryById = async(req, res) => {
        const result = await categoryServices.getCategoryById
        res.status(200).send(result)
    }
    //for special route
const categoryByIdp = async(req, res) => {
    const result = await categoryServices.categoryByIdp(req, res)
    res.render('pages/products', { result })
}
const updateCategoryById = async(req, res) => {
    const result = await categoryServices.updateCategoryById(req, res)
    res.send(result)
}
const createCategory = async(req, res) => {
    const result = await categoryServices.createCategory(req, res)
    res.json({ result, status: true })
}



module.exports = {
    getAllCategory,
    getCategoryById,
    updateCategoryById,
    createCategory,
    allcategoryp,
    categoryByIdp,
}