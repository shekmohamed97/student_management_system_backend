import { Admin } from "../Models/AdminRegisterSchema.js";
import handleValidationError from "../Middlewares/errorHandler.js";


export const adminRegister=async(req,res,next)=>{
    console.log(req.body);
    const{firstName,lastName,email,phone,password}=req.body;
    try {
        if(
            !firstName ||
            !lastName ||
            !email ||
            !phone ||
            !password 
        ){
            return next(new handleValidationError ("Please Fill Full Form ",400) );
        }
        const existingAdmin=await Admin.findOne({email});
        if(existingAdmin){
            return res.status(400).json({success:false,message:"Already Existing Admin"});
        }

        await Admin.create({firstName,lastName,email,phone,password});
        res.status(200).json({
            success:true,
            message:"Admin created successfully !"
        })
    } catch (error) {
        next(error);
    }
    
}


