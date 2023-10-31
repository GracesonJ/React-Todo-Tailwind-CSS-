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
    <form onSubmit={handleSubmit} className="flex  bg-slate-100 m-2 py-1 px-5 rounded-md justify-center items-center w-10/12 ">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="outline-none bg-slate-100 flex-1 m-2 p-2" placeholder='Update task' />
    <button type="submit" className='text-white p-2 m-2 rounded-md flex-none font-bold hover:bg-green-600 bg-green-500'>Update</button>
  </form>
  )
}
export default EditTodoForm