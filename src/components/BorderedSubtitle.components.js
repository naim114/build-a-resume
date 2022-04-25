import * as React from 'react';
import { useTheme, Container } from '@mui/material';

function BorderedSubtitle(props) {
    const theme = useTheme();

    return (
        <Container
            style={{
                color: props.color ?? 'black',
                background: props.background ?? 'white',
                fontFamily: props.fontFamily ?? theme.typography.Roboto_Slab.fontFamily,
                fontWeight: props.fontWeight ?? 'bold',
                fontSize: props.fontSize ?? '20px',
                padding: props.padding ?? '10px',
                margin: props.margin ?? '0px',
                marginTop: props.marginTop ?? '0px',
                marginBottom: props.marginBottom ?? '0px',
                marginLeft: props.marginLeft ?? '0px',
                marginRight: props.marginRight ?? '0px',
                // textAlign: ,
            }}
        >
            {props.title ?? 'SUBTITLE'}
        </Container>
    );
}

export default BorderedSubtitle;