const express=require("express");
const mongoose=require("mongoose");
const userRoutes=require("../src/Routes/userRoutes/UserRoute");
const adminRoutes=require("./Routes/adminRoutes/AdminRoute");
const app=express();
const Port=5000;

app.use(express.json());

mongoose.connect("mongodb+srv://kuleswariexpertsolutions:w5F2FkJHr8TKnOyU@cluster0.unm3o.mongodb.net/backend")
.then(()=>{
 console.log("MongoDb is connection sucessfully:");
})
.catch((error)=>{
    console.log(" MongoDb  is Not Connection:");
})



app.use("/",userRoutes);
app.use("/",adminRoutes);




app.listen(Port,()=>{
    console.log("Server is connection on port number:",Port);
})