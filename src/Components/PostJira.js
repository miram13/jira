
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@material-ui/core/Button';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import images from "../images/jiralogo.png";
import Menu from '@mui/material/Menu';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ActionGroup from '@mui/material/ButtonGroup';
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),

  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));




export default function PostJira() {
  const [summary, setSummary] = useState("");
  const [label, setLabel] = useState("");
  const [issue, setIssue] = useState("");
  // const [summary, setsummary] = useState("");

  useEffect(() => { }, []);

  const handleSubmit = () => {
    console.log(summary,label,issue);
    axios
      .post('http://localhost:8080/Jira/jira', {
        issue:issue,
        summary:summary,
        label:label
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      }
      );
      // axios.get('http://localhost:8080/Jira/jira')
      // .then((response)=>{
      //   console.log(response);
      //   setOpen(false)
      // }).catch((err)=>{
      //   console.log(err)
      // })

  };



  const [open, setOpen] = React.useState(false);



  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  }





  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" background="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            marginBottom="200px !important"
            aria-label="open drawer"
            sx={{ mr: 1, flexGrow: 1 }}
          >

            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >

            <img src={images} alt="keep" width="75px" />

          </Typography>
          <Toolbar>
            <div>
              <Button>
                Dashboards
              </Button>

            </div>

          </Toolbar>


          <Toolbar>
            <Button>
              Projects
            </Button>

          </Toolbar>



          <Toolbar>
            <Button>
              Issues
            </Button>

          </Toolbar>




          <Toolbar>
            <Button >
              Agile
            </Button>

          </Toolbar>


          <Toolbar>
            <Button >
              Service Desk
            </Button>

          </Toolbar>





          <Toolbar>
            <Button>
              Capture
            </Button>

          </Toolbar>


          <Toolbar>
            <div>
              <Button >
                Protfolio
              </Button>
            </div>
          </Toolbar>

          <Toolbar>
            {/* <Button color="inherit">create</Button> */}
            <div>
              <Button variant="contained" onClick={handleClick}>
                CREATE
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>ISSUES</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Please fill the details below related with your issues here. We will send updates occasionally

                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Issues"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setIssue(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Summary"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setSummary(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Label"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setLabel(e.target.value)}
                  />



                </DialogContent>
                <DialogActions>
                  {/* <Button onClick={handleClose}>Cancel</Button> */}
                  {/* <Button onClick={handleClose}>Submit
          
          </Button> */}



                  <ActionGroup>
                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                  </ActionGroup>



       
                </DialogActions>
              </Dialog>
            </div>

          </Toolbar>








          <Search
            sx={{ flexGrow: 1 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>








          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" color="inherit">
              <SettingsIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <SettingsIcon />
            </IconButton>
          </Box>







          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" color="inherit">
              <HelpOutlineIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <HelpOutlineIcon />
            </IconButton>
          </Box>





          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
          </Box>




        </Toolbar>

      </AppBar>
    </Box>
  );
}
