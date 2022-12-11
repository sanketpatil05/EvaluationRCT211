const mongoose=require("mongoose");

const studentSchema= mongoose.Schema({

    name:String,
    password:String
})

const StudentModel= mongoose.model("student", studentSchema);

module.exports={StudentModel}