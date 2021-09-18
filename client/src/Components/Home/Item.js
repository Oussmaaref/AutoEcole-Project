import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(({ spacing, palette }) => {
  const family =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  return {
    card: {
      display: 'flex',
      padding: spacing(2),
      width:"100%",
      background:'#e6e6e6',
      borderRadius: 12,
      boxShadow: '0 2px 4px 0 rgba(138, 148, 159, 0.2)',
      '& > *:nth-child(1)': {
        marginRight: spacing(2),
      },
      '& > *:nth-child(2)': {
        flex: 'auto',
      },
    },
    avatar: {},
    heading: {
      fontFamily: family,
      fontSize: 16,
      marginBottom: 0,
    },
    subheader: {
      fontFamily: family,
      fontSize: 14,
      color: "black",
      letterSpacing: '1px',
      marginBottom: 4,
    },
    value: {
      marginLeft: 8,
      fontSize: 14,
      color: palette.grey[500],
    },
  };
});


 const  KanbanCard=({username,text,rate})=> {
  const styles = useStyles();
  
  return (
    <Card style={{display:'flex'}} className={cx(styles.card)} elevation={0}>
      <Avatar  className={styles.avatar} />
      <Box>
        <h3 className={styles.heading}> {username} </h3>
        <p className={styles.subheader}>{text}</p>
        <p className={styles.subheader}>Rating : {rate} Stars</p>
        
      </Box>
    </Card>
  );
};


export default KanbanCard;