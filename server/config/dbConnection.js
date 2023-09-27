import mongoose from "mongoose";

const connectDB=async(DATABASE_URL)=>{
    mongoose.set('strictQuery',false)
    try {
        const DB_OPTION={ dbName:'techisor' }
        await mongoose.connect(DATABASE_URL,DB_OPTION)
        console.log("Database connected");
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB