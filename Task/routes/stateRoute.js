const router = require('express').Router()

const auth = require('../middlewares/auth')
const stateController = require('../controllers/stateController')

router.post('/addState' , auth , stateController.addState)
   

router.get('/getStates',auth , stateController.getStates)


module.exports = router