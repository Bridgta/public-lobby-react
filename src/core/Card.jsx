import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";

const Card = ({ project }) => {
    return (
        <div className="card ">
            <div className="card-header card-header-1 ">{project.title}</div>
            <div className="card-body">
                <ShowImage item={project} url="project" />
                <p>{project.description}</p>
                <p>${project.amountNeeded}</p>
                <Link to="/">
                    {" "}
                    <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">
                        View Project
                    </button>
                    <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">
                        {" "}
                        Donate Now{" "}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;
