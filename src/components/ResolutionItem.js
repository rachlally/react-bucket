import React, {useState} from 'react'
import { Button, ButtonGroup, List, ListItem } from '@mui/material';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import "../style.css";

export default function ResolutionItem(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [editItem, setEditItem] = useState(props.task)
    const [editItemPriority, setEditItemPriority] = useState(props.priority)
    const handleFormSubmit = e=>{
        e.preventDefault();
        const newItem={
            task:editItem,
            priority:editItemPriority,
            isComplete:props.isComplete
        }
        props.editTask(props.id,newItem)
        setIsEditing(false)
    }
    return (
        <List>
            {isEditing?(
            <Box component="form" onSubmit={handleFormSubmit}>
            <TextField label="Edit Item" color="secondary" focused id='outlined-name' value={editItem} onChange={e => setEditItem(e.target.value)} />
                <Select labelId="demo-simple-select-label" id="demo-simple-select" color="secondary" focused value={editItemPriority} onChange={e => setEditItemPriority(e.target.value)}>
                  <MenuItem value="low">Low Priority</MenuItem>
                  <MenuItem value="medium">Medium Priority</MenuItem>
                  <MenuItem value="high">High Priority</MenuItem>
                </Select>          
                <Button type="submit">Add Item</Button>
          </Box>
            ):(
            <ListItem sx={{color: 'purple'}} className={`ResolutionItem ${props.priority} ${props.isComplete?"complete":""}`}>
                {props.task} 
                <ButtonGroup variant="text" aria-label="outlined button group">
                    <Button onClick={()=>props.deleteTask(props.id)}>Delete</Button>
                    <Button onClick={()=>setIsEditing(true)}>Edit</Button>
                    <Button onClick={()=>props.completeTask(props.id)}>{props.isComplete?"Do Again!":"Completed"}</Button>
                </ButtonGroup>
            </ListItem>
            )}
        </List>
    );
}