import React from 'react';
import { Container, Divider, ListItem, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

function ExperienceListItem(props) {
    return (
        <ListItem style={{ padding: 0, marginBottom: 5 }}>
            <Container style={{ padding: 0 }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography style={{ fontSize: 18 }}>
                        {props.company}
                    </Typography>
                    <Typography style={{ fontStyle: 'italic', fontSize: 12 }}>
                        {props.startDate} - {props.endDate}
                    </Typography>
                </Grid>
                <Typography style={{ fontStyle: 'italic', fontSize: 15 }}>
                    {props.position}
                </Typography>
                {<div dangerouslySetInnerHTML={{ __html: props.description }} />}
                {props.isLastArray ?
                    null
                    : <Divider style={{ paddingTop: 5 }} />
                }
            </Container>
        </ListItem>
    );
}

export default ExperienceListItem;