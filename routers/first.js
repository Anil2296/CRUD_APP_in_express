const express= require("express")
const mongoose =require("mongoose")
const db =require("../model")
const router = express.Router()
router.post("/createUser",async(req,res)=>{
    try{
        const data = await db.create({
            ...req.body
        })
        res.status(200).json({message: "create user sucessfully"})
        console.log(data)
    }
    catch(err){
        res.status(400).json({message: "create user unsuccessfully"})
    }
})
router.get("/getUser",async(req,res)=>{
    try{
        const data = await db.find()
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).json({message: "get user unsuccessfully"})
    }
})
router.put("/updateUser/:id",async(req,res)=>{
    try{
    const data = await db.updateOne({id:req.params.id},{$set:req.body})
    res.status(200).json({message: "update user successfully"})
    }
    catch(err){
        res.status(400).json({message: "update user unsucessfully"})
    }
    
})
router.delete('/deleteUser/:id',async(req,res)=>
{
    try{
        const data= await db.deleteOne({id:req.params.id})
        res.status(200).json({message:"delete successfull"})
    }
    catch(err)
    {
        res.status(400).json({message:"delete unsuccesfully"})
    }
})
module.exports = router
