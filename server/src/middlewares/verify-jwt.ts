import { NextFunction, Request, Response } from 'express'
import {verify} from 'jsonwebtoken'
const verifyJwt=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const token=req.headers.cookie?.split("=")[1]
    // console.log(token);
    if(token){
        // console.log(process.env.ACCESS_TOKEN_SECRET!);
        
        await verify(token,process.env.ACCESS_TOKEN_SECRET!,(err,decode:any)=>{
            if(err) res.status(403).json({status:"failed",message:err})
            req.body.userId=decode.id
            next()
        })

    }else{
        res.status(401).json({  
            status:"failed",
            message:"unauthorized"
        })
    }
}catch(err){
    res.status(500).json({
        status:"failed",
        msg:err
    
    })
}
    

    
}
export default verifyJwt