const express = require('express');
const router = express.Router() ;

const ctrlCustomer = require('../controllers/customer');


router.get('/',ctrlCustomer.shopindex);
router.get('/login',ctrlCustomer.getlogin);

module.exports = router ;