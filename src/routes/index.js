import React from "react";
import { Switch } from "react-router-dom";


import MyRoute from "./MyRoute.js";

import Home from "../pages/Home/";
import Register from '../pages/Register/'
import Page404 from "../pages/Page404/";
import Login from "../pages/Login/";
import Roupas from "../pages/Roupas/";
import Acessorios from "../pages/Acessorios/";
import Suplementos from '../pages/Suplementos/'

export default function Routes() {
    return (
        <Switch>
            <MyRoute exact path='/' component={Home} />
            <MyRoute exact path='/register' component={Register} />
            <MyRoute exact path='/login' component={Login} />
            <MyRoute exact path='/roupas' component={Roupas} />
            <MyRoute exact path='/acessorios' component={Acessorios} />
            <MyRoute exact path='/suplementos' component={Suplementos} />
            <MyRoute path='*' component={Page404} />
        </Switch>

    );
};