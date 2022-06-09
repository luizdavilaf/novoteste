
const mongoose = require("mongoose");
require('dotenv-flow').config();
//const uri ="mongodb+srv://luizdavilaf:teste123@cluster0.jb2utdz.mongodb.net/jocatest?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DBHOST, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}


const disconnectDB = () => mongoose.disconnect();

module.exports = { connectDB, disconnectDB };


