import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveTodo } from "../../features/todoSlice";
import "./AddTodo.css";

const initialFormValues = {
  title: "",
  description: "",
};

const AddTodo = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, description } = formValues;
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleInputChanges = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedFormValues);
  };

  const add = () => {
    if (title.trim() === "" || description.trim() === "") {
      setError(true);
    } else {
      dispatch(
        saveTodo({
          title,
          description,
          id: Date.now(),
        })
      );
      setError(false);
      setFormValues(initialFormValues);
    }
  };
  return (
    <motion.div
      className="addTodo"
      exit={{ x: "-100vh", transition: { ease: "easeInOut" } }}
    >
      <div className="addTodo-container">
        <h2>Add Todo</h2>
        {error && (
          <h3 className="noTodos">You must add a title and description</h3>
        )}
        <input
          type="text"
          value={title}
          placeholder="Insert Title"
          onChange={handleInputChanges}
          className="addTodo-container--input"
          name="title"
        />
        <textarea
          name="description"
          value={description}
          id=""
          cols="30"
          rows="5"
          placeholder="Description"
          onChange={handleInputChanges}
          className="addTodo-container--textarea"
        ></textarea>
        <button onClick={add} className="btn-addTodo">
          Add
        </button>
        <Link to="/" href="#top">
          Home
        </Link>
      </div>
    </motion.div>
  );
};

export default AddTodo;
