const app = require("express")();
//const mongo = require("./config/db.js");
const mongoose = require("mongoose");
const consign = require("consign");
require('dotenv-flow').config();
const PORT = process.env.PORT ;
console.log("enviroment: "+process.env.NODE_ENV);
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger.json');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerDocs= swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



mongoose.connect (
  process.env.DBHOST,  { useUnifiedTopology: true, useNewUrlParser: true }
).catch(error => console.log("Error connecting to MongoDB: " + error));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
 
});

consign()
  .include("./config/middlewares.js")
  .then("./config/routes.js")
  .into(app);


  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });

module.exports = app