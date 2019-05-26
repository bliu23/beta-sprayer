'use strict';

const express = require('express')
const axios = require('axios')

const PORT = 8080
const HOST = '0.0.0.0'

// App
const app = express()


app.get('/', async (req, res) => {
  // Make HTTP request in here the apps/routes logic for simplicity.
  const url = 'http://localhost:3001' // Host and Port should go in a constants file
  try {
    const response = await axios.get(url)
    res.send(response.data + '\n')
  } catch (error) {
    console.log(error)
    res.send("Some error occured")
  }
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
