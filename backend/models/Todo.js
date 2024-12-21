const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = mongoose.model("Todos", TodoSchema);
module.exports = TodoModel;
