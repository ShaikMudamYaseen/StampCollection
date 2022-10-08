// @ts-ignore
import express from 'express'
import order from '../controllers/orderController'
import verifyJwt from '../middlewares/verify-jwt'
const router=express.Router()
router.post("/createorder",verifyJwt,order.order)
router.get("/getorders",verifyJwt,order.getOrders)

export default router