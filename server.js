const express = require('express')
const app = express()
const port = 4000
const cors = require(' cors');
const mongoose = require('mongoose');


app.use(express.json())
app.get('/', (req, res) => {
  res.send('Karim  request!')
})

app.get('/karim', (req, res) => {
  res.send('karim page!')
})

mongoose.connect('xmongodb://127.0.0.1:27017/test');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})