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
        if (register.firstName && register.lastName && register.email && register.password) {
            postData().then((response) => {
                navigate('/login/')
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
        <div className="form">
            <div className="username">
                <label htmlFor="firstName">Username:</label>
                <input type="text" onChange={handleChange} id="userName" placeholder="Username"/>
            </div>

            <div className="firstname">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" onChange={handleChange} id="firstName" placeholder="First Name"/>
            </div>

            <div className="lastname">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="" id="lastName" onChange={handleChange} placeholder="Last Name"/>
            </div>

            <div className="email">
                <label htmlFor="email">Email:</label>
                <input  type="email" id="email" onChange={handleChange} placeholder="Email"/>
            </div>

            <div className="password">
                <label htmlFor="password">Password:</label>
                <input type="password"  id="password" onChange={handleChange} placeholder="Password"/>
            </div>
            
            <button onClick={handleSubmit} type="submit">Sign Up</button>
        </div>
       
    )       

}


export default SignUpPage;