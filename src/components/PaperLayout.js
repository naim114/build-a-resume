import * as React from 'react';
import { List, Typography } from '@mui/material';
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

export default class PaperLayout extends React.Component {
    render() {
        const theme = this.props.theme;

        const eduList = this.props.eduList;
        const expList = this.props.expList;
        const skillList = this.props.skillList;
        const certRawHTML = this.props.certRawHTML;

        return (
            <div>
                <Paper
                    style={{
                        width: '270mm',
                        height: '350mm',
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
                                    {this.props.name}
                                </Typography>
                                <Typography
                                    variant="p"
                                    style={{
                                        marginTop: '15px',
                                    }}
                                >
                                    {this.props.role}
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
                                {expList.map((key, value) => {
                                    return (
                                        <div key={value}>
                                            <ExperienceListItem
                                                company={key['company']}
                                                position={key['position']}
                                                startDate={key['startDate']}
                                                endDate={key['endDate']}
                                                description={key['description']}
                                                isLastArray={(value + 1) === expList.length}
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
                                padding: 15,
                            }}
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Avatar alt="Remy Sharp" src={this.props.imageURL} sx={{ height: 225, width: 225, }} />
                            <Grid container direction="row" style={{ paddingTop: 10 }}>
                                <Grid item style={{ marginRight: 10 }}>
                                    <PhoneIcon />
                                </Grid>
                                <Grid item style={{ color: "white" }}>
                                    {this.props.phone}
                                </Grid>
                            </Grid>
                            <Grid container direction="row" >
                                <Grid item style={{ marginRight: 10 }}>
                                    <AlternateEmailIcon />
                                </Grid>
                                <Grid item style={{ color: "white" }}>
                                    {this.props.email}
                                </Grid>
                            </Grid>
                            <Grid container direction="row" >
                                <Grid item style={{ marginRight: 10 }}>
                                    <PlaceIcon />
                                </Grid>
                                <Grid item style={{ color: "white" }}>
                                    {this.props.location}
                                </Grid>
                            </Grid>
                            <BorderedSubtitle title="BACKGROUND" marginTop="20px" marginBottom="10px" />
                            <Typography variant="p" component="p" textAlign={'justify'} color={'white'}>
                                {this.props.background}
                            </Typography>
                            <BorderedSubtitle title="OBJECTIVE" marginTop="20px" marginBottom="10px" />
                            <Typography variant="p" component="p" textAlign={'justify'} color={'white'}>
                                {this.props.objective}
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
        )
    }
}
