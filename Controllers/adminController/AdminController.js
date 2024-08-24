const adminControllers=require("../../Models/PaymentDetailsModel");
const created =async(req,res)=>{
    try {
        const data=req.body;
        const saveData=await userControllers.create(data);
        res.status(201).send ({Message:"Data is created sucessfully:",saveData});
        
    } catch (error) {
      res.status(500).send ({Message:"Data is not created:",error});
    }
}


const fetched=async(req,res)=>{
    try {
        const data=req.body;
        const getData=await userControllers.find();
        res.status(201).send ({Message:"Data is fetched sucessfully:",getData});
        
    } catch (error) {
      res.status(500).send ({Message:"Data is not fetched:",error});
    }
}


const updated=async(req,res)=>{
    try {
        const {id}=req.params;
        const data=req.body;
        const getData=await userControllers.findByIdAndUpdate(id,{set:true});
        res.status(201).send ({Message:"Data is updated sucessfully:",getData});
        
    } catch (error) {
      res.status(500).send ({Message:"Data is not updated:",error});
    }
}


const deleted=async(req,res)=>{
    try {
        const data=req.body;
        const deleteData=await userControllers.deleteOne(data);
        res.status(201).send ({Message:"Data is deleted sucessfully:",deleteData});
        
    } catch (error) {
      res.status(500).send ({Message:"Data is not deleted:",error});
    }
}



const searched=async(req,res)=>{
    try {
        const data=req.body;
        const searchData=await userControllers.find();
        res.status(201).send ({Message:"Data is searched sucessfully:",searchData});
        
    } catch (error) {
      res.status(500).send ({Message:"Data is not searched:",error});
    }
}

module.exports={created,fetched,updated,deleted,searched}