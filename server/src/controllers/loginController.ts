import { Request, Response } from 'express'
import {sign} from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

import {compareSync} from 'bcrypt'

const prisma = new PrismaClient()
// const jwt= Jwt

const login=async(req:Request,res:Response)=>{

    try{
    const user=await prisma.users.findFirst({
        where:{
            email:req.body.email

        }
    })
    if(user){
        const pass=await compareSync(req.body.password,user.password)
        if(pass){
            const token=await sign({id:user.id},process.env.ACCESS_TOKEN_SECRET!)
            res.cookie('jwt',token,{httpOnly:true})
            res.status(200).json({
                status:"success",
                user:{
                    userName:user.userName,
                    firstName:user.firstName,
                    lastName:user.lastName,
                    email:user.email
                },
                token:token
            })

        }
    }
    else{
        res.status(400).json({
            status:'failed',
            message:"user not found"
        })
    }
}
catch(err){
    res.status(500).json(err)
}
}
export default login