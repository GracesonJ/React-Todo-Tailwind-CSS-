import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  min-w-fitmin-w-fit">
        <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-5xl m-16 font-bold text-black-600">Whats To Do ! ! !</h1>
          <TodoForm addTodo={addTodo} />
          {/* display todos */}
            {todos.map((todo) =>
              todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo
                      key={todo.id}
                      task={todo}
                      deleteTodo={deleteTodo}
                      editTodo={editTodo}
                      toggleComplete={toggleComplete}
                    />
                )
                )}
          </div>
      </div>
    </>
  );
};
export default TodoWrapper