import React, { ReactNode, useState } from "react";
import Todos from "../models/Todos";



type TodosContextObj = {
  items: Todos[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

//Create a Context
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{children?: ReactNode}> = (props) => {
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todos(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  // Binds the Actual values 
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;