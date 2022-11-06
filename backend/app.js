const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('Hello World!');
})
//-----------api-----

app.use(express.json())
const getAllProducts = require('./routes/productroutes')
app.use('/api/v1/', getAllProducts)
//app.use('/api/v1/', product)
//const { products, product } = require('./routes/productroutes')
module.exports = app