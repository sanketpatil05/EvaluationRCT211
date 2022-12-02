const express= require("express");
const {connect}= require("./db")
const app=express();
app.use(express.json())


app.get("/", (req, res)=>{
    res.send("You are on hompage")
})
app.listen(8000, async()=>{
    try {
           await connect 
           console.log("conntect to db")
    }
    catch (err){
        console.log(err);
    }
    console.log("Server is running at 8000")
})