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

const gelAllProducts = () =>{
    return productModel.find({}).lean()
}

const deleteProduct = (id) =>{
    const product = productModel.findById({_id: id})
    return productModel.deleteOne(product)
}
 
const getProduct = (id) =>{
    return productModel.findById({_id: id})    
}

const editProduct = (id,title, description, price, category) =>{
    var filter = {_id: id}
    var update = {
        title: title,
        description: description,
        price: price,
        category: category
     }
     var options = {new: true}
    return productModel.findOneAndUpdate(filter,update,options)     
}

const searchByName = (title) => {
    return productModel.find({
     "title" : {$regex: title, $options:'i' }
    })
}

const searchByCategory = (category) => {
    return productModel.find({
     "category" : {$regex: category, $options:'i' }
    })
}

const editCategory = (id, category) => {    
    return productModel.findOneAndUpdate({_id: id},{category: category},{new: true})
}
   



module.exports= { saveProduct, gelAllProducts,deleteProduct, getProduct, editProduct, searchByName, searchByCategory,editCategory}
