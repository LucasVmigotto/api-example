require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
//const routes = './routes/route'
const app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

if (process.env.NODE_ENV === 'development') app.use(morgan('combined'))
app.use(cors())
//routes(app)
app.set('host', host)
app.set('port', port)

module.exports = app
