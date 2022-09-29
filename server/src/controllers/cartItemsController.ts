import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const addToCart=async(req:Request,res:Response)=>{
    try{
        if(req.body.userId){
            const itemDetails=await prisma.cart_items.create({
                data:req.body
            })
            res.status(201).json({
                status:"success",
                item:itemDetails
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
            err:"invalid id"
        })
    }

}

const removeFromCart=async(req:Request,res:Response)=>{
    try{
        if(req.body.userId){
            const deletedItem=await prisma.cart_items.delete({
                where:{
                    cartItemId:req.params.id
                }
            })
            res.status(200).json({
                status:"success",
                item:deletedItem
            })

        }else{
            res.status(401).json({
                status:"failed",
                message:"unauthorized"
            })
        }

    }catch(err){
        res.status(500).json({
            status:"failed"
        })
    }
}
const getCartItems=async(req:Request,res:Response)=>{
    console.log(req.body.userId);
    
    try{
        if(req.body.userId){
            const items=await prisma.cart_items.findMany({
                where:{
                    userId:req.body.userId
                }
            })
            res.status(200).json({
                status:"success",
                item:items
            })

        }else{
            res.status(401).json({
                status:"failed",
                message:"unauthorized"
            })
        }

    }catch(err){
        res.status(500).json({
            status:"failed"
        })
    }
}


export default {
    
    addToCart,
    removeFromCart,
    getCartItems
}