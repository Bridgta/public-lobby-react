import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";

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
            <div className="card-header name card-header-1 ">
                {project.title}
            </div>
            <div className="card-body">
                <ShowImage item={project} url="project" />
                <p className="card-p  mt-2">
                    {project.description.substring(0, 100)}
                </p>
                <p className="card-p black-10">$ {project.price}</p>
                <p className="black-9">
                    Category: {project.category && project.category.name}
                </p>
                <p className="black-8">
                    Added on {moment(project.createdAt).fromNow()}
                </p>
                <p className="black-8">Congress Member:</p>
                <br />
                {showViewButton(showViewProjectButton)}
                {/* {showAddToCartBtn(showAddToCartButton)} */}
            </div>
        </div>
    );
};

export default Card;
