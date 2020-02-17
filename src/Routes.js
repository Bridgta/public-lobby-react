import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./user/Login";
import Register from "./user/Register";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dash from "./user/UserDash";
import AdminDash from "./user/AdminDash";
import AdminRoute from "./auth/AdminRoute";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <PrivateRoute path="/user/dash" exact component={Dash} />
                <AdminRoute path="/admin/dash" exact component={AdminDash} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
