const express = require("express");
const router = express.Router();

const dashboardRoutes = require("./dashboard.routes");
const userRoutes = require("./user.routes");
const teamRoutes = require("./team.routes");
const actionRoutes = require("./action.routes");
const loginRoutes = require("./login.routes");
const typeActionRoutes = require("./type-action.routes");
const typeTrailRoutes = require("./type-trail.routes");

router.use("/dashboard/", dashboardRoutes);
router.use("/users/", userRoutes);
router.use("/teams/", teamRoutes);
router.use("/actions/", actionRoutes);
router.use("/login/", loginRoutes);
router.use("/type_action/", typeActionRoutes);
router.use("/type_trail/", typeTrailRoutes);

module.exports = router;
