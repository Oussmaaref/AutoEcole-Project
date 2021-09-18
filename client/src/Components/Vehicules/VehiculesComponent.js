import React, { useState ,useEffect} from 'react'
import VehiculeForm from "./VehiculeFormComponent";
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../Function/UseTable";
import { Search } from "@material-ui/icons";
import PageHeader from "../Function/PageHeader";
import Controls from "../../Controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import  UseDialog from "../Function/UseDialog";
import Notification from '../Function/Notification';
import ConfirmDialog from '../Function/ConfirmDialog';
import Countdown from '../Function/Countdown';
import axios from 'axios'
import {NotificationContainer,NotificationManager} from 'react-notifications'
import 'react-notifications/lib/notifications.css';


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        boxShadow: '0 8px 16px 0 #7a7a7a',
        borderRadius:10,
       
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
    },
     root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    }
}))



const headCells = [
    { id: 'marque', label: 'Marque' },
    { id: 'matricule', label: 'Matricule' },
    { id: 'visite_technique', label: 'Visite Technique ' },
    { id: 'visite_vignette', label: 'Taxe Vignette'  },
    { id: 'visite_assurence', label: 'Assurence'  },
    { id: 'visite_reparation', label: 'Répartion'  },
    { id: 'actions', label: 'Actions', disableSorting: true },
]


export default function VehiculesComponent() {

    const classes = useStyles();
    const [add,setAdd]=useState(false)
    const [edit,setEdit]=useState(false)
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState([])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [OpenDialog, setOpenDialog] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })

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
    useEffect(() => {
        axios.get('http://localhost:5000/vehicule')
            .then(data => {console.log(data.data)
                setRecords(data.data)
                for(let i=0;i<data.data.length;i++){
                    let element=data.data[i]
                    const dateassurance=new Date(element.visite_assurence).getTime()
                    const datetechnique=new Date(element.visite_technique).getTime()
                    const datevignette=new Date(element.visite_vignette).getTime()
                    const datereparation=new Date(element.visite_reparation).getTime()
                    const now=new Date().getTime()
                    let diffassurance=((dateassurance-now)/(1000*60*60*24)+1)
                    let difftechnique=((datetechnique-now)/(1000*60*60*24)+1)
                    let diffvignette=((datevignette-now)/(1000*60*60*24)+1)
                    let diffreparation=((datereparation-now)/(1000*60*60*24)+1)
                    if(diffassurance<3 && diffassurance>0){
                        var ass=parseInt(diffassurance)
                        NotificationManager.warning(`la voiture ${element.marque} doit payée l'assurance avant ${ass} jours`)
                        
                    }
                    if(difftechnique<3 && difftechnique>0){
                        NotificationManager.warning(`la voiture ${element.marque} doit faire la visite technique avant ${parseInt(difftechnique)} jours`)

                        
                    }
                    if(diffvignette<3 && diffvignette>0){
                        NotificationManager.warning(`la voiture ${element.marque} doit payée la vignette avant ${parseInt(diffvignette)} jours`)

                        
                    }
                    if(diffreparation<3 && diffreparation>0 ){
                        NotificationManager.warning(`la voiture ${element.marque} doit faire la visite de répartion dans  ${parseInt(diffreparation)} jours`)

                        
                    }
                }
                
            })
    }, []);

    const addOrEdit = (resetForm) => {
        
        resetForm()
        setRecordForEdit(null)
        setOpenDialog(false)
        axios.get('http://localhost:5000/vehicule')
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

    const onDelete =_id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        axios.delete(`http://localhost:5000/vehicule/${_id}`).then(response => {
            console.log("element suprrimé ")
            axios.get('http://localhost:5000/vehicule')
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
                title="Vehicules"
                subTitle="Auto_Ecole"
                icon={<DriveEtaOutlinedIcon color="secondary" fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
            
                <Toolbar>
                    <Controls.Input
                        label="Search Vehicule"
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
                        onClick={() => { setAdd(true);setEdit(false);setOpenDialog(true); setRecordForEdit(null);}}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item._id}>
                                    <TableCell>{item.marque}</TableCell>
                                    <TableCell>{item.matricule}</TableCell>
                                    <TableCell>{<Countdown date={item.visite_technique}/>}</TableCell>
                                    <TableCell>{<Countdown date={item.visite_vignette}/>}</TableCell>
                                    <TableCell>{<Countdown date={item.visite_assurence}/>}</TableCell>
                                    <TableCell>{<Countdown date={item.visite_reparation}/>}</TableCell>
                                    
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
                title="Vehicule Form"
                OpenDialog={OpenDialog}
                setOpenDialog={setOpenDialog}
            >
                <VehiculeForm
                     recordForEdit={recordForEdit}
                     addOrEdit={addOrEdit} 
                     add={add}
                     edit={edit}
               />
            </UseDialog>
            
            <NotificationContainer/>
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
};
