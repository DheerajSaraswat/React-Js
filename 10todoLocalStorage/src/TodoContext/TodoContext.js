import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "first Task",
      checked: false,
    },
  ],

  addTodo: (todo) => {},
  editTodo: (id, todo) => {},
  delTodo: (id) => {},
  toggleChecked: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
