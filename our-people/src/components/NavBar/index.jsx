import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './nav.css'

function Nav() {
    const isLogIn = window.localStorage.getItem("token") !== null;
    const username = window.localStorage.getItem("username") || "";
    const navigate = useNavigate();


    const onLogOut = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <header>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <nav>
                {isLogIn && <Link className='user-icon' to="/profileid">{username.slice(0,1)}</Link>}
                {isLogIn && <Link to="/createprofile">Create Profile</Link>}
                {isLogIn && <Link to="/allstories">All Stories</Link>}
                {isLogIn && <Link className='secondary-btn' to="/" onClick={onLogOut}>Log out</Link>}
                {!isLogIn && <Link to="/login">Log in</Link>}
                {!isLogIn && <Link className='secondary-btn' to="/signup">Sign up </Link>}
            </nav>
        </header>
    )
}
export default Nav