import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";

function App() {

  // All todos are stored in the state of the App component. The state is initialized with an empty array. 
  const [todos, setTodos] = useState([]);
  
  
  
  // The addTodo function adds a new todo to the state.
    const addTodo = (todo) =>
    setTodos((prev) => [{ todoID: Date.now(), ...todo }, ...prev]);


  // The updateTodo function updates an existing todo in the state.
  const updateTodo = (todoID, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.todoID === todoID ? todo : prevTodo)),
    );
  };

  // The deleteTodo function removes a todo from the state.
  const deleteTodo = (todoID) =>
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.todoID !== todoID));

  // The toggleTodo function toggles the completed status of a todo in the state.
  const toggleTodo = (todoID) =>
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.todoID === todoID ? { ...todo, completed: !todo.completed } : todo,
      ),
    );

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
