const models = require('../models')
const Category = models.Category
const User = models.User
const Product = models.Product

const config = require('../config/config')

const getAllCategory = async(req, res) => {
    const result = await Category.findAll()
        // res.json(result)
    return result
}

const allcategoryp = async(req, res) => {
    const result = await Category.findAll({ include: Product })
        // res.json(result)
    const user_detail = await User.findByPk(res.locals.id)
        // console.log(user_detail)
    return result
}
const getCategoryById = async(req, res) => {
    const result = await Category.findByPk(req.params.id)
    return result
}
const categoryByIdp = async(req, res) => {
    const result = await Category.findByPk(req.params.id, { include: Product })
    return result
}
const updateCategoryById = async(req, res) => {
    const result = await Category.update({
        cat_name: req.body.cat_name,
        cat_img: req.body.cat_img,
    }, {
        where: {
            cat_id: req.params.id
        }
    })
    return result
}
const createCategory = async(req, res) => {
    const result = await Category.create({
        cat_name: req.body.cat_name,
        cat_img: req.file.filename,
    })
    return result
}

module.exports = {
    getAllCategory,
    allcategoryp,
    getCategoryById,
    categoryByIdp,
    updateCategoryById,
    createCategory
}