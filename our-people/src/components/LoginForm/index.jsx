import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';


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

const [formError, setFormError] = useState(false)

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
    if (response.ok) {
        setFormError(false);
        return response.json()
    } else {
        setFormError(true);
        return
    }

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

        {
            formError && 
            <div>
                <p>The username and password you entered does not match our records. Please try again.</p>
                <p>If you don't have an account, please sign up for one <Link to={`/signup`}>here</Link>.</p>
            </div>
        }

    </form>
    )
};

export default LoginForm;
