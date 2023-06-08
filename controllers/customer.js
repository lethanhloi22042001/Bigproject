const User = require('../models/user');
const Product = require("../models/product");


exports.shopindex = (req, res, next) => {
  Product.find()
  .then((products) => {
    // console.log(products);
    res.render('shop/shop',{
      prods: products,
    } );
  })
  .catch((err) => {
    console.log(err);
  });
  };
  

  
exports.getCart = (req, res, next) => {
    Product.find()
    .then((products) => {
      console.log(products);
      res.render('shop/cart',{
        prods: products,
      } );
    })
    .catch((err) => {
      console.log(err);
    });
}

// exports.postCart = (req, res, next) => {
//   const prodId = req.body.productId;
  
//   Product.findById(prodId)
//     .then((product) => {
//       console.log(product);
//       return req.user.addToCart(product);
//     })
//     .then((result) => {
//       console.log(result);
//       console.log('Da them vao gio hang thanh cong');
//       res.redirect("/cart");
//     });
// }

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then((result) => {
      console.log(result);
      res.redirect("/cart");
    });
};
