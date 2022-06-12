import React from 'react';
import {
    Modal,
    Box,
    Typography,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import List from '@mui/material/List';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExperienceNestedList from '../nestedList/ExperienceNestedList';

function ExperienceModal(props) {
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
        overflow: 'scroll',
        height: '100%',
        maxHeight: 500,
        display: 'block',
    };

    const removeItem = (index) => {
        props.onDelete(index);
    };

    const editItem = (index, name, value) => {
        props.onChange(index, name, value);
    };

    const onDescriptionChange = (index, rawHTML) => {
        props.onDescriptionChange(index, rawHTML);
    }

    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Experience
                </Typography>
                <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={props.onAdd} style={{ backgroundColor: '#222222', borderRadius: 5, color: 'white', fontWeight: 'bold' }}>
                        <ListItemText primary={"Add Experience"} />
                        <AddCircleIcon />
                    </ListItemButton>
                    {lists.map((key, value) => {
                        return (
                            <div key={value}>
                                <ExperienceNestedList
                                    company={key["company"]}
                                    position={key["position"]}
                                    startDate={key["startDate"]}
                                    endDate={key["endDate"]}
                                    description={key["description"]}
                                    onDelete={() => removeItem(value)}
                                    onChange={(e) => editItem(value, e.target.name, e.target.value)}
                                    onDescriptionChange={(newDesc) => onDescriptionChange(value, newDesc)}
                                />
                            </div>
                        );
                    })}
                </List>
            </Box>
        </Modal>
    );
}

export default ExperienceModal;