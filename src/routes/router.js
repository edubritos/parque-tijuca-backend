const express =  require('express')
const router = express.Router()

const userRoutes = require('./user.routes')
const teamRoutes = require('./team.routes')

router.use('/users/', userRoutes)
router.use('/team/', teamRoutes)

module.exports = router;