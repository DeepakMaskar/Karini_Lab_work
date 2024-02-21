const addToCart = require('../models/addtoCart')
const Item = require('../models/ItemModel')

exports.addtoCart = async (req, res) => {
  try {
    const { itemId, userId, quantity, cartItems } = req.body

    let data1 = []
    for (let data of cartItems) {
      const item = await Item.findById(data.id)
      if (item) {
        data1.push(item)
      }
    }

    res.send({ message: 'Inserted data in the cart', data: data1 })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Internal server error' })
  }
}
