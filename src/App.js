import * as React from 'react';
import { useTheme, ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { useReactToPrint } from "react-to-print";

// Local Component
import PaperLayout from './components/PaperLayout';

// Icon
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PrintIcon from '@mui/icons-material/Print';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// MUI Material
import MuiAppBar from '@mui/material/AppBar';
import {
  Container,
  IconButton,
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  LinearProgress,
} from '@mui/material';

// Modal
import PersonalModal from './components/modal/PersonalModal';
import EducationModal from './components/modal/EducationModal';
import SkillModal from './components/modal/SkillModal';
import CertificationModal from './components/modal/CertificationModal';
import ExperienceModal from './components/modal/ExperienceModal';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function MyApp() {
  // Get Theme
  const theme = useTheme();

  // Dark/Light Mode
  const colorMode = React.useContext(ColorModeContext);

  // Main Drawer
  const [openDrawer, setOpenMain] = React.useState(false);

  // Open Drawer
  const handleMainDrawerOpen = () => {
    setOpenMain(true);
  };

  // Close Drawer
  const handleMainDrawerClose = () => {
    setOpenMain(false);
  };

  // State Handling
  // Personal Details
  const [txtImageURL, setTxtImageURL] = React.useState("https://iasbaba.com/wp-content/uploads/2022/03/61bddfe00d030_default_man_photo.jpg");
  const [txtName, setTxtName] = React.useState("Giannis Antetokoumpo Jay-Jay Okocha");
  const [txtRole, setTxtRole] = React.useState("Content Creator");
  const [txtPhone, setTxtPhone] = React.useState("+6 011-1122 3456");
  const [txtEmail, setTxtEmail] = React.useState("jayjayokocha@arsenal.com");
  const [txtLocation, setTxtLocation] = React.useState("Jalan Tandok, KL");
  const [txtBackground, setTxtBackground] = React.useState("Jay-Jay Okocha, is a Nigerian former professional footballer. He played 73 times for the Nigeria national team between 1993 and 2006, scoring 14 times, and was a member of three FIFA World Cup squads. ");
  const [txtObjective, setTxtObjective] = React.useState("Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.");

  // Education
  const [eduList, setEduList] = React.useState([
    {
      institute: "MIT, University",
      study: "Diploma in Cryptocurrency",
      startDate: "2016",
      endDate: "2020",
      score: "3.40 CGPA",
    },
    {
      institute: "College Al-Gustoo",
      study: "Degree in Food & Beverages",
      startDate: "2020",
      endDate: "2021",
      score: "2.10 CGPA",
    }
  ]);

  // Remove item from education
  const removeItemEdu = (index) => {
    // console.log("Deleting " + eduList[index]["institute"]);
    setEduList(eduList.filter((o, i) => index !== i));
    alert("Deleted " + eduList[index]["institute"]);
  };

  // Edit item from education
  const editItemEdu = (index, name, value) => {
    // console.log("Editing " + eduList[index]["institute"]);
    const newList = eduList.map((k, v) => {
      if (v === index) {
        const updatedItem = {
          ...k,
        };

        updatedItem[name] = value;

        return updatedItem;
      }

      return k;
    });
    setEduList(newList);
  };

  // Experience
  const [expList, setExpList] = React.useState([
    {
      company: "Techno ABC",
      position: "Senior Software Developer",
      startDate: "Jun 2015",
      endDate: "Dec 2017",
      description:
        `
        <ul>    
          <li>Use my extensive experience with front end development to define the structure and components for the project, making sure they are reusable</li>
          <li>Keep the code quality high reviewing code from other developers and suggesting improvements</li>
        </ul>
      `,
    },
    {
      company: "DEFZilla",
      position: "Trainee Developer",
      startDate: "May 2018",
      endDate: "Jun 2018",
      description:
        `
        <ul>    
          <li>Develop web applications based on Sharepoint, Drupal 8 and Episerver</li>
          <li>Lead a team of 10 front end developers, giving support to the client's multi-cultural team and helping with technical questions</li>
        </ul>
      `,
    },
  ]);

  // Remove item from experience
  const removeItemExp = (index) => {
    // console.log("Deleting " + expList[index]["company"]);
    setExpList(expList.filter((o, i) => index !== i));
    alert("Deleted " + expList[index]["company"]);
  };

  // Edit item from experience
  const editItemExp = (index, name, value) => {
    // console.log("Editing " + expList[index]["company"]);
    const newList = expList.map((k, v) => {
      if (v === index) {
        const updatedItem = {
          ...k,
        };

        updatedItem[name] = value;

        return updatedItem;
      }

      return k;
    });
    setExpList(newList);
  };

  const editDescExp = (index, value) => {
    // console.log("Editing " + expList[index]["company"]);
    const newList = expList.map((k, v) => {
      if (v === index) {
        const updatedItem = {
          ...k,
        };

        updatedItem["description"] = value;

        return updatedItem;
      }

      return k;
    });
    setExpList(newList);
  };

  // Certifications & Awards
  const [certRawHTML, setCertRawHTML] = React.useState(
    `
    <ul>    
      <li>React and redux - A complete guide 2020 from Udemy</li>
      <li>Agile and Scrum Master Certificate from Udacity</li>
      <li>Best performer award for consistently exceeding the performance</li>
      <li>Certificate of exceptional bug finder by XYZ client</li>
    </ul>
  `
  );

  // Skills
  const [skillList, setSkillList] = React.useState([{ skill: 'JavaScript' }, { skill: 'CSS' }, { skill: 'HTML' }, { skill: 'C++' }]);

  // Editing item in skill
  const editItemSkill = (index, name, value) => {
    // console.log("Editing " + skillList[index]["skill"]);
    const newList = skillList.map((k, v) => {
      if (v === index) {
        const updatedItem = {
          ...k,
        };

        updatedItem[name] = value;

        return updatedItem;
      }

      return k;
    });
    setSkillList(newList);
  };

  // Remove item from skill
  const removeItemSkill = (index) => {
    // console.log("Deleting " + skillList[index]["skill"]);
    setSkillList(skillList.filter((o, i) => index !== i));
    alert("Deleted " + skillList[index]["skill"]);
  };

  // Modal state
  // Personal Modal
  const [openPersonalModal, setOpenPersonalModal] = React.useState(false);
  const handleOpenPersonalModal = () => setOpenPersonalModal(true);
  const handleClosePersonalModal = () => setOpenPersonalModal(false);

  // Education Modal
  const [openEducationModal, setOpenEducationModal] = React.useState(false);
  const handleOpenEducationModal = () => setOpenEducationModal(true);
  const handleCloseEducationModal = () => setOpenEducationModal(false);

  // Experience Modal
  const [openExpModal, setOpenExpModal] = React.useState(false);
  const handleOpenExpModal = () => setOpenExpModal(true);
  const handleCloseExpModal = () => setOpenExpModal(false);

  // Skill Modal
  const [openCertModal, setOpenCertModal] = React.useState(false);
  const handleOpenCertModal = () => setOpenCertModal(true);
  const handleCloseCertModal = () => setOpenCertModal(false);

  // Skill Modal
  const [openSkillModal, setOpenSkillModal] = React.useState(false);
  const handleOpenSkillModal = () => setOpenSkillModal(true);
  const handleCloseSkillModal = () => setOpenSkillModal(false);

  // Print 
  const componentRef = React.useRef(null);

  const onBeforeGetContentResolve = React.useRef(null);

  const [loading, setLoading] = React.useState(false);

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called"); // tslint:disable-line no-console
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called"); // tslint:disable-line no-console
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    alert("Please turn on print backgrounds settings on your browser for background color");
    console.log("`onBeforeGetContent` called"); // tslint:disable-line no-console
    setLoading(true);

    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 2000);
    });
  }, [setLoading]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "Build-a-resume",
    onBeforeGetContent: handleOnBeforeGetContent,
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: true,
    copyStyles: true,
  });

  React.useEffect(() => {
    if (
      typeof onBeforeGetContentResolve.current === "function"
    ) {
      onBeforeGetContentResolve.current();
    }
  }, [onBeforeGetContentResolve.current]);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={openDrawer}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleMainDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(openDrawer && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" style={theme.typography.Poppins}>
              Build-A-Resume
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={openDrawer}
        >
          <DrawerHeader>
            <IconButton onClick={handleMainDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem button onClick={colorMode.toggleColorMode} key={theme.palette.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}>
              <ListItemIcon>
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </ListItemIcon>
              <ListItemText primary={theme.palette.mode === 'dark' ? 'Dark Mode' : 'Light Mode'} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={handleOpenPersonalModal} key={"Personal Details"}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={"Personal Details"} />
            </ListItem>
            <ListItem button onClick={handleOpenEducationModal} key={"Education"}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary={"Education"} />
            </ListItem>
            <ListItem button onClick={handleOpenExpModal} key={"Experience"}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary={"Experience"} />
            </ListItem>
            <ListItem button onClick={handleOpenCertModal} key={"Certifications & Awards"}>
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText primary={"Certifications & Awards"} />
            </ListItem>
            <ListItem button onClick={handleOpenSkillModal} key={"Skills"}>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary={"Skills"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              key={"Reset"}
              onClick={() => {
                setTxtImageURL("https://iasbaba.com/wp-content/uploads/2022/03/61bddfe00d030_default_man_photo.jpg");
                setTxtName("Giannis Antetokoumpo Jay-Jay Okocha");
                setTxtRole("Content Creator");
                setTxtPhone("+6 011-1122 3456");
                setTxtEmail("jayjayokocha@arsenal.com");
                setTxtLocation("Jalan Tandok, KL");
                setTxtBackground("Jay-Jay Okocha, is a Nigerian former professional footballer. He played 73 times for the Nigeria national team between 1993 and 2006, scoring 14 times, and was a member of three FIFA World Cup squads. ");
                setTxtObjective("Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.");
                setEduList([
                  {
                    institute: "MIT, University",
                    study: "Diploma in Cryptocurrency",
                    startDate: "2016",
                    endDate: "2020",
                    score: "3.40 CGPA",
                  },
                  {
                    institute: "College Al-Gustoo",
                    study: "Degree in Food & Beverages",
                    startDate: "2020",
                    endDate: "2021",
                    score: "2.10 CGPA",
                  }
                ]);
                setExpList([
                  {
                    company: "Techno ABC",
                    position: "Senior Software Developer",
                    startDate: "Jun 2015",
                    endDate: "Dec 2017",
                    description:
                      `
                        <ul>    
                          <li>Use my extensive experience with front end development to define the structure and components for the project, making sure they are reusable</li>
                          <li>Keep the code quality high reviewing code from other developers and suggesting improvements</li>
                        </ul>
                      `,
                  },
                  {
                    company: "DEFZilla",
                    position: "Trainee Developer",
                    startDate: "May 2018",
                    endDate: "Jun 2018",
                    description:
                      `
                        <ul>    
                          <li>Develop web applications based on Sharepoint, Drupal 8 and Episerver</li>
                          <li>Lead a team of 10 front end developers, giving support to the client's multi-cultural team and helping with technical questions</li>
                        </ul>
                      `,
                  },
                ]);
                setCertRawHTML(
                  `
                    <ul>    
                      <li>React and redux - A complete guide 2020 from Udemy</li>
                      <li>Agile and Scrum Master Certificate from Udacity</li>
                      <li>Best performer award for consistently exceeding the performance</li>
                      <li>Certificate of exceptional bug finder by XYZ client</li>
                    </ul>
                  `
                );
                setSkillList([{ skill: 'JavaScript' }, { skill: 'CSS' }, { skill: 'HTML' }, { skill: 'C++' }]);
              }}
            >
              <ListItemIcon>
                <RestartAltIcon />
              </ListItemIcon>
              <ListItemText primary={"Reset"} />
            </ListItem>
            <ListItem button onClick={handlePrint} key={"Print"}>
              <ListItemIcon>
                <PrintIcon />
              </ListItemIcon>
              <ListItemText primary={"Print"} />
            </ListItem>
          </List>
        </Drawer>
        <Main open={openDrawer}>
          <DrawerHeader />
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              {
                loading
                &&
                <Box sx={{ width: '85%', paddingBottom: 2 }}>
                  <LinearProgress />
                </Box>
              }
              <PaperLayout
                ref={componentRef}
                theme={theme}
                imageURL={txtImageURL}
                name={txtName}
                role={txtRole}
                phone={txtPhone}
                email={txtEmail}
                location={txtLocation}
                background={txtBackground}
                objective={txtObjective}
                eduList={eduList}
                expList={expList}
                certRawHTML={certRawHTML}
                skillList={skillList}
              />
            </Grid>

          </Container>
        </Main>
      </Box>
      {/* Personal Details Modal */}
      <PersonalModal
        open={openPersonalModal}
        onClose={handleClosePersonalModal}
        imageURL={txtImageURL}
        name={txtName}
        role={txtRole}
        phone={txtPhone}
        email={txtEmail}
        location={txtLocation}
        background={txtBackground}
        objective={txtObjective}
        onImageURLEdit={(e) => { setTxtImageURL(e.target.value) }}
        onNameEdit={(e) => { setTxtName(e.target.value) }}
        onRoleEdit={(e) => { setTxtRole(e.target.value) }}
        onPhoneEdit={(e) => { setTxtPhone(e.target.value) }}
        onEmailEdit={(e) => { setTxtEmail(e.target.value) }}
        onLocationEdit={(e) => { setTxtLocation(e.target.value) }}
        onBackgroundEdit={(e) => { setTxtBackground(e.target.value) }}
        onObjectiveEdit={(e) => { setTxtObjective(e.target.value) }}
      />
      {/* Education Modal */}
      <EducationModal
        open={openEducationModal}
        onClose={handleCloseEducationModal}
        list={eduList}
        onDelete={(index) => { removeItemEdu(index) }}
        onChange={(index, name, value) => { editItemEdu(index, name, value) }}
        onAdd={() => {
          setEduList((prevList) => prevList.concat({
            institute: "New Education",
            study: "Bachelor Degree in Business",
            startDate: "2016",
            endDate: "2020",
            score: "3.40 CGPA",
          }))
        }}
      />
      {/* Experience Modal */}
      <ExperienceModal
        open={openExpModal}
        onClose={handleCloseExpModal}
        list={expList}
        onDelete={(index) => { removeItemExp(index) }}
        onChange={(index, name, value) => { editItemExp(index, name, value) }}
        onDescriptionChange={(index, value) => editDescExp(index, value)}
        onAdd={() => {
          setExpList((prevList) => prevList.concat({
            company: "New Company",
            position: "Trainee Manager",
            startDate: "May 2018",
            endDate: "Jun 2018",
            description:
              `
              <ul>    
                <li>Develop web applications based on Sharepoint, Drupal 8 and Episerver</li>
                <li>Lead a team of 10 front end developers, giving support to the client's multi-cultural team and helping with technical questions</li>
              </ul>
            `,
          }))
        }}
      />
      {/* Certification & Awards Modal */}
      <CertificationModal
        open={openCertModal}
        onClose={handleCloseCertModal}
        rawHTML={certRawHTML}
        onChange={(value) => { setCertRawHTML(value) }}
      />
      {/* Skill Modal */}
      <SkillModal
        open={openSkillModal}
        onClose={handleCloseSkillModal}
        list={skillList}
        onDelete={(index) => { removeItemSkill(index) }}
        onChange={(index, name, value) => { editItemSkill(index, name, value) }}
        onAdd={() => {
          setSkillList((prevList) => prevList.concat({ skill: 'New Skill' }))
        }}
      />
    </div>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          Bitter: {
            fontFamily: "'Bitter', serif",
          },
          Cabin: {
            fontFamily: "'Cabin', sans-serif",
          },
          Exo: {
            fontFamily: "'Exo', sans-serif",
          },
          Lato: {
            fontFamily: "'Lato', sans-serif",
          },
          Lora: {
            fontFamily: "'Lora', serif",
          },
          Merriweather: {
            fontFamily: "'Merriweather', serif",
          },
          Montserrat: {
            fontFamily: "'Montserrat', sans-serif",
          },
          Open_Sans: {
            fontFamily: "'Open Sans', sans-serif",
          },
          Playfair_Display: {
            fontFamily: "'Playfair Display', serif",
          },
          Poppins: {
            fontFamily: "'Poppins', sans-serif",
          },
          Raleway: {
            fontFamily: "'Raleway', sans-serif",
          },
          Roboto: {
            fontFamily: "'Roboto', sans-serif",
          },
          Roboto_Slab: {
            fontFamily: "'Roboto Slab', serif",
          },
          fontFamily: "'Lato', sans-serif",
        }
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
