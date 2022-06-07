var mongoose = require("mongoose");
const Schema = mongoose.Schema;


//module.exports = () => {
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
  
  productSchema.set("timestamps", true)
  //return mongoose.model("products", productSchema);
//};
module.exports = mongoose.model('produtos', productSchema)

//module.exports = {productSchema}
