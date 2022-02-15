import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
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
import {  store } from './issueItem';
import Button from '@mui/material/Button';
import { Table, TextField, Toolbar } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import ActionGroup from '@mui/material/ButtonGroup';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
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
  const [data, setData] = useState({});
  React.useEffect(() => {
    
    console.log('hello' , items)

   
  }, items)


  function handleBox2(data) {
    console.log(data)
    setData(data);
  }


  // const [disable, setDisable] = React.useState(false);

  const [request, setRequest] = useState("");
  const [id, setId] = useState("");
  const [issue, SetIssue] = useState("");
  const [development, setDevelopment] = useState("");


  // useEffect(() => { }, []);

  const handleSubmit = () => {
    const data2 = {
      "id": id,
      "request" : request,
      // "comment": comment,
      "issue": "",
      "label": "",
      "summary": "",
      // "status": "2"
      "development": development
    }
    axios
      .put('http://localhost:8080/Jira/jira/' + id, data2)
      .then((res) => {
        console.log(res);

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


  const [searchText, setSearchText] = React.useState("")
  let searchResult
  React.useEffect(() => {
    console.log(searchText)
    console.log('store data', store)
    console.log(typeof store)
    searchResult = 'JSON.parse(store).filter(obj => ((obj.data).match(${searchText}*)!==""))'
    console.log("search result" , searchResult)
  }, [searchText])






  const [summary, setSummary] = useState("");


  const handleSubmitted = () => {
    const data3 = {
      "id": id,
      // "comment": comment,
      "issue": "issue",
      "label": "label",
      "summary": "summary",
      "development": development,
      "request" : request
      // "status": "2"
    }
    axios
      .put('http://localhost:8080/Jira/jira/' + id, data3)
      .then((res) => {
        console.log(res);

      }
      );


  };


  // function handleEdit(e) {
  //   e.preventDefault();
  //   const issue = e.target.children[0].value;
  //   const summary = e.target.children[1].value;
  //   // setForm(false);

  //   axios.put("http://localhost:8080/Jira/jira/" + id, {

  //     "summary": summary,
  //     "issue": issue,
  //     "id": id,
  //     "label": label,
  //     "comment": comment

  //   }
  //   ).then((response) => {
  //     console.log(response);
  //     onEdit(id, issue, summary, label, comment);

  //   })
  //     .catch((error) => {
  //       console.log(error);
  //     })

  // }

  // function handleSummaryChange(e) {
  //   console.log(e.target.value);
  //   SetSummary(e.target.value);

  // }

  // function handleIssueChange(e) {
  //   console.log(e.target.value);
  //   SetIssue(e.target.value);

  // }

  const [searchItem, setSearchItem] = React.useState("")
  useEffect(() => {

    if (searchItem.length > 0) {
      const search = items.filter(item => item.summary.includes(searchItem))
      setItems(search)
    }
    else {
      return setSearchItem(items)
    }
  }, [searchItem])

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <Box
          sx={{ ...commonStyles, bgcolor: 'background.paper', width: '2rem', borderColor: 'primary.main', writingMode: 'vertical-rl' }}>
          <b> VERSIONS</b>
        </Box>
      </div>

      <Box sx={{ ...commonStyles, borderColor: 'secondary.main', width: '30rem' }}>

        <DataGrid
          columns={[{ field: 'EPICS' }]}
          rows={[

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

      <Box sx={{ ...commonStyles, borderColor: 'secondary.main', spacing: "30px", p: 1, width: '45rem' }} >
        {/* <b>SPRINT6</b> */}

        <div>

          {/* <Icon baseClassName="material-icons-two-tone"><ArrowDropDownIcon />

                    </Icon> */}
          <div align="center" rowGap="60px" borderTop="89">
            {/* 


                        24/NOV/14 11:05PM 08/DEC/14    11:05 PM */}


            <p style={{ color: "blue" }}>{`Todays Date is ${date}`}</p>
            <p style={{ color: "blue" }}>{`Current Time is ${time}`}</p>
          </div>

          <div>
            <Toolbar>
              <Stack direction="row" spacing={2} rowGap="60px">
                <Avatar src={images} alt="keep" width="75px" />
                <Avatar src={images} alt="keep" width="75px" />
                <Avatar alt="Remy Sharp" src="/avatar2.jpeg" />
                <Avatar alt="Travis Howard" src="/images/avatar/2.jpg" />
                <Avatar alt="Pindy Baker" src="/images/avatar/3.jpg" />
                <Avatar alt="MOT Baker" src="/images/avatar/3.jpg" />
                <Avatar alt="Cindy Baker" src="/images/avatar/3.jpg" />


              </Stack>

            </Toolbar>

          </div>
          <div>
            <input type="search" placeholder="search something..." onChange={e => setSearchText(e.target.value)}
              style={{ padding: 10, fontSize: "105%", width: "100%", outline: 0 }} />

          </div>
          <IssueItem handleBox2={handleBox2} props={items} />


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

        {/* <MoreVertIcon > </MoreVertIcon> */}


        <Stack spacing={2} direction="row">
          {/* < Button align="left" variant="inherit" onClick={handleSubmitted} >
            Edit
          </Button> */}
          <div>
            <Button variant="outlined" onClick={handleClick}>
              Updating Status
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
                  label="Id"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setId(e.target.value)}
                />


                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Development Comment"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={data.Summary}
              
                  onChange={(e) => setSummary(e.target.value)}>
                
            console.log("summ" , data.summary);

                </TextField>

                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Request Comment"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setRequest(e.target.value)}
                />

              </DialogContent>
              <DialogActions>


                <ActionGroup>
                  <Button variant="primary" onClick={handleSubmitted}>Submit</ Button>

                </ActionGroup>

              </DialogActions>
            </Dialog>
          </div>



           {/* <div>
            <Button variant="inherit" onClick={handleClick}>
              STATUS
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
                  label="Id"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setId(e.target.value)}
                />


                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Comment"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setComment(e.target.value)}
                />
 */}

                

                {/* <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Summary"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setSummary(e.target.value)}
                /> */}
{/* 
              </DialogContent>
              <DialogActions>


                <ActionGroup>
                  <Button variant="primary" onClick={handleSubmit}>Submit</ Button>

                </ActionGroup>

              </DialogActions>
            </Dialog>
          </div> */}

 

        </Stack >




        <div>
          <Table>

            <h3 align="left">Id:{''}{data.id}</h3>
            <h3 align="left">Issue:{' '}{data.issue}</h3>
            <h3 align="left">Summary:{' '}{data.summary}</h3>
            <h3 align="left">Label:{' '}{data.label}</h3>
            <h3 align="left">State:{' '}{data.state}</h3>
            <h3 align="left">Development:{' '}{data.development}</h3>
            <h3 align="left">Request:{' '}{data.request}</h3>
          </Table>
        </div>






        {/* <Grid
          container
          justify="center"
          alignItems="center"

        >
          <Grid container direction="row" alignItems="center" alignContent="center">

            <Grid item xs={10}>
              <TextField
                name="name"
                id="name"

                fullWidth
                margin="normal"
                label="Enter your name"
                variant="filled"

              />
            </Grid>
          </Grid>{" "}
          <Grid container direction="row" alignItems="center">

            <Grid item xs={10}>
              <TextField
                name="phone"
                id="phone"

                fullWidth
                margin="normal"
                label="Enter your phone number "
                variant="filled"

              />
            </Grid>
          </Grid>
        </Grid>


        <Stack direction="row" spacing={10}>

        </Stack> */}

        {/* 
        <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" onClick={handleSubmit} />
</form> */}






      </Box>

    </Box>
  );
}

