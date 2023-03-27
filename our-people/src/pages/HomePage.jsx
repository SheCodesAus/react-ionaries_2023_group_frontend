import React from "react";
import ProfileCard from "../components/ProfileCard";


function HomePage() {
    const [profileData, setProfileData] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL} profiles/${id}`)
        .then((profileResults) => {
            return profileResults.json();
        })
        .then((data) => {
            const recentProfiles = data
            .sort((a,b) => new Date(b.date_created) - new Date(a.date_created))
            .slice(0,3);
            setProjectList(recentProfiles);
        });
    }, []);


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
