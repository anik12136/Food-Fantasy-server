const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Chef is cooking')
})

app.listen(port, () => {
  console.log(`Chef API is running on port: ${port}`)
})