import mongoose from "mongoose";

const config=async()=>{
    try {
        await mongoose.connect('mongodb://localhost/User')
        console.log("DB connected");
    } catch (error) {
        console.log("couldn't connect DB",error);
    }
}

export default config;