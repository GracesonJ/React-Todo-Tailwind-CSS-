import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm w-11/12 flex">
    <input 
      type="text" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      className=" flex-1 bg-slate-200 rounded-md m-3 p-3 ml-5 w-3/5 outline-none " 
      placeholder='Whats on your mind ?' />
    <button type="submit" className='bg-green-500 text-white flex-none p-3 m-3 rounded-md font-bold hover:bg-green-600'>Add Task</button>
  </form>
  )
}
export default TodoForm