import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import * as React from 'react';
import { useState } from 'react';
import images from "../images/avatar1.png";
import { default as IssueItem } from './issueItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
const commonStyles = {
    bgcolor: 'background.paper',
    m: 0,
    border: 1,
    borderTop: 1,
    width: '100rem',
    height: '65rem',

};

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
    fullWidth: 'true'
};
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };
export default function App() {
    const [items, setItems] = useState([]);
    const [data,setData]=useState({});

   function handleBox2(data){
        console.log(data)
        setData(data);
    }
    const [disable, setDisable] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
  
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <Box
                    sx={{ ...commonStyles, bgcolor: 'background.paper', width: '2rem', borderColor: 'primary.main', writingMode: 'vertical-rl' }}>
                    <b> VERSIONS</b>
                </Box>
            </div>

            <Box sx={{ ...commonStyles, borderColor: 'secondary.main', width: '40rem' }}>

                <DataGrid
                    columns={[{ field: 'EPICS' }]}
                    rows={[
                        // <Icon baseClassName="material-icons-two-tone">ArrowDropDownIcon</Icon>,
                        { id: 1, EPICS: 'All issues' },
                        { id: 2, EPICS: 'SeeSpaceEZ Plus' },
                        { id: 3, EPICS: 'Space Travel Partners' },
                        { id: 4, EPICS: 'Summer Satum Sale' },
                        { id: 5, EPICS: 'Afterburner Plus' },
                        { id: 6, EPICS: 'Local Mar Office' },
                        { id: 7, EPICS: 'Hyper-Speed shuttles' },
                        { id: 8, EPICS: 'New launch platforms' },

                    ]}
                />

            </Box>

            <Box sx={{ ...commonStyles, borderColor: 'secondary.main', spacing: "30px", p: 1, width: '40rem' }} >
                <b>SPRINT6</b>

                <div>

                    <Icon baseClassName="material-icons-two-tone"><ArrowDropDownIcon />

                    </Icon>
                    <div align="left" rowGap="60px" borderTop="89">

                        24/NOV/14 11:05PM 08/DEC/14    11:05 PM
                    </div>

                    <div>

                        <Stack direction="row" spacing={2} rowGap="60px">
                            <Avatar src={images} alt="keep" width="75px" />
                            <Avatar src={images} alt="keep" width="75px" />
                            <Avatar alt="Remy Sharp" src="/avatar2.jpeg" />
                            <Avatar alt="Travis Howard" src="/images/avatar/2.jpg" />
                            <Avatar alt="Pindy Baker" src="/images/avatar/3.jpg" />
                            <Avatar alt="MOT Baker" src="/images/avatar/3.jpg" />
                            <Avatar alt="Cindy Baker" src="/images/avatar/3.jpg" />


                        </Stack>

                        {/* <button variant="contained" size="large" fullWidth="100%">Tickets List</button> */}

                    </div>

                    <IssueItem handleBox2={handleBox2} props={items}/>
                
        
                    <Box sx={{
                        width: 800,
                        height: 300,
                        backgroundColor: 'white',
                        '&:hover': {
                            backgroundColor: 'white',
                            opacity: [0.9, 0.8, 0.7],
                            direction: 'inherit',
                            display: 'inline-flex',
                            flexDirection: 'row'

                        },
                    }} >
                        <Stack direction="row" spacing={2} >
                            <div align="left" >

                               
                            </div>
                        </Stack>


                    </Box>
                </div>
            </Box>




            <Box sx={{ ...commonStyles, borderColor: 'grey.500' }} >
            <b> DETAILS </b>
                <b> </b>
                <h3>Add pointer to main css file to instruct create child themes</h3>
                <div>
                    <h3 align="left" >ID:{' '}{data.id}</h3>
                    <h3 align="left">ISSUE:{' '}{data.issue}</h3>
                    <h3 align="left">SUMMARY:{' '}{data.summary}</h3>
                    <h3 align="left">LABEL:{' '}{data.summary}</h3>
                </div>
                <Stack direction="row" spacing={2}>

                < Button  variant="contained" disabled={disable} onClick={() => setDisable(true)}>
      start
    </Button>
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Comments"
                    type="email"
                    fullWidth
                    variant="standard"
                    
                  />
        </Box>
      </Modal>
    </div>
    </Stack>


                {/* <Stack direction="row" spacing={2}>
                    <Button variant="outlined" endIcon={<EditIcon />}>
                        Edit
                    </Button>
                    <Button variant="outlined" startIcon={<ModeCommentIcon />}>
                        Comment
                    </Button>
                    <Button variant="outlined" >
                        Assign
                    </Button>
                    <Button variant="outlined" >
                        Start
                    </Button>


                </Stack> */}
                
   


    
                {/* <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Type" />
                    </ListItem>
                    
                    <ListItem button divider>
                        <ListItemText primary="Version" />
                    </ListItem>
                    
                    <ListItem button>
                        <ListItemText primary="Issue" />
                    </ListItem>
                    
                    <ListItem button>
                        <ListItemText primary="Summary" />
                    </ListItem>
                </List> */}
            </Box>

        </Box>
    );
}

