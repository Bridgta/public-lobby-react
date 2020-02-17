import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";

const Purchase = () => {
    return (
        <Layout
            title="Donation page"
            description="Donate to Support a Bill of your Choice"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-4"> left side</div>
                <div className="col-8"> right</div>
            </div>
        </Layout>
    );
};

export default Purchase;
