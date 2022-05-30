const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config')
const db = {}
const connection = new Sequelize(config.db.databaseName1, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
})
db.Category = require('./category.model')(connection, DataTypes)
db.User = require('./user.model')(connection, DataTypes)
db.Order = require('./order.model')(connection, DataTypes);
db.OrderDetail = require('./orderDetail.model')(connection, DataTypes);
db.Product = require('./product.model')(connection, DataTypes);
db.Reviews = require('./productReviews.model')(connection, DataTypes);
db.Images = require('./productImage.model')(connection, DataTypes);
db.Specs = require('./productSpecs.model')(connection, DataTypes);

////one Category has many Products
db.Category.hasMany(db.Product, { foreignKey: 'cat_id' });
db.Product.belongsTo(db.Category, { foreignKey: "cat_id" });
////one Products has many Images
db.Product.hasMany(db.Images, { foreignKey: "pro_id" });
db.Images.belongsTo(db.Product, { foreignKey: "pro_id" });
////one Products has many Specifications
db.Product.hasMany(db.Specs, { foreignKey: "pro_id" });
db.Specs.belongsTo(db.Product, { foreignKey: "pro_id" });
////one Products has many Reviews
db.Product.hasMany(db.Reviews, { foreignKey: "pro_id" });
db.Reviews.belongsTo(db.Product, { foreignKey: "pro_id" });
////one User has many Orders
db.User.hasMany(db.Order, { foreignKey: "user_id" });
db.Order.belongsTo(db.User, { foreignKey: "user_id" });
////one Order has many Orderdatail
db.Order.hasMany(db.OrderDetail, { foreignKey: "ord_id" });
db.Order.belongsTo(db.User, { foreignKey: "ord_id" });

db.OrderDetail.hasOne(db.Product, { foreignKey: "pro_id" });
db.Product.belongsTo(db.OrderDetail, { foreignKey: "pro_id" });


// db.student.belongsToMany(db.course, { through: db.studentCourse, foreignKey: 'student_id' });
// db.course.belongsToMany(db.student, { through: db.studentCourse, foreignKey: "course_id" });

module.exports = db