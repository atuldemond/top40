import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { store } from "../reducer/store";
import {
  addTodo,
  completeTodo,
  removeTodo,
  updateTodo,
} from "../reducer/slices/noteApp";

const Home = () => {
  const todo = useSelector((state) => state.todo);
  console.log(todo);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { title, description } = data;
    store.dispatch(addTodo({ title, description }));
  };

  return (
    <div className="home bg-red-300">
      <div className="form-todo ">
        <h1 className="text-3xl">Create Your Todo-List</h1>
        <form
          className="form"
          onSubmit={handleSubmit((data, e) => {
            onSubmit(data);
            e.target.reset();
          })}
        >
          <input {...register("title")} placeholder="Title" /> <br />
          <input {...register("description")} placeholder="Description" />{" "}
          <br />
          <button type="submit">Create</button>
        </form>
      </div>

      <div className="list-todo">
        {todo.map((todo) => (
          <div id="box" key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <div className="btn">
              <button
                onClick={(e) => {
                  dispatch(completeTodo({ id: todo.id, completed: true }));
                }}
                style={{ backgroundColor: todo.completed ? "green" : "" }}
              >
                {todo.completed ? "Completed" : "Complete"}
              </button>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
