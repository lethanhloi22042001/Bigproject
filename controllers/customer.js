const product = require("../models/product");
const Product = require("../models/product");


exports.getProductss = (req,res,next) => {
  Product.find()
    .then((products) => {
      console.log(products);
      
      res.render('shop/indexshop',{
        prods: products,

      } );
    })
    .catch((err) => {});
};
// This
exports.shopindex = (req, res, next) => {
  Product.find()
  .then((products) => {
    console.log(products);
    
    res.render('shop/shop',{
      prods: products,

    } );
  })
  .catch((err) => {});
  };
  
exports.getlogin = (req, res, next) => {
    res.render("auth/login", {
      pageTitle: "Login",
    });
  };
  