import * as React from 'react';
import { useTheme, ThemeProvider, createTheme, styled } from '@mui/material/styles';

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
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DownloadIcon from '@mui/icons-material/Download';
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
} from '@mui/material';
import A4Paper from './components/A4Paper.components';
import PersonalModal from './components/modal/PersonalModal';
import EducationModal from './components/modal/EducationModal';
import SkillModal from './components/modal/SkillModal';

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
  const theme = useTheme();

  // Dark/Light Mode
  const colorMode = React.useContext(ColorModeContext);

  // Main Drawer
  const [openDrawer, setOpenMain] = React.useState(false);

  const handleMainDrawerOpen = () => {
    setOpenMain(true);
  };

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
    console.log("Deleting " + eduList[index]["institute"]);
    setEduList(eduList.filter((o, i) => index !== i));
    alert("Deleted " + eduList[index]["institute"]);
  };

  // Edit item from education
  const editItemEdu = (index, name, value) => {
    console.log("Editing " + eduList[index]["institute"]);
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

  // Skills
  const [skillList, setSkillList] = React.useState([{ skill: 'JavaScript' }, { skill: 'CSS' }, { skill: 'HTML' }, { skill: 'C++' }]);

  // Editing item in skill
  const editItemSkill = (index, name, value) => {
    console.log("Editing " + skillList[index]["skill"]);
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
    console.log("Deleting " + skillList[index]["skill"]);
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

  // Skill Modal
  const [openSkillModal, setOpenSkillModal] = React.useState(false);
  const handleOpenSkillModal = () => setOpenSkillModal(true);
  const handleCloseSkillModal = () => setOpenSkillModal(false);

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
            <ListItem button key={"Experience"}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary={"Experience"} />
            </ListItem>
            <ListItem button key={"Certifications & Awards"}>
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
            <ListItem button key={"Zoom In"}>
              <ListItemIcon>
                <ZoomInIcon />
              </ListItemIcon>
              <ListItemText primary={"Zoom In"} />
            </ListItem>
            <ListItem button key={"Zoom Out"}>
              <ListItemIcon>
                <ZoomOutIcon />
              </ListItemIcon>
              <ListItemText primary={"Zoom Out"} />
            </ListItem>
            <ListItem button key={"Reset"}>
              <ListItemIcon>
                <RestartAltIcon />
              </ListItemIcon>
              <ListItemText primary={"Reset"} />
            </ListItem>
            <ListItem button key={"Download"}>
              <ListItemIcon>
                <DownloadIcon />
              </ListItemIcon>
              <ListItemText primary={"Download"} />
            </ListItem>
            <ListItem button key={"Print"}>
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
            <A4Paper
              imageURL={txtImageURL}
              name={txtName}
              role={txtRole}
              phone={txtPhone}
              email={txtEmail}
              location={txtLocation}
              background={txtBackground}
              objective={txtObjective}
              eduList={eduList}
              skillList={skillList}
            />
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
