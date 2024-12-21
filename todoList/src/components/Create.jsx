import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState("");
  const changeHandler = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  const handleAdd = () => {
    axios
      .post("http://localhost:3000/add", { task: task })
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="createForm">
      <input
        type="text"
        id="text"
        placeholder="Add todo"
        value={task}
        onChange={(e) => {
          changeHandler(e);
        }}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Create;
