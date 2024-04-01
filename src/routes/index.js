import React from "react";
import { Switch } from "react-router-dom";


import MyRoute from "./MyRoute.js";

import Home from "../pages/Home/";
import Register from '../pages/Register/'
import Page404 from "../pages/Page404/";
import Login from "../pages/Login/";

export default function Routes() {
    return (
        <Switch>
            <MyRoute exact path='/' component={Home} />
            <MyRoute exact path='/register' component={Register} />
            <MyRoute exact path='/login' component={Login} />
            <MyRoute path='*' component={Page404} />
        </Switch>

    );
};