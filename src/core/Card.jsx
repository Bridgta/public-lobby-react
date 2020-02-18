import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import { addItem, updateItem, removeItem } from "./cartHelpers";

const Card = ({
    project,
    showViewProjectButton = true,
    showAddToCartButton = true,
    cartUpdate = false,
    showRemoveProjectButton = false,
    setRun = f => f,
    run = undefined
    // changeCartSize
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

    // const showStock = quantity => {
    //     return quantity > 0 ? (
    //         <span className="badge badge-primary badge-pill">In Stock </span>
    //     ) : (
    //         <span className="badge badge-primary badge-pill">
    //             Out of Stock{" "}
    //         </span>
    //     );
    // };

    const handleChange = projectId => event => {
        setRun(!run);
        setCount(event.target.value < 1 ? 1 : event.target.value);
        if (event.target.value >= 1) {
            updateItem(projectId, event.target.value);
        }
    };

    const showCartUpdateOptions = cartUpdate => {
        return (
            cartUpdate && (
                <div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Adjust Contributions
                            </span>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            value={count}
                            onChange={handleChange(project._id)}
                        />
                    </div>
                </div>
            )
        );
    };

    const showRemoveButton = showRemoveProjectButton => {
        return (
            showRemoveProjectButton && (
                <button
                    onClick={() => {
                        removeItem(project._id);
                        setRun(!run); // run useEffect in parent Cart
                    }}
                    className="btn btn-outline-danger mt-2 mb-2"
                >
                    Remove Project
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
                {showViewButton(showViewProjectButton)}

                {showAddToCartBtn(showAddToCartButton)}

                {showRemoveButton(showRemoveProjectButton)}

                {showCartUpdateOptions(cartUpdate)}
            </div>
        </div>
    );
};

export default Card;
