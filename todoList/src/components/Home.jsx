import React, { useEffect, useState } from "react";
import Create from "./Create";
import "../App.css";
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((res) => {
        setTodos(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (id) => {
    axios
      .put("http://localhost:3000/update/" + id)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/delete/" + id)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="home">
      <h1>Todo List</h1>
      <Create />

      <div className="showTodo">
        {todos.length == 0 ? (
          <h2>No todos</h2>
        ) : (
          todos.map((todo, index) => {
            return (
              <div className="todolists" key={index}>
                <div
                  className="checkbox"
                  onClick={() => {
                    handleClick(todo._id);
                  }}
                >
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    checked={todo.done}
                  />
                  <p
                    style={{
                      textDecoration: todo.done ? "line-through" : "none",
                    }}
                  >
                    {todo.task}
                  </p>
                </div>
                <img
                  src="../../public/delete.svg"
                  alt="delete"
                  onClick={() => {
                    handleDelete(todo._id);
                  }}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
