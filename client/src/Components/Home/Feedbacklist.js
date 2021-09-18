import React,{useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

import { FixedSizeList } from 'react-window';

import axios from 'axios';
import { Card } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    height: '500',
   paddingBottom:'50px',
    marginLeft:'400px'
  },
}));





export default function VirtualizedList() {
  const classes = useStyles();
 
  
  useEffect(() => {
    axios.get('http://localhost:5000/feedback')
    .then(data => {console.log(data.data)
      
        let d=JSON.stringify(data.data)
                   localStorage.setItem("feedback",d)
    })
  },[])
  
  let data =localStorage.getItem("feedback")
  let feedbackdata=JSON.parse(data)
  console.log(feedbackdata,'i am feedback')
  return (
    <div className={classes.root}>
        {feedbackdata.map(e=>(
      <FixedSizeList height={490} width={600} itemSize={160} itemCount={feedbackdata.length}>
        <ListItem   >
            <Card>{e.fullName}</Card>
          </ListItem> 
      </FixedSizeList>))}
    </div>
  );
}