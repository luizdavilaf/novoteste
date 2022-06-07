var mongoose = require("mongoose");
//const { saveProduct } = require("../services/product.js");
//const Produto = require("../models/productModel");
const { saveProduct} = require('../services/product')

/* const save = (req, res) => {
  let produto = new productModel({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
  });

  //Save in database
  produto.saveProduct();
} */

const save = (req, res) => {  
  const { title, description, price, category } = req.body;  
  return new Promise((resolve, reject)=>{
      saveProduct(title,description,price,category)
      .then((product)=>{
          console.log(product)
          resolve(product)
          res.status(200).send()
      })
      .catch(err=>{
          console.log(err)
          reject(err)
          res.status(500).send(err)
      })      
  })
  
  
  return res.json({ message: "Product created!" })

  
};
module.exports = { save };