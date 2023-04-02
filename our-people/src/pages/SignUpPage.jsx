import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function SignUpPage() {
    const [ register, setRegister ] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setRegister((prevRegister) => ({
            ...prevRegister,
            [id]: value
        }));
    };

    const navigate = useNavigate();  

    const handleSubmit = (event) => {
        event.preventDefault();
        if (register.first_name && register.last_name && register.email && register.password) {
            postData().then((response) => {
                window.localStorage.setItem("token", response.token)
                navigate('/createprofile/')
            })
        }
    };

    const postData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(register),
        })
        return response.json();
    };

    return (
        <form className="form">
            <h1>Sign up to share your success story</h1>
            <div className="username">
                <label htmlFor="userName">User Name:</label>
                <input type="text" onChange={handleChange} id="user_name" placeholder="User Name"/>
            </div>
            <div className="firstName">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" onChange={handleChange} id="first_name" placeholder="First Name"/>
            </div>

            <div className="lastname">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="" id="last_name" onChange={handleChange} placeholder="Last Name"/>
            </div>

            <div className="email">
                <label htmlFor="email">Email:</label>
                <input  type="email" id="email" onChange={handleChange} placeholder="Email"/>
            </div>

            <div className="password">
                <label htmlFor="password">Password:</label>
                <input type="password"  id="password" onChange={handleChange} placeholder="Password"/>
            </div>
            
            <button className="primary" onClick={handleSubmit} type="submit">Sign Up</button>
        </form>
       
    )       

}


export default SignUpPage;