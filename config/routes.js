
const productController = require('../controllers/product.js')



module.exports = app => {
    
    app.route('/products')
        .post(productController.save)        
        .get(productController.get)
        

    app.route('/products/search')
        .get(productController.search)


    app.route('/products/:id')
        .put(productController.edit)
        .get(productController.getById)//ok
        .delete(productController.remove)//ok
        .post(productController.setCategory)//ok

    

    

   
        
        
}




 










