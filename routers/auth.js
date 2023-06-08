const express = require("express");
const router = express.Router();

const authCtrl = require('../controllers/auth');

router.get('/login',authCtrl.getlogin);
router.post('/login',authCtrl.postLogin);

router.post('/postSignin',authCtrl.postSignin);

module.exports = router ;

