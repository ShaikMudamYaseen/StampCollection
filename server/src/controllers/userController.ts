import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import {hashSync} from "bcrypt"
const prisma = new PrismaClient()
const addUser=async(req:Request,res:Response)=>{
    
    try{
        if(Object.keys(req.body).length==0){
            res.status(400).json({
                message:"Give the request body"
            })
        }
        else{
            const hasspass=await hashSync(req.body.password,12)
        
        // console.log(Object.keys(req.body));
        const newUser=await prisma.users.create({
            data:{
                userName:req.body.userName,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:hasspass
            }
        })
        // console.log("hello");
        res.status(201).json({
            ...newUser
        })
    // res.send("khfkjds")
    }
        
        
        

    }
    catch(err:any){
        console.log(err.meta.target);
        
        res.status(400).json(`${err.meta.target[0]} already` )
    }

}

const getUserById=async(req:Request,res:Response)=>{
        const users=await prisma.users.findFirst({
            select:{
                id:true,
                userName:true,
                firstName:true,
                lastName:true,
                email:true
            },
            where:{
                id:req.params.id
            }
        }) 
        
        // console.log(users);
        if(users===null){
            res.status(404).json({
                status:"failed",
                message:"user not found"
            })
        }
        else{

            res.status(200).json(users)
        }

    }

    
const getUser=async(req:Request,res:Response)=>{
       
            const users=await prisma.users.findMany({
                select:{
                    id:true,
                    userName:true,
                    firstName:true,
                    lastName:true,
                    email:true
                }
            }) 
            res.status(200).json(users)
    
        }
const updateUser=async(req:Request,res:Response)=>{
    interface bodyType{
        userName?:string,
        firstName?:string,
        lastName?:string,
        email?:string
    }
    const user=await prisma.users.update({
        select:{
            id:true,
            userName:true,
            firstName:true,
            lastName:true,
            email:true
        },
        where:{
            id:req.body.userId
        },
        data:{
            userName:req.body.userName,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email

        } as bodyType
    })
    res.json(user)
}
    
    

export default {
    
    addUser,
    getUser,
    getUserById,
    updateUser
}