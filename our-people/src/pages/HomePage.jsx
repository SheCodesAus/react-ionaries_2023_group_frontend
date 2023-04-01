import ProfileCard from "../components/ProfileCard";
import { useState, useEffect } from 'react';




function HomePage() {
    const [profileList, setProfileList] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}profile/`)
        .then((profileResults) => {
            return profileResults.json();
        })
        .then((data) => {
            const recentProfiles = data
            .sort((a,b) => new Date(b.date_created) - new Date(a.date_created))
            .slice(0,3);
            setProfileList(recentProfiles);
        });
    }, []);
   

        return (
            <div>
                <Hero />
                <h1>Bringing Technology Together</h1>
                    <div className = "profile-wrapper">
                        <div className = "container">
                            {profileList.map((profileData, key)=> {
                                return <ProfileCard key={key} profileData={profileData} />;
                                }
                            )}
                        </div>
                    </div>
            </div>

    ) 
}

export default HomePage;
