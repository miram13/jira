import * as React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
import Button from '@mui/material/Button';


export default function Icons() {
  return (

    <div>


      <><Box sx={{ flexGrow: '10' }} /><Box sx={{ display: { xs: 'none', md: 'flex', } }}>
        <IconButton size="large" color="inherit">
          <SearchIcon sx={{ fontSize: 30 }} />
          
        </IconButton>
        <Toolbar>
          <Typography variant="h5" component="div" gutterBottom>
            Quick Filters:
          </Typography>
        </Toolbar>

        <Button color="primary">Product</Button>
        <Button color="primary">UI</Button>
        <Button color="primary">Server</Button>
        <Button color="primary">Only My Issues</Button>
        <Button color="primary">Recently Updated</Button>

      </Box></>



    </div>


  );

}
