
import mongoose from "mongoose";
export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI! )
        const connection = mongoose.connection;

        connection.once("connected", () => {
            console.log("MongoDB Succesfully Connected")
        })
        connection.on("error", (err) => {
            console.log("Error Connecting to database. Please make sure MongoDB is running. "+ err);
            process.exit();
        })
    }
    catch(error){
        console.log("Error connecting to database");
        console.log(error);
    }
} 