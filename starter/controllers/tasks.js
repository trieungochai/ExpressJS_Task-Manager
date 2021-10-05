const getAllTasks = (req, res) => {
  res.send("Get all the tasks");
};

const getTask = (req, res) => {
  res.send("Get single task");
};

const createTask = (req, res) => {
  res.send("Create a new task");
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
