import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        todoID: 1,
        todo: "Learn React",
        completed: false,
    }],

    addTodo: (todo) => { },
    updateTodo: (todoID, todo) => { },
    deleteTodo: (todoID) => { },
    toggleTodo: (todoID) => { },
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => useContext(TodoContext);