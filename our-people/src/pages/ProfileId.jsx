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
        fetch(`${import.meta.env.VITE_API_URL}projects`)
        .then ((results) => {
            return results.json();
        })
        .then ((data) => {
            setProjectList(data)
        });
    }, []);

    return ( 
        <div>

            <div>
                <img src={profileData.profile_image}></img>
                <h2>{profileData.display_name}</h2>
                <h3>{profileData.pronouns}</h3>
                <h3>{profileData.current_role}</h3>
                <h3>{profileData.previous_role}</h3>
                <p>{profileData.bio}</p>
                <p>{profileData.challenges}</p>
                <a>{profileData.github_url}</a>
                <a>{profileData.linkedin_url}</a>
            </div>

            <div>
            {projectList.map((projectData, key) => {
                return <ProjectCard projectData={projectData}/>
            })}
            </div>

        </div>
    )
}

export default ProfilePage;