import React from 'react'

import {
    BrowserRouter as 
    Switch,
    Route,
  } from "react-router-dom";

import TestComponent from '../../Components/Tests/TestComponent';

import Test1 from '../../Components/Tests/test1'
import Test2 from '../../Components/Tests/test2'
import FeedbackComponent from '../../Components/FeedBack/FeedbackComponent';
  export default function CandidateRouter()
  {
     return (
          <Switch>
              <Route exact path="/main/candidate/Test">
                   <TestComponent/>
               </Route>
               <Route exact path="/main/candidate/FeedBack">
                   <FeedbackComponent/>
               </Route>
               <Route exact path="/main/candidate/Test/test1">
                   <Test1/>
               </Route>
               <Route exact path="/main/candidate/Test/test2">
                   <Test2/>
               </Route>
             
             
          </Switch>
      );
  }
