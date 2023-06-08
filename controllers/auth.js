const Product = require("../models/product");
const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.getlogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
  });
};


// exports.postLogin = (req, res, next) => {
//   User.findOne({email: req.body.email})
//     .then((user) => {
//       if (!user) {
//         console.log("Khong tim thay user");
//       }
//       const validpassword =  bcrypt.compare(req.body.password,user.password);

//       if(!validpassword){
//         console.log("Vui long nhap lai mat khau , Password Wrong!");

//       }
//       if(user && validpassword){
//         console.log('Dang nhap da thanh cong');
//         req.session.isLoggedIn = true;
//         req.session.user = user;
//         res.redirect("/");
//         return user;
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
exports.postLogin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      console.log("Khong tim thay user");
    } else {
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) {
        console.log("Vui long nhap lai mat khau, Password Wrong!");
      } else {
        console.log("Dang nhap da thanh cong");
        req.session.isLoggedIn = true;
        req.session.user = user;
        return req.session.save((err) => {
          console.log("Đăng nhập và lưu session thành công");
          res.redirect("/");
        });
        // return user;
      }
    }
  } catch (err) {
    console.log(err);
  }
};


exports.postSignin = (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  bcrypt
    .genSalt(10)
    .then((salt) => {
      return bcrypt.hash(password, salt);
    })
    .then((hashedPassword) => {
      const user = new User({
        email: email,
        username: username,
        password: hashedPassword,
      });

      return user.save();
    })
    .then((user) => {
      res.redirect("/login");
      console.log("Đã tạo tài khoản thành công");
     
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.logout = (req,res,next)=>{
  req.session.destroy((err)=>{
    console.log(err);
    res.redirect("/login");
  } );
}
