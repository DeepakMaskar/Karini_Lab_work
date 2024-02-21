const item = require('../models/ItemModel')

//search Product
exports.searchProductController = async (req, res) => {
  try {
    const { keyword } = req.query
    console.log('this keyword', keyword)
    const result = await item.find({
      $or: [
        { Title: { $regex: keyword, $options: 'i' } },
        //{ SKU: { $regex: keyword } },
      ],
    })

    console.log(result, 'this is a result')

    res
      .status(200)
      .send({ data: result, message: 'getting a data as per search' })
  } catch (error) {
    console.log(error)
    res.status(400).send({
      success: false,
      message: 'Error In Search Product API',
      error,
    })
  }
}
