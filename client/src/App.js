import React from 'react'
import Login from './Pages/Login/Login'
import MainTemp from './Pages/Login/MainTemp'
import { BrowserRouter as Switch, Route } from "react-router-dom";
import './App.css'
function App() {
  return (
    <div   >
        <Switch>
            <Route path="/" exact render={(props) => <Login/>} />
            <Route path="/main"  render={(props) => <MainTemp/>} />
            </Switch>
    </div>
    
  )

}

export default App
