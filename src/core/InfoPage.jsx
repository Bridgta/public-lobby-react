import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";

const Info = () => {
    return (
        <Layout
            title="InfoPage"
            description={`The info page`}
            className="container-fluid"
        >
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Steve Jobs</h5>

                    <h6 class="card-subtitle mb-2 text-muted">
                        steve@apple.com
                    </h6>
                    <p class="card-text">Stay Hungry, Stay Foolish</p>
                </div>
            </div>
        </Layout>
    );
};

export default Info;
