import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './nav.css'

function Nav() {
    const [profileData, setProfileData] = useState([]);

    const isLogIn = window.localStorage.getItem("token") !== null;
    const username = window.localStorage.getItem("username") || "";
    const navigate = useNavigate();

    useEffect(() => {
            fetch(`${import.meta.env.VITE_API_URL}users/`)
            .then((profileResults) => {
                return profileResults.json();
            })
            .then((data) => {
                const userProfile = data.find((profile)=>profile.username===username)
                setProfileData(userProfile);
                console.log(`in useEffect${userProfile}`);
            });
    },[ ]);

    const onLogOut = () => {
        localStorage.clear();
        navigate('/');
    }
    console.log(profileData);
    return (
        <header>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <nav>
                {isLogIn && <Link className='user-icon' to={`/profile/${profileData.id}`}>{username.slice(0, 1)}</Link>}
                {/* {isLogIn && <Link className='user-icon' to={`/profile/${profileData.id?profileData.id:''}`}>o</Link>} */}
                {isLogIn && <Link to="/create-profile">Create Profile</Link>}
                {isLogIn && <Link to="/allstories">All Stories</Link>}
                {isLogIn && <Link className='secondary-btn' to="/" onClick={onLogOut}>Log out</Link>}
                {!isLogIn && <Link to="/login">Log in</Link>}
                {!isLogIn && <Link className='secondary-btn' to="/signup">Sign up </Link>}
            </nav>
        </header>
    )
}
export default Nav