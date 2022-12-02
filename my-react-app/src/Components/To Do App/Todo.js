import React, { useState } from 'react';
import List from './List';
import Add from './Add';
import './Todo.css';

const Todo = () => {
    const [tasks, setTasks] = useState([
        {title : 'html'},
        {title : 'css'},
        {title : 'js'},
    ]);

    const addTask = (title)=>{
        const newTask = [...tasks, {title}]
        setTasks(newTask)
    }
    const removeTask = (index)=>{
        const newTask = [...tasks]
        newTask.splice(index,1);
        setTasks(newTask)
    }  
  return (
    <>
    <div className='todo-container'>
        <div className='header'>TO DO APP</div>
        <div className='add-task'><Add addTask={addTask}/></div>
        <div className='tasks'>
            {tasks.map((task,index)=>(
                <List task={task} removeTask={removeTask} index={index} key={index}/>
            ))}
            </div>
    </div>
    </>
  )
}

export default Todo