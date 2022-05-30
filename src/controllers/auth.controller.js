const models = require('../models')
const authServices = require('../services/authServices')

const User = models.User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

const registerUser = async(req, res) => {
    const { name, email, phone, password, admin } = req.body
    if (name == null) {
        res.send("Required all fields to fill")
    } else if (email == null) {
        console.log("Required all fields to fill");
    } else if (password == null) {
        console.log("Required all fields to fill");
    } else if (admin == null) {
        console.log("Required all fields to fill");
    } else if (phone == null) {
        console.log("Required all fields to fill");
    } else {
        const verifyEmail = await User.findOne({ where: { user_email: email } })
        if (verifyEmail == null) {
            const hashPass = await bcrypt.hash(password, 13)
            const result = await User.create({
                    user_name: name,
                    user_email: email,
                    user_phone: phone,
                    is_admin: admin,
                    user_password: hashPass,
                })
                // console.log(result.dataValues.user_id);
                // res.send(`User is register`)
            const token = jwt.sign({ id: result.dataValues.user_id }, config.jwt.secret)
            res.cookie('jwt', token, { httpOnly: true, maxAge: 20000 })
            res.status(200).json({
                status: true,
                data: {
                    user_id: result.dataValues.user_id,
                }
            })
        } else {
            res.send("User email already exist")
        }
    }
}

const login = async(req, res) => {
    const { username, password } = req.body
    const verifyUser = await User.findOne({ where: { user_email: username } })
    if (verifyUser == null) {
        res.send("User not found")
    } else {
        const verifypass = await bcrypt.compare(password, verifyUser.user_password)
        if (verifypass == true) {
            const token = jwt.sign({ id: verifyUser.user_id }, config.jwt.secret)
            res.cookie('jwt', token, { httpOnly: true, maxAge: 200000 })
            res.status(200).json({
                status: true,
                data: {
                    user_id: verifyUser.user_id,
                }
            })
        } else {
            res.send("Password incorrect")
        }
    }
}

const auth = async(req, res, next) => {
    try {
        const token = req.cookies.jwt
        const tokenVerify = await jwt.verify(token, config.jwt.secret)
            // console.log(tokenVerify)
            // console.log(tokenVerify.id)
        res.locals.id = tokenVerify.id
        next();

    } catch (error) {
        console.log("error")
        res.send(error)
    }

}

const logout = async(req, res) => {
    try {
        // res.clearCookie("jwt")
        res.cookie('jwt', '', { maxAge: 1 })
        res.redirect('/auth')
            // await res.save()
            // console.log("logout Successfully");
    } catch (error) {
        res.status(500).send(error)
    }
}

const page = (req, res) => {
    res.render('pages/login-register')
}

module.exports = { registerUser, login, auth, page, logout }