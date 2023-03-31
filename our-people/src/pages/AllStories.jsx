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
                {profileList.map((profileData, key)=> {
                    return <ProfileCard key={key} profileData={profileData} />;
                }
                )}
            </div>
        )
    }
    
    export default AllStoriesPage;





