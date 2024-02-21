//import { searchProductController } from './../controller/productController'
const router = require('express').Router()
const productController = require('../controller/productController')

//serch Product
// router.get('/search/:keyword', searchProductController.)
router.get('/search', productController.searchProductController)

//export default router
//module.exports = router
module.exports = router
