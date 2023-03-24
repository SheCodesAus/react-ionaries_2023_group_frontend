import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div>
            <Link to={`/project/${projectData.id}`}>
                <img src={projectData.image}></img>
                <h3>{projectData.title}</h3>
                <p>{projectData.description}</p>
                <a>{projectData.link}</a>
            </Link>
        </div>
    )
}

export default ProjectCard;