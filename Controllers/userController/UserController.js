const userControllers=require("../../Models/VehicleDetailsModel/vehicles");



const fetched=async(req,res)=>{
    try {
        const data=req.body;
        const getData=await userControllers.find();
        res.status(201).send ({Message:"Data is fetched sucessfully:",getData});
        
    } catch (error) {
      res.status(500).send ({Message:"Data is not fetched:",error});
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

module.exports={fetched,searched}