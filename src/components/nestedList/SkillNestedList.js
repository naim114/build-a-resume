import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { IconButton, ListItem, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';

function SkillNestedList(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <ListItemButton>
                {open ? <ExpandLess onClick={handleClick} /> : <ExpandMore onClick={handleClick} />}
                <ListItemText onClick={handleClick} primary={props.skill} />
                <IconButton onClick={props.onDelete} >
                    <Delete />
                </IconButton>
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem>
                        <TextField name="skill" onChange={props.onChange} label="Skill" value={props.skill} variant="standard" style={{ width: '100%' }} />
                    </ListItem>
                </List>
            </Collapse>
        </div>
    );
}

export default SkillNestedList;