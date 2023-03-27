import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileForm() {
    const [credentials, setCredentials] = useState({
        displayName: "",
        bio: "",
        previousRole: "",
        currentRole: "",
        profileImage: "",
        birthdate: "",
        pronouns: "",
        gender: "",
        ethnicity: "",
        linkedinUrl: "",
        githubUrl: "",
        challenge: "",
    });

const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value
    }));
};

const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();

    if (credentials.displayName && credentials.bio) {
        postData().then((response) => {
            window.localStorage.setItem("token", response.token);
            navigate('/');
    });
    }
};

const postData = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}api-token-auth/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials)
    })
    return response.json();
}

return(
    <form className='form' id="profile-form">
        <h1>Profile Form Heading</h1>
        <div className="profile-form-section">
            <label htmlFor="displayName">Display Name:</label>
            <input type="text" id="displayName" placeholder="Enter Display Name"
            onChange={handleChange}></input>
        </div>
        <div className="profile-form-section">
            <label htmlFor="bio">Bio:</label>
            <input type="text" id="bio" placeholder="Tell us about yourself!"
            onChange={handleChange}></input>
        </div>
        <div className="profile-form-section">
            <label htmlFor="previousRole">Previous Role:</label>
            <input type="text" id="previousRole" placeholder="What role have you transitioned from?"
            onChange={handleChange}></input>
        </div>
        <div className="profile-form-section">
            <label htmlFor="currentRole">Current Role:</label>
            <input type="text" id="currentRole" placeholder="What is your current role?"
            onChange={handleChange}></input>
        </div>

        <button class="primary" type="submit" onClick={handleSubmit}>Login</button>

    </form>
    )
};

export default ProfileForm;
