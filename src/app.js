const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./configs/db.json')
const routes = require('./routes/routes')
const port = process.env.PORT || 8000
const app = express()

mongoose.connect(config.url).then(
  () => {
    console.log('\n****\tConnected with the database\n')
  }
).catch(
  (err) => {
    if (err) {
      console.log(`\n****\tError while connecting to the database.\n` +
      '****\tMake sure the mongodb service is started.\n' +
      '****\tTo fix this, try run in the terminal \'sudo service mongod start\'\n' +
      `****\tError description: ${err.message}\n`)
    }
  }
)

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use(morgan('combined'))
app.use(cors())
routes(app)
app.set('port', port)

module.exports = app