import React from 'react';
import { Link } from 'react-router-dom';

function ProfileId(props) {
    const { profileData } = props;
    return (
        <div>
            <Link to={`/profile/${profileData.id}`}>
                <img src={profileData.profile_image}></img>
                <h2>{profileData.display_name}</h2>
                <h3>{profileData.pronouns}</h3>
                <h3>{profileData.current_role}</h3>
                <h3>{profileData.previous_role}</h3>
                <p>{profileData.bio}</p>
                <p>{profileData.challenges}</p>
                <a>{profileData.github_url}</a>
                <a>{profileData.linkedin_url}</a>
            </Link>
        </div>
    )
}

export default ProfileId;