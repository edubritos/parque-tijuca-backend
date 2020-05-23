//const routes = require('express-promise-router')()
const express = require('express');
const routes = express.Router()
const userController = require ('../controllers/user.controller')

routes.post('', userController.createUser)
routes.get('', userController.listAllUser)
routes.delete('', userController.deleteUser)
routes.put('', userController.updateUser)

module.exports = routes