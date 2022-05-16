import React from 'react';
import Menubar from './menubar/Menubar'
import Home from './page/home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from './page/userList/UserList';
import { Button, Input } from '@mui/material';
import User from './page/user/User'
import NewUser from './page/newUser/NewUser'
import PersonalInfo from './page/personalInfo/PersonalInfo'
import './MedicalCity.css'
import StaffList from './page/staffList/StaffList';
import StaffProfile from './page/staff/StaffProfile';
import Backup from './dataManagement/Backup';


function MedicalCity() {
  return (
    <Router>
       
      <div className="App">
        {/* <Header /> */}
        <Menubar />
        
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          
          <Route path='/user'>
            <UserList />
          </Route>
          <Route path='/user:userId'>
            <User />
          </Route>
          
          <Route path='/newUser'>
            <NewUser />
          </Route>
          <Route path='/personalInfo'>
            <PersonalInfo />
          </Route>

          <Route path='/staff'>
            <StaffList />
          </Route>
          <Route path='/staff:staffId'>
            <StaffProfile />
          </Route>
          <Route path='/backup'>
            <Backup />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default MedicalCity;


