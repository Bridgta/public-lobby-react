import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { read } from "./apiCore";
import Card from "./Card";

const Project = props => {
    const [project, setProject] = useState({});
    const [error, setError] = useState(false);

    const loadSingleProject = projectId => {
        read(projectId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProject(data);
                // listRelated(data._id).then(data => {
                //     if (data.error) {
                //         setError(data.error);
                //     } else {
                //         setRelatedProject(data);
                //     }
                // });
            }
        });
    };

    useEffect(() => {
        const projectId = props.match.params.projectId;
        loadSingleProject(projectId);
    }, [props]);

    return (
        <Layout
            title={project && project.title}
            description={
                project &&
                project.description &&
                project.description.substring(0, 100)
            }
            className="container-fluid"
        >
            <div className="row">
                <div className="col-8">
                    {project && project.description && (
                        <Card project={project} showViewProjectButton={false} />
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Project;
