import React from 'react';
import Menubar from './menubar/Menubar'
import Header from './header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './MedicalStaff.css'
import ListVaccine from './vaccineManagement/ListVaccine';
import HomeStaff from './home/HomeStaff';
import AddNewVaccine from './vaccineManagement/AddNewVaccine';
import EditVaccine from './vaccineManagement/EditVaccine'
import RegisterVac from './register_vac/RegisterVac';
import InfoAccountStaff from './InfoAccountStaff/InfoAccountStaff';
import ListAfterVac from './listAfterVac/ListAfterVac';
import UserRegisterForm from './register_vac/UserRegisterForm';
import HealthAfter from './healthAfter/HealthAfter'
import ListHealthAfter from './healthAfter/ListHealthAfter';

function MedicalCity() {
  return (
    <Router>
       
      <div className="App">
        <Menubar />
        
        
        <Switch>
          <Route exact path='/'>
          <HomeStaff />
          </Route>
          <Route path='/listvaccine'>
          <ListVaccine/>
          </Route>
          <Route path='/addnewvaccine'>
          <AddNewVaccine/>
          </Route>
          <Route path='/editvaccine'>
            <EditVaccine />
          </Route>
          <Route path='/registervaccine'>
            <RegisterVac />
          </Route>
          <Route path='/listAfterVac'>
            <ListAfterVac />
          </Route>
          <Route path='/InfoAccountStaff'>
            <InfoAccountStaff />
          </Route>
          <Route path='/UserRegisterForm'>
            <UserRegisterForm/>
          </Route>
          <Route path='/ListHealthAfter'>
            <ListHealthAfter/>
          </Route>
          <Route path='/HealthAfter'>
            <HealthAfter/>
          </Route>
          
          
        </Switch>
      </div>
    </Router>
  );
}

export default MedicalCity;


