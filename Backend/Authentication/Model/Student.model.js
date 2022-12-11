const mongoose=require("mongoose");

const studentSchema= mongoose.Schema({

    name:String,
    email:String,
    password:String
})

const StudentModel= mongoose.model("student", studentSchema);

module.exports={StudentModel}