//const routes = require('express-promise-router')()
const express = require("express");
const routes = express.Router();
const actionController = require("../controllers/action.controller");

routes.get("", actionController.listAllAction);
routes.get("/:id", actionController.findAction);
routes.post("", actionController.createAction);
routes.put("", actionController.updateAction);
routes.delete("", actionController.deleteAction);

module.exports = routes;
