import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProjects } from "./apiCore";
import Card from "./Card";
import Search from "./Search";

const Home = () => {
    const [projectsBySell, setProjectsBySell] = useState([]);
    const [projectsByArrival, setProjectsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProjectsBySell = () => {
        getProjects("donated").then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProjectsBySell(data);
            }
        });
    };

    const loadProjectsByArrival = () => {
        getProjects("createdAt").then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProjectsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProjectsByArrival();
        loadProjectsBySell();
    }, []);

    return (
        <Layout
            title="The Public Lobby"
            description="The Public Lobby"
            className="container-fluid"
        >
            <Search />
            <h2 className="mb-4">Trending Funds</h2>
            <div className="row">
                {projectsBySell.map((project, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card project={project} />
                    </div>
                ))}
            </div>
            <h2 className="mb-4">New Bills</h2>
            <div className="row">
                {projectsByArrival.map((project, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card project={project} />
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Home;
