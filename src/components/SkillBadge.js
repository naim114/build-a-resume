import React from 'react';
import Button from '@mui/material/Button';

function SkillBadge(props) {
    return (
        <Button
            disabled
            variant="contained"
            style={{
                borderRadius: 20,
                backgroundColor: '#5C6B70',
                color: 'white',
                fontSize: 10,
                padding: 7,
                fontWeight: 'bold',
                textTransform: 'none',
                margin: 1
            }}
        >
            {props.label}
        </Button>
    );
}

export default SkillBadge;