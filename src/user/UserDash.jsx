import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const Dash = () => {
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();
    // const token = isAuthenticated().token;

    const userLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/cart">
                            My Cart
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to={`/profile/${_id}`}>
                            Update Profile
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === 1 ? "Admin" : "Registered User"}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Layout title="Dash" description="User Dash" className="container">
            <div className="card">
                <h3 className="card-header">Donation Hisotry</h3>
                <ul className="list-group">
                    <li className="list-group-item">his</li>
                </ul>
            </div>
        </Layout>
    );
};

export default Dash;
