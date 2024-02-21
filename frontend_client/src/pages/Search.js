import React, { useState, useEffect } from 'react'
import { useCart } from '../context/cart'
import Layout from '../components/Layout/Layout'
import { useSearch } from '../context/search'
import Products from './Products'

const Search = ({ setCartItems }) => {
  const [values, setValues] = useSearch()
  const [message, setMessage] = useState()
  const [showData, setDataShow] = useState()
  const [showFullDescription, setShowFullDescription] = useState(false)
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription)
  }

  const [cart, setCart] = useCart()
  console.log(values, 'this is search values ')
  function addToCart(items) {
    // console.log('this is a items data ', items)

    setCartItems((prevItems) => [...(prevItems || []), { id: items._id }])
    setDataShow((prevItems) => {
      prevItems = prevItems || []
      const isDuplicate = prevItems.some((item) => item.id === items._id)
      // If it's not a duplicate, add the item to the state
      if (!isDuplicate) {
        return [...prevItems, { id: items._id }]
      }
      // If it's a duplicate, return the previous state
      return prevItems
    })
  }

  if (values?.data?.length < 0) {
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
            {values.data?.data &&
              values.data?.data?.map((val) => (
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
                      onClick={() => {
                        addToCart(val)
                      }}
                      className="btn btn-warning me-2"
                    >
                      ADD TO CART
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

export default Search
