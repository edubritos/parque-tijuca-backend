//const routes = require('express-promise-router')()
const express = require("express");
const routes = express.Router();
const dashboardController = require("../controllers/dashboard.controller");

routes.get("/countPerTypeAction", dashboardController.getCountPerTypeAction);

module.exports = routes;
