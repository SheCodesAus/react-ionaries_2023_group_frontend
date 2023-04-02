import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
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

    if (credentials.username && credentials.password) {
        postData().then((response) => {
            window.localStorage.setItem("token", response.token);
            window.localStorage.setItem("username", credentials.username);
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
    <form className='form' id="login-form">
        <h1>Login Form</h1>
        <div className="login-form-section">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Enter username"
            onChange={handleChange}></input>
        </div>
        <div className="login-form-section">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter password"
            onChange={handleChange}></input>
        </div>

        <button className="primary" type="submit" onClick={handleSubmit}>Login</button>

    </form>
    )
};

export default LoginForm;
