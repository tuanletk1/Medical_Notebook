import { Route, Switch } from 'react-router-dom'
import React from 'react'
import {useSelector} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";
import {PublicRoute} from "./PublicRoute";
import {MedicalUserRoute} from "./MedicalUserRoute";
import {MedicalStaffRoute} from "./MedicalStaffRoute";
import {MedicalCityRoute} from "./MedicalCityRoute";

export function Routes() {
    const authState = useSelector(state => state.auth)

  return (
      <Switch>
          {!authState.isLoggedIn && <PublicRoute/>}

          {authState.isLoggedIn &&
              <Route path='/login' exact>
                  <Redirect to='/'/>
              </Route>
          }

          {authState.isLoggedIn && authState.currentUser?.role_id === 1 && <MedicalUserRoute/>}

          {authState.isLoggedIn && authState.currentUser?.role_id === 2 && <MedicalStaffRoute/>}

          {authState.isLoggedIn && authState.currentUser?.role_id === 3 && <MedicalCityRoute/>}

      </Switch>
  )
}
