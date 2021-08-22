import React from "react";
import { Provider } from "react-redux";
import AddTodo from "./components/addTodo/AddTodo";
import TodoList from "./components/todoList/TodoList";
import store from "./store";
import "./TodoApp.css";

const TodoApp = () => {
  return (
    <div className="todoApp-container">
      <Provider store={store}>
        <AddTodo />
        <TodoList />
      </Provider>
    </div>
  );
};

export default TodoApp;
