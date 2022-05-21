import { Route, Switch } from 'react-router-dom'
import React from 'react'
import Login from "./login/Login";
import {useSelector} from "react-redux";
import Home from "./medicalUser/pages/Home";
import Inject from "./medicalUser/pages/InjectStep1";
import InjectStep2 from "./medicalUser/pages/InjectStep2";
import InjectStep3 from "./medicalUser/pages/InjectStep3";
import InjectStep4 from "./medicalUser/pages/InjectStep4";
import HealthAfterInjection from "./medicalUser/pages/HealthAfterInjection";
import ProfileUser from "./medicalUser/pages/ProfileUser";
import Menubar from "./medicalStaff/menubar/Menubar";
import HomeStaff from "./medicalStaff/home/HomeStaff";
import ListVaccine from "./medicalStaff/vaccineManagement/ListVaccine";
import AddNewVaccine from "./medicalStaff/vaccineManagement/AddNewVaccine";
import EditVaccine from "./medicalStaff/vaccineManagement/EditVaccine";
import RegisterVac from "./medicalStaff/register_vac/RegisterVac";
import ListAfterVac from "./medicalStaff/listAfterVac/ListAfterVac";
import InfoAccountStaff from "./medicalStaff/InfoAccountStaff/InfoAccountStaff";
import UserRegisterForm from "./medicalStaff/register_vac/UserRegisterForm";
import ListHealthAfter from "./medicalStaff/healthAfter/ListHealthAfter";
import HealthAfter from "./medicalStaff/healthAfter/HealthAfter";

export function Routes() {
    const authState = useSelector(state => state.auth)

  return (
      <Switch>
          {!authState.isLoggedIn &&
            <>
                <Route path='/login' component={Login} />
                <Route path='/' component={Home} exact />
            </>
          }

          {authState.isLoggedIn && authState.currentUser?.role_id === 1 &&
            <>
                <Route path="/" exact component={Home} />
                <Route path="/inject" component={Inject} />
                <Route path="/inject-step2" component={InjectStep2} />
                <Route path="/inject-step3" component={InjectStep3} />
                <Route path="/inject-step4" component={InjectStep4} />
                <Route path="/HealthAfterInjection" component={HealthAfterInjection} />
                <Route path="/ProfileUser" component={ProfileUser} />
            </>
          }

          {authState.isLoggedIn && authState.currentUser?.role_id === 2 &&
            <div className="App">
                <Menubar />
                <Route exact path='/' component={HomeStaff} />
                <Route path='/listvaccine' component={ListVaccine} />
                <Route path='/addnewvaccine' component={AddNewVaccine} />
                <Route path='/editvaccine' component={EditVaccine} />
                <Route path='/registervaccine' component={RegisterVac} />
                <Route path='/listAfterVac' component={ListAfterVac} />
                <Route path='/InfoAccountStaff' component={InfoAccountStaff} />
                <Route path='/UserRegisterForm' component={UserRegisterForm} />
                <Route path='/ListHealthAfter' component={ListHealthAfter} />
                <Route path='/HealthAfter' component={HealthAfter} />
            </div>
          }
      </Switch>
  )
}
