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
import { TextField } from '@mui/material';
import axios from 'axios';
import { useEffect} from 'react';
import ActionGroup from '@mui/material/ButtonGroup';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
const buttonstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export default function App() {
    const [items, setItems] = useState([]);
    const [data,setData]=useState({});

   function handleBox2(data){
        console.log(data)
        setData(data);
    }

    
    const [disable, setDisable] = React.useState(false);
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);


    const [comment, setComment] = useState("");
    const [id, setId] = useState("");

  
    useEffect(() => { }, []);
  
    const handleSubmitted = () => {
      console.log(comment,id);
      axios
        .post('http://localhost:8080/Jira/jira', {
        
          comment:comment,
          id:id
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        }
        );
      
  
    };
  

    const [open, setOpen] = React.useState(false);



    const handleClose = () => {
      setOpen(false);
    };
  
    const handleClick = () => {
      setOpen(true);
    }
  
  
    


  
        
  
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
                
                

      
    
    


    
                <Stack spacing={2} direction="row">
    < Button  align="left" variant="inherit" disabled={disable} onClick={() => setDisable(true)}>
      start
    </Button>
    
        
            <div>
              <Button variant="inherit" onClick={handleClick}>
                Development in Progress
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>ISSUES</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Comment Your Issue here 

                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Comment"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setComment(e.target.value)}
                  />
                
                 
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Id"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setId(e.target.value)}
                  />


                </DialogContent>
                <DialogActions>
                  {/* <Button onClick={handleClose}>Cancel</Button> */}
                  {/* <Button onClick={handleClose}>Submit
          
          </Button> */}

                  <ActionGroup>
                    <Button variant="primary" onClick={handleSubmitted }>Submit</ Button>
                   
                  </ActionGroup>
       
                </DialogActions>
              </Dialog>
            </div>

            
            
            </Stack >
            
          
            
            

      
    
                <div>
                    <h3 align="left" >ID:{' '}{data.id}</h3>
                    <h3 align="left">ISSUE:{' '}{data.issue}</h3>
                    <h3 align="left">SUMMARY:{' '}{data.summary}</h3>
                    <h3 align="left">LABEL:{' '}{data.label}</h3>
                    <h3 align="left">Comment:{' '}{data.comment}</h3>
                </div>
                <Stack direction="row" spacing={2}>

    </Stack>


                
                
   


    
               
            </Box>

        </Box>
    );
}

