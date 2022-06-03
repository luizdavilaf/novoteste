const MongoClient = require('mongodb').MongoClient;
const database = 'jocatest'
const uri = "mongodb+srv://luizdavilaf:teste123@cluster0.jb2utdz.mongodb.net/jocatest";
let _db
const { ObjectId } = require('mongodb');

const connectDB = async (callback) => {
    try {
        MongoClient.connect(uri, { useUnifiedTopology: true , useNewUrlParser: true },(err, client) => {
            _db = client.db(database)
            return callback(err)
        })
    } catch (e) {
        throw e
    }
}

const getDB = () => _db

const disconnectDB = () => _db.close()

module.exports = { connectDB, getDB, disconnectDB, ObjectId }





