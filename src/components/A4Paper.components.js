import * as React from 'react';
import { Typography, useTheme } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import BorderedSubtitle from './BorderedSubtitle.components';

// Icon
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PlaceIcon from '@mui/icons-material/Place';

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
                                {"Giannis Antetokoumpo Jay-Jay Okocha"}
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
                            title="EDUCATION"
                            marginTop="20px"
                            marginBottom="10px"
                            color={'white'}
                        />
                        <Typography variant="p" component="p" textAlign={'justify'}>
                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus consequat rhoncus.In dui erat, cursus in suscipit id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus consequat rhoncus.In dui erat, cursus in suscipit id."}
                        </Typography>
                        <BorderedSubtitle
                            background={'#6b705c'}
                            title="EXPERIENCE"
                            marginTop="20px"
                            marginBottom="10px"
                            color={'white'}
                        />
                        <Typography variant="p" component="p" textAlign={'justify'}>
                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus consequat rhoncus.In dui erat, cursus in suscipit id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus consequat rhoncus.In dui erat, cursus in suscipit id."}
                        </Typography>
                        <BorderedSubtitle
                            background={'#6b705c'}
                            title="CERTIFICATIONS & AWARDS"
                            marginTop="20px"
                            marginBottom="10px"
                            color={'white'}
                        />
                        <Typography variant="p" component="p" textAlign={'justify'}>
                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus consequat rhoncus.In dui erat, cursus in suscipit id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus consequat rhoncus.In dui erat, cursus in suscipit id."}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}
                        style={{
                            background: '#6b705c',
                            padding: '20px',
                            // textAlign: 'center',
                        }}
                    >
                        <Avatar alt="Remy Sharp" src={"https://iasbaba.com/wp-content/uploads/2022/03/61bddfe00d030_default_man_photo.jpg"} sx={{ height: 225, width: 225, }} />
                        <Grid container direction="row" alignItems="right" style={{ paddingTop: 10 }}>
                            <Grid item style={{ marginRight: 10 }}>
                                <PhoneIcon />
                            </Grid>
                            <Grid item style={{ color: "white" }}>
                                {"+6 011-1122 3456"}
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="right">
                            <Grid item style={{ marginRight: 10 }}>
                                <AlternateEmailIcon />
                            </Grid>
                            <Grid item style={{ color: "white" }}>
                                {"jayokocha@arsenal.com"}
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="right">
                            <Grid item style={{ marginRight: 10 }}>
                                <PlaceIcon />
                            </Grid>
                            <Grid item style={{ color: "white" }}>
                                {"Jalan Tandok, KL"}
                            </Grid>
                        </Grid>
                        <BorderedSubtitle title="BACKGROUND" marginTop="20px" marginBottom="10px" />
                        <Typography variant="p" component="p" textAlign={'justify'} color={'white'}>
                            {"Jay-Jay Okocha, is a Nigerian former professional footballer. He played 73 times for the Nigeria national team between 1993 and 2006, scoring 14 times, and was a member of three FIFA World Cup squads. "}
                        </Typography>
                        <BorderedSubtitle title="OBJECTIVE" marginTop="20px" marginBottom="10px" />
                        <Typography variant="p" component="p" textAlign={'justify'} color={'white'}>
                            {"Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector."}
                        </Typography>
                        <BorderedSubtitle title="SKILLS" marginTop="20px" marginBottom="10px" />
                        <Typography variant="p" component="p" textAlign={'justify'} color={'white'}>
                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default A4Paper;
