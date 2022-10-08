import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const order = async (req: Request, res: Response) => {
    console.log(req.body);

    try {
        if (req.body.userId) {
            const newOrder = await prisma.orders.create({
                data: req.body
            })
            await prisma.cart_items.delete({
                where: {
                    stampId: req.body.stampId
                }
            })
            await prisma.collection.update({
                where:{
                    id:req.body.stampId
                },
                data:{
                    userId:req.body.userId,
                    sell:false
                }
            })
            res.status(200).json(newOrder)
        }
        else{
            res.status(401).json({
                status:"failed",
                message:"unauthorized"
            })
        }
    }
catch (err) {
            console.log(err);

            res.status(500).json(err)
        }

    }
const getOrders = async (req: Request, res: Response) => {
        try {
            if (req.body.userId) {
                const myOrders=await prisma.orders.findMany({
                    where:{
                        userId:req.body.userId
                    }
                })
                res.status(200).json({
                    status:"success",
                    orders:myOrders
                })
                
            }
            else{
                res.status(401).json({
                    status:"failed",
                    message:"unauthorized"
                })
            }


        }
        catch (err) {
            console.log(err);

            res.status(500).json(err)

        }
    }
    export default {
        order,
        getOrders
    }