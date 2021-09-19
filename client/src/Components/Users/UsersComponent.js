import React ,{useState,useEffect}from 'react'
import Controls from "../../Controls/Controls";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../Function/UseTable";
import { Search } from "@material-ui/icons";
import PageHeader from "../Function/PageHeader";
import axios from 'axios'


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        boxShadow: '0 8px 16px 0 #7a7a7a',
        borderRadius:10,
        // backgroundColor: '#c9c9c9'
        width: "65%",
        marginLeft: '250px'
       
    }, 
    searchInput: {
        width: '50%'
    },
    
    
}))

const headCells = [
    { id: 'fullName', label: ' Name' },
    { id: 'role', label: 'Role' },
    { id: 'pwd', label: 'Password' },
    {id: 'email',label:'Email'}
    
]

function UsersComponent( ) {

    const classes = useStyles();
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [records ,setRecords]=useState([])
     
    useEffect(() => {
        axios.get('http://localhost:5000/candidate')
            .then(data => {
                
             setRecords(data.data)  
             })
                
        axios.get('http://localhost:5000/employee')
            .then(data => {
                setRecords(oldrecords=>[...oldrecords,...data.data])
                 
                
             })
             
        axios.get('http://localhost:5000/admin')
            .then(data => {
                setRecords(oldrecords=>[...oldrecords,...data.data])
                 
                
             })
             
    }, []);
    const {
        TblContainer,
        TblHead,
        
        recordsAfterPagingAndSorting
    } = useTable( records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }
   
    return (
        <div>
            <PageHeader
                title="Users"
                subTitle="Auto_Ecole"
                icon={<SupervisedUserCircleIcon color="secondary" fontSize="large"  />}
            />
            <Paper className={classes.pageContent}>
                
                <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                    {
                        recordsAfterPagingAndSorting().map(item =>
                           (<TableRow key={item._id}>
                                <TableCell>{item.fullName}</TableCell>
                                <TableCell>{item.role}</TableCell>
                                <TableCell>{item.password}</TableCell>
                                <TableCell>{item.email}</TableCell>
                            </TableRow>)
                        )} 
                    </TableBody>
                </TblContainer>
                
            </Paper>
        </div>
    )
}

export default UsersComponent;

 
