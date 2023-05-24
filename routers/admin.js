const express = require('express') ;
const router = express.Router();

const adminCtrl = require('../controllers/admin');

router.get('/admin/add-product',adminCtrl.getAddProduct);

// nằm trong cái form nhập
router.post('/admin/postAddProduct',adminCtrl.postAddProduct);




module.exports = router ;