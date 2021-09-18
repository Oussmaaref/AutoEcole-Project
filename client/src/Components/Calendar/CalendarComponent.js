/*import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles'
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import PageHeader from "../PageHeader";
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import Controls from "../Controls/Controls";
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
      boxShadow: '0 8px 16px 0 #7a7a7a',
      borderRadius:10,
      
      
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
        
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
        
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
        
    },
];

function CalendarComponent() {

    const classes = useStyles();
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: ""});
    const [allEvents, setAllEvents] = useState(events);
    
    function handleAddEvent() {
        
       setAllEvents([...allEvents, newEvent]);
        
    }
    
    return (
        <div className="App">
            <PageHeader
              title=" Calendar"
              subTitle="Auto_Ecole"
              icon={<EventNoteRoundedIcon fontSize="large" />}
            />
            <Paper  className={classes.pageContent}>
                <Grid container justifyContent="space-around">
                  <TextField id="outlined-basic" label="Title" variant="outlined" type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={ (e) => setNewEvent({ ...newEvent, title: e.target.value })}   />          
                  <TextField
                    id="date"
                    label="Start Date"
                    type="date"
                    defaultValue=""
                    className={classes.textField}
                    selected={newEvent.start} 
                    onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  
                  <TextField
                    id="date"
                    label="End Date"
                    type="date"
                    defaultValue=""
                    className={classes.textField}
                    selected={newEvent.start}
                    onChange={(e) => setNewEvent({ ...newEvent,end: e.target.value })}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  
                  <Controls.Button
                    type="submit"
                    text="Add Event"
                    onClick={handleAddEvent }
                  />
                </Grid>
            
            </Paper>
            <Paper className={classes.pageContent}>
             <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end"  style={{ height: 500, margin: "50px" ,color:'black'}} />
            </Paper>
        
        </div>
    );
}
export default CalendarComponent;*/

/*import React ,{useState} from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import axios from 'axios'
export default class App extends React.Component {
    constructor() {
        super(...arguments);
        axios.get('').then()
        this.scheduleData = [];
    }
    onClickAdd() {
        let Data = [{
                Id: 1,
                Subject: 'Conference',
                StartTime: new Date(2018, 1, 12, 9, 0),
                EndTime: new Date(2018, 1, 12, 10, 0),
                IsAllDay: false
            }, {
                Id: 2,
                Subject: 'Meeting',
                StartTime: new Date(2018, 1, 15, 10, 0),
                EndTime: new Date(2018, 1, 15, 11, 30),
                IsAllDay: false
            }];
        this.scheduleObj.addEvent(Data);
    }
    
    onClickSave() {
        let Data = {
            Id: 3,
            Subject: 'Testing-edited',
            StartTime: new Date(2018, 1, 11, 10, 0),
            EndTime: new Date(2018, 1, 11, 11, 0),
            IsAllDay: false
        };
        this.scheduleObj.saveEvent(Data);
    }
    onClickDelete() {
        this.scheduleObj.deleteEvent(4);
    }
    render() {
        const test=()=>{
        
        }
        return (<div>
            <ScheduleComponent ref={t => this.scheduleObj = t} width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: this.scheduleData }}>
                <ViewsDirective>
                    <ViewDirective option='Day'/>
                    <ViewDirective option='Week'/>
                    <ViewDirective option='WorkWeek'/>
                    <ViewDirective option='Month'/>
                </ViewsDirective>
                <Inject services={[Day, Week, WorkWeek, Month]}/>
            </ScheduleComponent>
        </div>);
    }
}
;
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  MonthView,
  Appointments,
  ViewSwitcher,

  
} from '@devexpress/dx-react-scheduler-material-ui';
import { Toolbar } from '@material-ui/core';


const currentDate = new Date();
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

export default () => (
  <Paper>
    <Scheduler
      data={schedulerData}
      view={"month"}
    >
    
      
      <Toolbar/>
      <MonthView/>
      
      <Appointments />
    </Scheduler>
  </Paper>
);*/
import React from 'react';
import Scheduler from 'devextreme-react/scheduler';
import axios from "axios"

const currentDate = new Date();
const views = ['month','day'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources:[],
      allowAdding: false,
      allowDeleting: false,
      allowResizing: false,
      allowDragging:false,
      allowUpdating: false
    };
   
    
  }
  componentDidMount() {
    console.log('I am mounted!');
  
    axios.get('http://localhost:5000/event')
    .then(data => {console.log(data.data)
        
        this.setState({resources:data.data})
    })
  }
  render() {
    return (
      <React.Fragment>
        <Scheduler
          timeZone="America/Los_Angeles"
          dataSource={this.state.resources}
          views={views}
          defaultCurrentView="month"
          defaultCurrentDate={currentDate}
          startDayHour={9}
          endDayHour={19}
          height={600}
          editing={this.state}
         
        />
       
      </React.Fragment>
    );
  }

 
 

 
}

export default App;
