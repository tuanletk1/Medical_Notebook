import {Route} from "react-router-dom";
import Login from "../login/Login";
import Home from "../medicalUser/pages/Home";
import React from "react";

export const PublicRoute = () => {
    return (
        <>
            <Route path='/login' component={Login} />
            <Route path='/' component={Home} exact/>
        </>
    )

}