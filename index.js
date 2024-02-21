const express = require('express')
const {
  connectDB,
} = require('../BackendServer_karini/DbConnection/dbConnection')

const routes = require('./router/mainRouter')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const cors = require('cors')
//const cors = require('cors')

//const app = express()

// Allow requests from all origins
app.use(cors())

const http = require('http').createServer(app)

app.get('/', (req, res) => {
  res.send('Welcome to Backend Server')
})
app.use(routes)
connectDB()
const port = process.env.PORT || 8080
http.listen(port, () =>
  console.log(`Server listening on port http://localhost:${port}`),
)
