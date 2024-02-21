const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  itemId: {
    type: String, // Assuming item ID is a string
    required: true,
  },
  userId: {
    type: String, // Assuming user ID is a string
    required: true,
  },
  quantity: {
    type: Number, // Assuming quantity is a number
    required: true,
  },
})

// Create and export the model
const AddToCart = mongoose.model('AddToCart', itemSchema)
module.exports = AddToCart
