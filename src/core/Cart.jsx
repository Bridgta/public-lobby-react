import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getCart } from "./cartHelpers";
import Card from "./Card";
import Checkout from "./Checkout";

const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
    }, [run]);

    const showItems = items => {
        return (
            <div>
                <h2>You're Making {`${items.length}`} Contribution(s)</h2>
                <hr />
                {items.map((project, i) => (
                    <Card
                        key={i}
                        project={project}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProjectButton={true}
                        setRun={setRun}
                        run={run}
                    />
                ))}
            </div>
        );
    };

    const noItemsMessage = () => (
        <h2>
            You're Not Contributing to Any Funds <br />{" "}
            <Link to="/purchase">Explore Projects</Link>
        </h2>
    );

    return (
        <Layout
            title="Current Contributions"
            description="Manage Your Current Funding"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-6">
                    {items.length > 0 ? showItems(items) : noItemsMessage()}
                </div>

                <div className="col-6">
                    <h2 className="mb-4">Your Contributions Summary</h2>
                    <hr />
                    <Checkout projects={items} setRun={setRun} run={run} />
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
