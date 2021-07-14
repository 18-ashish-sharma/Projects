const router = require('express').Router()

const auth = require('../middlewares/auth')
const childController = require('../controllers/childController')

router.post('/addChild' , auth , childController.addChild)
   

router.get('/getChildren',auth , childController.getChildren)


module.exports = router