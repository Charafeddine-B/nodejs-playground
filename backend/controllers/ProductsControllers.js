exports.getProducts = (req, res) => {
    res.status(200).json({
        code: 200,
        success: true,
        message: 'affichage de tous les produits'

    })
}
exports.getProductbyid = (req, res) => {
    var id = req.params.id
    res.status(200).json({
        success: true,
        message: "affichage d'un seul produit par id=" + id
    })

}

