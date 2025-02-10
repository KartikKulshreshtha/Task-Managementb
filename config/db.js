import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/taskManagementsys"; // Local fallback
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${MONGO_URI}`);
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;