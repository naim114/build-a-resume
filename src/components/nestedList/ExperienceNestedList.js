import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { IconButton, ListItem, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';
import RichTextEditor from '../RichTextEditor';

function ExperienceNestedList(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const onDescriptionChange = (rawHTML) => {
        props.onDescriptionChange(rawHTML);
    }

    return (
        <div>
            <ListItemButton>
                {open ? <ExpandLess onClick={handleClick} /> : <ExpandMore onClick={handleClick} />}
                <ListItemText onClick={handleClick} primary={props.company} />
                <IconButton onClick={props.onDelete} >
                    <Delete />
                </IconButton>
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem>
                        <TextField name="company" onChange={props.onChange} label="Company" value={props.company} variant="standard" style={{ width: '100%' }} />
                    </ListItem>
                    <ListItem>
                        <TextField name="position" onChange={props.onChange} label="Position" value={props.position} variant="standard" style={{ width: '100%' }} />
                    </ListItem>
                    <ListItem>
                        <TextField name="startDate" onChange={props.onChange} label="Start Date" value={props.startDate} variant="standard" style={{ width: '100%' }} />
                    </ListItem>
                    <ListItem>
                        <TextField name="endDate" onChange={props.onChange} label="End Date" value={props.endDate} variant="standard" style={{ width: '100%' }} />
                    </ListItem>
                    <RichTextEditor
                        initialValue={props.description}
                        onChange={(value) => onDescriptionChange(value)}
                    />
                </List>
            </Collapse>
        </div>
    );
}

export default ExperienceNestedList;