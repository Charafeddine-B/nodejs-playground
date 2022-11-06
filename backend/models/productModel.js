const mongoose = require('mongoose');
const productSchema = mongoose.Schema(
    {
        libele:{
            type:String,
            required:true,
            trim: true
        },
        categorie:{
            type:String,
            required:true,
            trim: true
        },
        prix:{
            type:Number,
            required:true,
            trim: true
        }


    }
)
module.exports =mongoose.model('product',productSchema)