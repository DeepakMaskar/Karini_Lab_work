const router = require('express').Router()

const itemController = require('../controller/itemController')
const AddTOController = require('../controller/addToCart')

router.get('/getData', itemController.getdata)
router.post('/addToCart', AddTOController.addtoCart)

module.exports = router
