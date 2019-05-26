'use strict';
const express = require('express')
const gyms = require('./services/gyms')

const PORT = 8000
const HOST = '0.0.0.0'

// App
const app = express()

app.get('/', (req, res) => {
  // Skip the route/controller layer and go directly to the service for simplicity
  let gym = gyms.getGym()
  console.log(gym)
  res.send(gym)
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
