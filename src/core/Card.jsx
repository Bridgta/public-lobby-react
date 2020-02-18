import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import { addItem } from "./cartHelpers";

const Card = ({
    project,
    showViewProjectButton = true,
    showAddToCartButton = true
}) => {
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

    const addToCart = () => {
        addItem(project, setRedirect(true));
    };

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const showAddToCartBtn = showAddToCartButton => {
        return (
            showAddToCartButton && (
                <button
                    onClick={addToCart}
                    className="btn btn-outline-warning mt-2 mb-2 card-btn-1  "
                >
                    Donate to this fund
                </button>
            )
        );
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
                {showAddToCartBtn(showAddToCartButton)}

                {showViewButton(showViewProjectButton)}
            </div>
        </div>
    );
};

export default Card;
