const product = require("../models/product");
const Product = require("../models/product");

 
exports.getAddProduct = (req, res, next) => {
  res.render("auth/create_product", {
    product: '', 
  });
};

 

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const name_creator = req.body.name_creator;
  const img = req.body.img;
  const price = req.body.price;
  const img_creator = req.body.img_creator;
  const description = req.body.description;

  const product = new Product({
    img_creator : img_creator,
    name_creator :name_creator,
    title: title,
    price: price,
    img: img,
    description: description,
    //   userId: req.user,
  });
  product
    .save()
    .then((result) => {
      console.log("Created Product");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
