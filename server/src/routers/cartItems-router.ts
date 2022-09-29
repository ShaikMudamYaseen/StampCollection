import express from 'express'
import verifyJwt from '../middlewares/verify-jwt'
import cartItemsController from '../controllers/cartItemsController'
const cartrouter=express.Router()

cartrouter.get("/items",verifyJwt,cartItemsController.getCartItems)
cartrouter.post("/addtocart",verifyJwt,cartItemsController.addToCart)
cartrouter.delete("/removeitem/:id",verifyJwt,cartItemsController.removeFromCart)




export default cartrouter
