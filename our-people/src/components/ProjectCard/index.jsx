import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
    const { projectData } = props;
    const isLogIn = window.localStorage.getItem("token") !== null;
    
    return (
        <div>
            {!isLogIn && <h3>{projectData.title}</h3>}
            {isLogIn && <Link to={`/project/${projectData.id}/edit`}><h3>{projectData.title}</h3></Link>}
            <img src={projectData.image}></img>
            <p>{projectData.description}</p>
            <Link to={projectData.url}>Project Link</Link>
            
        </div>
    )
}

export default ProjectCard;