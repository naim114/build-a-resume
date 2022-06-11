import * as React from 'react';
import { List, Typography, useTheme } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import BorderedSubtitle from './BorderedSubtitle.components';

// Icon
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PlaceIcon from '@mui/icons-material/Place';
import EducationListItem from './EducationListItem';
import SkillBadge from './SkillBadge';
import ExperienceListItem from './ExperienceListItem';

function A4Paper(props) {
    const theme = useTheme();

    const eduList = props.eduList;
    const exeList = props.exeList;
    const skillList = props.skillList;
    const certRawHTML = props.certRawHTML;

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
                                {props.name}
                            </Typography>
                            <Typography
                                variant="p"
                                style={{
                                    marginTop: '15px',
                                }}
                            >
                                {props.role}
                            </Typography>
                        </Grid>
                        <BorderedSubtitle
                            background={'#6b705c'}
                            title="EDUCATION"
                            marginTop="20px"
                            marginBottom="10px"
                            color={'white'}
                        />
                        <List style={{ padding: 0 }}>
                            {eduList.map((key, value) => {
                                return (
                                    <div key={value}>
                                        <EducationListItem
                                            institute={key['institute']}
                                            study={key['study']}
                                            startDate={key['startDate']}
                                            endDate={key['endDate']}
                                            score={key['score']}
                                            isLastArray={(value + 1) === eduList.length}
                                        />

                                    </div>
                                );
                            })}
                        </List>
                        <BorderedSubtitle
                            background={'#6b705c'}
                            title="EXPERIENCE"
                            marginTop="20px"
                            marginBottom="10px"
                            color={'white'}
                        />
                        <List style={{ padding: 0 }}>
                            {exeList.map((key, value) => {
                                return (
                                    <div key={value}>
                                        <ExperienceListItem
                                            company={key['company']}
                                            position={key['position']}
                                            startDate={key['startDate']}
                                            endDate={key['endDate']}
                                            description={key['description']}
                                            isLastArray={(value + 1) === eduList.length}
                                        />
                                    </div>
                                );
                            })}
                        </List>
                        <BorderedSubtitle
                            background={'#6b705c'}
                            title="CERTIFICATIONS & AWARDS"
                            marginTop="20px"
                            marginBottom="10px"
                            color={'white'}
                        />
                        {<div dangerouslySetInnerHTML={{ __html: certRawHTML }} />}
                    </Grid>
                    <Grid item xs={4}
                        style={{
                            background: '#6b705c',
                            padding: '20px',
                        }}
                    >
                        <Avatar alt="Remy Sharp" src={props.imageURL} sx={{ height: 225, width: 225, }} />
                        <Grid container direction="row" alignItems="right" style={{ paddingTop: 10 }}>
                            <Grid item style={{ marginRight: 10 }}>
                                <PhoneIcon />
                            </Grid>
                            <Grid item style={{ color: "white" }}>
                                {props.phone}
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="right">
                            <Grid item style={{ marginRight: 10 }}>
                                <AlternateEmailIcon />
                            </Grid>
                            <Grid item style={{ color: "white" }}>
                                {props.email}
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="right">
                            <Grid item style={{ marginRight: 10 }}>
                                <PlaceIcon />
                            </Grid>
                            <Grid item style={{ color: "white" }}>
                                {props.location}
                            </Grid>
                        </Grid>
                        <BorderedSubtitle title="BACKGROUND" marginTop="20px" marginBottom="10px" />
                        <Typography variant="p" component="p" textAlign={'justify'} color={'white'}>
                            {props.background}
                        </Typography>
                        <BorderedSubtitle title="OBJECTIVE" marginTop="20px" marginBottom="10px" />
                        <Typography variant="p" component="p" textAlign={'justify'} color={'white'}>
                            {props.objective}
                        </Typography>
                        <BorderedSubtitle title="SKILLS" marginTop="20px" marginBottom="10px" />
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            {skillList.map((k, i) => {
                                return (
                                    <SkillBadge
                                        key={i}
                                        label={k['skill']}
                                    />
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default A4Paper;
