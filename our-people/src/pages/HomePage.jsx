import React from "react";
import ProfileCard from "../components/ProfileCard";


function HomePage() {
    return (
        <div>
            <h1>Bringing Technology Together</h1>
            <div className = "profile-wrapper">
                <div className = "container">
                        <div><ProfileCard/></div>
                        <div><ProfileCard/></div>
                        <div><ProfileCard/></div>
                </div>
            </div>
        </div>

    ) 
}
export default HomePage;
