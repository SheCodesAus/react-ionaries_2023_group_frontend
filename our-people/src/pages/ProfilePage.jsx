import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import { Link, useParams } from 'react-router-dom';

function ProfilePage() {
    const isLogIn = window.localStorage.getItem("token") !== null;
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
        <div className="body-padding">
            <div>
                <div className="div1">
                    <img src={profileData.profile_image}></img>
                </div>

                <div className="div2">
                    <h2>{profileData.display_name}</h2>
                    <p><b>Pronouns:</b> {profileData.pronouns}</p>
                    <p><b>Current Role:</b> {profileData.current_role}</p>
                    <p><b>Previous Role:</b> {profileData.previous_role}</p>
                    <p><b>Bio:</b> {profileData.bio}</p>
                    <p><b>Challenge:</b> {profileData.challenges}</p>
                    <Link to={profileData.github_url}><p><b>Github Link</b></p></Link>
                    <Link to={profileData.linkedin_url}><p><b>LinkedIn Link</b></p></Link>
                    <h3>Projects:</h3>
                </div>
            </div>
            
            <div className = "project-container">
                {projectList.filter(project => project.profile_id == id).map((projectData, key) => {
                    return <ProjectCard projectData={projectData}/>
                })}
            </div>
                
            { isLogIn &&
            <div>
                <Link to={`/profile/${profileData.id}/edit`}>
                    <button className="primary" type="button">Edit</button>
                </Link>
            </div>
            }
            

        </div>
    )
}

export default ProfilePage;