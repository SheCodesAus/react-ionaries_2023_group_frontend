import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewProject from '../components/NewProject';

function CreateProfilePage() {
    const [profile, setProfile] = useState({
        allow_contact: true,
        display_name: "",
        bio: "",
        previous_role: "",
        current_role: "",
        profile_image: "",
        birthdate: "",
        pronouns: "",
        gender: "",
        ethnicity: "",
        linkedin_url: "",
        github_url: "",
        challenge: "",
        is_public: true,
        is_visible: true
    });

    const [projects, setProjects] = useState([NewProject]); 
  
    function addProject() { 
        setProjects([...projects, NewProject]) 
    } 

    const handleChange = (event) => {
        const { id, value } = event.target;
        console.log(id, value)
        setProfile((prevProfile) => ({
            ...prevProfile,
            [id]: value
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (profile.display_name && profile.bio) {
            postData().then((response) => {
                if (response.id) { 
                    navigate(`/profile/${response.id}`);
                } else { 
                    alert("Sorry go back and fill in the form again");
                };
        });
        }
    };

    const postData = async () => {
        console.log (profile);
        const token = window.localStorage.getItem("token");
        const response = await fetch(`${import.meta.env.VITE_API_URL}profile/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "authorization": `token ${token}`
            },
            body: JSON.stringify(profile)
        })
        return response.json();
    }

    return(
        <div>
            <form className='form' id="profile-form">
                <h1>Profile Form Heading</h1>
                <div className="profile-form-section">
                    <label htmlFor="profile_image">Profile_image:</label>
                    <input type="url" id="profile_image" placeholder="Place a profile image url"
                    onChange={handleChange}></input>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="display_name">Display Name:</label>
                    <input type="text" id="display_name" placeholder="Enter Display Name"
                    onChange={handleChange}></input>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="bio">Bio:</label>
                    <input type="text" id="bio" placeholder="Tell us about yourself!"
                    onChange={handleChange}></input>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="previous_role">Previous Role:</label>
                    <input type="text" id="previous_role" placeholder="What role have you transitioned from?"
                    onChange={handleChange}></input>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="current_role">Current Role:</label>
                    <input type="text" id="current_role" placeholder="What is your current role?"
                    onChange={handleChange}></input>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="challenge">Challenge:</label>
                    <input type="text" id="challenge" placeholder="Challenge"
                    onChange={handleChange}></input>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="birthdate">Birthdate:</label>
                    <input type="date" id="birthdate" placeholder="Please include your birthdate YYYY/MM/DD"
                    onChange={handleChange}></input>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="pronouns">Pronouns:</label>
                    <select id="pronouns" onChange={handleChange}>
                        <option value="" disabled>Select one...</option>
                        <option value="She/Her">She/Her</option>
                        <option value="He/Him">He/Him</option>
                        <option value="They/Them">They/Them</option>
                        <option value="She/They">She/They</option>
                        <option value="He/They">He/They</option>
                    </select>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="ethnicity">Ethnicity:</label>
                    <input type="text" id="ethnicity" placeholder="What is your ethnicity?"
                    onChange={handleChange}></input>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" onChange={handleChange}>
                    <option value="" disabled>Select one...</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="linkedin_url">LinkedIn Url:</label>
                    <input type="url" id="linkedin_url" placeholder="LinkedIn Url"
                    onChange={handleChange}></input>
                </div>
                <div className="profile-form-section">
                    <label htmlFor="github_url">GitHub Url:</label>
                    <input type="url" id="github_url" placeholder="Github Url"
                    onChange={handleChange}></input>
                </div>

                <div>
                <h3>Project</h3>
                    {projects.map((item, i) => ( <NewProject text={item} /> ))}
                    <button className="primary" type="button" onClick={addProject}>Add Project</button> 
                </div> 

                <button className="primary" type="submit" onClick={handleSubmit}>Submit</button>

            </form>

            
        </div>
        )
};

export default CreateProfilePage;
