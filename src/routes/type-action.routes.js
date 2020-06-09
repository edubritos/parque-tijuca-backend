//const routes = require('express-promise-router')()
const express = require("express");
const routes = express.Router();
const typeActionController = require("../controllers/type-action.controller");

routes.get("", typeActionController.listAllTypeAction);

module.exports = routes;
