const text = require("body-parser/lib/types/text");
var mongoose = require("mongoose");
const { paginate } = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;



  let productSchema = new Schema({
    title: {
      type: String,
      required: true,      
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,      
    },
  })
 // productSchema.plugin(paginate)
  productSchema.set("timestamps", true)
  productSchema.index({title: 1, category: 1 });
  
module.exports = mongoose.model('produtos', productSchema)


