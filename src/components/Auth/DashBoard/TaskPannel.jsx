import React, { useContext } from 'react'
import { Context } from '../../../context/AuthContext'

const TaskPannel = ({data}) => {
    const [userData, setUserData]  = useContext(Context)
  return (
    <div className='flex flex-1 mt-10 gap-4 h-sceen w-full '>
        <div className='w-[40%] bg-blue-400 cursor-pointer hover:bg-blue-500 transition-all duration-200 ease-in-out rounded-xl px-10 py-10'>
            <p className='text-5xl font-bold'>{data.taskCounts.newTask}</p>
            <p className='text-2xl mt-2 font-medium'>New Tasks</p>
        </div>      
        <div className='w-[40%] bg-green-400 cursor-pointer hover:bg-green-500 transition-all duration-200 ease-in-out rounded-xl px-10 py-10'>
            <p className='text-5xl font-bold'>{data.taskCounts.completed}</p>
            <p className='text-2xl mt-2 font-medium'>Completed</p>
        </div>      
        <div className='w-[40%] bg-yellow-400 cursor-pointer hover:bg-yellow-500 transition-all duration-200 ease-in-out rounded-xl px-10 py-10'>
            <p className='text-5xl font-bold'>{data.taskCounts.active}</p>
            <p className='text-2xl mt-2 font-medium'>Accepted</p>
        </div>      
        <div className='w-[40%] bg-red-400 cursor-pointer hover:bg-red-500 transition-all duration-200 ease-in-out rounded-xl px-10 py-10'>
            <p className='text-5xl font-bold'>{data.taskCounts.failed}</p>
            <p className='text-2xl mt-2 font-medium'>Failed</p>
        </div>      
    </div>
  )
}

export default TaskPannel
