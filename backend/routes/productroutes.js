
const express = require('express')
const router = express.Router()
const { getProductbyid, getProducts } = require('../controllers/ProductsControllers')

router.route('/products').get(getProducts)
router.route('/product/:id').get(getProductbyid)


module.exports = router;











