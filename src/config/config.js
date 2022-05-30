const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: path.join(__dirname, '../../.env') })

const config = {
    app: {
        port: process.env.APP_PORT
    },
    db: {
        user: process.env.DB_USERNAME,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        databaseName: process.env.DB_NAME,
        databaseName1: process.env.DB_NAME1
    },
    jwt: {
        secret: process.env.JWT_SECRET
    }
}
module.exports = config