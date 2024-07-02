import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://127.0.0.1:27017/discussion-service",
      { autoCreate: true }
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error(`MongoDb connection failed ${err}`);
    process.exit(1);
  }
};

export default connectDB;
