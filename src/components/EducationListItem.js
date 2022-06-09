import React from 'react';
import { Container, Divider, ListItem, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

function EducationListItem(props) {
    return (
        <ListItem style={{ padding: 0, marginBottom: 5 }}>
            <Container style={{ padding: 0 }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography style={{ fontWeight: 'bold', fontSize: 12 }}>
                        {props.institute}
                    </Typography>
                    <Typography style={{ fontStyle: 'italic', fontSize: 12 }}>
                        {props.startDate} - {props.endDate}
                    </Typography>
                </Grid>
                <Typography style={{ fontSize: 20 }}>
                    {props.study}
                </Typography>
                <Typography style={{ fontSize: 15 }}>
                    {props.score}
                </Typography>
                {/* <Divider style={{ paddingTop: 5 }} /> */}
                <Typography />
                {props.isLastArray ?
                    null
                    : <Divider style={{ paddingTop: 5 }} />
                }
            </Container>
        </ListItem>
    );
}

export default EducationListItem;