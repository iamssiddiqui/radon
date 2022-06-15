//const OrderModel = require("../models/orderModel")
const UserModel = require("../models/userModel")
const ProductModel = require("../models/productModel")

const createOrder= async function (req, res) {
    let orderData = req.body
    let userId = orderData.userId
    
    let user = await UserModel.findById(userId)
    if(!user){
        return res.send({msg: "this user does not exist"})
    }
    let productId = OrderData.productId
    let product = await ProductModel.findById()
    if(!product) {
        return res.send({msg: "product does not exist"})
    }

}
module.exports.createOrder = createOrder
