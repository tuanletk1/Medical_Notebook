import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../../login/Login";
import Inject from "../pages/InjectStep1";
import InjectStep2 from "../pages/InjectStep2";
import InjectStep3 from "../pages/InjectStep3";
import InjectStep4 from "../pages/InjectStep4";
import HealthAfterInjection from "../pages/HealthAfterInjection";
import Profile from "../pages/ProfileUser";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/inject" component={Inject} />
      <Route path="/inject-step2" component={InjectStep2} />
      <Route path="/inject-step3" component={InjectStep3} />
      <Route path="/inject-step4" component={InjectStep4} />
      <Route path="/HealthAfterInjection" component={HealthAfterInjection} />
      <Route path="/profile" component={Profile} />

    </Switch>
  );
};

export default Routes;
