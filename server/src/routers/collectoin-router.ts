//@ts-ignore
import express from 'express'
import collection from '../controllers/collectionController'
import verifyJwt from '../middlewares/verify-jwt'
const stamprouter=express.Router()
stamprouter.post('/createStamp',verifyJwt,collection.createStamp)
stamprouter.get("/getMyStamps",verifyJwt,collection.getMyStamps)
stamprouter.get("/stampCollection",verifyJwt,collection.getAllStamps)
stamprouter.put('/updateStamp/:id',verifyJwt,collection.updateStamp)
stamprouter.delete('/deleteStamp/:id',verifyJwt,collection.deleteStamp)
stamprouter.get("/stampCollection/:stampId",verifyJwt,collection.getStampById)
stamprouter.post('/sellstamp',verifyJwt,collection.sellStamp)






export default stamprouter