import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './nav.css'

function Nav() {
    // const isLogIn = window.localStorage.getItem("token") !== null;
    // const username = window.localStorage.getItem("username");
    const navigate = useNavigate();
    const isLogIn = true;
    const username = "yuliia";

    const onLogOut = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <header>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <nav>
                {isLogIn && <p>Hi, {username}</p>}
                {isLogIn && <Link to="/" onClick={onLogOut}>Log out</Link>}
                {isLogIn && <Link to="/createprofile">Create Profile</Link>}
                {isLogIn && <Link to="/profileid">My Profile</Link>}
                {isLogIn && <Link to="/allstories">All Stories</Link>}
                {!isLogIn && <Link to="/login">Log in</Link>}
                {!isLogIn && <Link className='signup-btn' to="/signup">Sign up </Link>}
            </nav>
        </header>
    )
}
export default Nav