import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { IconButton, ListItem, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';

function EducationNestedList(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <ListItemButton>
                {open ? <ExpandLess onClick={handleClick} /> : <ExpandMore onClick={handleClick} />}
                <ListItemText onClick={handleClick} primary={props.institute} />
                <IconButton onClick={props.onDelete} >
                    <Delete />
                </IconButton>
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem>
                        <TextField label="Institute" value={props.institute} variant="standard" style={{ width: '100%' }} />
                    </ListItem>
                    <ListItem>
                        <TextField label="Study Area/Type" value={props.study} variant="standard" style={{ width: '100%' }} />
                    </ListItem>
                    <ListItem>
                        <TextField label="Start Date" value={props.startDate} variant="standard" style={{ width: '100%' }} />
                    </ListItem>
                    <ListItem>
                        <TextField label="End Date" value={props.endDate} variant="standard" style={{ width: '100%' }} />
                    </ListItem>
                    <ListItem>
                        <TextField label="Score" value={props.score} variant="standard" style={{ width: '100%' }} />
                    </ListItem>
                </List>
            </Collapse>
        </div>
    );
}

export default EducationNestedList;