import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const adminRegisterSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"FirstName is required !"],
        minlength: [3, "First name must contain at least 3 characters!"]
    },
    lastName:{
        type:String,
        required:[true,"LastName is required !"],
        minlength: [3, "Last name must contain at least 3 characters!"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validator:[validator.isEmail,"Please Provide A Valid Email"]
    },
    phone: {
        type: String, // Corrected from 'typer'
        required: [true, "Phone number is required!"],
        minlength: [8, "Phone number must contain exactly 11 digits!"],
        maxlength: [10, "Phone number must contain exactly 11 digits!"]
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
})

adminRegisterSchema.pre("save",async function (next){
    if(!this.isModified("password")|| this.isNew){
        this.password=await bcrypt.hash(this.password,10);
    }
    next();
})

adminRegisterSchema.methods.isValidpassword=async function(password){
    return await bcrypt.compare(password,this.password)
};


export const Admin=mongoose.model("Admin Register",adminRegisterSchema);
