// Middleware to protect routes

import User from "../models/User.js";
import jwt from 'jsonwebtoken';



const JWT_SECRET=process.env.JWT_SECRET;
export const protectRoute= async(req,res,next)=>{
    try{
        const token=req.header('token');
        const decoded=jwt.verify(token,JWT_SECRET);
        const user=await User.findById(decoded.userId).select("-password");
     if(!user){
        return res.json({success:false,message:"User not found"});
     }

     req.user=user;
     next();
    }
    catch(error){
        console.log(error.message);
        res.json({success:false,message:error.message});

    }

}