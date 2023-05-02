const express = require('express');
const app = express();
const cors =require('cors');
const port = 3000 ;
const chefs = require('./Data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Chef is cooking')
})

app.get('/chefs',(req,res)=>{
    res.send(chefs);
})
app.listen(port, () => {
  console.log(`Chef API is running on port: ${port}`)
})