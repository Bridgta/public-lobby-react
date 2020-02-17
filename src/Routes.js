import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./user/Login";
import Register from "./user/Register";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dash from "./user/UserDash";
import AdminRoute from "./auth/AdminRoute";
import AdminDash from "./user/AdminDash";
import AddCategory from "./admin/AddCategory";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <PrivateRoute path="/user/dash" exact component={Dash} />
                <AdminRoute path="/admin/dash" exact component={AdminDash} />
                <AdminRoute
                    path="/create/category"
                    exact
                    component={AddCategory}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
