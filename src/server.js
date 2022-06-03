require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const router = require('./routes/routes')
const cors = require('cors')

const PORT = process.env.PORT || 9000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/homeworks'))
app.use(fileUpload())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(router)
app.use('/*', (_, res) => res.sendStatus(404));


app.listen(PORT, console.log(PORT))