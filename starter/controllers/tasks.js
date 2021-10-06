const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("Get all the tasks");
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
