import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="flex  bg-slate-100 m-4 py-3 px-5 rounded-md justify-between items-center w-10/12">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <FontAwesomeIcon className="bg-blue-500 text-white p-2 mx-4 rounded-md font-bold hover:bg-blue-700" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon  className="bg-red-500 text-white p-2 mx-1 rounded-md font-bold hover:bg-red-700" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}

export default Todo