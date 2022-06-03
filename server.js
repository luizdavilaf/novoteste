
const app = require('express')();
const port = 6000
const consign = require('consign');
const mongo = require('./config/db.js')


app.db = mongo.connectDB(async (err) => {
    if (err) throw err
    const db = mongo.getDB()
    app.db = db
    
    consign()
        .then('./config/middlewares.js')
        .then('./api')
        .then('./config/routes.js')
        .into(app)

    app.listen(port, () => {
        console.log('Server running on port' , port)
    })
    
   
    
    

    
    

    
    
     

    

})