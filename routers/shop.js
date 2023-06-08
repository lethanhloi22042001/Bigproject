const express = require('express');
const router = express.Router() ;

const ctrlCustomer = require('../controllers/customer');



router.get('/',ctrlCustomer.shopindex);

router.get('/cart',ctrlCustomer.getCart);
router.post('/cart',ctrlCustomer.postCart);
module.exports = router ;