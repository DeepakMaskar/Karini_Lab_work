import React, { useState } from 'react'
import { useSearch } from '../../context/search'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
  const [values, setValues] = useSearch()
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(keyword, 'this is my keyword for search')
      const { data } = await axios.get(
        `http://localhost:8080/product/search?keyword=${keyword}`,
      )
      setValues({ data })
      console.log(values, 'this is values')
      navigate('/search')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchInput
