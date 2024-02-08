const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({
    success: true,
    message: 'server running properly',
    status: 200
  })
})

app.listen(3000, () => {
    console.log('server running on 3000')
})