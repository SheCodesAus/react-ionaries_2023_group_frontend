import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css'

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/createprofile">Create Profile</Link>
            <Link to="/profileid">My Profile</Link>
            <Link to="/allstories">View Mentors</Link>
        </nav>
    )
}
export default Nav