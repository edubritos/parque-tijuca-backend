//const routes = require('express-promise-router')()
const express = require("express");
const routes = express.Router();
const loginController = require("../controllers/login.controller");

routes.post("", loginController.logon);

module.exports = routes;
