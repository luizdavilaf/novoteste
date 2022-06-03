const { ObjectId } = require('mongodb');

module.exports = app => {

    const save = (req, res) => {
        const product = { ...req.body }
        app.db.collection('products')
            .insertOne(product)
            .then(_ => res.status(200).send())
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db.collection('products')
            .find().toArray()
            .then(products => res.json(products))
            .catch(err => res.status(500).send(err))

    }
    const getById = (req, res) => {
        var id = req.params.id
        app.db.collection('products')
            .findOne(ObjectId(id))
            .then(products => res.json(products))
            .catch(err => res.status(500).send(err))

    }

    const remove = (req, res) => {
        var id = req.params.id
        app.db.collection('products')
            .deleteOne({ _id: ObjectId(id) })
            .then(_ => res.status(200).send())
            .catch(err => res.status(500).send(err))
    }


    const edit = (req, res) => {
        var id = req.params.id
        var title = req.body.title
        var description = req.body.description
        var price = req.body.price
        var category = req.body.category
        app.db.collection('products')
            .updateOne({ _id: ObjectId(id) }, {
                $set: {
                    title: title,
                    description: description,
                    price: price,
                    category: category
                }
            })
            .then(_ => res.status(200).send())
            .catch(err => res.status(500).send(err))
    }

    const getByCategory = (req, res) => {
        var id = req.params.id
        app.db.collection('products')
            .findOne(ObjectId(id))
            .then(products => res.json(products))
            .catch(err => res.status(500).send(err))

    }

    const getByName = (req, res) => {
        var id = req.params.id
        app.db.collection('products')
            .findOne(ObjectId(id))
            .then(products => res.json(products))
            .catch(err => res.status(500).send(err))

    }



    return { save, get, getById, remove, edit,getByCategory,getByName }



}