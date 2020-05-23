const express = require('express')
const cors = require('cors')
const router = require('./routes/router')

//const { errors } = require('celebrate');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
//app.use(errors())
app.use(router)



module.exports = app
