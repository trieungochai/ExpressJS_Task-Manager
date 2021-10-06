const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://john_doe:<password>@nodeexpressprojects.budye.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the Database..."))
  .catch((err) => console.log(err));
