import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DetailsIcon from '@mui/icons-material/Details';
import MaterialTable from "material-table";
import Search from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export let store

export default class IssueItem extends React.Component {
    

    constructor(props) {

        super(props);
        this.state = {
            items: []
            
        }
 
    }


  
    componentDidMount() {
        console.log(this.props)
        axios.get("http://localhost:8080/Jira/jira")
            .then((response) => {
                console.log('response from backend', response);
                // console.log('response1', response);
                store = response.data
                console.log('hii', store);
                this.setState({
                    items: response.data
                });
            }).catch((error) => {
                console.log(error);
            })
    }
    "use strict"
    handleRefresh = () => {
        axios.get("http://localhost:8080/Jira/jira")
            .then((response) => {
                console.log('response from backend', response);
             
                this.setState({
                    items: response.data
                });
            }).catch((error) => {
                console.log(error);
            })
    }

    render() 
 
    {
     
        return (

            
            <div>


                <div>
                    <span><Button style={{color: 'blue'}} onClick={this.handleRefresh}>Tickets Updated List</Button></span>
                    
                    <TableContainer component={Paper}>
                       
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="right">Issue</TableCell>
                                    <TableCell align="right">Summary</TableCell>
                                    <TableCell align="right">Label</TableCell>
                                    <TableCell align="right">State</TableCell>
                                    <TableCell align="right">development</TableCell>
                                    <TableCell align="right">request</TableCell>
                                    <TableCell align="right">Details</TableCell>
                                    {/* <MaterialTable 
                            options={{sorting:true,search:true}} /> */}
                                    {/* <TableCell align="right">Edit</TableCell> */}
                                  
                                </TableRow>
                            </TableHead>
                           
                            
                            <TableBody>
                                {this.state.items.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{row.id}</TableCell>
                                        <TableCell  align="right">{row.issue}</TableCell>
                                        <TableCell align="right">{row.summary}</TableCell>
                                        <TableCell align="right">{row.label}</TableCell>
                                        <TableCell align="right">{row.state}</TableCell>
                                        <TableCell align="right">{row.development}</TableCell>
                                        <TableCell align="right">{row.request}</TableCell>
                                        <TableCell align="right"><DetailsIcon onClick={() => this.props.handleBox2(row)} /></TableCell>
                                        
                                        
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        )
    }
}