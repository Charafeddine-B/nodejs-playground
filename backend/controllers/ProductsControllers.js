
let product = require('../models/productModel')

exports.getAllProducts = async (req, res) => {
    const products = await product.find()
    res.status(200).json({
        code: 200,
        success: true,
        message: 'affichage de tous les produits',
        count: products.length,
        products

    })
}
//----------ajout
exports.addProduct = async (req, res) => {
    const produit = new product(req.body)
    await produit.save()
    res.status(200).json({
        code: 200,
        success: true,
        message: 'product a été ajouté',
        produit
    })
}


exports.getProductbyid = async (req, res) => {

    const produit = await product.findOne({
        _id: req.params.id
    })
    res.status(200).json({
        success: true,
        message: "affichage d'un seul produit par id",
        produit
    })

}

//-----------update--------------------------------
exports.updateProduct = async (req, res) => {
    const update_Product = await product.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.status(200).json({
        success: true,
        message: 'product a été modifié',
        update_Product
    })
}

//--------deleteProduct

exports.deleteProduct = async (req, res) => {
    const delete_Product = await product.deleteOne({
        _id: req.params.id
    })
    res.status(200).json({
        success: true,
        message: 'product a été supprimé',
        delete_Product
    })
}
