const express = require('express')
const router = express.Router()

controller = require('./controllers/controller')

router.get('/ping', controller.pong)
router.post('/ping/msg', controller.pong_msg)


module.exports = router;


