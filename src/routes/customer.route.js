const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const customer_controller = require('../controllers/customer.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/customers', customer_controller.getAllCustomers);
module.exports = router;