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
            <select>
                <option value="She/Her">She/Her</option>
                <option value="He/Him">He/Him</option>
                <option value="They/Them">They/Them</option>
                <option value="She/They">She/They</option>
                <option value="He/They">He/They</option>
            </select>
            <input type="text" id="pronouns" placeholder="Pronouns"
            onChange={handleChange}></input>
        </div>
        <div className="profile-form-section">
            <label htmlFor="linkedinUrl">LinkedIn Url:</label>
            <input type="text" id="linkedinUrl" placeholder="LinkedIn Url"
            onChange={handleChange}></input>
        </div>
        <div className="profile-form-section">
            <label htmlFor="githubUrl">GitHub Url:</label>
            <input type="text" id="githubUrl" placeholder="Github Url"
            onChange={handleChange}></input>
        </div>


        <button class="primary" type="submit" onClick={handleSubmit}>Submit</button>

    </form>
    )
};

export default ProfileForm;
