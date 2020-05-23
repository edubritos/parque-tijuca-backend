//const routes = require('express-promise-router')()
const express = require('express');
const routes = express.Router()
const teamController = require ('../controllers/team.controller')

routes.post('', teamController.createTeam)
routes.get('', teamController.listAllTeam)
routes.delete('', teamController.deleteTeam)
routes.put('', teamController.updateTeam)

module.exports = routes