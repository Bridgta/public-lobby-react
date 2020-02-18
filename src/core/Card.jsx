import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";

const Card = ({ project, showViewProjectButton = true }) => {
    const showViewButton = showViewProjectButton => {
        return (
            showViewProjectButton && (
                <Link to={`/project/${project._id}`} className="mr-2">
                    <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">
                        View Project
                    </button>
                </Link>
            )
        );
    };

    return (
        <div className="card ">
            <div className="card-header card-header-1 ">{project.title}</div>
            <div className="card-body">
                <ShowImage item={project} url="project" />
                <p>{project.description.substring(0, 100)}</p>
                <p>${project.price}</p>
                {/* <p className="black-9">
                    Category: {project.category && project.category.name}
                </p> */}
                <Link to={`/project/${project._id}`} className="mr-2">
                    {showViewButton(showViewProjectButton)}
                </Link>
                <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">
                    {" "}
                    Donate Now{" "}
                </button>
            </div>
        </div>
    );
};

export default Card;
