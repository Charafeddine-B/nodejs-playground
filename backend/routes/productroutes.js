
const express = require('express')
const router = express.Router()
const { getProductbyid, getAllProducts, addProduct, updateProduct, deleteProduct } = require('../controllers/ProductsControllers')

router.route('/products').get(getAllProducts)
router.route('/product/:id').get(getProductbyid)
router.route('/addproduct').post(addProduct)
router.route('/update/:id').patch(updateProduct)
router.route('/delete/:id').delete(deleteProduct)
module.exports = router;











