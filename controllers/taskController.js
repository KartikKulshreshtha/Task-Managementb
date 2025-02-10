import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    const task = new Task({ userId: req.user.id, title, description, dueDate, priority });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Error creating task" });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = req.user.role === "admin" ? await Task.find() : await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, dueDate, priority },
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Error updating task" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting task" });
  }
};
