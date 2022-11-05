const express = require('express');

const app = express();
//const { products, product } = require('./routes/productroutes')
const getProducts = require('./routes/productroutes')
app.use(express.json())

app.use('/api/v1/', getProducts)
//app.use('/api/v1/', product)

module.exports = app