import React from 'react'

const List = ({task,index, removeTask}) => {
  return (
    <>
        <div className='list-tasks'>{task.title}
            <button onClick={()=>{removeTask(index)}} className='delete-button'>Delete</button>
        </div>
    </>
  )
}

export default List