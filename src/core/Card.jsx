import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";

const Card = ({ project, showViewProjectButton = true }) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(project.count);

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

    const handleChange = projectId => event => {
        setRun(!run); // run useEffect in parent Cart
        setCount(event.target.value < 1 ? 1 : event.target.value);
        if (event.target.value >= 1) {
            updateItem(projectId, event.target.value);
        }
    };

    return (
        <div className="card ">
            <div className="card-header card-header-1 ">{project.title}</div>
            <div className="card-body">
                {shouldRedirect(redirect)}
                <ShowImage item={project} url="project" />
                <p className="card-p  mt-2">
                    {project.description.substring(0, 100)}{" "}
                </p>
                <p className="card-p black-10">$ {project.price}</p>
                <p className="black-9">
                    Category: {project.category && project.category.name}
                </p>
                <p className="black-8">
                    Added on {moment(project.createdAt).fromNow()}
                </p>
                <br />

                {showViewButton(showViewProjectButton)}
            </div>
        </div>
    );
};

export default Card;
