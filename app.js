const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();
const MONGODB_URI = "mongodb+srv://thanhloi:220401@cluster0.socl7.mongodb.net/lethanhlong?retryWrites=true";

const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
 
const adminRouters = require("./routers/admin");
const shop = require("./routers/shop");

app.use(shop);
app.use(adminRouters);




mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(3000);
    console.log('da ket noi mongo');
  })
  .catch((err) => {
    console.log(err);
  });
