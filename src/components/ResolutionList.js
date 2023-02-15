import React, { useState, useEffect } from 'react'
import ResolutionItem from './ResolutionItem';
import "../style.css";
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import API from '../utils/API';


export default function ResolutionList(props) {
  const [newItem, setNewItem] = useState('')
  const [newItemPriority, setNewItemPriority] = useState('medium')
  const [tasks, setTasks] = useState([
    
  ])

  useEffect(()=>{
    API.getUserResolutions(props.userId).then(data=>{
      setTasks(data.Resolutions)
    })
  }, [props.userId])

  const handleFormSubmit = e => {
    e.preventDefault();
    const newTask = {
      task: newItem,
      priority: newItemPriority,
      isComplete: false
    }
    setNewItem('')
    setNewItemPriority('medium')
    API.createResolution(newTask,props.token).then(data=>{
      API.getUserResolutions(props.userId).then(data=>{
        setTasks(data.Resolutions)
      })
    })
  }

  const completeTask = idx=>{
    const arrCopy = [...tasks];
    arrCopy[idx].isComplete = !arrCopy[idx].isComplete
    setTasks(arrCopy)
  }

  const deleteTask = id=>{
    API.deleteResolution(id,props.token).then(del=>{
      API.getUserResolutions(props.userId).then(data=>{
        setTasks(data.Resolutions)
      })
    })
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
        {tasks.map((item) => <ResolutionItem 
        key={item.id} 
        index={item.id} 
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






 


