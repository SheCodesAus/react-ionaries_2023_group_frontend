import React from "react";
import ProfileCard from "../components/ProfileCard";


function HomePage() {
    // const [profileData, setProfileData] = useState([]);

    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}profiles/${id}`)
    //     .then((profileResults) => {
    //         return profileResults.json();
    //     })
    //     .then((data) => {
    //         const recentProfiles = data
    //         .sort((a,b) => new Date(b.date_created) - new Date(a.date_created))
    //         .slice(0,3);
    //         setProjectList(recentProfiles);
    //     });
    // }, []);
    const profileData = [
        {
            "id": 1,
            "display_name": "John",
            "bio": "my story...",
            "previous_role": "role1",
            "current_role": "role2.",
            "profile_image": "https://via.placeholder.com/300.jpg",
            "birthdate": "2023-03-19",
            "pronouns": "This field is required.",
            "gender": "This field is required.",
            "ethnicity": "This field is required.",
            "linkedin_url": "https://www.linkedin.com/",
            "github_url": "https://www.linkedin.com/",
            "is_visible": true,
            "is_public": true,
            "allow_contact": true,
            "challenge": "This field is required.",
            "user_id": 1
        },
        {
            "id": 2,
            "display_name": "John",
            "bio": "my story...",
            "previous_role": "role1",
            "current_role": "role2.",
            "profile_image": "https://via.placeholder.com/300.jpg",
            "birthdate": "2023-03-19",
            "pronouns": "This field is required.",
            "gender": "This field is required.",
            "ethnicity": "This field is required.",
            "linkedin_url": "https://www.linkedin.com/",
            "github_url": "https://www.linkedin.com/",
            "is_visible": true,
            "is_public": true,
            "allow_contact": true,
            "challenge": "This field is required.",
            "user_id": 1
        }
    ];

        return (
            <div>
                <h1>Bringing Technology Together</h1>
                    <div className = "profile-wrapper">
                        <div className = "container">
                            {profileData.map((profileData, key)=> {
                                return <ProfileCard key={key} profileData={profileData} />;
                                }
                            )}
                        </div>
                    </div>
            </div>

    ) 
}

export default HomePage;
