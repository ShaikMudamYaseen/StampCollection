// @ts-ignore

import express from 'express'
import router from './routers/user-router'
import loginRouter from './routers/login-route'
import stamprouter from './routers/collectoin-router'
import cartrouter from './routers/cartItems-router'
// import {config} from 'dotenv'
const app=express()
app.use(express.json())
// config()
// app.use(express.query())
app.use("/api/v1",router)
app.use("/api/v1/user",loginRouter)
app.use("/api/v1/collection",stamprouter)
app.use("/api/v1/user/cart",cartrouter)




export default app
