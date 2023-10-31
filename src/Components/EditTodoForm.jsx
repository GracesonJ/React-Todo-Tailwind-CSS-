import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="flex  bg-slate-100 m-4 py-3 px-5 rounded-md justify-between items-center w-10/12 ">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="outline-none bg-slate-100" placeholder='Update task' />
    <button type="submit" className='text-white p-1 m-1 rounded-md font-bold hover:bg-green-600 bg-green-500'>Update Task</button>
  </form>
  )
}
export default EditTodoForm