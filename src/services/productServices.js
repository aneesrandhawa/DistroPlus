const models = require('../models')
const Product = models.Product
const Order = models.Order

const config = require('../config/config')


const getAllProducts = async(req, res) => {
    const result = await Product.findAll()
    return result
}
const getProductById = async(req, res) => {
    const result = await Product.findByPk(req.params.id, { include: models.Category })
    return result
}

const updateProductById = async(req, res) => {
    console.log(req.file);
    if (req.file == undefined) {
        // console.log("pic not uploaded");
        const result = await Product.update({
            cat_id: req.body.cat_id,
            pro_name: req.body.pro_name,
            pro_featured: req.body.pro_featured,
            pro_desc: req.body.pro_desc,
            pro_price: req.body.pro_price,
        }, {
            where: {
                pro_id: req.params.id
            }
        })
        return result

    } else {
        // console.log("pic upload horhi hy");
        const result = await Product.update({
            cat_id: req.body.cat_id,
            pro_name: req.body.pro_name,
            pro_featured: req.body.pro_featured,
            pro_desc: req.body.pro_desc,
            pro_price: req.body.pro_price,
            pro_img: req.file.filename,
        }, {
            where: {
                pro_id: req.params.id
            }
        })
        return result
    }

}
const createProduct = async(req, res) => {
    const result = await Product.create({
        cat_id: req.body.cat_id,
        pro_name: req.body.pro_name,
        pro_featured: req.body.pro_featured,
        pro_desc: req.body.pro_desc,
        pro_price: req.body.pro_price,
        pro_img: req.file.filename,
    })
    return result
}

const delSingleProduct = async(req, res) => {
    const result = await Product.destroy({ where: { pro_id: req.params.id } });
    return result
}


module.exports = { delSingleProduct, getAllProducts, getProductById, createProduct, updateProductById }