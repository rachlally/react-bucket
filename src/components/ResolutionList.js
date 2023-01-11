import React, { useState } from 'react'
import ResolutionItem from './ResolutionItem';
import "../style.css";
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



export default function ResolutionList() {
  const [newItem, setNewItem] = useState('')
  const [newItemPriority, setNewItemPriority] = useState('medium')
  const [tasks, setTasks] = useState([
    {
      task: "Ski in Japan",
      priority: "medium",
      isComplete: false
    },
    {
      task: "Ski Mt St Helens",
      priority: "low",
      isComplete: false
    },
    {
      task: "Surf in Baja",
      priority: "high",
      isComplete: false
    },
    {
      task: "Go international!",
      priority: "high",
      isComplete: false
    },
    {
      task: "Dirtbike in the desert",
      priority: "medium",
      isComplete: false
    }
  ])

  const handleFormSubmit = e => {
    e.preventDefault();
    const newTask = {
      task: newItem,
      priority: newItemPriority,
      isComplete: false
    }
    setTasks([...tasks, newTask])
    setNewItem('')
  }

  const completeTask = idx=>{
    const arrCopy = [...tasks];
    arrCopy[idx].isComplete = !arrCopy[idx].isComplete
    setTasks(arrCopy)
  }

  const deleteTask = idx=>{
    const arrCopy = [...tasks];
    arrCopy.splice(idx,1)
    setTasks(arrCopy)
  }

  const editTask = (idx,newTask)=>{
    const arrCopy = [...tasks];
    arrCopy[idx]=newTask
    setTasks(arrCopy)
  }
   
  return (
    <div>
      <Box component="form" onSubmit={handleFormSubmit}>
        <TextField label="New Resolution" color="secondary" focused id='outlined-name' value={newItem} onChange={e => setNewItem(e.target.value)} />
            <Select labelId="demo-simple-select-label" id="demo-simple-select" color="secondary" focused value={newItemPriority} onChange={e => setNewItemPriority(e.target.value)}>
              <MenuItem value="low">Low Priority</MenuItem>
              <MenuItem value="medium">Medium Priority</MenuItem>
              <MenuItem value="high">High Priority</MenuItem>
            </Select>          
            <Button type="submit">Add Item</Button>
      </Box>
      <ul>
        {tasks.map((item, i) => <ResolutionItem 
        key={i} 
        index={i} 
        task={item.task} 
        priority={item.priority} 
        completeTask={completeTask} 
        isComplete={item.isComplete} 
        deleteTask={deleteTask}
        editTask={editTask}/>)}
      </ul>
    </div>

  );
}






 


