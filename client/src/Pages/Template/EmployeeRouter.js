import React from 'react'
import CandidatsComponent from '../../Components/Candidats/CandidatsComponent'

import {
    BrowserRouter as 
    Switch,
    Route,
  } from "react-router-dom";
import HomeComponent from '../../Components/Home/HomeComponent';
import CalendarComponent from '../../Components/Calendar/CalendarComponent.js';
import VehiculesComponent from '../../Components/Vehicules/VehiculesComponent';

  export default function EmployeeRouter()
  {
     return (
          <Switch>
              <Route  exact path="/main/employee/Home">
                  <HomeComponent/>
              </Route>
              <Route exact path="/main/employee/Calendar">
                  <CalendarComponent/>
              </Route>
              <Route exact path="/main/employee/Candidats">
                  <CandidatsComponent/>  
              </Route>
              <Route exact path="/main/employee/Vehicules">
                  <VehiculesComponent/> 
              </Route>
              
             
             
          </Switch>
      );
  }
