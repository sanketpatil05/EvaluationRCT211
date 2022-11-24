// for creating the post requst by using http api in node 
const http = require("http");

const server =http.createServer((req, res)=>{
  
  if(req.url=="/post"){
    res.end("You are seeing post")
  }
  else if(req.method=="POST"){

    if(req.url=="/upload_data"){
        req.on("data", function(packets){
            str+=packets
        })
        request.on("end", ()=>{
            console.log(str);
            
        })
    }
  


  }
  
  
   



})

server.listen(5000);


// we have to use  the request is 


