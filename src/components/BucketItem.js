import React from 'react'
import { ButtonGroup, Button, List, ListItem, ListItemText } from '@mui/material';


export default function BucketItem(props) {

    return (
        <List>
            <ListItem sx={{color: 'purple'}}>
                {props.task} 
                <ButtonGroup variant="text" aria-label="outlined button group">
                    <Button>Delete</Button>
                    <Button>Edit</Button>
                    <Button>Completed</Button>
                </ButtonGroup>
            </ListItem>
        </List>
    );
}