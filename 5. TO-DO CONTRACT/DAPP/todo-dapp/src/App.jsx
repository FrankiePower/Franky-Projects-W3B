import React, { Fragment, useState } from "react";

const App = () => {
  //initialize the State Variables
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);

  const handleAddItem = () => {
    if (!inputText) {
      alert("Create a Todo");
      return;
    }
    setTodos((prevTodo) => [
      ...prevTodo,
      {
        id: Math.random().toString(),
        text: inputText,
        completed: false,
      },
    ]);
  };

  return (
    <div className="card">
      <div className="time">
        <div></div>
        <div className="time2">
          <h3>Day</h3>
          <h3>Week</h3>
          <h3>Month</h3>
          <h3>Year</h3>
        </div>
        <div></div>
      </div>
      <div className="day">
        <div className="one">
          <button>
            <img src="/left-arrow-circle-svgrepo-com.svg" alt="left arrow" />
          </button>
        </div>
        <div className="2">
          <h1>Tuesday</h1>
          <h3>Oct 3, 2024</h3>
        </div>
        <div className="three">
          <button>
            <img src="/right-arrow-circle-svgrepo-com.svg" alt="right arrow" />
          </button>
        </div>
      </div>
      {/* 
      <div>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
            />
            <button onClick={handleUpdate}>Update</button>
          </div>
        ) : (
          <Fragment>
            <input
              type="text"
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
            />
            <button onClick={handleAddItem}>Add</button>
          </Fragment>
        )}
      </div>

      <ul>
        {todos.length === 0 ? (
          <p> Create a Todo </p>
        ) : (
          <ul className="mt-4">
          {todos.length === 0 ? (
              <p>Empty Todos</p>
          ) : (
              <ul>
                  {todos.map((todo, index) => (
                      <li key={index} className="flex gap-4 mb-4">
                          <span
                              className={
                                  todo.completed ? "line-through" : ""
                              }
                              onClick={() =>
                                  handleMakeTodoCompleted(todo.id)
                              }
                          >
                              {todo.text}
                          </span>
                          <button
                              onClick={() => {
                                  setEditTodoId(todo.id);
                                  setInputText(todo.text);
                              }}
                              className="bg-blue-500 px-4 py-[2px] text-white"
                          >
                              Edit
                          </button>
                          <button
                              onClick={() => handleDeleteTodo(todo.id)}
                              className="bg-red-500 px-4 py-[2px] text-white"
                          >
                              delete
                          </button>
                      </li>
                  ))}
              </ul>
          )}
      </ul>
        )}
      </ul> */}
    </div>
  );
};

export default App;
