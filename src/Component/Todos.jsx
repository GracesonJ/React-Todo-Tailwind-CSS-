import React, { useState } from 'react'


function Todos() {
    const [tasks, setTasks]= useState([])
    const [task, setTask]= useState("")
    const addTasks = () =>{
      if(task!== ""){
        setTasks([...tasks, task])
        setTask("");
      }
    }
    const deleteTasks = (index) =>{
      const updateList = [...tasks]
      // delete updateList[index]
      updateList.splice(index,1)
      setTasks(updateList)
    }
  return (
    <>
        <div className="flex flex-col items-center bg-blue-200">
            <h1 className='text-4xl m-16 font-bold'>Todo List</h1>
            <div className="">
                <input className='bg-slate-200 rounded-md p-3 m-3' 
                type="text" 
                placeholder="Add Todo"
                value={task}
                onChange={(e)=>{
                  setTask(e.target.value)
                }}
                />
                <button onClick={addTasks} className='bg-green-500 text-white p-3 m-3 rounded-md font-bold hover:bg-green-600'>Add List</button>
            </div>
            <div>
                {tasks?.length > 0 ? (
                  <ul>
                    {
                      tasks.map((task, index)=>(
                        <div className='flex bg-slate-100 m-4 py-4 pl-10 pr-4 rounded-md'>
                          <li className='self-center font-semibold pr-10 mr-6 grow'>{task}</li>
                          <button onClick={()=>deleteTasks(index)} className='bg-red-500 text-white p-2 mx-1 rounded-md font-bold hover:bg-red-700'>Delete</button>
                        </div>
                    ))}
                  </ul>
                ):(
                  <div>
                    <p>No Task Found</p>
                  </div>
                )}
            </div>
        </div>
    </>
  )
}

export default Todos