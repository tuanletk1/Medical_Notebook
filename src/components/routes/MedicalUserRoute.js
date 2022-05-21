import {Route} from "react-router-dom";
import Home from "../medicalUser/pages/Home";
import Inject from "../medicalUser/pages/InjectStep1";
import InjectStep2 from "../medicalUser/pages/InjectStep2";
import InjectStep3 from "../medicalUser/pages/InjectStep3";
import InjectStep4 from "../medicalUser/pages/InjectStep4";
import HealthAfterInjection from "../medicalUser/pages/HealthAfterInjection";
import ProfileUser from "../medicalUser/pages/ProfileUser";
import React from "react";

export const MedicalUserRoute = () => {
    return (
        <>
            <Route path="/" exact component={Home} />
            <Route path="/inject" component={Inject} />
            <Route path="/inject-step2" component={InjectStep2} />
            <Route path="/inject-step3" component={InjectStep3} />
            <Route path="/inject-step4" component={InjectStep4} />
            <Route path="/HealthAfterInjection" component={HealthAfterInjection} />
            <Route path="/ProfileUser" component={ProfileUser} />
        </>
    )
}