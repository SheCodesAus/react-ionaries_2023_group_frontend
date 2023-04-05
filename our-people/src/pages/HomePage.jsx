import ProfileCard from "../components/ProfileCard";
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';



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
            .slice(0,4);
            setProfileList(recentProfiles);
        });
    }, []);

        return (
            <div>
                <Hero />
                <div className = "profile-wrapper">
                    <div className = "profile-title">
                        <h1>Bringing Technology Together</h1>
                    </div>
                    <div className = "profile-container">
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
