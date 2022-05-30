const express = require('express');
const userRoute = require('./user.route')
const productRoute = require('./product.route')
const homeRoute = require('./home.route')
const categoryRoute = require('./category.route')
const orderRoute = require('./order.route')
const authRoute = require('./auth.rout')
const imagesRoute = require('./productImages.route')
const reviewsRoute = require('./productReviews.route')
const specsRoute = require('./productSpecs.route')
const orderDetailRoute = require('./orderDetail.route')
const adminRoute = require('./admin.route')
const router = express.Router();
const routers = [{
        path: '/',
        route: homeRoute
    }, {
        path: '/admin',
        route: adminRoute
    },
    {
        path: '/users',
        route: userRoute
    }, {
        path: '/products',
        route: productRoute
    }, {
        path: '/categories',
        route: categoryRoute
    },
    {
        path: '/orders',
        route: orderRoute
    }, {
        path: '/orderdetails',
        route: orderDetailRoute
    }, {
        path: '/auth',
        route: authRoute
    }, {
        path: '/images',
        route: imagesRoute
    }, {
        path: '/reviews',
        route: reviewsRoute
    }, {
        path: '/specs',
        route: specsRoute
    }
]
routers.forEach((route) => {
    router.use(route.path, route.route)
})
module.exports = router