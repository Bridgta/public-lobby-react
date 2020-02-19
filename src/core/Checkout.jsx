import React, { useState, useEffect } from "react";
import { getProducts } from "./apiCore";
import { emptyCart } from "./cartHelpers";
import Card from "./Card";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const Checkout = ({ projects }) => {
    const getTotal = () => {
        return projects.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    return (
        <div>
            <h2>Total: ${getTotal()}</h2>
            {isAuthenticated() ? (
                <button className="btn btn-success">Checkout</button>
            ) : (
                <Link to="/login">
                    <button className="btn btn-primary">Log in</button>
                </Link>
            )}
        </div>
    );
};

export default Checkout;
