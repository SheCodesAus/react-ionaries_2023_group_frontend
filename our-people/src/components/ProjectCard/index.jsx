import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css'

function ProjectCard(props) {
    const { projectData } = props;
    const isLogIn = window.localStorage.getItem("token") !== null;
    
    return (
        <div className="project-card">
            
            <div className="detail-projectcard-container">
                <div className="detail-projectcard-container">
                    {!isLogIn && <h3>{projectData.title}</h3>}
                    {isLogIn && <Link to={`/project/${projectData.id}/edit`}><h3>{projectData.title}</h3></Link>}
                    <h4>{projectData.description}</h4>
                    <Link to={projectData.url}><h4>Project Link</h4></Link>
                </div>

            <div className="display-projectimage-container">
                        <img id="display-projectimage" src={projectData.image}></img>
            </div>

            </div>
        </div>
    )
}
export default ProjectCard;
