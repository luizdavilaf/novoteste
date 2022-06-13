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
    let product = productModel.find({},{ title: 1, description: 1,price: 1,category: 1 }).lean()
    //console.log(product)
    return product
}

const deleteProduct = (id) =>{
    const product = productModel.findById({_id: id},{ title: 1, description: 1,price: 1,category: 1 }).lean()
    return productModel.deleteOne(product)
}
 
const getProduct = (id) =>{
    return productModel.findById({_id: id},{ title: 1, description: 1,price: 1,category: 1 }).lean()    
}

const editProduct = (id,title, description, price, category) =>{
    var filter = {_id: id}
    var projection = {projection: { title: 1, description: 1,price: 1,category: 1 }}
    var update = {
        title: title,
        description: description,
        price: price,
        category: category
     }
     var return1 = {new: true}     
    return productModel.findByIdAndUpdate(filter,update,{new: true}).lean()     
}

const searchByName = (title) => {
    return productModel.find({
     "title" : {$regex: title, $options:'i' }
    },{ title: 1, description: 1,price: 1,category: 1 }).lean()
}

const searchByCategory = (category) => {
    return productModel.find({
     "category" : {$regex: category, $options:'i' }
    },{ title: 1, description: 1,price: 1,category: 1 }).lean()
}

const editCategory = (id, category) => {    
    return productModel.findOneAndUpdate(
        {_id: id},{category: category},{new: true}).lean()
}
   



module.exports= { saveProduct, gelAllProducts,deleteProduct, getProduct, editProduct, searchByName, searchByCategory,editCategory}
