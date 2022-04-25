import * as React from 'react';
import { Container, Typography, useTheme } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import BorderedSubtitle from './BorderedSubtitle.components';

function A4Paper(props) {
    const theme = useTheme();

    return (
        <div>
            <Paper
                elevation={24}
                style={{
                    width: '210mm',
                    height: '297mm',
                    background: 'white',
                    color: 'black',
                }}
            >
                <Grid container style={{ height: '100%' }}>
                    <Grid item xs={8}
                        style={{
                            padding: '20px',
                        }}
                    >
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            style={{
                                color: 'white',
                                background: '#5C6B70',
                                fontWeight: 'bolder',
                                height: '200px',
                            }}
                        >
                            <Typography
                                variant="h4"
                                fontFamily={theme.typography.Roboto_Slab.fontFamily}
                                fontWeight={'bold'}
                                textAlign={'center'}
                            >
                                {"GIANNIS ANTETOKOUMPO JAY-JAY OKOCHA"}
                            </Typography>
                            <Typography
                                variant="p"
                                style={{
                                    marginTop: '15px',
                                }}
                            >
                                {"Content Creator"}
                            </Typography>
                        </Grid>
                        <BorderedSubtitle
                            background={'#6b705c'}
                            title="BACKGROUND"
                            marginTop="20px"
                            marginBottom="10px"
                        />
                        <Typography variant="p" component="p" textAlign={'justify'}>
                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus consequat rhoncus.In dui erat, cursus in suscipit id."}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}
                        style={{
                            background: '#6b705c',
                            padding: '20px',
                            // textAlign: 'center',
                        }}
                    >
                        <Avatar alt="Remy Sharp" src={require('../assets/images/08.jpg')} sx={{ height: 225, width: 225, }} />
                        <BorderedSubtitle title="BACKGROUND" marginTop="20px" marginBottom="10px" />
                        <Typography variant="p" component="p" textAlign={'justify'} color={'white'}>
                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus consequat rhoncus.In dui erat, cursus in suscipit id."}
                        </Typography>
                        <BorderedSubtitle title="ACHIEVEMENT" marginTop="20px" marginBottom="10px" />
                        <Typography variant="p" component="p" textAlign={'justify'} color={'white'}>
                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus consequat rhoncus.In dui erat, cursus in suscipit id."}
                        </Typography>
                        <BorderedSubtitle title="CONTACT" marginTop="20px" marginBottom="10px" />
                        <Typography variant="p" component="p" textAlign={'justify'} color={'white'}>
                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus consequat rhoncus.In dui erat, cursus in suscipit id."}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default A4Paper;
