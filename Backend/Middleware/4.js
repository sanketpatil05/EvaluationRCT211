// middle-ware it is use to do some logic before it hit's the routes 

//3 types of middle wares 1. Inbuilt - express.json() , express.text()
//                        2. Custom - like time logger , url logger to check which routes has many visits 
//                        3. Community - CORS , Compressed 

/*
CORS - Cross origin request scheme means it will not allow request from other domain 
in this you can metion from which domain you are going to do allow request 
You can also allow type of request like get ,post , patch , put 

*/ 

// time midldle ware 


const express= require("express");

const app=express();
app.use(express.json())

app.use(timelogger)
 function timelogger (req, res, next){
   const start = new Date().getTime();
   next();
   const end=new Date().getTime();
   console.log(end-start+"ms")


}

// here timelogger is custom middlare ware 

app.get("/", (req, res)=>{
   res.send("You are on hsdfompage")
})

app.get("/contact", (req, res)=>{
    res.send("You are on contact page")
})

app.get("/about", (req, res)=>{
    res.send("You are on about page")
})

app.listen(5000, ()=>{
    console.log("server is running on 5000")
})

