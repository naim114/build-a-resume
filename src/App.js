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
  Modal,
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
  TextField,
} from '@mui/material';
import A4Paper from './components/A4Paper.components';
import RichTextEditor from './components/RichTextEditor';

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

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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

  // Modal state
  // Personal Modal
  const [openPersonalModal, setOpenPersonalModal] = React.useState(false);
  const handleOpenPersonalModal = () => setOpenPersonalModal(true);
  const handleClosePersonalModal = () => setOpenPersonalModal(false);

  // Education Modal
  const [openEducationModal, setOpenEducationModal] = React.useState(false);
  const handleOpenEducationModal = () => setOpenEducationModal(true);
  const handleCloseEducationModal = () => setOpenEducationModal(false);

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
            <ListItem button key={"Skills"}>
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
            <A4Paper />
          </Container>
        </Main>
      </Box>
      {/* Personal Details Modal */}
      <Modal
        open={openPersonalModal}
        onClose={handleClosePersonalModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Personal Details
          </Typography>
          <TextField label="Image URL" value={"https://iasbaba.com/wp-content/uploads/2022/03/61bddfe00d030_default_man_photo.jpg"} variant="standard" style={{ width: '100%', marginTop: 20 }} />
          <TextField label="Name" value={"Giannis Antetokoumpo Jay-Jay Okocha"} variant="standard" style={{ width: '100%', marginTop: 20 }} />
          <TextField label="Role" value={"Content Creator"} variant="standard" style={{ width: '100%', marginTop: 20 }} />
          <TextField label="Phone Number" value={"+6 011-1122 3456"} variant="standard" style={{ width: '100%', marginTop: 20 }} />
          <TextField label="Email" value={"jayjayokocha@arsenal.com"} variant="standard" style={{ width: '100%', marginTop: 20 }} />
          <TextField label="Location" value={"Jalan Tandok, KL"} variant="standard" style={{ width: '100%', marginTop: 20 }} />
          <TextField label="Background" multiline rows={2} variant="standard" style={{ width: '100%', marginTop: 20 }}
            value={"Jay-Jay Okocha, is a Nigerian former professional footballer. He played 73 times for the Nigeria national team between 1993 and 2006, scoring 14 times, and was a member of three FIFA World Cup squads. "}
          />
          <TextField label="Career Objective" multiline rows={2} variant="standard" style={{ width: '100%', marginTop: 20 }}
            value={"Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector."}
          />
        </Box>
      </Modal>
      {/* Education Modal */}
      <Modal
        open={openEducationModal}
        onClose={handleCloseEducationModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Education Details
          </Typography>
          <RichTextEditor />
        </Box>
      </Modal>
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
