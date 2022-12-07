const express= require("express");
const {connect}= require("./db")
const app=express();
app.use(express.json())


app.get("/", (req, res)=>{
    res.send("You are on hompage and this ishjjgjh homepage ")
})

app.get("/about", (req, res)=>{
    res.send("You are on about and  and aovadfalhkjbut page")
})

app.get("/contact", (req, res)=>{
res.send("You are on contact")
})


app.listen(8000, async()=>{
    try {
           await connect 
           console.log("conntect to db")
    }
    catch (err){
        console.log(err);
    }


    console.log("Server is running at port of  8000")
})