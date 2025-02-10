import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  description: String,
  dueDate: Date,
  priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
});

export default mongoose.model("Task", TaskSchema);
