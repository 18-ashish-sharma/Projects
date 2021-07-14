const router = require('express').Router()

const auth = require('../middlewares/auth')
const districtController = require('../controllers/districtController')

router.post('/addDistrict' , auth , districtController.addDistrict)
   

router.get('/getDistricts',auth , districtController.getDistrict)


module.exports = router