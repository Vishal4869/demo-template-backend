import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`\n DATABASE connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("DATABASE connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB