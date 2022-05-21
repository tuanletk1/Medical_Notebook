import {Route} from "react-router-dom";
import Home from '../medicalCity/page/home/Home';
import UserList from "../medicalCity/page/userList/UserList";
import User from "../medicalCity/page/user/User";
import NewUser from "../medicalCity/page/newUser/NewUser";
import PersonalInfo from "../medicalCity/page/personalInfo/PersonalInfo";
import StaffList from "../medicalCity/page/staffList/StaffList";
import StaffProfile from "../medicalCity/page/staff/StaffProfile";
import Backup from "../medicalCity/dataManagement/Backup";
import React from "react";
import Menubar from "../medicalCity/menubar/Menubar";

export const MedicalCityRoute = () => {
    return (
        <div className="App">
            <Menubar />
            <Route exact path='/' component={Home}/>
            <Route path='/user' component={UserList} />
            <Route path='/user:userId' component={User} />
            <Route path='/newUser' component={NewUser} />
            <Route path='/personalInfo' component={PersonalInfo} />
            <Route path='/staff' component={StaffList} />
            <Route path='/staff:staffId' component={StaffProfile} />
            <Route path='/backup' component={Backup} />
        </div>
    )
}