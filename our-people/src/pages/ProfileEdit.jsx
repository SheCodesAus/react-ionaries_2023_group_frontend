import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import { Link, useParams, useNavigate } from 'react-router-dom';

function ProfileEdit() {
    const token = localStorage.getItem('token')
    const [ profileData , setProfileData] = useState({})
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
        setProfileData({ ...profileData, [event.target.name]: event.target.value });
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
                    <input onChange={handleChange} type="text" id='displayName' name='display_name' value={profileData.display_name}></input>
                </div>

                <div>
                    <label htmlFor='profileImage'>Profile Image:</label>
                    <input onChange={handleChange} type="url" id='profileImage' name='profile_image' value={profileData.profile_image}></input>
                </div>

                <div>
                    <label htmlFor='pronouns'>Pronouns:</label>
                    <input onChange={handleChange} type="text" id='pronouns' name='pronouns' value={profileData.pronouns}></input>
                </div>

                <div>
                    <label htmlFor='currentRole'>Current Role:</label>
                    <input onChange={handleChange} type="text" id='currentRole' name='current_role' value={profileData.current_role}></input>
                </div>

                <div>
                    <label htmlFor='previousRole'>Previous Role:</label>
                    <input onChange={handleChange} type="text" id='previousRole' name='previous_role' value={profileData.previous_role}></input>
                </div>

                <div>
                    <label htmlFor='bio'>Bio:</label>
                    <input onChange={handleChange} type="text" id='bio' name='bio' value={profileData.bio}></input>
                </div>

                <div>
                    <label htmlFor='challenge'>Challenge:</label>
                    <input onChange={handleChange} type="text" id='challenge' name='challenge' value={profileData.challenge}></input>
                </div>

                <div>
                    <label htmlFor='githubUrl'>Github Link:</label>
                    <input onChange={handleChange} type="url" id='githubUrl' name='github_url' value={profileData.github_url}></input>
                </div>

                <div>
                    <label htmlFor='linkedinUrl'>LinkedIn Link:</label>
                    <input onChange={handleChange} type="url" id='linkedinUrl' name='linkedin_url' value={profileData.linkedin_url}></input>
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