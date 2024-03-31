import React from "react";
import { Switch } from "react-router-dom";


import MyRoute from "./MyRoute.js";

import Home from "../pages/Home/";
import Register from '../pages/Register/'
import Page404 from "../pages/Page404/";

export default function Routes() {
    return (
        <Switch>
            <MyRoute exact path='/' component={Home} />
            <MyRoute exact path='/register' component={Register} />
            <MyRoute path='*' component={Page404} />
        </Switch>

    );
};