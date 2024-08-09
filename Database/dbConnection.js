import mongoose, { mongo } from "mongoose";

export const dbConnection =()=>{
    mongoose.connect("mongodb+srv://shek37576:Mrshek97@cluster0.futpojv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0s",{
        dbName:""
    }).then(()=>{
        console.log("conected to the database");
    }).catch((err)=>{
        console.log(`can't connected to the database ${err}`);
    })
}

