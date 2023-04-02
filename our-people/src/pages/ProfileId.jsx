import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import { Link, useParams } from 'react-router-dom';
import ProfileEdit from '../pages/ProfileIdEdit';

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
                {projectList.filter(project => project.profile_id == id).map((projectData, key) => {
                    return <ProjectCard projectData={projectData}/>
                    })}

            </div>
                

            <div>
                <Link to={`/profile/${profileData.id}/edit`}>
                <button class="primary" type="button">Edit</button>
                </Link>
            </div>

        </div>
    )
}

export default ProfilePage;