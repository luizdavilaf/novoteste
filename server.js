const app = require("express")();
const port = 6000;
const mongo = require("./config/db.js");
const mongoose = require("mongoose");
const consign = require("consign");
//const router = require('./config/routes.js')
/* const bodyParser = require("body-parser");
const cors = require("cors"); */



/* app.db = mongo.connectDB(async (err) => {
    if (err) throw err
    const db = mongo.getDB()
    app.db = db */
mongo.connectDB();
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log("Server running on port", port);
  });
});


/* app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); */
//app.use(router)
/* consign()
  .then("./config/middlewares.js")
  .then("./models")
  .then("./services")
  .then("./controllers")
  .then("./config/routes.js")
  .into(app); */

  consign()
    .include('./config/middlewares.js')
    .then('./config/routes.js')
    .into(app)


