import React from 'react'
import Header from './Header'
import TaskPannel from './TaskPannel'
import TaskListPannel from './TaskListPannel'

const EmpDash = (props) => {
  // console.log(props.failed);
  
  return (
    <div className='p-10'>
      {/* {data.id} */}
      <Header changeUser = {props.changeUser} data = {props.data}/>
      <TaskPannel data = {props.data}/>
      <TaskListPannel incrementFailedCount = {props.incrementFailedCount} failed = {props.failed} data = {props.data}/>
    </div>
  )
}

export default EmpDash
