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
                <div className="checkbox">
                  <input type="checkbox" name="check" id="check" />
                  <p>{todo.task}</p>
                </div>
                <img src="../../public/delete.svg" alt="delete" />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
