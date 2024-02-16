const express = require('express');

const adminController = require('../controllers/admin')
const {postAddProduct} = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);

// /admin/products => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router
