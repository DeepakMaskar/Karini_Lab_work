const mongodb = require('mongoose')

const itemSchema = new mongodb.Schema({
  SKU: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})
const data = mongodb.model('Item', itemSchema) || mongodb.model('Item')

module.exports = data
