import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";

const Info = () => {
    return (
        <Layout
            title="InfoPage"
            description={`The info page`}
            className="container-fluid"
        >
            <div className="card ">
                <div className="card-header card-header-1 ">API 1</div>
                <div className="card-body"></div>
            </div>
            <br />
            <div className="card ">
                <div className="card-header card-header-1 ">API 2</div>
                <div className="card-body"></div>
            </div>
            <br />
            <div className="card ">
                <div className="card-header card-header-1 ">API 3</div>
                <div className="card-body"></div>
            </div>
            <br />
            <div className="card ">
                <div className="card-header card-header-1 ">API 4</div>
                <div className="card-body"></div>
            </div>
        </Layout>
    );
};

export default Info;
