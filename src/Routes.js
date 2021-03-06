import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./user/Login";
import Register from "./user/Register";
import Home from "./core/Home";
import InfoPage from "./core/InfoPage";
import PrivateRoute from "./auth/PrivateRoute";
import Dash from "./user/UserDash";
import AdminRoute from "./auth/AdminRoute";
import AdminDash from "./user/AdminDash";
import AddCategory from "./admin/AddCategory";
import AddProject from "./admin/AddProject";
import Purchase from "./core/Purchase";
import Project from "./core/Project";
import Cart from "./core/Cart";
import Profile from "./user/Profile";
import ManageProjects from "./admin/ManageProjects";
import IceBox from "./core/IceBox";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/infopage" exact component={InfoPage} />
                <Route path="/icebox" exact component={IceBox} />
                <Route path="/purchase" exact component={Purchase} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <PrivateRoute path="/user/dash" exact component={Dash} />
                <AdminRoute path="/admin/dash" exact component={AdminDash} />
                <AdminRoute
                    path="/create/category"
                    exact
                    component={AddCategory}
                />
                <AdminRoute
                    path="/create/project"
                    exact
                    component={AddProject}
                />
                <Route path="/project/:projectId" exact component={Project} />
                <Route path="/cart" exact component={Cart} />
                <PrivateRoute
                    path="/profile/:userId"
                    exact
                    component={Profile}
                />
                <PrivateRoute
                    path="/profile/:userId"
                    exact
                    component={Profile}
                />
                <PrivateRoute
                    path="/admin/projects"
                    exact
                    component={ManageProjects}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
