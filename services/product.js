const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const productModel = require('../models/productModel.js')



const saveProduct = (title,description,price,category)  => {
    return new productModel({
        title: title,
        description: description,
        price: price,
        category: category
    }).save()
}
    
   



module.exports= { saveProduct}
//let contact = new ContactData(name, number)
/* app.db.collection('products')
.insertOne(product)
.then(_ => res.status(200).send())
.catch(err => res.status(500).send(err)) */