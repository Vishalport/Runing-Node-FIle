const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DB",{useUnifiedTopology:true},(err,res)=>{
    if(err){
        console.log('connection error',err);
    }
    else{
        console.log("\n==========================================================================================================================\ndb connected.........!!!\n==========================================================================================================================");
    }
}) 