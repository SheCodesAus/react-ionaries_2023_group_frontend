import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function ProfilePage() {
    const [ profileData, setProfileData] = useState({profiles: []})
    const { id } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}profile/${id}`)
        .then((profileResults) => {
            return profileResults.json();
        })
        .then((profileDataJson) => {
            setProfileData(profileDataJson)
        })
    }, [])


    const [projectList, setProjectList] = useState([]);

    useEffect( () => {
        fetch(`${import.meta.env.VITE_API_URL}project`)
        .then ((results) => {
            return results.json();
        })
        .then ((data) => {
            setProjectList(data)
        });
    }, []);

    return ( 

     
        <div>
    
            <div className="div1">
                <img src={profileData.profile_image} />
            </div>

            <div className="div2">
                <h2>{profileData.display_name}</h2>
                <p><b>Pronoun:</b> {profileData.pronouns}</p>
                <p><b>Current Role:</b> {profileData.current_role}</p>
                <p><b>previous Role:</b> {profileData.previous_role}</p>
                <p><b>Bio:</b> {profileData.bio}</p>
                <p><b>Challenge:</b> {profileData.challenges}</p>
                <p><b>Github_url:</b>  <a>{profileData.github_url}</a></p> 
                <p><b>linkedin_url:</b>  <a>{profileData.linkedin_url}</a></p>
                <p><b>Projects:</b></p> 

                <div className = "container-projects">
                    <div className = "container-projects-details">
                        {projectList.map((projectData, key) => {
                        return <ProjectCard projectData={projectData}/>
                        })}
                    </div>
                </div>
                           
            </div>
        

        </div>
           
         

            

        
            
            
    )
}

export default ProfilePage;