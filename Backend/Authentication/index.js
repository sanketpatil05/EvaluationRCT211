const express= require("express");
const {connect}= require("./db");
const { UserModel } = require("./Model/User.mode");
const app=express();
app.use(express.json())


app.get("/", (req, res)=>{
    res.send("You are on and is  afdafdasdfdfasdnfadsfsdfadste aksdf;l homepage ")
})

app.get("/student", async(req, res)=>{

  const users= await UserModel.find();


    res.send(users)
})



app.post("/add", async(req, res)=>{
    const data= req.body; 
    
    // const user= new UserModel(data)

    // await user.save();
    // res.send(user);

    const user= await UserModel.insertMany([data])
    res.send(user)
})
app.post("/signup", async(req, res)=>{
    const data= req.body; 
    const user_email= await UserModel.findOne({email:data.email})
       
    if(user_email){
      return   res.send("Email already exits");
    }
    const user= await UserModel.insertMany([data]);
    res.send(user, "user registered")
})

app.listen(8000, async()=>{
    // try {
    //        await connect 
    //        console.log("conntect to db")
    // }
    // catch (err){
    //     console.log(err);
    // }


    console.log("Server is running at port of  8000")
})