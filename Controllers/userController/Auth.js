const  authuser=require("../../Models/userModel/Auth");

const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const signupDetails=async(req,res)=>{
    try {
        const data=req.body;
        const {name,email,password}=data;
        const exitUser=await authAdmin.findOne({email});
        if( exitUser){
            return res.status(403).send({Message:"User already exit:"});
        }
        const hashpassword=await bcrypt.hash(password,10);
        const newpassword=await authuser.create({name,email,password:hashpassword});
        res.status(201).send({Message:"Signup data is sucessfully:",newpassword})
        
    } catch (error) {
        res.status(500).send({Message:"Internal Server error..",error})
        
    }
}
const loginDetails=async(req,res)=>{
    try {
        const {id}=req.params;
        const data=req.body;
        const {email,password}=data;
        const exitUser=await  authuser.findOne({email});
        if( !exitUser){
            res.status(404).send({Message:"User is not exit  :"});   
        }
        const matchpassword=await bcrypt.compare(password,exitUser.password);
        if(!matchpassword){
            return res.status(403).send({Message:"User password is not matched:"})
        }

         const token=await jwt.sign({id:exitUser._id},"kuleswari",{expireIn:"4h"})
        res.status(201).send({Message:"login   data is Sucessfully :"});
    } catch (error) {
        res.status(500).send({Message:"Internal Server error..",error})
        
    }
}
module.exports={signupDetails,loginDetails}