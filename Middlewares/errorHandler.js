class handleValidationError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}

export const errorHandler=(err,req,res,next)=>{
       const statusCode=err.statusCode || 500;
       const message =err.message || "internal server error";
       res.status(statusCode).json({success:false,message});
};

export default handleValidationError;
