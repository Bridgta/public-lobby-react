import React from "react";
import { Link, withRouter } from "react-router-dom";
import { logout } from "../auth";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/login")}
                    to="/login"
                >
                    Log In
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/register")}
                    to="/register"
                >
                    Register
                </Link>
            </li>
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
                    Log out
                </span>
            </li>
        </ul>
    </div>
);

export default withRouter(Menu);
