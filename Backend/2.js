const http = require("http");

const server =http.createServer((req, res)=>{
res.end("hello")
})

server.listen(5000);

//created a server using node api's http. if we hit 5000 then we get hello 

