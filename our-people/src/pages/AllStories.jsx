import React, {useState, useEffect} from "react";
import ProfileCard from "../components/ProfileCard";

function AllStoriesPage() {
    const [profileList, setProfileList] = useState([]);
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}profile/`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProfileList(data);
        });
    }, []);
    
        return (
            <div>
                <h1>All Stories</h1>
                <h3>Be inspired</h3>
                <div>
                    {profileList.map((profileData, key)=> {
                        return <ProfileCard key={key} profileData={profileData} />;
                    }
                    )}
                </div>
            </div>
        )
    }
    
    export default AllStoriesPage;





