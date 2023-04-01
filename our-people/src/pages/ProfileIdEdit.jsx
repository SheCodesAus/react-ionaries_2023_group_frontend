import { useState } from 'react';
import { useLocation } from "react-router-dom";

function ProfileEdit() {
    const token = localStorage.getItem('token')
    const location = useLocation();
    const [profile, setProfile] = useState({...location})
    
    // const [profile, setProfile] = useState({
    //     profile_image : props.profile_image,
    //     display_name: props.display_name,
    //     pronouns: props.pronouns,
    //     current_role: props.current_role,
    //     previous_role: props.previous_role,
    //     bio: props.bio,
    //     challenge: props.challenge,
    //     github_url: props.github_url,
    //     linkedin_url: props.linkedin_url,
    // })
    const { profileId } = location.id;

    const [project, setProject] = useState({...location.project.id})

    // const [project, setProject] = useState({
    //     id: props.project.id,
    //     title: props.project.title,
    //     image: props.project.image,
    //     description: props.project.description,
    //     url: props.project.url,
    // })


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
        const response = await fetch(`${import.meta.env.VITE_API_URL}profile/${profileId}`, {
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
            <label htmlFor='displayName'>Display Name:</label>
            <input onChange={handleChange} type="text" id='displayName' value={props.displayName}></input>
        </div>

        <button type="submit" onClick={handleSubmit}>Save</button>

    </form>
)

}
export default ProfileEdit;