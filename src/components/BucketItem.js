import React from 'react'
import { ButtonGroup, Button, List, ListItem, ListItemText } from '@mui/material';


export default function BucketItem(props) {

    return (
        <List>
            <ListItem>
                {props.task} 

                
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>Delete</Button>
                    <Button>Edit</Button>
                    <Button>Completed</Button>
                </ButtonGroup>
            </ListItem>
        </List>
    );
}