import {Route} from "react-router-dom";
import HomeStaff from "../medicalStaff/home/HomeStaff";
import ListVaccine from "../medicalStaff/vaccineManagement/ListVaccine";
import AddNewVaccine from "../medicalStaff/vaccineManagement/AddNewVaccine";
import EditVaccine from "../medicalStaff/vaccineManagement/EditVaccine";
import RegisterVac from "../medicalStaff/register_vac/RegisterVac";
import ListAfterVac from "../medicalStaff/listAfterVac/ListAfterVac";
import InfoAccountStaff from "../medicalStaff/InfoAccountStaff/InfoAccountStaff";
import UserRegisterForm from "../medicalStaff/register_vac/UserRegisterForm";
import ListHealthAfter from "../medicalStaff/healthAfter/ListHealthAfter";
import HealthAfter from "../medicalStaff/healthAfter/HealthAfter";
import React from "react";
import Menubar from "../medicalStaff/menubar/Menubar";

export const MedicalStaffRoute = () => {
    return (
        <div className="App">
            <Menubar/>
            <Route exact path='/' component={HomeStaff}/>
            <Route path='/listvaccine' component={ListVaccine}/>
            <Route path='/addnewvaccine' component={AddNewVaccine}/>
            <Route path='/editvaccine' component={EditVaccine}/>
            <Route path='/registervaccine' component={RegisterVac}/>
            <Route path='/listAfterVac' component={ListAfterVac}/>
            <Route path='/InfoAccountStaff' component={InfoAccountStaff}/>
            <Route path='/UserRegisterForm/:id' component={UserRegisterForm}/>
            <Route path='/ListHealthAfter' component={ListHealthAfter}/>
            <Route path='/HealthAfter' component={HealthAfter}/>
        </div>
    )
}
