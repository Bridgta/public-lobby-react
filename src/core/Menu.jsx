import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { logout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
// import logo from "./images/logo.png";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/home")}
                    to="/"
                >
                    Main
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/infopage")}
                    to="/infopage"
                >
                    Info Page
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/purchase")}
                    to="/purchase"
                >
                    Donate
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    My Donations{" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dash")}
                        to="/user/dash"
                    >
                        Dashboard
                    </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dash")}
                        to="/admin/dash"
                    >
                        Dashboard
                    </Link>
                </li>
            )}

            {!isAuthenticated() && (
                <Fragment>
                    <li id="swing1" className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/login")}
                            to="/login"
                        >
                            Log In
                        </Link>
                    </li>

                    <li id="swing1" className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/register")}
                            to="/register"
                        >
                            Register
                        </Link>
                    </li>
                </Fragment>
            )}

            {isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={() =>
                            logout(() => {
                                history.push("/");
                            })
                        }
                    >
                        Log Out
                    </span>
                </li>
            )}
        </ul>
    </div>
);

export default withRouter(Menu);
