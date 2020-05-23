//const routes = require('express-promise-router')()
const express = require('express');
const routes = express.Router()
const userController = require ('../controllers/user.controller')

routes.post('', userController.createUser)
routes.get('', userController.listAllUsers)
routes.delete('', userController.deleteUsers)
routes.put('', userController.updateUsers)

module.exports = routes