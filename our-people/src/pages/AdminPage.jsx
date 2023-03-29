import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function AdminPage() {
    const [approvalList, setApprovalList] = useState([]);
    const [profileLinks, setProfileLinks] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}users`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setApprovalList(data);
        });
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}profile`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProfileLinks(data);
        });
    }, []);

    return (
        <div>
            <h3>Users to be approved:</h3>
            {/* <p>{profileLinks.bio[1]}</p>             */}
            <div>
                {approvalList.map((approvalList, key) => {
                    return <li key={key} approvalList={approvalList}>{approvalList.first_name} {approvalList.last_name} 
                    <button>Approve</button></li>
                })}
            </div>
        </div>
        )
};

export default AdminPage;

