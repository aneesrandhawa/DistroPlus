const models = require('../models')
const Specs = models.Specs

const config = require('../config/config')

const getAllSpecs = async(req, res) => {
    const result = await Specs.findAll()
    res.send(result)
}
const getSpecsById = async(req, res) => {
    const result = await Specs.findByPk(req.params.id)
    res.send(result)
}

const updateSpecsById = async(req, res) => {
    const result = await Specs.update({
        pro_id: req.body.pro_id,
        memory: req.body.memory,
        ram: req.body.ram,
        color: req.body.color,
        screen_size: req.body.screen_size,
        price: req.body.price
    }, {
        where: {
            id: req.params.id
        }
    })
    res.send(result)
}
const createSpecs = async(req, res) => {
    const result = await Specs.create({
        pro_id: req.body.pro_id,
        memory: req.body.memory,
        ram: req.body.ram,
        color: req.body.color,
        screen_size: req.body.screen_size,
        price: req.body.price
    })
    res.send(result)
}



module.exports = { getAllSpecs, createSpecs, updateSpecsById, getSpecsById }