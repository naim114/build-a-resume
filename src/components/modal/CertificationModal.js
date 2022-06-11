import React from 'react';
import {
    Modal,
    Box,
    Typography,
} from '@mui/material';
import List from '@mui/material/List';
import RichTextEditor from '../RichTextEditor';

function CertificationModal(props) {
    const rawHTML = props.rawHTML;

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

    const onChange = (rawHTML) => {
        props.onChange(rawHTML);
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
                    {"Certifications & Awards"}
                </Typography>
                <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <RichTextEditor
                        initialValue={rawHTML}
                        onChange={(value) => onChange(value)}
                    />
                </List>
            </Box>
        </Modal>
    );
}

export default CertificationModal;