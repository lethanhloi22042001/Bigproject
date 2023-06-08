const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const User = require('./models/user')

const app = express();
const MONGODB_URI = "mongodb+srv://thanhloi:220401@cluster0.socl7.mongodb.net/lethanhlong?retryWrites=true";

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'session'
});

const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
// Là hàm gán session
app.use((req, res, next) => {
  // vào nếu không có ID thì không được nhận
  if (!req.session.user) {
    return next();
  }
  // Vào nếu có thì Tìm ID của ID trong user và gắn thằng nớ bằng req.user
  User.findById(req.session.user._id)
  .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});
 
const adminRouters = require("./routers/admin");
const shop = require("./routers/shop");
const auth = require('./routers/auth')

app.use(shop);
app.use(adminRouters);
app.use(auth);



mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(3000);
    console.log('da ket noi mongo');
  })
  .catch((err) => {
    console.log(err);
  });
