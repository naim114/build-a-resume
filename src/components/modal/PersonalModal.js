import * as React from 'react';
import {
    Modal,
    Box,
    Typography,
    TextField,
} from '@mui/material';

function PersonalModal(props) {
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

    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Personal Details
                </Typography>
                <TextField onChange={props.onImageURLEdit} label="Image URL" value={props.imageURL} variant="standard" style={{ width: '100%', marginTop: 20 }} />
                <TextField onChange={props.onNameEdit} label="Name" value={props.name} variant="standard" style={{ width: '100%', marginTop: 20 }} />
                <TextField onChange={props.onRoleEdit} label="Role" value={props.role} variant="standard" style={{ width: '100%', marginTop: 20 }} />
                <TextField onChange={props.onPhoneEdit} label="Phone Number" value={props.phone} variant="standard" style={{ width: '100%', marginTop: 20 }} />
                <TextField onChange={props.onEmailEdit} label="Email" value={props.email} variant="standard" style={{ width: '100%', marginTop: 20 }} />
                <TextField onChange={props.onLocationEdit} label="Location" value={props.location} variant="standard" style={{ width: '100%', marginTop: 20 }} />
                <TextField onChange={props.onBackgroundEdit} label="Background" multiline rows={2} variant="standard" style={{ width: '100%', marginTop: 20 }}
                    // value={"Jay-Jay Okocha, is a Nigerian former professional footballer. He played 73 times for the Nigeria national team between 1993 and 2006, scoring 14 times, and was a member of three FIFA World Cup squads. "}
                    value={props.background}
                />
                <TextField onChange={props.onObjectiveEdit} label="Career Objective" multiline rows={2} variant="standard" style={{ width: '100%', marginTop: 20 }}
                    // value={"Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector."}
                    value={props.objective}
                />
            </Box>
        </Modal>
    );
}

export default PersonalModal;