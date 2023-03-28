import React from 'react';
import {Link} from 'react-router-dom';
import './ProfileCard.css'

function ProfileCard(props) {
    const { profileData } = props;
return (
    <div className="profile-card">
        <Link to={`/profile/${profileData.id}`}>
            <img src={profileData.profile_image}></img>
            <h3>{profileData.first_name}{profileData.last_name}</h3>
            <h4>{profileData.pronouns}</h4>
            <h4>{profileData.current_role}</h4>
            <h5>{profileData.previous_role}</h5>
        </Link>
    </div>
)
}
export default ProfileCard;

