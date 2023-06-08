const express = require('express') ;
const router = express.Router();

const adminCtrl = require('../controllers/admin');

router.get('/admin/add-product',adminCtrl.getAddProduct);

router.post('/admin/postAddProduct',adminCtrl.postAddProduct);





module.exports = router ;