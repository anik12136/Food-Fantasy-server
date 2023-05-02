const express = require('express')
const app = express()
const port = 3000
const chefs = require('./Data/chef.json')

app.get('/', (req, res) => {
  res.send('Chef is cooking')
})

app.get('/chefs',(req,res)=>{
    res.send(chefs);
})
app.listen(port, () => {
  console.log(`Chef API is running on port: ${port}`)
})