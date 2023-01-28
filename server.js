const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect('xmongodb://127.0.0.1:27017/test');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})