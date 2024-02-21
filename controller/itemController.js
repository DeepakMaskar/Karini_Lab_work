const Item = require('../models/ItemModel')

exports.getdata = async (req, res) => {
  try {
    let data = await Item.find({})
    res
      .status(200)
      .send({ message: 'Item retriving  successfully', data: data })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}
