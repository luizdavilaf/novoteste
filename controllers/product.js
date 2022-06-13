var mongoose = require("mongoose");
const productService = require("../services/product");

/**
 *
 * @param {*} req json com atributos de produto
 * @param {*} res resposta status da operação
 * @returns Promisse para salvar no banco
 */
const save = (req, res) => {
  const { title, description, price, category } = req.body;
  ////console.log("salvando novo produto")
  return new Promise((resolve, reject) => { //APANHEI DEMAIS NA PROMISE, NAO TINHA COLOCADO E FICAVA CARREGANDO ETERNAMENTE O BANCO
    productService.saveProduct(title, description, price, category)
      .then((product) => {
        //console.log(product);
        resolve(product);
        res.status(200).send();
      })
      .catch((err) => {
        //console.log(err);
        reject(err);
        res.status(500).send(err);
      });
  });
};
/**
 * 
 * @param {*} req 
 * @param {*} res json de produtos e status da operação
 */
const get = (req, res) => {
  //console.log("buscando todos produtos");
  productService.gelAllProducts()
    .then((products) => {   
      //console.log(products)   
      //res.json({success: true, data: products});      
      //res.status(200).send();      
      res.status(200).json({data: products});
    })
    .catch((err) => {
      //console.log(err);
      res.status(500).send(err);
    });
};
/**
 * 
 * @param {*} req id do produto na url
 * @param {*} res json e status da operação
 */
const remove = (req,res) => {
  //console.log("deletando produto")
  let id = req.params.id
  productService.deleteProduct(id)
    .then((product)=>{
      //console.log(product);
      res.status(200).json({data: product});
    })
    .catch((err) => {
      //console.log(err);
      reject(err);
    });
}
/**
 * 
 * @param {*} req id do produto na url
 * @param {*} res json do produto e status da operação
 */
const getById = (req,res) => {
  //console.log("procurando produto por id")
  let id = req.params.id
  productService.getProduct(id)
    .then((product)=>{
      //console.log(product);
      res.status(200).json({data:product});
      //res.status(200).send();
    })
    .catch((err) => {
      //console.log(err);
      res.status(500).send(err);
    });
}
/**
 * 
 * @param {*} req id pela url e todos os atributos que deseja alterar vindo por json
 * @param {*} res retorna o produto atualizado
 */
const edit = (req,res) => {
  //console.log("procurando produto para editar")  
  let id = req.params.id  
  const { title, description, price, category } = req.body;
  productService.editProduct(id,title, description, price, category)
    .then((product)=>{
      
      res.status(200).json({data: product});     
      //res.status(200).send();
    })
    .catch((err) => {
      //console.log(err);
      //console.log(res.req.body);
      res.status(500).send(err);
    });
}

/**
 * 
 * @param {*} req query na url com categoria ou nome
 * @param {*} res retorna json com os produtos
 * @param {*} next 
 */
const search = (req,res) =>{
  //console.log("procurando produto por nome")   
  if(req.query.title!=null){
    let title =req.query.title
    //console.log(title)
    productService.searchByName(title)
      .then((products)=>{
        //console.log(products)
        res.status(200).json({data: products});
      //res.status(200).send();        
      })
      .catch((err) => {
        //console.log(err);
        res.status(500).send(err);
      });
  }else if(req.query.category!=null){
    let category =req.query.category
    //console.log(category)
    productService.searchByCategory(category)
      .then((products)=>{
        //console.log(products)
        res.status(200).json({data: products});
      })
      .catch((err) => {
        //console.log(err);
        res.status(500).send(err);
      });
  }
}

/**
 * 
 * @param {*} req id do produto na url e um json com a nova categoria do produto
 * @param {*} res retorna um json com o produto
 * @returns 
 */
const setCategory = (req,res)=>{
  //console.log("editando categoria de produto") 
  let id = req.params.id 
  let category = req.body.category
  return new Promise((resolve, reject) => {
    productService.editCategory(id,category)
      .then((product)=>{
        //console.log(product);
        res.status(200).json({data: product}); 
        resolve(product);
        //console.log(product)        
      })
      .catch((err) => {
        //console.log(err);
        res.status(500).send(err);
        reject(err)
      })
  })

}



module.exports = { save, get, remove, getById, edit, search, setCategory };
