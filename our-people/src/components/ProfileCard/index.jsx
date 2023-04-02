import React from 'react';
import {Link} from 'react-router-dom';
import './ProfileCard.css'

function ProfileCard(props) {
    const {profileData} = props;
return (
    <div className="profile-card">
            <div className="gradient">
                    <div className="detail-card-container">
                        <h3>{profileData.display_name}</h3>
                        <h4>{profileData.pronouns}</h4>
                        <h4>{profileData.current_role}</h4>
                        <h5>Previous role: {profileData.previous_role}</h5>
                    </div>
                    <div className="display-image-container">
                        <img id="display-image" src={profileData.profile_image}></img>
                    </div>
            </div>        
        <Link to={`/profile/${profileData.id}`}></Link>
    </div>
)
}
export default ProfileCard;

