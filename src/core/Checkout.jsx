import React, { useState, useEffect } from "react";
import { getProducts } from "./apiCore";
import { emptyCart } from "./cartHelpers";
import Card from "./Card";

const Checkout = ({ projects }) => {
    const getTotal = () => {
        return projects.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    return (
        <div>
            <h2>Total: ${getTotal()}</h2>
        </div>
    );
};

export default Checkout;
