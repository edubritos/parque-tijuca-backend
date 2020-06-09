//const routes = require('express-promise-router')()
const express = require("express");
const routes = express.Router();
const typeTrailController = require("../controllers/type-trail.controller");

routes.get("", typeTrailController.listAllTypeTrail);

module.exports = routes;
