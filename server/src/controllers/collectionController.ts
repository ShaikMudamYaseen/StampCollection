import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const createStamp =async(req:Request,res:Response)=>{
   
   try{

   if(req.body.userId){
        const newStamp=await prisma.collection.create({
        data:req.body
    })
    res.json({
        status:"success",
        stamp:{
            ...newStamp
        }
    })
}else{
    res.status(401).json({
        status:"failed",
        message:"unauthorized"
    })
}}
catch(err:any){
    res.json({
        status:"failed",
        message:err.meta.cause
    })
}


}
const getMyStamps=async(req:Request,res:Response)=>{
   try{ 
    if(req.body.userId){
        const myStamps=await prisma.collection.findMany({
            where:{
                userId:req.body.userId
            }
        })
        // console.log(myStamps);
        
        res.json({
            status:"success",
            stamp:myStamps
        })

    }else{
        res.status(401).json({
            status:"failed",
            message:"unauthorized"
        })
    }
}catch(err:any){
    res.json({
        status:"failed",
        message:err.meta.cause
    })
}
}
const getAllStamps=async(req:Request,res:Response)=>{
       try{
         const stampCollection=await prisma.collection.findMany({
            where:{
                NOT:{
                    userId:req.body.userId
                },
                sell:true
            }
         })
        // console.log(stampCollection);
        
        res.json({
            status:"success",
            collection:stampCollection
        })

    }catch(err:any){
        res.json({
            status:"failed",
            message:err.meta.cause
        })
    }
}
const updateStamp=async(req:Request,res:Response)=>{
    try{
        if(req.body.userId){
            console.log(req.body);
            
        const stamp=await prisma.collection.update({
            data:{
                ...req.body
            },where:{
                id:req.params.id
            }
        })
        console.log(stamp);
        
        res.status(200).json({
            status:"success",
            stamp:stamp
        })
        
    }else{
        res.status(401).json({
            status:"failed",
            message:"unauthorized"
        })
    }
}catch(err:any){
    console.log(err);
    
    res.json({
        status:"failed",
        message:err.meta.target[0]
    })
}
}
const deleteStamp=async(req:Request,res:Response)=>{
    try{
        if(req.body.userId){
        const deleted=await prisma.collection.delete({
            where:{
                id:req.params.id
            }
        })
        console.log(deleted);
        
        res.status(200).json({
            status:"success",
            message:"deleted successfully",
            user:deleted

        })

    }else{
        res.status(401).json({
            status:"failed",
            message:"unauthorized"
        })
    }
}
catch(err:any){
    res.json({
        status:"failed",
        message:err.meta.cause
    })
}
}
const getStampById=async(req:Request,res:Response)=>{
    try{
    if(req.body.userId){
        const stamp=await prisma.collection.findFirst({
            where:{
                id:req.params.stampId
            }
        })

        res.status(200).json({
            status:"Success",
            stamp:stamp
        })
    }
    else{
        res.status(401).json({
            status:"failed",
            message:"unauthorized"
        })
    }
}catch(err:any){
    res.json({
        status:"failed",
        message:err.meta.cause
    })
}

    
}
const sellStamp=async (req:Request,res:Response)=>{
    try{
    if(req.body.userId){
        const stamp=await prisma.collection.update({
            where:{id:req.body.stampId},
            data:{
                sell:true
            }
        })
        res.status(200).json({
            status:"Success",
            message:"sell status is active now",
            stamp:stamp
        })


    }else{
        res.status(401).json({
            status:"failed",
            message:"unauthorized"
        })
    }
}catch(err:any){
    res.json({
        status:"failed",
        message:err.meta.cause
    })
}


}
export default {
    createStamp,
    getMyStamps,
    getAllStamps,
    updateStamp,
    deleteStamp,
    getStampById,
    sellStamp

}