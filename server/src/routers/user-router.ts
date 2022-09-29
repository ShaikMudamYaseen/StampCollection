// @ts-ignore
import express from 'express'
import userController from '../controllers/userController'
import verifyJwt from '../middlewares/verify-jwt'
const router=express.Router()
router.post("/register",userController.addUser)
router.get("/user/:id",userController.getUserById)
router.get("/users",userController.getUser)
router.put("/updateUser",verifyJwt,userController.updateUser)




export default router