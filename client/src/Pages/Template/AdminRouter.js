import React from 'react'
import CandidatsComponent from '../../Components/Candidats/CandidatsComponent'

import {
    BrowserRouter as 
    Switch,
    Route,
  } from "react-router-dom";
import HomeComponent from '../../Components/Home/HomeComponent';
import CalendarComponent from '../../Components/Calendar/CalendarComponent';
import VehiculesComponent from '../../Components/Vehicules/VehiculesComponent';
import UsersComponent from '../../Components/Users/UsersComponent';
import TeamComponent from '../../Components/Team/TeamComponent';

  export default function AdminRouter()
  {
     return (
          <Switch>
              <Route  exact path="/main/admin/Home">
                  <HomeComponent/>
              </Route>
              <Route exact path="/main/admin/Calendar">
                  <CalendarComponent/>
              </Route>
              <Route exact path="/main/admin/Candidats">
                  <CandidatsComponent/>  
              </Route>
              <Route exact path="/main/admin/Vehicules">
                  <VehiculesComponent/> 
              </Route>
              <Route exact path="/main/admin/Users">
                  <UsersComponent/>
             </Route>
             <Route exact path="/main/admin/Team">
                 <TeamComponent/>
             </Route>
             
             
          </Switch>
      );
  }
