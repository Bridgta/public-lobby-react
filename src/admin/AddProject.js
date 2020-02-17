import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createProject, getCategories } from "./apiAdmin";

const AddProject = () => {
    const { user, token } = isAuthenticated();
    const [values, setValues] = useState({
        title: "",
        description: "",
        amountNeeded: "",
        categories: [],
        category: "",
        tax: "",
        goalReached: "",
        photo: "",
        loading: false,
        error: "",
        createdProject: "",
        redirectToProfile: false,
        formData: ""
    });

    const {
        title,
        description,
        amountNeeded,
        categories,
        category,
        tax,
        goalReached,
        loading,
        error,
        createdProject,
        redirectToProfile,
        formData
    } = values;

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    categories: data,
                    formData: new FormData()
                });
            }
        });
    };

    useEffect(() => {
        init();
    }, []);

    const handleChange = name => event => {
        const value =
            name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });

        createProject(user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    title: "",
                    description: "",
                    photo: "",
                    amountNeeded: "",
                    goalreached: "",
                    loading: false,
                    createdProject: data.name
                });
            }
        });
    };

    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <h4>Post Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image/*"
                    />
                </label>
            </div>
            <div className="form-group">
                <label className="text-muted">Title</label>
                <input
                    onChange={handleChange("title")}
                    type="text"
                    className="form-control"
                    value={title}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea
                    onChange={handleChange("description")}
                    className="form-control"
                    value={description}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Amount To Raise</label>
                <input
                    onChange={handleChange("amountNeeded")}
                    type="number"
                    className="form-control"
                    value={amountNeeded}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Category</label>
                <select
                    onChange={handleChange("category")}
                    className="form-control"
                >
                    <option>Please select</option>
                    {categories &&
                        categories.map((c, i) => (
                            <option key={i} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <label className="text-muted">Tax Deductible</label>
                <select onChange={handleChange("tax")} className="form-control">
                    <option>Please select</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>
            <div className="form-group">
                <label className="text-muted">Amout Raised</label>
                <input
                    onChange={handleChange("goalReached")}
                    type="number"
                    className="form-control"
                    value={goalReached}
                />
            </div>
            <button className="btn btn-outline-primary">Create Project</button>
        </form>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showSuccess = () => (
        <div
            className="alert alert-info"
            style={{ display: createdProject ? "" : "none" }}
        >
            <h2>{`${createdProject}`} is created!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    return (
        <Layout
            title="Add a new project"
            description={`G'day ${user.name}, ready to add a new project?`}
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                </div>
            </div>
        </Layout>
    );
};

export default AddProject;
