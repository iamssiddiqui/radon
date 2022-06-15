const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const OrderController= require("../controllers/orderController")
const ProductController = require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")


router.post("/createUser", UserController.createUser)
router.post("/createProduct", ProductController.createProduct)
router.post("/createOrder", OrderController.createOrder)

module.exports = router;