import React, { useState } from 'react'
import BucketItem from './BucketItem';
import "../style.css";
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



export default function BucketList() {
  const [newItem, setNewItem] = useState('')
  const [newItemPriority, setNewItemPriority] = useState('medium')
  const [tasks, setTasks] = useState([
    {
      task: "Ski in Japan",
      priority: "medium"
    },
    {
      task: "Ski Mt St Helens",
      priority: "low"
    },
    {
      task: "Surf in Baja",
      priority: "high"
    },
    {
      task: "Go international!",
      priority: "high"
    },
    {
      task: "Dirtbike in the desert",
      priority: "medium"
    }
  ])

  const handleFormSubmit = e => {
    e.preventDefault();
    const newTask = {
      task: newItem,
      priority: newItemPriority
    }
    setTasks([...tasks, newTask])
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
            <button >Add Item</button>
      </Box>
      <ul>
        {tasks.map((item, i) => <BucketItem key={i} task={item.task} priority={item.priority} />)}
      </ul>
    </div>

  );
}






 


