import React from 'react';
import {
    Modal,
    Box,
    Typography,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import EducationNestedList from '../nestedList/EducationNestedList';
import List from '@mui/material/List';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function EducationModal(props) {
    const lists = props.list;

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const removeItem = (index) => {
        props.onDelete(index);
    };

    const editItem = (index, name, value) => {
        props.onChange(index, name, value);
    };

    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Education Details
                </Typography>
                <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={props.onAdd} style={{ backgroundColor: '#222222', borderRadius: 5, color: 'white', fontWeight: 'bold' }}>
                        <ListItemText primary={"Add Education"} />
                        <AddCircleIcon />
                    </ListItemButton>
                    {lists.map((key, value) => {
                        return (
                            <div key={value}>
                                <EducationNestedList
                                    institute={key["institute"]}
                                    study={key["study"]}
                                    startDate={key["startDate"]}
                                    endDate={key["endDate"]}
                                    score={key["score"]}
                                    onDelete={() => removeItem(value)}
                                    onChange={(e) => editItem(value, e.target.name, e.target.value)}
                                />
                            </div>
                        );
                    })}
                </List>
            </Box>
        </Modal>
    );
}

export default EducationModal;