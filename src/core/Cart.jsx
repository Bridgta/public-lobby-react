import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getCart } from "./cartHelpers";
import Card from "./Card";

const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
    }, [run]);

    const showItems = items => {
        return (
            <div>
                <h2>You're donating to{`${items.length}`} funds</h2>
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
            You're not contibuting to any funds <br />{" "}
            <Link to="/purchase">Explore Donations</Link>
        </h2>
    );

    return (
        <Layout
            title="Contibution Cart"
            description="Manage your contibutions."
            className="container-fluid"
        >
            <div className="row">
                <div className="col-6">
                    {items.length > 0 ? showItems(items) : noItemsMessage()}
                </div>

                <div className="col-6">
                    <h2 className="mb-4">Your contribution summary</h2>
                    <hr />
                    {/* <Checkout projects={items} setRun={setRun} run={run} /> */}
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
