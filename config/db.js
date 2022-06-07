const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const database = "jocatest";
const uri =
  "mongodb+srv://luizdavilaf:teste123@cluster0.jb2utdz.mongodb.net/jocatest?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true";
let _db;

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}


const disconnectDB = () => mongoose.disconnect();

module.exports = { connectDB, disconnectDB };


