
module.exports = app => {

    app.route('/regprod')
        .post(app.api.product.save)
    
 
}




   /* app.route('/')    
        .get((req, res) => {                    
            res.render('../public/index.ejs')
            
        })
        
        .get((req, res) => {
            var cursor = db.collection('data').find()
        })

    app.route('/show')
        .get((req, res) => {
            db.collection('data').find().toArray((err, results) => {
                if (err) return console.log(err)
                res.render('../public/show.ejs', { data: results })
        
            })
        })
        .post((req, res) => {
            db.collection('data').insertOne(req.body, (err, result) => {
                if (err) return console.log(err)
        
                console.log('Salvo no Banco de Dados')
                res.redirect('/show')
            })
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











