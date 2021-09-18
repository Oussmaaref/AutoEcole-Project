import React, { useState ,useEffect} from 'react'
import TeamForm from "./TeamFormComponent";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../Function/UseTable";
import {  Search } from "@material-ui/icons";
import PageHeader from "../Function/PageHeader";
import Controls from "../../Controls/Controls";
import AddIcon from '@material-ui/icons/Add';

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import  UseDialog from "../Function/UseDialog";
import Notification from '../Function/Notification';
import ConfirmDialog from '../Function/ConfirmDialog';
import axios from 'axios'


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        boxShadow: '0 8px 16px 0 #7a7a7a',
        borderRadius:10,
        // backgroundColor: '#c9c9c9'
    },
    searchInput: {
        width: '50%'
    },
    
    newButton: {
        position: 'absolute',
        right: '10px',
        backgroundColor:'#05092e',
        color:'white',
        fontSize:18
    }
}))


const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'salaire', label: 'Salaire'  },
    { id: 'city', label: 'City' },
    { id: 'actions', label: 'Actions', disableSorting: true },
    
]

export default function Team() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [add,setAdd]=useState(false)
    const [edit,setEdit]=useState(false)
    const [records, setRecords] = useState([])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [OpenDialog, setOpenDialog] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
    useEffect(() => {
        axios.get('http://localhost:5000/employee')
            .then(data => {console.log(data.data)
                setRecords(data.data)})
    }, []);
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

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
    const addOrEdit = ( resetForm) => {
      
        resetForm()
        setRecordForEdit(null)
        setOpenDialog(false)
        axios.get('http://localhost:5000/employee')
            .then(data => {console.log(data.data)
                setRecords(data.data)
                window.location.reload()})
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
        })
    }

    const openInDialog = item => {
        
        setRecordForEdit(item)
        setOpenDialog(true)
    }

    const onDelete = _id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        
        axios.delete(`http://localhost:5000/employee/${_id}`).then(response => {
            console.log("element suprrimé ")
            axios.get('http://localhost:5000/employee')
            .then(data => {console.log(data.data)
                setRecords(data.data)
                window.location.reload()})
        }).catch(error => {
        
        console.log(error)
      })
       setNotify({
        isOpen: true,
        message: 'Deleted Successfully',
        type: 'error'
    }) 
        
        
    }
    return (
        <div>
            <PageHeader
                title="STAFF"
                subTitle="The team"
                icon={<PeopleOutlineTwoToneIcon color ="secondary" fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                {/* <EmployeeForm /> */}
                <Toolbar>
                    <Controls.Input
                    color="secondary"
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <Controls.Button
                    color="secondary"
                        text="Add New"
                        variant="contained"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => {setAdd(true);setEdit(false); setOpenDialog(true); setRecordForEdit(null);}}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item._id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.salaire}</TableCell>
                                    <TableCell>{item.city}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() =>{ setAdd(false);setEdit(true);openInDialog(item) }}
                                        >
                                        
                                            <EditOutlinedIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="secondary"
                                           onClick={() => {
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Are you sure to delete this record?',
                                                    subTitle: "You can't undo this operation",
                                                    onConfirm: () => { onDelete(item._id) }
                                                })
                                            }}>
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <UseDialog
                title="Employee Form"
                OpenDialog={OpenDialog}
                setOpenDialog={setOpenDialog}
            >
                <TeamForm
                     recordForEdit={recordForEdit}
                     addOrEdit={addOrEdit} 
                     add={add}
                     edit={edit}
               />
            </UseDialog>
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
             <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </div>
    )
}
