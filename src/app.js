const express = require('express');
const cookiParser = require('cookie-parser');
const config = require('./config/config')
const routes = require('./routes/index')
const ejs = require('ejs')
const app = express();
app.use(express.json())
app.use(express.static('public'))
app.use(cookiParser())
app.set('view engine', 'ejs')
app.use('/', routes)

app.listen(config.app.port, console.log(`Server run at port: ${config.app.port}
http://localhost:${config.app.port}/
http://127.0.0.1:${config.app.port}/`));