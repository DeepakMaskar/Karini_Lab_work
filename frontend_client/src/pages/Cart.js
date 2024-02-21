import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { useCart } from '../context/cart'
import axios from 'axios'

const Cart = ({ cartItems, setItems }) => {
  const [cart, setCart] = useCart(cartItems)
  const [flag, setFlag] = useState(false)
  const [showFullDescription, setShowFullDescription] = useState(false)

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription)
  }
  cartItems = Array.from(new Set(cartItems?.map((item) => item.id)))?.map(
    (id) => {
      return cartItems.find((item) => item.id === id)
    },
  )
  //   setCartItems(cartItems)

  const [uniItem, setUniItem] = useState([])

  const [data1, setData] = useState()

  const fetchData = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/item/addToCart',
        {
          cartItems: cart,
        },
      )

      setData(response.data.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const removeItem = (id) => {
    const filterData = cart.filter((item) => item.id !== id)
    // setCartItems(cartItems)
    setCart(filterData)
    // setFlag(true)
    // setItems((prev) => !prev)
    // window.location.reload()
    fetchData()
  }

  useEffect(() => {
    setCart(cartItems)
    fetchData()
  }, [])

  useEffect(() => {
    fetchData()
  }, [cartItems])
  if (!cart) {
    return (
      <Layout title={'Search results'}>
        <div className="container">
          <div className="text-center">
            <h1>Search Results</h1>
            <h6>Loading...</h6>
          </div>
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Vendor</th>
              <th>Type</th>
              <th>Tags</th>
              <th>Variant SKU</th>
              <th>Variant Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data1 &&
              data1?.map((val) => (
                <tr key={val._id}>
                  <td>
                    <img
                      src={val['Image Src']}
                      alt={val.Title}
                      style={{ width: '100px' }}
                    />
                  </td>
                  <td style={{ maxWidth: '200px' }}>{val.Title}</td>
                  <td style={{ maxWidth: '400px' }}>
                    {showFullDescription ? val?.Body : val?.Body?.slice(0, 100)}
                    {val?.Body?.length > 100 && (
                      <button
                        className="btn btn-link"
                        onClick={toggleDescription}
                      >
                        {showFullDescription ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </td>
                  <td>{val.Vendor}</td>
                  <td>{val.Type}</td>
                  <td>{val.Tags}</td>
                  <td>{val['Variant SKU']}</td>
                  <td>{val['Variant Price']}</td>

                  <td>
                    <button
                      style={{
                        backgroundColor: 'orange',
                        color: 'black',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        marginRight: '10px',
                        marginBottom: '10px',
                      }}
                      onClick={() => removeItem(val._id)}
                    >
                      REMOVE ITEM
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default Cart
