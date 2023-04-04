import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css'

function ProjectCard(props) {
    const { projectData } = props;
    const isLogIn = window.localStorage.getItem("token") !== null;
    
    return (
        
            <div>
                <div className="project-wrapper">
                    <img src={projectData.image}></img>

                    <div className="project-text-box">
                        {!isLogIn && <h3>{projectData.title}</h3>}
                        {isLogIn && <Link to={`/project/${projectData.id}/edit`}><h3>{projectData.title}</h3></Link>}
                        <p>{projectData.description}</p>
                        <Link to={projectData.url}><p>Project Link</p></Link>
                    </div>                         
                </div>
         </div>
    )
}
export default ProjectCard;
