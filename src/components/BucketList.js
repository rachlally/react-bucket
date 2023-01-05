import React, { useState } from 'react'
import BucketItem from './BucketItem';
import "../style.css";


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

  const handleFormSubmit = e=>{
    e.preventDefault();
    const newTask = {
      task:newItem,
      priority:newItemPriority
    }
    setTasks([...tasks,newTask])
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input name='newItem' placeholder='new goal' value={newItem} onChange={e=>setNewItem(e.target.value)}/>
        <select value={newItemPriority} onChange={e=>setNewItemPriority(e.target.value)}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <button>Add to List</button>
      </form>
      <ul>
        {tasks.map((item, i) => <BucketItem key={i} task={item.task} priority={item.priority} />)}
      </ul>
    </div>

  );
}

