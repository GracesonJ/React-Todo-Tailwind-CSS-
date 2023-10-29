import React, { useState } from 'react'

// import index.css
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
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  min-w-fitmin-w-fit'>
      <div className="flex flex-col items-center min-h-screen">
            <h1 className='text-5xl m-16 font-bold text-black-600'>Todo List</h1>
            <div className="">
                <input className='bg-slate-200 rounded-md p-3 ml-10' 
                type="text" 
                placeholder="Add Todos"
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
                        <div className='flex bg-slate-100 m-4 py-4 pl-10 pr-4 rounded-md w-full'>
                          <li className='self-center font-semibold pr-8 mr-20 grow'>{task}</li>
                          {/* <button className='bg-blue-500 text-white p-2 mx-4 rounded-md font-bold hover:bg-blue-700'><i class="fa-solid fa-pen"></i></button> */}
                          <button onClick={()=>deleteTasks(index)} className='bg-red-500 text-white p-2 mx-1 rounded-md font-bold hover:bg-red-700'><i className="fa-solid fa-trash"></i></button>
                        </div>
                    ))}
                  </ul>
                ):(
                  <div>
                    <p className='text-xl m-16 font-bold text-black-100'>No Task Found</p>
                  </div>
                )}
            </div>
        </div>
      </div>
        
    </>
  )
}

export default Todos