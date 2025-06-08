import React from "react";

const TodoContext = React.createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const TodoProvider=TodoContext.Provider;

export default TodoContext;

export const useTodoContext = () => {
    const context = React.useContext(TodoContext);
    if (!context) {
        throw new Error("useTodoContext must be used within a TodoProvider");
    }
    return context;
}



