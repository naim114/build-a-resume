import * as React from 'react';
import {
    Modal,
    Box,
    Typography,
} from '@mui/material';
import RichTextEditor from '../RichTextEditor';

function EducationModal(props) {
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
                    Education Details
                </Typography>
                <RichTextEditor />
            </Box>
        </Modal>
    );
}

export default EducationModal;