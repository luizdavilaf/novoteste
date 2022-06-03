//const { ObjectId } = require('mongodb');

module.exports = app => {

    const save = (req, res) => {
        /* const product = {...req.body} 
        app.db.collection('products')
            .insertOne(product)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err)) */
            res.send('user save')
    }

    /* const get = (req, res) => {

    }
    const getById = (req, res) => {
        
    }

    const remove = (req, res) => {
        
    } */



    return { save }

    //, get, getById, remove

}