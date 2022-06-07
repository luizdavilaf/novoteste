
const productController = require('../controllers/product.js')



module.exports = app => {

    //app.route('/products')
        //.post(app.api.product.save)
        //.post(productController.save)
     /*    .get(app.api.product.get)

    app.route('/products/:id')
        .put(app.api.product.save)//editar ainda nao implementado
        .get(app.api.product.getById)
        .delete(app.api.product.remove)
        .post(app.api.product.edit) */

     app.post('/products', productController.save ) 



    
        
            
        
           
       
       
    
        
}




  /*  app.route('/')    
        .get((req, res) => {                    
            res.render('../public/index.ejs')
            
        })
        
        .get((req, res) => {
            var cursor = db.collection('data').find()
        })

    
    
    
    app.route('/edit/:id')
        .get((req, res)=> {
            var id = req.params.id
    
            db.collection('data').find(ObjectId(id)).toArray((err, result)=>{
                if(err) return res.send(err)
                res.render('../public/edit.ejs',{data: result})
            })
        })
    
    
        .post((req, res)=>{
            var id = req.params.id
            var title = req.params.title
            var description = req.params.description
            var price = req.params.price
            var category = req.params.category
            db.collection('data').updateOne({_id: ObjectId(id)},{
                $set:{
                    title: title,
                    description: description ,      
                    price: price ,
                    category: category      
                }
            },(err,result)=>{
                if(err) return res.send(err)
                res.redirect('/show')
                console.log('atualizado no banco de dados')
            })
        })
    
    app.route('/delete/:id')
        .get((req, res)=>{
            var id = req.params.id
    
            db.collection('data').deleteOne({_id: ObjectId(id)},(err, result)=>{
                if(err) return res.send(500, err)
                console.log("deletado do BD")
                res.redirect('/show')
            })
        }) */











