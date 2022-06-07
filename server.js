const app = require("express")();
const port = 6000;
const mongo = require("./config/db.js");
const mongoose = require("mongoose");
const consign = require("consign");

mongo.connectDB();
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log("Server running on port", port);
  });
});

consign()
  .include("./config/middlewares.js")
  .then("./config/routes.js")
  .into(app);
