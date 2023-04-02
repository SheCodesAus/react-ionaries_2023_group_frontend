import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css'

// function ProjectCard(props) {
//     const { projectData } = props;
//     return (
//         <div>
//             <Link to={`/project/${projectData.id}`}>
//                 <img src={projectData.image}></img>
//                 <h3>{projectData.title}</h3>
//                 <p>{projectData.description}</p>
//                 <a>{projectData.url}</a>
//             </Link>
//         </div>
//     )
// }

// export default ProjectCard;

function ProjectCard(props) {
    const {projectData} = props;
return (
    <div className="project-card">
        <Link to={`/project/${projectData.id}`}>
            <div className="gradient-project-card">
                    <div className="detail-projectcard-container">
                        <h3>{projectData.title}</h3>
                        <h4>{projectData.description}</h4>
                        <h4>{projectData.url}</h4>
                    </div>
                    <div className="display-projectimage-container">
                        <img id="display-projectimage" src={projectData.image}></img>
                    </div>
        
            </div>    
        </Link>    
    </div>
)
}
export default ProjectCard;
