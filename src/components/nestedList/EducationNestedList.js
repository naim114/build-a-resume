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
    const list = props.list;

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {list.map((key, value) => {
                return (
                    <div key={value}>
                        <ListItemButton onClick={handleClick}>
                            {open ? <ExpandLess /> : <ExpandMore />}
                            <ListItemText primary={key["institute"]} />
                            <IconButton onClick={() => { console.log("delete") }}>
                                <Delete />
                            </IconButton>
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem>
                                    <TextField label="Institute" value={key["institute"]} variant="standard" style={{ width: '100%' }} />
                                </ListItem>
                                <ListItem>
                                    <TextField label="Study Area/Type" value={""} variant="standard" style={{ width: '100%' }} />
                                </ListItem>
                                <ListItem>
                                    <TextField label="Start Date" value={""} variant="standard" style={{ width: '100%' }} />
                                </ListItem>
                                <ListItem>
                                    <TextField label="End Date" value={""} variant="standard" style={{ width: '100%' }} />
                                </ListItem>
                                <ListItem>
                                    <TextField label="Score" value={""} variant="standard" style={{ width: '100%' }} />
                                </ListItem>
                            </List>
                        </Collapse>
                    </div>
                );
            })}
        </List>
    );
}

export default EducationNestedList;