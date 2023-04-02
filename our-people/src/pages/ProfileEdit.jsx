import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import { Link, useParams, useNavigate } from 'react-router-dom';

function ProfileEdit() {
    const token = localStorage.getItem('token')
    const [ profileData , setProfileData] = useState({profiles: []})
    const { id } = useParams();
    const navigate = useNavigate();

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


    const handleChange = (event) => {
        setProfile({ ...profile, [event.target.name]: event.target.value });
    };


    const handleSubmit = (event) => {
        if (profile.display_name && profile.current_role && profile.previous_role) {
            postData().then((response) => {
                console.log(response)
                navigate('/profile/:id')
            })
        }  
    };


    const postData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}profile/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(profile)
        })
        return response.json();
    }


return (
    <form>

        <div>
            <div>
                <div>
                    <label htmlFor='displayName'>Display Name:</label>
                    <input onChange={handleChange} type="text" id='displayName' value={profileData.display_name}></input>
                </div>

                <div>
                    <label htmlFor='profileImage'>Profile Image:</label>
                    <input onChange={handleChange} type="url" id='profileImage' value={profileData.profile_image}></input>
                </div>

                <div>
                    <label htmlFor='pronouns'>Pronouns:</label>
                    <input onChange={handleChange} type="text" id='pronouns' value={profileData.pronouns}></input>
                </div>

                <div>
                    <label htmlFor='currentRole'>Current Role:</label>
                    <input onChange={handleChange} type="text" id='currentRole' value={profileData.current_role}></input>
                </div>

                <div>
                    <label htmlFor='previousRole'>Previous Role:</label>
                    <input onChange={handleChange} type="text" id='previousRole' value={profileData.previous_role}></input>
                </div>

                <div>
                    <label htmlFor='bio'>Bio:</label>
                    <input onChange={handleChange} type="text" id='bio' value={profileData.bio}></input>
                </div>

                <div>
                    <label htmlFor='challenge'>Challenge:</label>
                    <input onChange={handleChange} type="text" id='challenge' value={profileData.challenge}></input>
                </div>

                <div>
                    <label htmlFor='githubUrl'>Github Link:</label>
                    <input onChange={handleChange} type="url" id='githubUrl' value={profileData.github_url}></input>
                </div>

                <div>
                    <label htmlFor='linkedinUrl'>LinkedIn Link:</label>
                    <input onChange={handleChange} type="url" id='linkedinUrl' value={profileData.linkedin_url}></input>
                </div>

            </div>


            <div>
                {projectList.filter(project => project.profile_id == id).map((projectData, key) => {
                    return <ProjectCard projectData={projectData}/>
                })}
            </div>



        </div>

            
        <div>
            <button class="primary" type="submit" onClick={handleSubmit}>Save</button>
            <Link to={`/profile/${profileData.id}`}>
                <button class="secondary" type="button">Cancel</button>
            </Link>
        </div>

    </form>
)

}
export default ProfileEdit;