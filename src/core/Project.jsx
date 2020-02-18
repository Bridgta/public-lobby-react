import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { read, listRelated } from "./apiCore";
import Card from "./Card";

const Project = props => {
    return (
        <Layout
            title="Project Look"
            description="Project zzoom in"
            className="container-fluid"
        >
            <p> Project </p>
        </Layout>
    );
};

export default Project;
