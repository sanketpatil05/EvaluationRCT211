const os= require("os");
console.log(os.version()) // To get the version of of your os
console.log(os.cpus()[0])    // To get info about your cpus. You can access cpu depending on how much core you have present 

http : Hyper text transfer protocol :-> use for to coummunicate between client and server 
ftp : file transfer protocol 

1st time :-> 3 way handshake
client :- sends a signal I want to communicate acknowledge(means say hi) the signal /request <-- server 
client :- communicating --> I want so and so 

http +s :- secure--> add more secrutiy 
SSL :-> secure scoket layer 



bandwidth - pipe -> 2cm 1/4 liter
            pipe -> 15cm 1 liter
            it is like how much data it can be transfer at perticular point 

MBps !=Mbps 
b- bits 
B-bytes 

1 byte = 8 bits 


data packets /data chunks  data comes in this 
chunks get created by automatically by the bandwidth
chunks out response in our code 


http verbs / http methods  --> 
GET --> To get data from server 
POST --> posting/sending/adding to the server 
PUT --> it replace whole data or add whole new things (like removing the old tyre and replacing with new one)
PATCH --> for patch the data can changed only what who want (like take out puncher from tyre)
DELETE --> delete the particular data 



Headers --> gives more/ additional information about the request/response 