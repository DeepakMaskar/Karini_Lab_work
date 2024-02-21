const router = require('express').Router()
const product = require('./productRouter')
const item = require('./itemRouter')

router.use('/item', item)
router.use('/product', product)

module.exports = router
