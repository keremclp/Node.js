const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://keremcan:kerem56425601.@cluster0.liabpdm.mongodb.net/task-manager-api?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(connectionString)
  .then(() => console.log("connect to the database...."))
  .catch((err) => console.log(err));
