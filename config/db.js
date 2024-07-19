const mongoose=require("mongoose")

const connection=async()=>{
    await mongoose.connect("mongodb+srv://rajatsinha5467:blogapp@cluster0.fjnqa3f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("mongodb connected");
}
module.exports=connection
