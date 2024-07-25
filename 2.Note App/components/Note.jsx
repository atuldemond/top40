import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { store } from "../reducer/store";
import { addTodo, completeTodo, removeTodo } from "../reducer/slices/noteApp";

const Home = () => {
  const todo = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { title, description } = data;
    store.dispatch(addTodo({ title, description }));
  };

  return (
    <div className="home bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <div className="form-todo w-full max-w-md bg-white shadow-md rounded-md p-5">
        <h1 className="text-2xl font-bold text-center mb-5">
          Create Your Todo-List
        </h1>
        <form
          className="form space-y-4"
          onSubmit={handleSubmit((data, e) => {
            onSubmit(data);
            e.target.reset();
          })}
        >
          <input
            {...register("title")}
            placeholder="Title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <input
            {...register("description")}
            placeholder="Description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-md"
          >
            Create
          </button>
        </form>
      </div>

      <div className="list-todo w-full max-w-md mt-10 space-y-4">
        {todo.map((todo) => (
          <div
            id="box"
            key={todo.id}
            className="bg-white shadow-md rounded-md p-4 flex justify-between items-center"
          >
            <div>
              <h1
                className={`text-lg font-semibold ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.title}
              </h1>
              <p
                className={`text-gray-600 ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.description}
              </p>
            </div>
            <div className="btn flex space-x-2">
              <button
                onClick={(e) => {
                  dispatch(
                    completeTodo({ id: todo.id, completed: !todo.completed })
                  );
                }}
                className={`px-3 py-1 rounded-md ${
                  todo.completed ? "bg-green-500 text-white" : "bg-gray-200"
                }`}
              >
                {todo.completed ? "Completed" : "Complete"}
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="px-3 py-1 bg-red-500 text-white rounded-md"
              >
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
