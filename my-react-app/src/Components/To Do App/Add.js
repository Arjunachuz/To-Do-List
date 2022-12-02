import React, { useState } from 'react'

const Add = ({addTask}) => {
    const [value, setValue]= useState('');

    const addItem = ()=>{
        addTask(value);
        setValue('')
    }

  
  return (
    <>
        <div className='input-container'> 
            <input className='input' type="text" value={value } placeholder='Add a new task' onChange={(e)=>{
                setValue(e.target.value);
            }} />
            <button className='add-button' onClick={addItem}>ADD</button>
        </div>

    </>
  )
}

export default Add