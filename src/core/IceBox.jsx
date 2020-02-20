import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";

const IceBox = () => {
    return (
        <Layout
            title="The Ice Box"
            description={`Check out this sweet feature in a year or seven!`}
            className="container"
        >
            <div className="card ">
                <div className="card-header card-header-1 ">Night Mode</div>
                <div className="card-header card-header-1 ">
                    User Purchase History
                </div>
                <div className="card-header card-header-1 ">
                    Dynamic Contributions
                </div>
                <div className="card-header card-header-1 ">Social Buttons</div>
                <div className="card-header card-header-1 ">Sleep</div>
            </div>
        </Layout>
    );
};

export default IceBox;
