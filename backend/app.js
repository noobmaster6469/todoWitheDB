const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const TodoModel = require("./models/todo");

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.get("/", (req, res) => {
  res.send("Welcome to Server");
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({ task: task })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => {
      res.json(result);
      console.log(res);
    })
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => res.json(result))
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
